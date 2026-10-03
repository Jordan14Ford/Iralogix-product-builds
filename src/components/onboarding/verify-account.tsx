"use client";

/* Logo crop and workspace art are fixed design assets, not optimized content images. */
/* eslint-disable @next/next/no-img-element */

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeIcon } from "@/components/onboarding/eye-icon";
import {
  identitySteps,
  OnboardingHeader,
} from "@/components/onboarding/onboarding-header";
import {
  OnboardingActions,
  OnboardingData,
} from "@/components/onboarding/onboarding-panel";

const inputClassName =
  "h-[42px] rounded-[8px] border-[#d1d5db] bg-white px-3 text-sm leading-5 font-normal text-[#111827] shadow-none placeholder:text-[#9ca3af] focus-visible:border-[#2563eb] focus-visible:ring-0 md:text-sm";

function digitsOnly(value: string, max: number) {
  return value.replace(/\D/g, "").slice(0, max);
}

function formatSsn(digits: string) {
  const value = digits.slice(0, 9);
  const area = value.slice(0, 3);
  const group = value.slice(3, 5);
  const serial = value.slice(5, 9);
  if (value.length <= 3) return area;
  if (value.length <= 5) return `${area}-${group}`;
  return `${area}-${group}-${serial}`;
}

function maskSsn(digits: string) {
  const formatted = formatSsn(digits);
  const hiddenCount = Math.max(0, digits.length - 4);
  let seen = 0;
  return formatted.replace(/\d/g, (digit) => {
    const character = seen < hiddenCount ? "•" : digit;
    seen += 1;
    return character;
  });
}

function formatDob(digits: string) {
  const value = digits.slice(0, 8);
  const month = value.slice(0, 2);
  const day = value.slice(2, 4);
  const year = value.slice(4, 8);
  if (value.length <= 2) return month;
  if (value.length <= 4) return `${month}/${day}`;
  return `${month}/${day}/${year}`;
}

