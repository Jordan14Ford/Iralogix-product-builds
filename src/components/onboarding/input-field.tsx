"use client";

import { useEffect, useId, useRef, useState } from "react";
import { EyeIcon } from "@/components/onboarding/eye-icon";
import { cn } from "cn";

export const piggyFieldTypes = [
  "text",
  "money",
  "ssn",
  "percentage",
  "date",
  "phone",
  "email",
  "account",
  "ein",
  "zip",
  "name",
] as const;

export type PiggyFieldType = (typeof piggyFieldTypes)[number];

/** Visual states present on the input-field frame. */
export type PiggyFieldState = "default" | "hover" | "filled" | "focused" | "error" | "disabled";

export type PiggyFieldSize = "responsive" | "desktop" | "tablet" | "mobile";

type InputFieldProps = {
  id?: string;
  name?: string;
  label: string;
  fieldType?: PiggyFieldType;
  helper?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
  /** Preview a frame state. Live fields derive state from interaction. */
  state?: PiggyFieldState;
  size?: PiggyFieldSize;
  masked?: boolean;
  onMaskedChange?: (masked: boolean) => void;
  /** Existing SSN reveal control. Toggles the Masked overlay. */
  revealable?: boolean;
  invalid?: boolean;
  errorHelper?: string;
  minimum?: number;
  maximum?: number;
  autoComplete?: string;
  type?: string;
};

function digits(value: string, max?: number) {
  const next = value.replace(/\D/g, "");
  return max ? next.slice(0, max) : next;
}

function formatSsn(value: string) {
  const next = digits(value, 9);
  const area = next.slice(0, 3);
  const group = next.slice(3, 5);
  const serial = next.slice(5, 9);
  if (next.length <= 3) return area;
  if (next.length <= 5) return `${area}-${group}`;
  return `${area}-${group}-${serial}`;
}

function formatDate(value: string) {
  const next = digits(value, 8);
  const month = next.slice(0, 2);
  const day = next.slice(2, 4);
  const year = next.slice(4, 8);
  if (next.length <= 2) return month;
  if (next.length <= 4) return `${month}/${day}`;
  return `${month}/${day}/${year}`;
}

function formatPhone(value: string) {
  const next = digits(value, 10);
  if (next.length === 0) return "";
  if (next.length < 4) return `(${next}`;
  if (next.length < 7) return `(${next.slice(0, 3)}) ${next.slice(3)}`;
  return `(${next.slice(0, 3)}) ${next.slice(3, 6)}-${next.slice(6)}`;
}

function formatEin(value: string) {
  const next = digits(value, 9);
  if (next.length <= 2) return next;
  return `${next.slice(0, 2)}-${next.slice(2)}`;
}

function formatZip(value: string) {
  const next = digits(value, 9);
  if (next.length <= 5) return next;
  return `${next.slice(0, 5)}-${next.slice(5)}`;
}

function formatName(value: string) {
  const letters = value.replace(/[^a-zA-Z\s]/g, "").replace(/\s+/g, (spaces) => (spaces.length > 1 ? " " : spaces));
  return letters.replace(/(^|\s)([a-z])/g, (match) => match.toUpperCase());
}

