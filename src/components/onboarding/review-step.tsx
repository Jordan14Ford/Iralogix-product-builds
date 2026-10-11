"use client";

/* Bank marks are fixed design assets. */
/* eslint-disable @next/next/no-img-element */

import type { ReactNode } from "react";
import Link from "next/link";
import { OnboardingStep, StepIntro } from "@/components/onboarding/step-screen";
import { asset } from "@/lib/public-asset";

const steps = [
  "Your employer is notified automatically.",
  "Your first contribution comes out of your next paycheck.",
  "You can change any of this later from your account.",
];

export function ReviewStep() {
  return (
    <OnboardingStep
      currentStep={6}
      progress="w-full"
      backHref="/signature"
      secondaryLabel="Save & Close"
      aside={
        <div className="flex flex-col gap-4">
          <h2 className="text-[22px] leading-[30px] font-semibold text-[#12123d]">Next Steps</h2>
          <ol>
            {steps.map((step, index) => (
              <li key={step} className="flex items-start">
                <span className="flex w-7 flex-col items-center">
                  <span className="flex size-7 items-center justify-center rounded-full border-[1.5px] border-[#4b55ef] bg-[#eef2fe] text-[13px] font-bold text-[#4b55ef]">
                    {index + 1}
                  </span>
                  {index < steps.length - 1 ? (
                    <span className="min-h-[22px] w-0.5 flex-1 bg-[#e5e7ec]" />
                  ) : null}
                </span>
                <span className="flex-1 pb-[22px] pl-4 text-sm leading-[21px] font-semibold text-[#1b1b3a]">
                  {step}
                </span>
              </li>
            ))}
          </ol>
          <p className="text-xs leading-4 font-semibold tracking-[0.5px] text-[#8a8da0] uppercase">
            What you&apos;re confirming
          </p>
          <p className="rounded-xl bg-[#f7f8fa] p-[18px] text-sm leading-[22px] text-[#3a3d4a]">
            You&apos;re contributing <strong className="text-[#1b1b3a]">7%</strong> (
            <strong className="text-[#1b1b3a]">$605.02</strong>
            /paycheck), fully matched by your employer, invested in{" "}
            <strong className="text-[#1b1b3a]">Target Date 2055</strong>.
          </p>
          <p className="text-xs leading-[18px] text-[#8a8da0]">
            Nothing here is final until you click Continue — and you can still change any of
            it later from your account.
          </p>
        </div>
      }
    >
      <StepIntro
        title="Review Summary"
        helper="Flat list of prior steps, each with a title, an edit affordance, and static data."
      />
      <div className="flex flex-col gap-8">
        <SummaryBlock title="Identity" href="/create-login">
          <Field label="Username" value="Tomford23" />
          <Field label="Password" value="••••••••" />
          <Field label="Email" value="tomford23@gmail.com" />
        </SummaryBlock>
        <SummaryBlock title="Contribution" href="/contribution">
          <Field label="Contribution Percentage" value="7%" />
          <Field label="Per Check Contribution" value="$605.02" />
          <Field label="Time Horizon" value="10 Years" />
          <Field label="Projected Balance" value="$102,810" />
          <Field label="Employer Match" value="3% of salary, $150.00 per paycheck" />
        </SummaryBlock>
        <SummaryBlock title="Investment Strategy" href="/strategy">
          <Field label="Strategy" value="Target Date 2055" />
          <Field label="Estimated Balance" value="$104,600" />
          <Field label="Morningstar Premium" value="Not selected" />
        </SummaryBlock>
        <SummaryBlock title="Connected Bank" href="/banks-connected">
          <div className="mt-3 flex flex-col gap-3">
            <ConnectedBank
              name="Bank of America"
              detail="Checking account"
              ending="4829"
              logo={asset("/onboarding/bank-bofa.png")}
            />
            <ConnectedBank
              name="Chase"
              detail="Trading account"
              ending="9302"
              logo={asset("/onboarding/bank-chase.png")}
            />
          </div>
        </SummaryBlock>
        <SummaryBlock title="Beneficiaries" href="/beneficiaries">
          <Field label="Total Beneficiary Allocation" value="100%" />
          <Field label="Primary Beneficiaries" value="1 person" />
          <Field label="Contingent Beneficiaries" value="1 person" />
          <div className="mt-4 flex flex-col gap-4">
            <PersonCard
              role="Primary Beneficiary"
              allocation="100% allocation"
              name="Sarah Ford"
              relation="Spouse • DOB 08/12/1988"
            />
            <PersonCard
              role="Contingent Beneficiary"
              allocation="Backup allocation"
              name="Emily Ford"
              relation="Daughter • DOB 02/14/2012"
            />
          </div>
        </SummaryBlock>
      </div>
    </OnboardingStep>
  );
}

function SummaryBlock({
  title,
  href,
  children,
}: {
  title: string;
  href: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-[#f3f4f6] pt-4 first:border-t-0 first:pt-0">
      <div className="flex items-center justify-between">
        <h2 className="text-sm leading-5 font-semibold text-[#111827]">{title}</h2>
        <Link href={href} className="text-sm leading-5 font-medium text-[#2563eb]">
          Edit
        </Link>
      </div>
      {children}
    </section>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="mt-3">
      <p className="text-xs leading-4 text-[#6b7280]">{label}</p>
      <p className="text-lg leading-7 font-semibold text-[#111827]">{value}</p>
    </div>
  );
}

function ConnectedBank({
  name,
  detail,
  ending,
  logo,
}: {
  name: string;
  detail: string;
  ending: string;
  logo: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-[#ebebeb] p-4">
      <img src={logo} alt="" width={100} height={34} className="h-auto w-12 object-contain" />
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

function PersonCard({
  role,
  allocation,
  name,
  relation,
}: {
  role: string;
  allocation: string;
  name: string;
  relation: string;
}) {
  return (
    <div className="rounded-lg border border-[#ebebeb] p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm leading-5 font-semibold text-black/85">{role}</p>
        <p className="text-xs leading-4 text-[#6b7280]">{allocation}</p>
      </div>
      <p className="mt-3 text-base font-semibold text-black/90">{name}</p>
      <p className="text-sm text-[#6b7280]">{relation}</p>
      <p className="text-sm text-[#6b7280]">123 Main St, Apt 4B, New York, NY 10001</p>
    </div>
  );
}
