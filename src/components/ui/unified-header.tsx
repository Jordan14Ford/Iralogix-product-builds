/* eslint-disable @next/next/no-img-element */
import { asset } from "@/lib/public-asset";
import { cn } from "cn";

export const headerSteps = [1, 2, 3, 4, 5, 6] as const;
export const headerSizes = ["desktop", "mobile"] as const;

export type HeaderStep = (typeof headerSteps)[number];
export type HeaderSize = (typeof headerSizes)[number];

type StepState = "complete" | "current" | "upcoming";

function stateFor(step: number, current: HeaderStep): StepState {
  if (step < current) return "complete";
  if (step === current) return "current";
  return "upcoming";
}

function Logo({ size }: { size: HeaderSize }) {
  const mobile = size === "mobile";
  return (
    <div
      className="relative shrink-0 overflow-hidden"
      style={mobile ? { width: 114, height: 48 } : { width: 57, height: 24 }}
    >
      <img
        src={asset("/onboarding/logo.png")}
        alt="Logo"
        className="pointer-events-none absolute top-[-62.5%] left-0 h-[237.5%] w-full max-w-none"
      />
    </div>
  );
}

function StepMark({ step, state }: { step: number; state: StepState }) {
  if (state === "complete") {
    return (
      <span className="inline-flex size-6 items-center justify-center rounded-full bg-brand-primary-subtle font-inter text-[12px] font-semibold text-[rgba(37,99,235,0.45)]">
        {step}
      </span>
    );
  }
  if (state === "current") {
    return (
      <span className="inline-flex size-6 items-center justify-center rounded-full bg-brand-primary font-inter text-[12px] leading-4 font-medium text-brand-on-primary shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
        {step}
      </span>
    );
  }
  return (
    <span className="inline-flex size-6 items-center justify-center rounded-full border-[1.5px] border-[#b8c0cc] bg-white font-inter text-[12px] leading-4 font-medium text-[#667085]">
      {step}
    </span>
  );
}

function ProgressNav({ current }: { current: HeaderStep }) {
  return (
    <nav aria-label="Onboarding progress">
      <ol className="flex items-center gap-2">
        {headerSteps.map((step) => {
          const state = stateFor(step, current);
          const connector = step < 6;
          return (
            <li key={step} className="flex items-center gap-2">
              <span className="flex items-center gap-2">
                <StepMark step={step} state={state} />
                {state === "current" ? (
                  <span className="font-inter text-[12px] leading-4 font-semibold text-brand-primary">Identity</span>
                ) : null}
              </span>
              {connector ? (
                <span className={cn("flex h-px items-center", state === "current" && "pl-2")}>
                  <span className="block h-px w-5 bg-[#e5e7eb]" />
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function UnifiedHeader({
  step = 1,
  size = "desktop",
}: {
  step?: HeaderStep;
  size?: HeaderSize;
}) {
  const progress = `${(step / headerSteps.length) * 100}%`;

  return (
    <header
      data-step={step}
      data-size={size}
      className="relative border-b border-solid border-[#e5e7eb] bg-white"
      style={size === "mobile" ? { width: 390, height: 100 } : { width: "100%", minWidth: 720 }}
    >
      {size === "mobile" ? (
        <div className="flex flex-col items-center pt-0.5" style={{ height: 96 }}>
          <Logo size="mobile" />
          <div className="mt-auto" style={{ marginBottom: 19 }}>
            <ProgressNav current={step} />
          </div>
        </div>
      ) : (
        <div className="relative flex items-center px-6" style={{ height: 58 }}>
          <Logo size="desktop" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <ProgressNav current={step} />
          </div>
        </div>
      )}
      <div className="h-1 bg-[#ebebed]" aria-hidden="true">
        <div className="h-full bg-[#3d5cf2]" style={{ width: progress }} />
      </div>
    </header>
  );
}
