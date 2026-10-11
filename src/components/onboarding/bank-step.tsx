"use client";

/* Bank marks are fixed design assets. */
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { OnboardingStep, StepIntro } from "@/components/onboarding/step-screen";
import { asset } from "@/lib/public-asset";

const banks = [
  { name: "Chase", src: asset("/onboarding/bank-chase.png"), width: 100, height: 34 },
  { name: "Citi", src: asset("/onboarding/bank-citi.png"), width: 113, height: 38 },
  { name: "Deutsche Bank", src: asset("/onboarding/bank-deutsche.png"), width: 150, height: 50 },
  { name: "TD Bank", src: asset("/onboarding/bank-td.png"), width: 100, height: 34 },
  { name: "Bank of America", src: asset("/onboarding/bank-bofa.png"), width: 100, height: 34 },
  { name: "Raiffeisen Bank", src: asset("/onboarding/bank-raiffeisen.png"), width: 100, height: 34 },
  { name: "Societe Generale", src: asset("/onboarding/bank-socgen.png"), width: 100, height: 34 },
  { name: "UBS", src: asset("/onboarding/bank-ubs.png"), width: 100, height: 34 },
  { name: "UBS", src: asset("/onboarding/bank-ubs.png"), width: 100, height: 34 },
];

function NextAside() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 pt-4">
        <h2 className="text-xl leading-7 font-semibold text-black/90">What happens next</h2>
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-base leading-[26px] font-semibold text-black/90">Connect</p>
            <p className="text-sm leading-[22px] text-black/50">Find your bank and sign in securely</p>
          </div>
          <div>
            <p className="text-base leading-[26px] font-semibold text-black/90">Verify</p>
            <p className="text-sm leading-[22px] text-black/50">
              We confirm the account in 1–2 business days
            </p>
          </div>
          <div>
            <p className="text-base leading-[26px] font-semibold text-black/90">Fund</p>
            <p className="text-sm leading-[22px] text-black/50">
              Contributions are pulled automatically each payday
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 pt-4">
        <h2 className="text-xl leading-7 font-semibold text-black/90">
          Your bank details stay protected
        </h2>
        <p className="text-sm leading-[22px] text-black/50">
          We use bank-grade 256-bit encryption and never store your login credentials.
          Money can only move between your bank and your IRA.
        </p>
      </div>
    </div>
  );
}

export function BankStep() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <OnboardingStep
      currentStep={4}
      progress="w-2/3"
      backHref="/contribution"
      nextHref="/banks-connected"
      secondaryLabel="Save & finish later"
      aside={<NextAside />}
    >
      <StepIntro
        eyebrow="Step 4 of 6"
        title="State the task plainly"
        helper="One line of helper text directly below, muted color, explains why or what to expect - never decorative."
      />
      <p className="text-base leading-[26px] font-medium text-black/50">Popular Banks</p>
      <div className="mt-3 grid grid-cols-3 gap-3">
        {banks.map((bank, index) => (
          <button
            key={`${bank.name}-${index}`}
            type="button"
            aria-pressed={selected === index}
            onClick={() => setSelected(index)}
            className={`flex h-[84px] items-center justify-center overflow-hidden rounded-xl border bg-white p-3 ${
              selected === index ? "border-[#2563eb]" : "border-[#e5e7eb]"
            }`}
          >
            <img
              src={bank.src}
              alt={bank.name}
              width={bank.width}
              height={bank.height}
              className="max-h-[50px] max-w-full object-contain"
            />
          </button>
        ))}
      </div>
      <button
        type="button"
        className="mt-3 h-8 w-full text-[13px] font-semibold text-[#0f172a]"
      >
        Enter Your Bank Mannually
      </button>
    </OnboardingStep>
  );
}

export function BanksConnectedStep() {
  return (
    <OnboardingStep
      currentStep={5}
      progress="w-5/6"
      backHref="/bank"
      nextHref="/strategy"
      secondaryLabel="Save and Close"
      aside={<NextAside />}
    >
      <StepIntro
        eyebrow="Step 4 of 6"
        title="State the task plainly"
        helper="One line of helper text directly below, muted color, explains why or what to expect - never decorative."
      />
      <div className="flex flex-col gap-3">
        <BankRow
          name="Bank of America"
          detail="Checking account"
          ending="4829"
          logo={asset("/onboarding/bank-bofa.png")}
          logoWidth={100}
          logoHeight={34}
        />
        <BankRow
          name="Chase"
          detail="Trading account"
          ending="9302"
          logo={asset("/onboarding/bank-chase.png")}
          logoWidth={100}
          logoHeight={34}
        />
      </div>
    </OnboardingStep>
  );
}

function BankRow({
  name,
  detail,
  ending,
  logo,
  logoWidth,
  logoHeight,
}: {
  name: string;
  detail: string;
  ending: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
}) {
  return (
    <div className="flex h-[91px] items-center gap-4 rounded-lg border border-[#ebebeb] bg-white p-4">
      <img
        src={logo}
        alt=""
        width={logoWidth}
        height={logoHeight}
        className="h-auto w-12 object-contain"
      />
      <div className="min-w-0 flex-1">
        <p className="text-base font-semibold text-[#1a1a1a]">{name}</p>
        <p className="font-inter text-sm font-medium text-[#737373]">{detail}</p>
        <p className="font-inter text-xs text-[#9ca3af]">
          Ending in <span className="font-semibold">{ending}</span>
        </p>
      </div>
      <span className="inline-flex h-6 items-center gap-1.5 rounded-lg bg-[#ecfdf5] px-2 text-xs leading-[18px] text-[#047857]">
        <span className="size-1.5 rounded-full bg-[#10b981]" />
        Connected
      </span>
    </div>
  );
}
