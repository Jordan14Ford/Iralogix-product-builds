"use client";

/* Clear and check marks are fixed design assets. */
/* eslint-disable @next/next/no-img-element */

import { PointerEvent, useEffect, useRef, useState } from "react";
import { OnboardingStep, StepIntro } from "@/components/onboarding/step-screen";

export function SignatureStep() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.max(1, Math.round(rect.width));
    canvas.height = Math.max(1, Math.round(rect.height));
  }, []);

  function point(event: PointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  }

  function start(event: PointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current;
    const startPoint = point(event);
    if (!canvas || !startPoint) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    canvas.setPointerCapture(event.pointerId);
    drawing.current = true;
    context.strokeStyle = "#111827";
    context.lineWidth = 2;
    context.lineCap = "round";
    context.beginPath();
    context.moveTo(startPoint.x, startPoint.y);
  }

  function move(event: PointerEvent<HTMLCanvasElement>) {
    if (!drawing.current) return;
    const next = point(event);
    const context = canvasRef.current?.getContext("2d");
    if (!next || !context) return;
    context.lineTo(next.x, next.y);
    context.stroke();
  }

  function end() {
    drawing.current = false;
  }

  function clearCanvas() {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  return (
    <OnboardingStep
      currentStep={6}
      progress="w-full"
      backHref="/beneficiaries"
      nextHref="/review"
      secondaryLabel="Save & Close"
      aside={
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-[22px] leading-[30px] font-semibold text-[#12123d]">
              What your signature will confirm
            </h2>
            <p className="mt-2 text-sm leading-5 text-black/45">
              One signature applies to all 3 documents below - here&apos;s what each one
              actually does.
            </p>
          </div>
          <div>
            <DocumentRow title="Salary Reduction Agreement (Form 5304-SIMPLE)" pages="2 pages" />
            <div className="h-px bg-[#eeeff3]" />
            <DocumentRow title="SIMPLE IRA Custodial Account Agreement" pages="6 pages" />
            <div className="h-px bg-[#eeeff3]" />
            <DocumentRow title="Disclosure Statement" pages="3 pages" />
          </div>
          <p className="rounded-[10px] bg-[#f7f8fa] px-4 py-3 text-[13.5px] leading-[18px] font-medium text-[#1b1b3a]">
            A 7% payroll deduction ($605.02/paycheck), invested in Target Date 2055.
          </p>
          <p className="rounded-xl bg-[#e6f4fb] px-4 py-3.5 text-sm leading-5 text-[#2563eb]">
            You&apos;ll see a full review of everything on the next screen before this is
            submitted - signing here doesn&apos;t finalize your enrollment yet.
          </p>
          <p className="text-[12.5px] leading-[18px] text-[#6b6f80]">
            Your typed name is legally binding under the federal E-SIGN Act. You can
            request paper copies or withdraw consent any time before you submit.
          </p>
        </div>
      }
    >
      <StepIntro
        title="We’ll need your signature"
        helper="Flat list of prior steps, each with a title, an edit affordance, and static data."
      />
      <div className="relative h-[220px] rounded-xl border border-[#e9eaef] bg-[#fafafa]">
        <canvas
          ref={canvasRef}
          aria-label="Signature"
          className="size-full touch-none"
          onPointerDown={start}
          onPointerMove={move}
          onPointerUp={end}
          onPointerCancel={end}
        />
        <div className="pointer-events-none absolute right-3 bottom-[25px] left-3 flex items-end">
          <span className="font-inter text-xl leading-7 font-medium text-[#8a8da0]">X</span>
          <span className="mb-1 h-0.5 flex-1 border-b-2 border-dashed border-[#a0a2b1]" />
        </div>
        <button
          type="button"
          onClick={clearCanvas}
          className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-lg border border-[#e9eaef] bg-white px-[11px] py-[7px] text-xs leading-4 font-semibold text-[#5b5f6d] shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
        >
          <img src="/onboarding/clear-icon.svg" alt="" width={9.75} height={9.75} className="max-w-none" />
          Clear
        </button>
      </div>
      <p className="mt-3 text-[12.5px] leading-[18px] text-black/85">
        Your typed name is legally binding under the federal E-SIGN Act. You can request
        paper copies or withdraw consent any time before you submit.
      </p>
      <label className="mt-3 flex items-start gap-3">
        <span className="mt-0.5 flex size-5 items-center justify-center rounded-md border border-[#e9eaef] bg-white">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(event) => setAgreed(event.target.checked)}
            className="sr-only"
          />
          {agreed ? (
            <img src="/onboarding/check-icon.svg" alt="" width={14} height={14} className="max-w-none" />
          ) : null}
        </span>
        <span className="text-sm leading-[22.75px] text-black/45">
          I agree to use electronic records and signatures, and I have read and agree to
          the <span className="font-medium text-black/90">Terms of Service</span> and{" "}
          <span className="font-medium text-black/90">Privacy Policy</span>.
        </span>
      </label>
    </OnboardingStep>
  );
}

function DocumentRow({ title, pages }: { title: string; pages: string }) {
  return (
    <div className="flex items-center justify-between gap-3 py-3">
      <p className="min-w-0 text-sm">
        <span className="font-semibold text-[#1b1b3a]">{title}</span>
        <span className="text-[#6b6f80]"> · {pages}</span>
      </p>
      <button type="button" className="shrink-0 text-[13px] font-semibold text-[#4b55ef]">
        What is this?
      </button>
    </div>
  );
}
