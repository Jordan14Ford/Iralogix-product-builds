/* The logo crop is a fixed design asset. */
/* eslint-disable @next/next/no-img-element */

export type OnboardingStepState = "current" | "complete" | "upcoming";

export type OnboardingStep = {
  state: OnboardingStepState;
  label?: string;
};

function CurrentStep({ step }: { step: number }) {
  return (
    <span className="flex size-6 items-center justify-center rounded-full bg-[#2563eb] font-inter text-xs leading-4 font-medium text-white shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
      {step}
    </span>
  );
}

function CompleteStep({ step }: { step: number }) {
  return (
    <span className="flex size-6 items-center justify-center rounded-full bg-[#eff6ff] font-inter text-xs leading-none font-semibold text-[rgba(37,99,235,0.45)]">
      {step}
    </span>
  );
}

function UpcomingStep({ step }: { step: number }) {
  return (
    <span className="flex size-6 items-center justify-center rounded-full border-[1.5px] border-[#b8c0cc] bg-white font-inter text-xs leading-4 font-medium text-[#667085]">
      {step}
    </span>
  );
}

function Logo() {
  return (
    <div className="relative h-6 w-[57px] shrink-0 overflow-hidden">
      <img
        src="/onboarding/logo.png"
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
    <header className="fixed inset-x-0 top-0 z-20 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.06),0_4px_10px_rgba(15,23,42,0.06)]">
      <div className="relative flex h-[58px] items-center gap-3 px-6">
        <Logo />
        <nav
          aria-label="Onboarding progress"
          className="flex h-[58px] min-w-0 flex-1 items-center justify-start overflow-x-auto md:absolute md:top-0 md:left-1/2 md:h-[58px] md:max-w-[calc(100%-8rem)] md:flex-none md:-translate-x-1/2 md:justify-center"
        >
          <ol className="flex items-center gap-2">
            {steps.map((step, index) => {
              const number = index + 1;
              const isLast = index === steps.length - 1;

              if (step.state === "current") {
                return (
                  <li key={number} className="flex shrink-0 items-center gap-2">
                    <span className="flex items-center gap-2">
                      <CurrentStep step={number} />
                      {step.label ? (
                        <span className="font-inter text-xs leading-4 font-semibold text-[#2563eb]">
                          {step.label}
                        </span>
                      ) : null}
                    </span>
                    {isLast ? null : (
                      <span className="flex w-7 items-center pl-2" aria-hidden="true">
                        <span className="block h-px w-5 bg-[#e5e7eb]" />
                      </span>
                    )}
                  </li>
                );
              }

              return (
                <li key={number} className="flex shrink-0 items-center gap-2">
                  {step.state === "complete" ? (
                    <CompleteStep step={number} />
                  ) : (
                    <UpcomingStep step={number} />
                  )}
                  {isLast ? null : (
                    <span className="block h-px w-5 bg-[#e5e7eb]" aria-hidden="true" />
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
      <div className="h-1 bg-[#ebebed]" aria-hidden="true">
        <div className={`h-full bg-[#3d5cf2] ${progress}`} />
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