export function VerifyAccount() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ssn, setSsn] = useState("");
  const [dob, setDob] = useState("");
  const [ssnRevealed, setSsnRevealed] = useState(false);
  const router = useRouter();

  function handleSsnChange(next: string) {
    if (ssnRevealed) {
      setSsn(digitsOnly(next, 9));
      return;
    }

    const current = maskSsn(ssn);
    if (next.length < current.length) {
      const removed = current.length - next.length;
      setSsn(ssn.slice(0, Math.max(0, ssn.length - removed)));
      return;
    }

    const added = digitsOnly(next.slice(current.length), 9);
    if (added) {
      setSsn((ssn + added).slice(0, 9));
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const ssnInput = form.elements.namedItem("ssn");
    const dobInput = form.elements.namedItem("dob");

    if (ssnInput instanceof HTMLInputElement) {
      ssnInput.setCustomValidity(
        ssn.length === 9 ? "" : "Enter a 9-digit SSN in the format XXX-XX-XXXX.",
      );
    }

    if (dobInput instanceof HTMLInputElement) {
      dobInput.setCustomValidity(
        dob.length === 8 ? "" : "Enter a date of birth as MM/DD/YYYY.",
      );
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    router.push("/create-login");
  }

  return (
    <div className="relative min-h-screen bg-white max-lg:pb-[184px]">
      <OnboardingHeader steps={identitySteps} progress="w-1/6" />

      <div className="flex min-h-screen flex-col lg:flex-row">
        <section className="w-full lg:min-h-screen lg:w-[48.889%]">
          <form onSubmit={onSubmit}>
            <OnboardingData insetClassName="lg:px-12">
            <div className="pb-10">
              <div className="flex flex-col gap-2">
                <p className="text-xs leading-4 font-semibold tracking-[1.2px] text-[#6b7280] uppercase">
                  Step 1 of 4 - Archetype A
                </p>
                <h1 className="pt-1 text-[28px] leading-8 font-semibold tracking-[-0.7px] text-[#111827]">
                  State the task plainly
                </h1>
                <p className="text-sm leading-5 text-[#6b7280]">
                  One line of helper text directly below, muted color, explains
                  why or what to expect - never decorative.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 pb-10">
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="first-name"
                  className="text-sm leading-5 font-semibold text-[#111827]"
                >
                  First Name
                </Label>
                <Input
                  id="first-name"
                  name="firstName"
                  autoComplete="given-name"
                  placeholder="Enter first name"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  required
                  className={inputClassName}
                />
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="middle-name"
                    className="text-sm leading-5 font-normal text-[#111827]"
                  >
                    Middle Name
                  </Label>
                  <Input
                    id="middle-name"
                    name="middleName"
                    autoComplete="additional-name"
                    placeholder="Enter middle name"
                    value={middleName}
                    onChange={(event) => setMiddleName(event.target.value)}
                    className={inputClassName}
                  />
                </div>
                <p className="text-xs leading-[18px] text-[#6b7280]">Optional</p>
              </div>

              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="last-name"
                  className="text-sm leading-5 font-normal text-[#111827]"
                >
                  Last Name
                </Label>
                <Input
                  id="last-name"
                  name="lastName"
                  autoComplete="family-name"
                  placeholder="Enter last name"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  required
                  className={inputClassName}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label
                  htmlFor="ssn"
                  className="text-[13px] leading-normal font-normal text-[#111827]"
                >
                  SSN
                </Label>
                <div className="relative">
                  <Input
                    id="ssn"
                    name="ssn"
                    inputMode="numeric"
                    autoComplete="off"
                    spellCheck={false}
                    placeholder="Enter SSN (XXX-XX-XXXX)"
                    aria-describedby="ssn-hint"
                    value={ssnRevealed ? formatSsn(ssn) : ssn ? maskSsn(ssn) : ""}
                    onChange={(event) => handleSsnChange(event.target.value)}
                    required
                    className="h-12 rounded-[6px] border-[#d1d5db] bg-white px-3 pr-10 text-sm leading-normal font-normal text-[#111827] shadow-none placeholder:text-[#9ca3af] focus-visible:border-[#2563eb] focus-visible:ring-0 md:text-sm"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute top-1/2 right-3 size-5 -translate-y-1/2 rounded-none bg-transparent p-0 shadow-none hover:bg-transparent active:translate-y-[-50%]"
                    aria-pressed={ssnRevealed}
                    aria-label={ssnRevealed ? "Hide SSN" : "Show SSN"}
                    onClick={() => setSsnRevealed((revealed) => !revealed)}
                  >
                    <EyeIcon slashed={!ssnRevealed} />
                  </Button>
                </div>
                <p id="ssn-hint" className="text-xs leading-normal text-[#6b7280]">
                  Format: XXX-XX-XXXX
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="dob"
                    className="text-sm leading-5 font-normal text-[#111827]"
                  >
                    Date of Birth
                  </Label>
                  <Input
                    id="dob"
                    name="dob"
                    inputMode="numeric"
                    autoComplete="bday"
                    placeholder="00/00/000"
                    aria-describedby="dob-hint"
                    value={formatDob(dob)}
                    onChange={(event) => setDob(digitsOnly(event.target.value, 8))}
                    required
                    className={inputClassName}
                  />
                </div>
                <p id="dob-hint" className="text-xs leading-[18px] text-[#6b7280]">
                  MM/DD/YYYY
                </p>
              </div>
            </div>

            </OnboardingData>
            <OnboardingActions panelClassName="lg:w-[48.889%]" insetClassName="lg:px-12">
              <Button
                type="submit"
                className="h-12 w-full rounded-[7px] bg-[#2563eb] px-6 text-base font-semibold text-white hover:bg-[#1d4ed8]"
              >
                Get Started
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="h-12 w-full rounded-[7px] bg-transparent px-6 text-base font-semibold text-[#0f172a] hover:bg-[#f8fafc]"
              >
                Have Questions?
              </Button>
            </OnboardingActions>
          </form>
        </section>

        <aside className="relative h-72 overflow-hidden lg:h-auto lg:min-h-screen lg:w-[51.111%]">
          <img
            src="/onboarding/workspace-overview.png"
            alt=""
            className="absolute inset-0 size-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 opacity-15 mix-blend-overlay">
            <img
              src="/onboarding/grain.svg"
              alt=""
              width={737}
              height={1024}
              className="absolute top-0 left-0 max-w-none"
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
