"use client";

import { FormEvent, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  flowSteps,
  OnboardingHeader,
  type OnboardingStep as OnboardingStepModel,
} from "@/components/onboarding/onboarding-header";
import { OnboardingBack } from "@/components/onboarding/onboarding-panel";

const primaryButtonClass =
  "h-12 w-full rounded-[8px] bg-[#3563e0] px-6 text-[15px] font-semibold text-white hover:bg-[#3563e0] active:bg-[#3563e0]";

const secondaryButtonClass =
  "h-11 w-full rounded-lg border-0 bg-transparent px-6 text-[15px] font-semibold text-[#101828] shadow-none hover:bg-transparent active:bg-transparent";

export function StepIntro({
  eyebrow,
  title,
  helper,
}: {
  eyebrow?: string;
  title: string;
  helper: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      {eyebrow ? (
        <p className="text-[11px] leading-none font-semibold tracking-[0.88px] text-[#667085] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-[28px] leading-[34px] font-semibold tracking-[-0.56px] text-[#101828]">
        {title}
      </h1>
      <p className="text-[15px] leading-[22px] text-[#667085]">{helper}</p>
    </div>
  );
}

export function OnboardingScreen({
  steps,
  progress,
  backHref,
  eyebrow,
  title,
  helper,
  primaryLabel,
  secondaryLabel,
  onSubmit,
  children,
  aside,
  layout = "panel",
}: {
  steps: OnboardingStepModel[];
  progress: string;
  backHref?: string;
  eyebrow?: string;
  title: string;
  helper: string;
  primaryLabel: string;
  secondaryLabel: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
  aside: ReactNode;
  layout?: "panel" | "identity";
}) {
  const identity = layout === "identity";

  return (
    <div
      className={
        identity
          ? "flex min-h-screen flex-col bg-white lg:h-screen lg:overflow-hidden"
          : "flex min-h-screen flex-col bg-white"
      }
    >
      <OnboardingHeader steps={steps} progress={progress} />
      <div className={identity ? "flex min-h-0 flex-1 flex-col lg:flex-row" : "flex flex-1 flex-col lg:flex-row"}>
        <section
          className={
            identity
              ? "identity-form-scroll w-full bg-white lg:h-full lg:w-1/2 lg:overflow-y-auto"
              : "w-full bg-white lg:w-1/2"
          }
        >
          <form onSubmit={onSubmit} className="px-6 pt-10 pb-12 lg:px-[60px] lg:pt-16 lg:pb-12">
            {backHref ? (
              <div className="relative mb-4 h-9 max-w-[480px]">
                <OnboardingBack href={backHref} />
              </div>
            ) : null}
            <div className="flex w-full max-w-[480px] flex-col gap-8">
              <StepIntro eyebrow={eyebrow} title={title} helper={helper} />
              <div>{children}</div>
              <div className="flex flex-col">
                <Button type="submit" size="lg" className={primaryButtonClass}>
                  {primaryLabel}
                </Button>
                <Button type="button" variant="tertiary" size="lg" className={secondaryButtonClass}>
                  {secondaryLabel}
                </Button>
              </div>
            </div>
          </form>
        </section>
        {identity ? (
          <aside className="relative h-72 shrink-0 overflow-hidden lg:h-full lg:w-1/2">{aside}</aside>
        ) : (
          <aside className="flex w-full justify-center bg-[#f9fafb] px-6 py-12 lg:w-1/2 lg:px-20 lg:pt-16 lg:pb-12">
            <div className="h-fit w-full max-w-[440px] rounded-[16px] border border-[#eaecf0] bg-white p-7">
              {aside}
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}

export function OnboardingStep({
  currentStep,
  progress,
  backHref,
  nextHref,
  secondaryLabel,
  eyebrow,
  title,
  helper,
  children,
  aside,
}: {
  currentStep: number;
  progress: string;
  backHref: string;
  nextHref?: string;
  secondaryLabel: string;
  eyebrow?: string;
  title: string;
  helper: string;
  children: ReactNode;
  aside: ReactNode;
}) {
  const router = useRouter();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (nextHref) router.push(nextHref);
  }

  return (
    <OnboardingScreen
      steps={flowSteps(currentStep)}
      progress={progress}
      backHref={backHref}
      eyebrow={eyebrow}
      title={title}
      helper={helper}
      primaryLabel="Continue"
      secondaryLabel={secondaryLabel}
      onSubmit={onSubmit}
      aside={aside}
    >
      {children}
    </OnboardingScreen>
  );
}

export function HorizonTabs({
  value,
  onChange,
}: {
  value: 10 | 20 | 30;
  onChange: (years: 10 | 20 | 30) => void;
}) {
  const years = [10, 20, 30] as const;
  return (
    <div className="inline-flex gap-1 rounded-lg bg-[#f5f5f5] p-1">
      {years.map((year) => {
        const selected = year === value;
        return (
          <button
            key={year}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(year)}
            className={
              selected
                ? "rounded-lg bg-[#2563eb] px-4 py-2 text-sm leading-[22px] font-semibold text-white shadow-[0_4px_6px_rgba(0,0,0,0.08)]"
                : "rounded-lg px-4 py-2 text-sm leading-[22px] font-medium text-black/50"
            }
          >
            {year} Years
          </button>
        );
      })}
    </div>
  );
}
