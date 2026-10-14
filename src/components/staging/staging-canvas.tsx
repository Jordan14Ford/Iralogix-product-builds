"use client";

import { useEffect, useRef, useState } from "react";

const screens = [
  { href: "/", label: "Verify account" },
  { href: "/create-login", label: "Create your login" },
  { href: "/contribution", label: "Contribution" },
  { href: "/bank", label: "Bank" },
  { href: "/banks-connected", label: "Banks connected" },
  { href: "/strategy", label: "Strategy" },
  { href: "/beneficiaries", label: "Beneficiaries" },
  { href: "/signature", label: "Signature" },
  { href: "/review", label: "Review" },
];

const FRAME_W = 1440;
const FRAME_H = 900;
const GAP_X = 180;
const GAP_Y = 200;
const COLS = 3;
const PAD = 96;

const rows = Math.ceil(screens.length / COLS);
const worldWidth = PAD * 2 + COLS * FRAME_W + (COLS - 1) * GAP_X;
const worldHeight = PAD * 2 + rows * FRAME_H + (rows - 1) * GAP_Y;

function screenSrc(href: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return href === "/" ? `${base}/` : `${base}${href}`;
}

export function StagingCanvas() {
  const surface = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 48, y: 48 });
  const [scale, setScale] = useState(1);
  const [panMode, setPanMode] = useState(false);
  const drag = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);

  function zoomAt(next: number, clientX: number, clientY: number) {
    const node = surface.current;
    if (!node) return;
    const clamped = Math.min(1.25, Math.max(0.15, next));
    const rect = node.getBoundingClientRect();
    const px = clientX - rect.left;
    const py = clientY - rect.top;
    setOffset((current) => {
      const worldX = (px - current.x) / scale;
      const worldY = (py - current.y) / scale;
      return { x: px - worldX * clamped, y: py - worldY * clamped };
    });
    setScale(clamped);
  }

  function fit() {
    const node = surface.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const next = Math.min(rect.width / worldWidth, rect.height / worldHeight);
    setScale(next);
    setOffset({
      x: (rect.width - worldWidth * next) / 2,
      y: (rect.height - worldHeight * next) / 2,
    });
  }

  useEffect(() => {
    const node = surface.current;
    if (!node) return;

    const onWheel = (event: WheelEvent) => {
      const target = event.target;
      const screen = target instanceof Element ? target.closest("[data-screen]") : null;
      if (screen && !panMode && !(event.ctrlKey || event.metaKey)) {
        const iframe = screen.querySelector("iframe");
        const doc = iframe?.contentDocument;
        if (doc) {
          const section = doc.querySelector("section");
          if (section && section.scrollHeight > section.clientHeight) {
            section.scrollTop += event.deltaY;
          } else if (doc.scrollingElement) {
            doc.scrollingElement.scrollTop += event.deltaY;
          }
          event.preventDefault();
        }
        return;
      }
      event.preventDefault();
      if (event.ctrlKey || event.metaKey) {
        const nodeRect = node.getBoundingClientRect();
        const current = scale;
        const next = current * Math.exp(-event.deltaY * 0.002);
        const clamped = Math.min(1.25, Math.max(0.15, next));
        const px = event.clientX - nodeRect.left;
        const py = event.clientY - nodeRect.top;
        setOffset((position) => {
          const worldX = (px - position.x) / current;
          const worldY = (py - position.y) / current;
          return { x: px - worldX * clamped, y: py - worldY * clamped };
        });
        setScale(clamped);
        return;
      }
      setOffset((position) => ({
        x: position.x - event.deltaX,
        y: position.y - event.deltaY,
      }));
    };

    node.addEventListener("wheel", onWheel, { passive: false });
    return () => node.removeEventListener("wheel", onWheel);
  }, [panMode, scale]);

  return (
    <div
      ref={surface}
      className="fixed inset-0 cursor-grab overflow-hidden bg-[#1e1e1e] active:cursor-grabbing"
      style={{
        backgroundImage: "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
        backgroundSize: `${24 * scale}px ${24 * scale}px`,
        backgroundPosition: `${offset.x}px ${offset.y}px`,
      }}
      onPointerDown={(event) => {
        if (event.button !== 0 && event.button !== 1) return;
        const target = event.target;
        if (target instanceof Element && target.closest("button")) return;
        if (!panMode && target instanceof Element && target.closest("[data-screen]")) return;
        drag.current = { x: event.clientX, y: event.clientY, ox: offset.x, oy: offset.y };
        event.currentTarget.setPointerCapture(event.pointerId);
      }}
      onPointerMove={(event) => {
        const current = drag.current;
        if (!current) return;
        setOffset({
          x: current.ox + event.clientX - current.x,
          y: current.oy + event.clientY - current.y,
        });
      }}
      onPointerUp={() => {
        drag.current = null;
      }}
    >
      <div
        className="absolute top-0 left-0"
        style={{
          width: worldWidth,
          height: worldHeight,
          transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
          transformOrigin: "0 0",
        }}
      >
        {screens.map((screen, index) => {
          const col = index % COLS;
          const row = Math.floor(index / COLS);
          return (
            <figure
              key={screen.href}
              data-screen=""
              className="absolute m-0"
              style={{
                left: PAD + col * (FRAME_W + GAP_X),
                top: PAD + row * (FRAME_H + GAP_Y),
                width: FRAME_W,
              }}
            >
              <figcaption className="mb-4 text-[40px] leading-none font-semibold tracking-wide text-white">
                {screen.label}
              </figcaption>
              <div
                className="relative overflow-hidden rounded-xl bg-white shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
                style={{ width: FRAME_W, height: FRAME_H }}
              >
                <iframe
                  title={screen.label}
                  src={screenSrc(screen.href)}
                  className={`h-full w-full border-0 ${panMode ? "pointer-events-none" : ""}`}
                />
              </div>
            </figure>
          );
        })}
        {panMode ? <div className="absolute inset-0 z-10" /> : null}
      </div>

      <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 rounded-lg bg-black/70 p-1 text-sm text-white shadow-lg">
        <button
          type="button"
          aria-pressed={panMode}
          className={`rounded-md px-3 py-1.5 ${panMode ? "bg-white/20" : "hover:bg-white/10"}`}
          onClick={() => setPanMode((current) => !current)}
        >
          Pan
        </button>
        <button
          type="button"
          className="rounded-md px-3 py-1.5 hover:bg-white/10"
          onClick={(event) => zoomAt(scale / 1.2, event.clientX, event.clientY)}
        >
          Zoom out
        </button>
        <button
          type="button"
          className="min-w-16 rounded-md px-3 py-1.5 hover:bg-white/10"
          onClick={(event) => zoomAt(1, event.clientX, event.clientY)}
        >
          {Math.round(scale * 100)}%
        </button>
        <button
          type="button"
          className="rounded-md px-3 py-1.5 hover:bg-white/10"
          onClick={fit}
        >
          Fit all
        </button>
      </div>
    </div>
  );
}
