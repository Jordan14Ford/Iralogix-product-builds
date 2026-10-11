"use client";

/* Slider thumb is a fixed 18px design asset. */
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { HorizonTabs, OnboardingStep, StepIntro } from "@/components/onboarding/step-screen";
import {
  formatDollars,
  formatWholeDollars,
  matchPerCheck,
  perCheck,
  projectedBalance,
} from "@/components/onboarding/contribution-math";

export function ContributionStep() {
  const [percent, setPercent] = useState(7);
  const [years, setYears] = useState<10 | 20 | 30>(10);

  return (
    <OnboardingStep
      currentStep={3}
      progress="w-1/2"
      backHref="/create-login"
      nextHref="/bank"
      secondaryLabel="Save & finish later"
      asideWidth="max-w-[570px]"
      aside={
        <div className="flex flex-col gap-6">
          <h2 className="text-xl leading-7 font-semibold text-black/90">
            See what your money could become
          </h2>
          <div className="flex flex-col gap-4">
            <p className="text-sm leading-5 font-semibold text-black/50">Projected over</p>
            <HorizonTabs value={years} onChange={setYears} />
          </div>
          <div className="flex flex-col gap-2 rounded-xl bg-[#eff6ff] p-5">
            <p className="text-xs leading-[18px] font-medium text-[rgba(29,78,216,0.8)]">
              Projected balance
            </p>
            <p className="text-[36px] leading-[44px] font-semibold tracking-[-0.54px] text-[#2563eb]">
              {formatWholeDollars(projectedBalance(percent, years))}
            </p>
            <p className="text-sm leading-5 font-medium text-[rgba(30,58,138,0.5)]">
              Estimated at a 6% annual return, based on your current salary and full
              employer match. Projections are estimates, not guarantees.
            </p>
          </div>
        </div>
      }
    >
      <StepIntro
        eyebrow="Step 3 of 6"
        title="Create your contribution amount"
        helper="Choose how much of each paycheck goes into your SIMPLE IRA. Adjust anytime — your changes apply to future paychecks only."
      />
      <div className="flex flex-col gap-3">
        <div className="flex gap-6">
          <div className="flex min-w-0 flex-1 flex-col gap-1.5">
            <p className="text-sm leading-5 font-semibold text-[#6b7280]">Your Contribution</p>
            <p className="text-[36px] leading-[44px] font-semibold tracking-[-0.54px] text-[#111827]">
              {percent}%
            </p>
          </div>
          <div className="flex w-[48%] flex-col gap-1.5">
            <p className="text-sm leading-5 font-medium text-[#6b7280]">Per Check Contribution</p>
            <p className="text-[36px] leading-[44px] font-semibold tracking-[-0.54px] text-[#111827]">
              {formatDollars(perCheck(percent))}
            </p>
            <p className="text-sm leading-5 text-black/50">
              Based on your salary of $65,000, paid biweekly.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex text-sm leading-5 font-medium">
            <p className="flex-1 text-[#6b7280]">Contribution Percentage</p>
            <p className="text-[#2563eb]">{percent}%</p>
          </div>
          <div className="relative h-[18px]">
            <div className="absolute top-[7px] h-1.5 w-full rounded-[3px] bg-[#e5e7eb]" />
            <div
              className="absolute top-[7px] h-1.5 rounded-[3px] bg-[#2563eb]"
              style={{ width: `${percent * 10}%` }}
            />
            <img
              src="/onboarding/slider-thumb.svg"
              alt=""
              width={18}
              height={18}
              className="pointer-events-none absolute top-0 max-w-none"
              style={{ left: `calc(${percent * 10}% - 9px)` }}
            />
            <input
              type="range"
              min={0}
              max={10}
              step={1}
              value={percent}
              aria-label="Contribution Percentage"
              onChange={(event) => setPercent(Number(event.target.value))}
              className="absolute inset-0 cursor-pointer opacity-0"
            />
          </div>
          <div className="flex justify-between text-sm leading-5 text-black/50">
            <p>0% — minimum</p>
            <p>10% — maximum</p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-1">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-sm leading-5 font-medium">
            <p className="text-[#6b7280]">Your employer match</p>
            <p className="text-[#16a34a]">dollar-for-dollar up to 3%</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-[32px] leading-10 font-semibold tracking-[-0.32px] text-[#111827]">
              {formatDollars(matchPerCheck(percent))}
            </p>
            <p className="text-sm leading-[22.75px] text-[#6b7280]">per paycheck</p>
          </div>
        </div>
        <p className="text-sm leading-[22.75px] text-[#6b7280]">
          Matched automatically — you never need to enroll or claim it.
        </p>
      </div>

      <div className="mt-6 rounded-xl bg-[#f9fafb] p-4 text-sm leading-5">
        <p className="font-semibold text-[#111827]">How your 3% match works</p>
        <p className="mt-1 text-[#6b7280]">
          Your employer matches what you contribute, dollar for dollar, up to 3% of
          your salary. Contribute at least 3% to receive the full match. Anything
          above 3% is yours alone; anything below leaves free money on the table.
        </p>
        {percent >= 3 ? (
          <p className="mt-2 font-semibold text-[#2563eb]">
            You&apos;re getting the full match — nice work.
          </p>
        ) : null}
      </div>
    </OnboardingStep>
  );
}
