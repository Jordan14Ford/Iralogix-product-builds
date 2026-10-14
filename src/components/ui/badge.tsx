"use client";

import type { CSSProperties, ReactNode } from "react";
import { asset } from "@/lib/public-asset";
import { cn } from "cn";

export const badgeUseCases = ["success", "info", "warning", "danger", "neutral", "brand"] as const;
export const badgeStyles = ["soft", "outline", "solid"] as const;
export const badgeSizes = ["sm", "md", "lg"] as const;
export const badgeStates = ["default", "hover", "focus", "pressed", "disabled", "selected"] as const;
export const badgeLeadings = ["none", "dot", "icon"] as const;
export const badgeTrailings = ["none", "dismiss", "count"] as const;

export type BadgeUseCase = (typeof badgeUseCases)[number];
export type BadgeStyle = (typeof badgeStyles)[number];
export type BadgeSize = (typeof badgeSizes)[number];
export type BadgeState = (typeof badgeStates)[number];
export type BadgeLeading = (typeof badgeLeadings)[number];
export type BadgeTrailing = (typeof badgeTrailings)[number];

type BadgeProps = {
  copy?: string;
  count?: string;
  useCase?: BadgeUseCase;
  badgeStyle?: BadgeStyle;
  size?: BadgeSize;
  state?: BadgeState;
  leading?: BadgeLeading;
  trailing?: BadgeTrailing;
  loading?: boolean;
  onDismiss?: () => void;
  className?: string;
};

function token(useCase: BadgeUseCase, part: string) {
  return `var(--status-${useCase}-${part})`;
}

function palette(useCase: BadgeUseCase, badgeStyle: BadgeStyle, state: BadgeState) {
  if (state === "disabled") {
    return {
      bg: "var(--status-neutral-soft-fill)",
      border: "var(--status-disabled-border)",
      text: "var(--status-disabled-text)",
      icon: "var(--status-disabled-text)",
      hover: "var(--status-neutral-soft-fill)",
      pressed: "var(--status-neutral-soft-fill)",
      hoverBorder: "var(--status-disabled-border)",
      pressedBorder: "var(--status-disabled-border)",
    };
  }

  const solid = badgeStyle === "solid";
  const text = solid ? token(useCase, "on-solid") : token(useCase, "text");
  const icon = solid ? token(useCase, "on-solid") : token(useCase, "icon");
  const softFill = token(useCase, "soft-fill");
  const solidFill = token(useCase, "solid-fill");
  const bg = badgeStyle === "soft" ? softFill : badgeStyle === "outline" ? "var(--status-outline-fill)" : solidFill;
  const border =
    badgeStyle === "soft"
      ? token(useCase, "soft-border")
      : badgeStyle === "outline"
        ? token(useCase, "outline-border")
        : solidFill;
  const hover = solid ? token(useCase, "solid-hover") : token(useCase, "soft-hover");
  const pressed = solid ? token(useCase, "solid-pressed") : token(useCase, "soft-pressed");
  const emphasisBorder = solid ? hover : token(useCase, "outline-border");
  const pressedBorder = solid ? pressed : token(useCase, "outline-border");
  const selectedBorder = solid ? solidFill : token(useCase, "outline-border");

  if (state === "hover") return { bg: hover, border: emphasisBorder, text, icon, hover, pressed, hoverBorder: emphasisBorder, pressedBorder };
  if (state === "pressed") return { bg: pressed, border: pressedBorder, text, icon, hover, pressed, hoverBorder: emphasisBorder, pressedBorder };
  if (state === "selected") return { bg, border: selectedBorder, text, icon, hover, pressed, hoverBorder: emphasisBorder, pressedBorder };
  return { bg, border, text, icon, hover, pressed, hoverBorder: emphasisBorder, pressedBorder };
}

