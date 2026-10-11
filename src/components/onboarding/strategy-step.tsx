"use client";

/* Strategy marks are fixed design assets. */
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { HorizonTabs, OnboardingStep, StepIntro } from "@/components/onboarding/step-screen";
import { formatWholeDollars, projectedBalance } from "@/components/onboarding/contribution-math";

const strategies = [
  {
    id: "conservative",
    title: "Conservative",
    detail: "Lower risk, smaller market swings",
    empty: "/onboarding/radio-empty.svg",
  },
  {
    id: "balanced",
    title: "Balanced",
    detail: "Moderate risk, a mix of stocks and bonds",
    empty: "/onboarding/radio-empty-2.svg",
  },
  {
    id: "growth",
    title: "Growth",
    detail: "Higher risk, more long-term growth potential",
    empty: "/onboarding/radio-empty.svg",
  },
  {
    id: "target-2055",
    title: "Target Date 2055",
    detail: "Adjusts automatically as retirement gets closer",
    empty: "/onboarding/radio-empty.svg",
  },
] as const;

const funds = [
  { label: "US Stock", dot: "/onboarding/dot-us.svg" },
  { label: "International Fund", dot: "/onboarding/dot-intl.svg" },
  { label: "Bond Fund", dot: "/onboarding/dot-bond.svg" },
  { label: "Short Term Bond Fund", dot: "/onboarding/dot-short.svg" },
  { label: "Cash Reserve", dot: "/onboarding/dot-cash.svg" },
];

export function StrategyStep() {
  const [strategy, setStrategy] = useState<(typeof strategies)[number]["id"]>("target-2055");
  const [autopilot, setAutopilot] = useState(false);
  const [years, setYears] = useState<10 | 20 | 30>(10);

  return (
    <OnboardingStep
      currentStep={6}
      progress="w-full"
      backHref="/banks-connected"
      nextHref="/beneficiaries"
      secondaryLabel="Save & Close"
      aside={
        <div className="flex flex-col gap-3">
          <h2 className="text-[22px] leading-[30px] font-semibold text-[#12123d]">
            See your potential growth
          </h2>
          <HorizonTabs value={years} onChange={setYears} />
          <p className="text-sm leading-5 font-medium text-[#8a8da0]">
            What&apos;s in the investment strategy
          </p>
          <p className="text-xl leading-7 font-semibold tracking-[-0.28px] text-[#12123d]">
            Target date 2055
          </p>
          <div className="flex gap-3 rounded-xl bg-[#f3f4f6] p-4">
            <img src="/onboarding/info-circle.svg" alt="" width={24} height={24} className="max-w-none" />
            <div>
              <p className="text-[13px] leading-[18px] font-semibold text-[#12123d]">
                What a target date fund does
              </p>
              <p className="mt-1 text-sm leading-5 text-[#5b5f6d]">
                Starts growth-focused, then automatically shifts toward bonds and cash
                as 2055 gets closer — so your investments get more conservative as
                retirement approaches. You don&apos;t need to rebalance it yourself.
              </p>
            </div>
          </div>
          <p className="text-sm leading-5 font-semibold text-[#12123d]">Fund details</p>
          <div className="flex items-center gap-6">
            <img
              src="/onboarding/donut-chart.svg"
              alt=""
              width={130}
              height={132}
              className="max-w-none"
            />
            <ul className="flex flex-1 flex-col gap-2">
              {funds.map((fund) => (
                <li key={fund.label} className="flex items-center gap-2">
                  <img src={fund.dot} alt="" width={8} height={8} className="max-w-none" />
                  <span className="text-sm leading-5 text-[#5b5f6d]">{fund.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-[#eff6ff] p-5">
            <p className="text-xs leading-[18px] font-medium text-[rgba(29,78,216,0.8)]">
              Projected Growth
            </p>
            <p className="text-[36px] leading-[44px] font-semibold tracking-[-0.54px] text-[#2563eb]">
              {formatWholeDollars(projectedBalance(7, years))}
            </p>
            <p className="mt-2 text-sm leading-5 text-[rgba(30,58,138,0.5)]">
              Estimated at a 6% annual return, based on your current salary and full
              employer match. Projections are estimates, not guarantees.
            </p>
          </div>
        </div>
      }
    >
      <StepIntro
        eyebrow="Step 5 of 6"
        title="Select your strategy"
        helper="One line of helper text directly below, muted color, explains why or what to expect - never decorative."
      />
      <p className="text-sm leading-[22px] text-[#64748b]">
        Estimated in 20 years with Target Date 2055
      </p>
      <p className="mt-1.5 text-[36px] leading-[44px] font-semibold tracking-[-0.54px] text-[#0f172a]">
        $104,600
      </p>
      <p className="mt-1 text-xs leading-[18px] text-[#94a3b8]">
        Assumes current contribution rate and 6% average annual return. Estimates only
        not a guarantee of future performance.
      </p>
      <p className="mt-6 font-inter text-sm font-medium text-black/85">Pick a strategy</p>
      <div className="mt-4 flex flex-col gap-2" role="radiogroup" aria-label="Pick a strategy">
        {strategies.map((option) => {
          const selected = strategy === option.id;
          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => setStrategy(option.id)}
              className={`flex items-center justify-between rounded-lg p-5 text-left ${
                selected
                  ? "border-2 border-[#2563eb] bg-[#eff6ff]"
                  : "border border-[#ebebeb] bg-white"
              }`}
            >
              <span>
                <span className="block text-lg leading-7 font-semibold text-black/90">
                  {option.title}
                </span>
                <span className="mt-1 block text-sm leading-[22px] text-black/45">{option.detail}</span>
              </span>
              <img
                src={selected ? "/onboarding/radio-selected.svg" : option.empty}
                alt=""
                width={20}
                height={20}
                className="max-w-none shrink-0"
              />
            </button>
          );
        })}
      </div>
      <div className="mt-6 rounded-lg border border-[#ebebeb] bg-[#fefbfb] p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="inline-flex rounded bg-[#e52e2e] px-2 py-0.5 text-[10px] leading-4 font-semibold text-white">
              Morningstar
            </span>
            <p className="mt-1.5 text-lg leading-7 font-semibold text-black">
              Put your strategy on autopilot
            </p>
            <p className="mt-1.5 font-inter text-xs text-[#6b7280]">
              Access all premium features with priority support and advanced analytics.
            </p>
          </div>
          <input
            type="checkbox"
            checked={autopilot}
            onChange={(event) => setAutopilot(event.target.checked)}
            aria-label="Put your strategy on autopilot"
            className="mt-1 size-5 rounded border-[#d1d5db]"
          />
        </div>
        <p className="mt-5 text-[36px] leading-[44px] font-semibold tracking-[-0.54px] text-black">
          $20.00 <span className="text-sm leading-[22px] font-semibold text-black/50">quarterly</span>
        </p>
        <ul className="mt-2.5 flex flex-col gap-1.5 font-inter text-xs text-black/45">
          <li>Stays within your chosen risk level</li>
          <li>Professional fund selection & rebalancing</li>
          <li>Pause or cancel anytime — you&apos;re never locked in</li>
        </ul>
      </div>
    </OnboardingStep>
  );
}