function formatMoney(value: string, blur: boolean) {
  const cleaned = value.replace(/[^\d.]/g, "");
  if (!cleaned) return "";
  const [wholeRaw, fractionRaw] = cleaned.split(".");
  const whole = wholeRaw.replace(/^0+(?=\d)/, "") || "0";
  const withCommas = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if (!blur) {
    if (fractionRaw === undefined) return `$${withCommas}`;
    return `$${withCommas}.${fractionRaw.slice(0, 2)}`;
  }
  const amount = Number(`${whole}.${(fractionRaw ?? "").slice(0, 2) || "0"}`);
  if (Number.isNaN(amount)) return "";
  return `$${amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function formatPercentage(value: string, blur: boolean) {
  const cleaned = value.replace(/[^\d.]/g, "");
  if (!cleaned) return "";
  const [wholeRaw, fractionRaw] = cleaned.split(".");
  const whole = wholeRaw.replace(/^0+(?=\d)/, "") || "0";
  if (!blur) {
    if (fractionRaw === undefined) return `${whole}%`;
    return `${whole}.${fractionRaw.slice(0, 2)}%`;
  }
  const amount = Number(`${whole}.${fractionRaw ?? "0"}`);
  if (Number.isNaN(amount)) return "";
  return `${amount.toFixed(2)}%`;
}

export function formatPiggyValue(fieldType: PiggyFieldType, value: string, blur = false) {
  switch (fieldType) {
    case "money":
      return formatMoney(value, blur);
    case "ssn":
      return formatSsn(value);
    case "percentage":
      return formatPercentage(value, blur);
    case "date":
      return formatDate(value);
    case "phone":
      return formatPhone(value);
    case "account":
      return digits(value);
    case "ein":
      return formatEin(value);
    case "zip":
      return formatZip(value);
    case "name":
      return formatName(value);
    default:
      return value;
  }
}

function maskOverlay(fieldType: PiggyFieldType, formatted: string) {
  if (!formatted) return "";
  if (fieldType === "ssn") return formatSsn(formatted).replace(/\d/g, "•");
  if (fieldType === "account") return "•".repeat(8);
  return "•".repeat(Math.max(formatted.length, 8));
}

function isComplete(fieldType: PiggyFieldType, value: string, minimum?: number, maximum?: number) {
  if (!value) return true;
  if (fieldType === "email") return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  if (fieldType === "date") {
    if (value.length < 10) return false;
    const [month, day, year] = value.split("/").map(Number);
    return month >= 1 && month <= 12 && day >= 1 && day <= 31 && year >= 1000;
  }
  if (fieldType === "ssn" || fieldType === "ein") return digits(value).length === 9;
  if (fieldType === "phone") return digits(value).length === 10;
  if (fieldType === "zip") {
    const length = digits(value).length;
    return length === 5 || length === 9;
  }
  if (fieldType === "money") return Number(value.replace(/[^0-9.]/g, "")) >= 0 && value.startsWith("$");
  if (fieldType === "percentage") {
    const amount = Number(value.replace("%", ""));
    if (Number.isNaN(amount)) return false;
    if (minimum !== undefined && amount < minimum) return false;
    if (maximum !== undefined && amount > maximum) return false;
    return true;
  }
  if (fieldType === "account") return digits(value).length > 0;
  return true;
}

const sizeClass: Record<PiggyFieldSize, string> = {
  mobile: "h-11 px-3.5 text-[13px]",
  tablet: "h-11 px-3.5 text-sm",
  desktop: "h-12 px-4 text-sm",
  responsive: "h-11 px-3.5 text-[13px] md:text-sm lg:h-12 lg:px-4",
};

const helperSize: Record<PiggyFieldSize, string> = {
  mobile: "text-[11px]",
  tablet: "text-xs",
  desktop: "text-xs",
  responsive: "text-[11px] md:text-xs",
};

export function InputField({
  id,
  name,
  label,
  fieldType = "text",
  helper,
  placeholder,
  value,
  defaultValue = "",
  onValueChange,
  required = false,
  disabled = false,
  state,
  size = "responsive",
  masked = false,
  onMaskedChange,
  revealable = false,
  invalid = false,
  errorHelper,
  minimum,
  maximum,
  autoComplete,
  type,
}: InputFieldProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const helperId = `${fieldId}-helper`;
  const inputRef = useRef<HTMLInputElement>(null);
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const [focused, setFocused] = useState(false);
  const [touched, setTouched] = useState(false);
  const display = value ?? uncontrolled;
  const preview = state !== undefined;
  const isDisabled = disabled || state === "disabled";
  const showMask = masked && !focused && state !== "focused" && display.length > 0;
  const shown = showMask ? maskOverlay(fieldType, display) : display;
  const formatValid = isComplete(fieldType, display, minimum, maximum);
  const valid = (!required || display.length > 0) && formatValid;
  const showError = state === "error" || (!preview && (invalid || (touched && !focused && !valid)));
  const helperText = showError && errorHelper ? errorHelper : helper;

  useEffect(() => {
    if (preview) return;
    inputRef.current?.setCustomValidity(valid ? "" : " ");
  }, [preview, valid]);

  function commit(nextRaw: string, blur: boolean) {
    const next = formatPiggyValue(fieldType, nextRaw, blur);
    if (value === undefined) setUncontrolled(next);
    onValueChange?.(next);
  }

  return (
    <div className="flex w-full flex-col gap-1.5">
      <label
        htmlFor={fieldId}
        className={cn(
          "font-inter text-[13px] leading-normal font-semibold text-[#374151]",
          isDisabled && "text-[#9ca3af]",
        )}
      >
        {label}
      </label>
      <div className="relative">
        <input type="hidden" name={name} value={display} />
        <input
          ref={inputRef}
          id={fieldId}
          type={type ?? (fieldType === "email" ? "email" : "text")}
          inputMode={
            fieldType === "email" || fieldType === "text" || fieldType === "name"
              ? undefined
              : "numeric"
          }
          autoComplete={autoComplete}
          placeholder={placeholder}
          disabled={isDisabled}
          required={required}
          aria-invalid={showError || undefined}
          aria-describedby={helperText ? helperId : undefined}
          value={shown}
          onFocus={() => {
            if (!preview) setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
            setTouched(true);
            if (!preview) commit(display, true);
          }}
          onInvalid={(event) => {
            event.preventDefault();
            setTouched(true);
          }}
          onChange={(event) => {
            if (showMask) return;
            commit(event.target.value, false);
          }}
          data-state={showError ? "error" : state === "filled" || (!preview && display) ? "filled" : state ?? "default"}
          style={
            showError && !focused
              ? { borderWidth: "1.5px", borderColor: "#ef4444", boxShadow: "none" }
              : undefined
          }
          className={cn(
            "w-full min-w-0 rounded-[6px] border border-[#d1d5db] bg-white font-inter leading-normal font-normal text-[#111827] outline-none",
            "transition-[color,background-color,border-color,box-shadow] duration-hover ease-hover",
            "placeholder:text-[#9ca3af]",
            "enabled:hover:border-[#a0a5af] enabled:hover:bg-[#fafafc]",
            "focus:border-2 focus:border-[#2563eb] focus:bg-white focus:shadow-[0_0_3px_3px_rgba(37,99,235,0.2)]",
            "disabled:cursor-not-allowed disabled:border-[#ebebeb] disabled:bg-[#f5f5f5] disabled:text-[rgba(156,163,175,0.45)] disabled:placeholder:text-[#9ca3af]",
            "aria-invalid:border-[1.5px] aria-invalid:border-[#ef4444] aria-invalid:bg-white aria-invalid:shadow-none",
            sizeClass[size],
            revealable && "pr-10",
            state === "hover" && "border-[#a0a5af] bg-[#fafafc]",
            state === "focused" && "border-2 border-[#2563eb] shadow-[0_0_3px_3px_rgba(37,99,235,0.2)]",
            (state === "error" || showError) && "border-[1.5px] border-[#ef4444] shadow-none",
          )}
        />
        {revealable ? (
          <button
            type="button"
            className="absolute top-1/2 right-3 flex size-5 -translate-y-1/2 items-center justify-center"
            aria-pressed={!masked}
            aria-label={masked ? "Show value" : "Hide value"}
            onClick={() => onMaskedChange?.(!masked)}
            disabled={isDisabled}
          >
            <EyeIcon slashed={masked} />
          </button>
        ) : null}
      </div>
      {helperText ? (
        <p
          id={helperId}
          className={cn(
            "font-inter leading-normal font-normal text-[#6b7280]",
            helperSize[size],
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
