/* eslint-disable @next/next/no-img-element */
import { asset } from "@/lib/public-asset";
import { cn } from "cn";

export const stepperSteps = [1, 2, 3, 4, 5, 6] as const;
export type StepperStep = (typeof stepperSteps)[number];

type StepState = "complete" | "current" | "upcoming";

function stateFor(step: number, current: StepperStep): StepState {
  if (step < current) return "complete";
  if (step === current) return "current";
  return "upcoming";
}

function Logo() {
  return (
    <div className="relative h-6 w-[57px] shrink-0 overflow-hidden">
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

export function Stepper({ step = 1 }: { step?: StepperStep }) {
  const progress = `${(step / stepperSteps.length) * 100}%`;

  return (
    <header data-step={step} className="relative w-full border-b border-solid border-[#e5e7eb] bg-white">
      <div className="relative flex items-center px-6" style={{ height: 58 }}>
        <Logo />
        <nav
          aria-label="Onboarding progress"
          className="absolute top-1/2 left-1/2 max-w-[calc(100%-7.5rem)] -translate-x-1/2 -translate-y-1/2 overflow-x-auto"
        >
          <ol className="flex items-center gap-2">
            {stepperSteps.map((number) => {
              const state = stateFor(number, step);
              return (
                <li key={number} className="flex shrink-0 items-center gap-2">
                  <span className="flex items-center gap-2">
                    <StepMark step={number} state={state} />
                    {state === "current" ? (
                      <span className="font-inter text-[12px] leading-4 font-semibold text-brand-primary">Identity</span>
                    ) : null}
                  </span>
                  {number < 6 ? (
                    <span className={cn("flex h-px items-center", state === "current" && "pl-2")}>
                      <span className="block h-px w-5 bg-[#e5e7eb]" />
                    </span>
                  ) : null}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
      <div className="h-1 bg-[#ebebed]" aria-hidden="true">
        <div className="h-full bg-[#3d5cf2]" style={{ width: progress }} />
      </div>
    </header>
  );
}