const sizeClass: Record<BadgeSize, string> = {
  sm: "h-6 gap-1.5 rounded-[6px] px-2 text-[12px] leading-4",
  md: "h-8 gap-1.5 rounded-[8px] px-3 text-[14px] leading-5",
  lg: "h-10 gap-2 rounded-[10px] px-4 text-[16px] leading-6",
};

function Artwork({ name, size, color }: { name: string; size: number; color: string }) {
  const url = asset(`/badge/${name}.svg`);
  return (
    <span
      aria-hidden="true"
      className="inline-block shrink-0"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        WebkitMaskImage: `url(${url})`,
        maskImage: `url(${url})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: `${size}px ${size}px`,
        maskSize: `${size}px ${size}px`,
      }}
    />
  );
}

export function Badge({
  copy = "Request Received",
  count = "3",
  useCase = "success",
  badgeStyle = "soft",
  size = "md",
  state = "default",
  leading = "none",
  trailing = "none",
  loading = false,
  onDismiss,
  className,
}: BadgeProps) {
  const colors = palette(useCase, badgeStyle, state);
  const disabled = state === "disabled";
  const live = state === "default" && !disabled;
  const showCheck = state === "selected";
  const style = {
    background: live ? undefined : colors.bg,
    borderColor: live ? undefined : colors.border,
    color: colors.text,
    "--badge-bg": colors.bg,
    "--badge-border": colors.border,
    "--badge-hover": colors.hover,
    "--badge-pressed": colors.pressed,
    "--badge-hover-border": colors.hoverBorder,
    "--badge-pressed-border": colors.pressedBorder,
  } as CSSProperties;

  return (
    <span
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled || undefined}
      data-state={state}
      className={cn(
        "relative inline-flex items-center border border-solid font-sans font-medium whitespace-nowrap",
        "transition-[background-color,border-color,color,box-shadow] duration-hover ease-hover",
        "outline-none focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-solid focus-visible:outline-state-focus-ring",
        sizeClass[size],
        live && "bg-(--badge-bg) border-(--badge-border) hover:bg-(--badge-hover) hover:border-(--badge-hover-border) active:bg-(--badge-pressed) active:border-(--badge-pressed-border)",
        state === "focus" && "outline-2 outline-offset-[3px] outline-solid outline-state-focus-ring",
        disabled && "cursor-not-allowed",
        className,
      )}
      style={style}
    >
      {showCheck ? <Artwork name="check" size={14} color={colors.icon} /> : null}
      {leading === "dot" ? <Artwork name="dot" size={6} color={colors.icon} /> : null}
      {leading === "icon" ? <Artwork name="icon" size={14} color={colors.icon} /> : null}
      <span className="truncate">{copy}</span>
      {trailing === "count" ? (
        <span
          className="inline-flex size-[18px] min-w-[18px] items-center justify-center rounded-full px-1 text-[14px] leading-5"
          style={{ background: colors.text, color: colors.bg }}
        >
          {count}
        </span>
      ) : null}
      {trailing === "dismiss" ? (
        <button
          type="button"
          disabled={disabled}
          aria-label={`Remove filter: ${copy}`}
          onClick={onDismiss}
          className="relative inline-flex size-[14px] items-center justify-center before:absolute before:top-1/2 before:left-1/2 before:size-11 before:-translate-x-1/2 before:-translate-y-1/2"
        >
          <Artwork name="dismiss" size={14} color={colors.text} />
        </button>
      ) : null}
      {loading ? (
        <span
          className="absolute inset-[-1px] inline-flex items-center gap-1.5 rounded-[inherit] border border-solid px-[inherit]"
          style={{ background: colors.bg, borderColor: colors.border, color: colors.text }}
        >
          <Artwork name="spinner" size={14} color={colors.icon} />
          <span className="truncate">{copy}</span>
        </span>
      ) : null}
    </span>
  );
}

export function BadgeLabel({ children }: { children: ReactNode }) {
  return <p className="font-sans text-[13px] text-black/45">{children}</p>;
}
