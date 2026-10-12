"use client";

import { FormEvent, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { flowSteps, OnboardingHeader } from "@/components/onboarding/onboarding-header";
import {
  OnboardingActions,
  OnboardingBack,
  OnboardingData,
} from "@/components/onboarding/onboarding-panel";

const primaryButtonClass =
  "h-12 w-full rounded-[7px] bg-[#2563eb] px-6 text-base font-semibold text-white hover:bg-[#1d4ed8]";

const secondaryButtonClass =
  "h-12 w-full rounded-[7px] border-0 bg-transparent px-6 text-base font-semibold text-[#0f172a] hover:bg-[#f8fafc]";

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
    <div className="pb-10">
      <div className="flex flex-col gap-2">
        {eyebrow ? (
          <p className="text-xs leading-4 font-semibold tracking-[1.2px] text-[#6b7280] uppercase">
            {eyebrow}
          </p>
        ) : (
          <div className="h-4" aria-hidden="true" />
        )}
        <h1 className="pt-1 text-[28px] leading-8 font-semibold tracking-[-0.7px] text-[#111827]">
          {title}
        </h1>
        <p className="text-sm leading-5 text-[#6b7280]">{helper}</p>
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
  children,
  aside,
  asideWidth = "max-w-[480px]",
}: {
  currentStep: number;
  progress: string;
  backHref: string;
  nextHref?: string;
  secondaryLabel: string;
  children: ReactNode;
  aside: ReactNode;
  asideWidth?: string;
}) {
  const router = useRouter();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (nextHref) router.push(nextHref);
  }

  return (
    <div className="relative min-h-screen bg-[#f8fafc] max-lg:pb-[184px]">
      <OnboardingHeader steps={flowSteps(currentStep)} progress={progress} />
      <div className="flex min-h-screen flex-col lg:flex-row">
        <section className="w-full border-[#ebebed] bg-white lg:min-h-screen lg:w-1/2 lg:rounded-r-2xl lg:border-r lg:border-b">
          <form onSubmit={onSubmit}>
            <OnboardingData insetClassName="lg:px-[62px]">
              <OnboardingBack href={backHref} />
              {children}
            </OnboardingData>
            <OnboardingActions panelClassName="lg:w-1/2" insetClassName="lg:px-[62px]">
              <Button type="submit" className={primaryButtonClass}>
                Continue
              </Button>
              <Button type="button" className={secondaryButtonClass}>
                {secondaryLabel}
              </Button>
            </OnboardingActions>
          </form>
        </section>
        <aside className="flex flex-1 items-center justify-center px-6 py-10 lg:sticky lg:top-0 lg:h-screen lg:px-8">
          <div className={`w-full rounded-2xl bg-white p-8 ${asideWidth}`}>{aside}</div>
        </aside>
      </div>
    </div>
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
