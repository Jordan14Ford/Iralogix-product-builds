"use client";

/* eslint-disable @next/next/no-img-element */

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginSteps, OnboardingHeader } from "@/components/onboarding/onboarding-header";
import {
  OnboardingActions,
  OnboardingData,
} from "@/components/onboarding/onboarding-panel";

const inputClassName =
  "h-[42px] rounded-[8px] border-[#d1d5db] bg-white px-3 text-sm leading-5 font-normal text-[#111827] shadow-none placeholder:text-[#9ca3af] focus-visible:border-[#2563eb] focus-visible:ring-0 md:text-sm";

export function CreateLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const confirm = form.elements.namedItem("confirmPassword");

    if (confirm instanceof HTMLInputElement) {
      confirm.setCustomValidity(
        password === confirmPassword ? "" : "Re-enter the same password.",
      );
    }

    if (!form.checkValidity()) {
      form.reportValidity();
    }
  }

  return (
    <div className="relative min-h-screen bg-[#f8fafc] max-lg:pb-[184px]">
      <OnboardingHeader steps={loginSteps} progress="w-1/3" />

      <div className="flex min-h-screen flex-col lg:flex-row">
        <section className="w-full border-[#ebebed] bg-white lg:min-h-screen lg:w-1/2 lg:rounded-r-2xl lg:border-r lg:border-b">
          <form onSubmit={onSubmit}>
            <OnboardingData insetClassName="lg:px-[62px]">
              <Link
                href="/"
                className="absolute -top-9 left-0 inline-flex items-center gap-1.5 text-sm leading-5 font-medium text-[#6b7280]"
              >
                <img
                  src="/onboarding/back.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="max-w-none"
                />
                Back
              </Link>

            <div className="pb-10">
              <div className="flex flex-col gap-2">
                <p className="text-xs leading-4 font-semibold tracking-[1.2px] text-[#6b7280] uppercase">
                  Step 2 of 6
                </p>
                <h1 className="pt-1 text-[28px] leading-8 font-semibold tracking-[-0.7px] text-[#111827]">
                  Create your login
                </h1>
                <p className="text-sm leading-5 text-[#6b7280]">
                  One line of helper text directly below, muted color, explains
                  why or what to expect never decorative.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="username"
                  className="text-sm leading-5 font-semibold text-[#111827]"
                >
                  Username
                </Label>
                <Input
                  id="username"
                  name="username"
                  autoComplete="username"
                  placeholder="Enter text..."
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  required
                  className={inputClassName}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="password"
                  className="text-sm leading-5 font-semibold text-[#111827]"
                >
                  Create your password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Input with helper text"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  className={inputClassName}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="confirm-password"
                  className="text-sm leading-5 font-semibold text-[#111827]"
                >
                  Re-enter password
                </Label>
                <Input
                  id="confirm-password"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Input with helper text"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  required
                  className={inputClassName}
                />
              </div>
            </div>

            </OnboardingData>
            <OnboardingActions
              panelClassName="lg:w-1/2 lg:rounded-br-2xl lg:border-r lg:border-[#ebebed]"
              insetClassName="lg:px-[62px]"
            >
              <Button
                type="submit"
                className="h-12 w-full rounded-[7px] bg-[#2563eb] px-6 text-base font-semibold text-white hover:bg-[#1d4ed8]"
              >
                Continue
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="h-12 w-full rounded-[7px] bg-transparent px-6 text-base font-semibold text-[#0f172a] hover:bg-[#f8fafc]"
              >
                Save & Close
              </Button>
            </OnboardingActions>
          </form>
        </section>

        <aside className="flex flex-1 items-center justify-center px-6 py-10 lg:px-8">
          <div className="w-full max-w-[570px] rounded-2xl bg-white p-8">
            <h2 className="text-xl leading-7 font-semibold text-black/90">
              Your login keeps you in control
            </h2>
            <p className="mt-4 text-base leading-[26px] text-black">
              Check your balance, adjust your contribution, or update your bank
              anytime — no forms, no phone calls.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
