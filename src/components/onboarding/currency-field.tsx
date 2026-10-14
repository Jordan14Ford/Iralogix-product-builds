"use client";

import { useId, useState, type KeyboardEvent } from "react";
import { cn } from "cn";
import type { PiggyFieldSize, PiggyFieldState } from "@/components/onboarding/input-field";

export const currencies = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "CAD", symbol: "CA$", name: "Canadian Dollar" },
  { code: "MXN", symbol: "MX$", name: "Mexican Peso" },
] as const;

export type CurrencyCode = (typeof currencies)[number]["code"];

const sizeClass: Record<PiggyFieldSize, string> = {
  mobile: "h-11 px-3.5 text-[13px]",
  tablet: "h-11 px-3.5 text-sm",
  desktop: "h-12 px-4 text-sm",
  responsive: "h-11 px-3.5 text-[13px] md:text-sm lg:h-12 lg:px-4",
};

function currencyByCode(code: CurrencyCode) {
  return currencies.find((item) => item.code === code) ?? currencies[0];
}

function group(whole: string) {
  const trimmed = whole.replace(/^0+(?=\d)/, "") || "0";
  return trimmed.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatCurrencyAmount(symbol: string, whole: string, fraction: string) {
  return `${symbol}${group(whole)}.${fraction.padEnd(2, "0").slice(0, 2)}`;
}

function Flag({ code }: { code: CurrencyCode }) {
  if (code === "USD") {
    return (
      <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden="true" className="shrink-0">
        <rect width="20" height="14" fill="#b22234" />
        <rect y="2" width="20" height="2" fill="#fff" />
        <rect y="6" width="20" height="2" fill="#fff" />
        <rect y="10" width="20" height="2" fill="#fff" />
        <rect width="8" height="8" fill="#3c3b6e" />
      </svg>
    );
  }
  if (code === "EUR") {
    return (
      <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden="true" className="shrink-0">
        <rect width="20" height="14" fill="#003399" />
        <circle cx="10" cy="7" r="3.2" fill="none" stroke="#fc0" strokeWidth="1" />
      </svg>
    );
  }
  if (code === "GBP") {
    return (
      <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden="true" className="shrink-0">
        <rect width="20" height="14" fill="#012169" />
        <path d="M0 0 L20 14 M20 0 L0 14" stroke="#fff" strokeWidth="3" />
        <path d="M0 0 L20 14 M20 0 L0 14" stroke="#c8102e" strokeWidth="1.2" />
        <path d="M10 0 V14 M0 7 H20" stroke="#fff" strokeWidth="4" />
        <path d="M10 0 V14 M0 7 H20" stroke="#c8102e" strokeWidth="2" />
      </svg>
    );
  }
  if (code === "CAD") {
    return (
      <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden="true" className="shrink-0">
        <rect width="20" height="14" fill="#fff" />
        <rect width="5" height="14" fill="#d52b1e" />
        <rect x="15" width="5" height="14" fill="#d52b1e" />
        <path d="M10 3 L11 6 L14 6 L11.5 8 L12.5 11 L10 9 L7.5 11 L8.5 8 L6 6 L9 6 Z" fill="#d52b1e" />
      </svg>
    );
  }
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden="true" className="shrink-0">
      <rect width="6.67" height="14" fill="#006847" />
      <rect x="6.67" width="6.66" height="14" fill="#fff" />
      <rect x="13.33" width="6.67" height="14" fill="#ce1126" />
    </svg>
  );
}

type CurrencyFieldProps = {
  label: string;
  helper?: string;
  errorHelper?: string;
  selectable?: boolean;
  currency?: CurrencyCode;
  onCurrencyChange?: (code: CurrencyCode) => void;
  state?: PiggyFieldState;
  value?: string;
  size?: PiggyFieldSize;
  id?: string;
};

