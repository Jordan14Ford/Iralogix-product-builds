"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { InputField } from "@/components/onboarding/input-field";
import { loginSteps } from "@/components/onboarding/onboarding-header";
import { OnboardingScreen } from "@/components/onboarding/step-screen";

export function CreateLogin() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mismatch, setMismatch] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const same = password === confirmPassword;
    setMismatch(!same);
    if (!same || !event.currentTarget.checkValidity()) return;
    router.push("/contribution");
  }

  return (
    <OnboardingScreen
      steps={loginSteps}
      progress="w-1/3"
      backHref="/"
      eyebrow="Step 2 of 6"
      title="Create your login"
      helper="One line of helper text directly below, muted color, explains why or what to expect never decorative."
      primaryLabel="Continue"
      secondaryLabel="Save & Close"
      onSubmit={onSubmit}
      aside={
        <div>
          <h2 className="text-xl leading-7 font-semibold text-black/90">
            Your login keeps you in control
          </h2>
          <p className="mt-4 text-base leading-[26px] text-black">
            Check your balance, adjust your contribution, or update your bank anytime — no
            forms, no phone calls.
          </p>
        </div>
      }
    >
      <div className="flex flex-col gap-6">
        <InputField
          id="username"
          name="username"
          label="Username"
          autoComplete="username"
          placeholder="Enter text..."
          value={username}
          onValueChange={setUsername}
          required
        />
        <InputField
          id="password"
          name="password"
          label="Create your password"
          type="password"
          autoComplete="new-password"
          placeholder="Input with helper text"
          value={password}
          onValueChange={setPassword}
          required
        />
        <InputField
          id="confirm-password"
          name="confirmPassword"
          label="Re-enter password"
          type="password"
          autoComplete="new-password"
          placeholder="Input with helper text"
          value={confirmPassword}
          onValueChange={(next) => {
            setConfirmPassword(next);
            if (mismatch) setMismatch(next !== password);
          }}
          invalid={mismatch}
          errorHelper="Re-enter the same password."
          required
        />
      </div>
    </OnboardingScreen>
  );
}
