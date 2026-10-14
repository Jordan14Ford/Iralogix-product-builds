/* The logo crop is a fixed design asset. */
import { asset } from "@/lib/public-asset";
/* eslint-disable @next/next/no-img-element */

export type OnboardingStepState = "current" | "complete" | "upcoming";

export type OnboardingStep = {
  state: OnboardingStepState;
  label?: string;
};

function StepMark({ step, filled }: { step: number; filled: boolean }) {
  return (
    <span
      className={
        filled
          ? "flex size-[22px] items-center justify-center rounded-full bg-[#3563e0] font-sans text-xs leading-none font-semibold text-white"
          : "flex size-[22px] items-center justify-center rounded-full border-[1.5px] border-[#d0d5dd] bg-white font-sans text-xs leading-none font-semibold text-[#667085]"
      }
    >
      {step}
    </span>
  );
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

export function OnboardingHeader({
  steps,
  progress,
}: {
  steps: OnboardingStep[];
  progress: string;
}) {
  return (
    <header className="bg-white">
      <div className="flex h-14 items-center gap-3 px-4 lg:px-8">
        <Logo />
        <nav
          aria-label="Onboarding progress"
          className="flex min-w-0 flex-1 items-center justify-start overflow-x-auto lg:justify-center"
        >
          <ol className="flex items-center gap-3.5">
            {steps.map((step, index) => {
              const number = index + 1;
              const filled = step.state === "current" || step.state === "complete";

              return (
                <li key={number} className="flex shrink-0 items-center gap-2">
                  <StepMark step={number} filled={filled} />
                  {step.state === "current" && step.label ? (
                    <span className="font-sans text-[13px] leading-none font-semibold text-[#3563e0]">
                      {step.label}
                    </span>
                  ) : null}
                </li>
              );
            })}
          </ol>
        </nav>
        <div className="hidden w-[57px] shrink-0 lg:block" aria-hidden="true" />
      </div>
      <div className="h-3 bg-[#eaecf0]" aria-hidden="true">
        <div className={`h-full bg-[#3563e0] ${progress}`} />
      </div>
    </header>
  );
}

export const identitySteps: OnboardingStep[] = [
  { state: "current", label: "Identity" },
  { state: "upcoming" },
  { state: "upcoming" },
  { state: "upcoming" },
  { state: "upcoming" },
  { state: "upcoming" },
];

export const loginSteps: OnboardingStep[] = [
  { state: "complete" },
  { state: "current", label: "Identity" },
  { state: "upcoming" },
  { state: "upcoming" },
  { state: "upcoming" },
  { state: "upcoming" },
];

export function flowSteps(current: number): OnboardingStep[] {
  return Array.from({ length: 6 }, (_, index) => {
    const step = index + 1;
    if (step < current) return { state: "complete" };
    if (step === current) return { state: "current", label: "Identity" };
    return { state: "upcoming" };
  });
}
