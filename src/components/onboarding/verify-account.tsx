"use client";

/* Logo crop and workspace art are fixed design assets, not optimized content images. */
/* eslint-disable @next/next/no-img-element */

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { InputField } from "@/components/onboarding/input-field";
import { identitySteps } from "@/components/onboarding/onboarding-header";
import { OnboardingScreen } from "@/components/onboarding/step-screen";
import { asset } from "@/lib/public-asset";

export function VerifyAccount() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ssn, setSsn] = useState("");
  const [dob, setDob] = useState("");
  const [ssnMasked, setSsnMasked] = useState(true);
  const router = useRouter();

  useEffect(() => {
    document.documentElement.classList.add("identity-scroll-hidden");
    return () => {
      document.documentElement.classList.remove("identity-scroll-hidden");
    };
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) return;
    router.push("/create-login");
  }

  return (
    <OnboardingScreen
      layout="identity"
      steps={identitySteps}
      progress="w-1/6"
      eyebrow="Step 1 of 4 - Archetype A"
      title="State the task plainly"
      helper="One line of helper text directly below, muted color, explains why or what to expect - never decorative."
      primaryLabel="Get Started"
      secondaryLabel="Have Questions?"
      onSubmit={onSubmit}
      aside={
        <>
          <img
            src={asset("/onboarding/workspace-overview.png")}
            alt=""
            className="absolute top-1/2 left-1/2 h-full w-full max-w-none -translate-x-1/2 -translate-y-1/2 object-cover object-center"
          />
          <div className="pointer-events-none absolute inset-0 opacity-15 mix-blend-overlay">
            <img
              src={asset("/onboarding/grain.svg")}
              alt=""
              width={737}
              height={1024}
              className="absolute top-0 left-0 max-w-none"
            />
          </div>
        </>
      }
    >
      <div className="flex flex-col gap-6">
        <InputField
          id="first-name"
          name="firstName"
          label="First Name"
          fieldType="name"
          autoComplete="given-name"
          placeholder="Enter first name"
          value={firstName}
          onValueChange={setFirstName}
          required
        />
        <InputField
          id="middle-name"
          name="middleName"
          label="Middle Name"
          fieldType="name"
          autoComplete="additional-name"
          placeholder="Enter middle name"
          helper="Optional"
          value={middleName}
          onValueChange={setMiddleName}
        />
        <InputField
          id="last-name"
          name="lastName"
          label="Last Name"
          fieldType="name"
          autoComplete="family-name"
          placeholder="Enter last name"
          value={lastName}
          onValueChange={setLastName}
          required
        />
        <InputField
          id="ssn"
          name="ssn"
          label="SSN"
          fieldType="ssn"
          autoComplete="off"
          placeholder="Enter SSN (XXX-XX-XXXX)"
          helper="Format: XXX-XX-XXXX"
          value={ssn}
          onValueChange={setSsn}
          masked={ssnMasked}
          onMaskedChange={setSsnMasked}
          revealable
          required
        />
        <InputField
          id="dob"
          name="dob"
          label="Date of Birth"
          fieldType="date"
          autoComplete="bday"
          placeholder="MM/DD/YYYY"
          helper="MM/DD/YYYY"
          value={dob}
          onValueChange={setDob}
          required
        />
      </div>
    </OnboardingScreen>
  );
}