export function CurrencyField({
  label,
  helper,
  errorHelper,
  selectable = false,
  currency,
  onCurrencyChange,
  state,
  value,
  size = "desktop",
  id,
}: CurrencyFieldProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const helperId = `${fieldId}-helper`;
  const [code, setCode] = useState<CurrencyCode>(currency ?? "USD");
  const active = currency ?? code;
  const symbol = currencyByCode(active).symbol;
  const preview = state !== undefined;
  const initial = value ? value.replace(symbol, "").replace(/[^\d.]/g, "") : "0.00";
  const [whole, setWhole] = useState(initial.split(".")[0] || "0");
  const [fraction, setFraction] = useState((initial.split(".")[1] ?? "00").padEnd(2, "0").slice(0, 2));
  const [fractionMode, setFractionMode] = useState(false);
  const [typedFraction, setTypedFraction] = useState("");
  const [pristine, setPristine] = useState(!value);
  const isDisabled = state === "disabled";
  const showError = state === "error";
  const shown = preview && value ? value : formatCurrencyAmount(symbol, whole, fraction);
  const helperText = showError && errorHelper ? errorHelper : helper;

  function choose(next: CurrencyCode) {
    setCode(next);
    onCurrencyChange?.(next);
  }

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (preview || isDisabled) return;
    const digit = /^[0-9]$/.test(event.key);
    if (!digit && event.key !== "." && event.key !== "Backspace") return;
    event.preventDefault();

    if (digit) {
      if (pristine) {
        setWhole(event.key);
        setFraction("00");
        setTypedFraction("");
        setFractionMode(false);
        setPristine(false);
        return;
      }
      if (fractionMode) {
        if (typedFraction.length >= 2) return;
        const next = typedFraction + event.key;
        setTypedFraction(next);
        setFraction(next.padEnd(2, "0"));
        return;
      }
      setWhole(whole === "0" ? event.key : `${whole}${event.key}`.replace(/^0+(?=\d)/, ""));
      return;
    }

    if (event.key === ".") {
      setPristine(false);
      setFractionMode(true);
      return;
    }

    if (pristine) return;
    if (fractionMode && typedFraction.length > 0) {
      const next = typedFraction.slice(0, -1);
      setTypedFraction(next);
      setFraction(next.padEnd(2, "0"));
      if (!next) setFractionMode(false);
      return;
    }
    if (fractionMode) {
      setFractionMode(false);
      return;
    }
    const next = whole.slice(0, -1);
    if (!next) {
      setWhole("0");
      setFraction("00");
      setPristine(true);
      return;
    }
    setWhole(next);
  }

  return (
    <div className="flex w-full max-w-md flex-col gap-1.5">
      <label
        htmlFor={fieldId}
        className={cn(
          "font-inter text-[13px] leading-normal font-semibold text-[#374151]",
          isDisabled && "text-[#9ca3af]",
        )}
      >
        {label}
      </label>
      <div
        data-state={showError ? "error" : state ?? (shown ? "filled" : "default")}
        className={cn(
          "flex w-full min-w-0 items-center gap-2 rounded-[6px] border border-[#d1d5db] bg-white font-inter leading-normal font-normal text-[#111827]",
          "transition-[color,background-color,border-color,box-shadow] duration-hover ease-hover",
          "hover:border-[#a0a5af] hover:bg-[#fafafc]",
          "focus-within:border-2 focus-within:border-[#2563eb] focus-within:bg-white focus-within:shadow-[0_0_3px_3px_rgba(37,99,235,0.2)]",
          sizeClass[size],
          state === "hover" && "border-[#a0a5af] bg-[#fafafc]",
          state === "focused" && "border-2 border-[#2563eb] shadow-[0_0_3px_3px_rgba(37,99,235,0.2)]",
          showError && "border-[1.5px] border-[#ef4444] bg-white shadow-none hover:border-[#ef4444] hover:bg-white",
          isDisabled &&
            "cursor-not-allowed border-[#ebebeb] bg-[#f5f5f5] text-[rgba(156,163,175,0.45)] hover:border-[#ebebeb] hover:bg-[#f5f5f5]",
        )}
        style={showError ? { borderWidth: "1.5px", borderColor: "#ef4444", boxShadow: "none" } : undefined}
      >
        {selectable ? <Flag code={active} /> : null}
        <input
          id={fieldId}
          inputMode="decimal"
          autoComplete="off"
          disabled={isDisabled}
          aria-invalid={showError || undefined}
          aria-describedby={helperText ? helperId : undefined}
          value={shown}
          onKeyDown={onKeyDown}
          onChange={() => {}}
          className="min-w-0 flex-1 bg-transparent font-inter text-inherit outline-none disabled:cursor-not-allowed"
        />
        {selectable ? (
          <select
            aria-label="Currency"
            value={active}
            disabled={isDisabled}
            onChange={(event) => choose(event.target.value as CurrencyCode)}
            className="shrink-0 bg-transparent font-inter text-sm text-inherit outline-none transition-colors duration-hover ease-hover"
          >
            {currencies.map((item) => (
              <option key={item.code} value={item.code}>
                {item.code}
              </option>
            ))}
          </select>
        ) : null}
      </div>
      {helperText ? (
        <p
          id={helperId}
          className={cn(
            "font-inter text-xs leading-normal font-normal text-[#6b7280]",
            showError && "font-medium text-[#ef4444]",
            isDisabled && "font-normal text-[#9ca3af]",
          )}
        >
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
