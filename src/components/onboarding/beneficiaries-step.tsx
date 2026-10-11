"use client";

/* Plus, chevron, and person marks are fixed design assets. */
/* eslint-disable @next/next/no-img-element */

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { OnboardingStep, StepIntro } from "@/components/onboarding/step-screen";

type Person = { id: number; name: string; relationship: string; percentage: string };

const inputClassName =
  "h-12 rounded-[6px] border-[#d1d5db] bg-white px-4 text-sm font-normal text-[#111827] shadow-none placeholder:text-[#9ca3af] focus-visible:border-[#2563eb] focus-visible:ring-0 md:text-sm";

let nextId = 3;

function emptyPerson(): Person {
  return { id: nextId++, name: "", relationship: "", percentage: "" };
}

export function BeneficiariesStep() {
  const [primary, setPrimary] = useState<Person[]>([
    { id: 1, name: "", relationship: "", percentage: "" },
  ]);
  const [contingent, setContingent] = useState<Person[]>([
    { id: 2, name: "", relationship: "", percentage: "" },
  ]);

  const total = useMemo(() => {
    const values = [...primary, ...contingent].map((person) => Number(person.percentage) || 0);
    return values.reduce((sum, value) => sum + value, 0);
  }, [primary, contingent]);

  const named = [...primary, ...contingent].some((person) => person.name.trim());
  const fill = Math.max(0, Math.min(total, 100));

  return (
    <OnboardingStep
      currentStep={6}
      progress="w-full"
      backHref="/strategy"
      nextHref="/signature"
      secondaryLabel="Save & Close"
      aside={
        <div className="flex flex-col gap-4">
          <h2 className="text-[22px] leading-[30px] font-semibold text-[#12123d]">
            Current Beneficary Allocation
          </h2>
          <div>
            <p className="text-xs leading-4 font-medium text-black">
              Total beneficary amount allocated
            </p>
            <p className="mt-1 text-[32px] leading-10 font-semibold tracking-[-0.32px] text-black">
              {total}
              <span className="ml-1 text-xl leading-7">%</span>
            </p>
          </div>
          <div className="h-1.5 w-full rounded-full bg-[#e5e7eb]">
            <div className="h-1.5 rounded-full bg-[#2563eb]" style={{ width: `${fill}%` }} />
          </div>
          {named ? null : (
            <div className="flex flex-col items-center gap-5 rounded-[14px] bg-[#fcfcfd] p-4 text-center">
              <span className="flex size-[38px] items-center justify-center rounded-[22px] bg-[#eef2fe]">
                <img src="/onboarding/user-03.svg" alt="" width={21} height={21} className="max-w-none" />
              </span>
              <div>
                <p className="text-[17px] leading-[22px] font-semibold text-[#1b1b3a]">
                  No beneficiaries added yet
                </p>
                <p className="mt-2 font-inter text-xs text-[#6b6f80]">
                  Without one, your account defaults to your estate by law in most states,
                  which usually means a longer, more expensive process for the people
                  you&apos;d want to receive it.
                </p>
              </div>
            </div>
          )}
        </div>
      }
    >
      <StepIntro
        eyebrow="Step 6 of 6"
        title="Add beneficaries"
        helper="One line of helper text directly below, muted color, explains why or what to expect - never decorative."
      />
      <PersonGroup
        title="Primary Beneficaries"
        action="Add Primary Beneficary"
        people={primary}
        nameLabel="Name"
        namePlaceholder="John Smith"
        onAdd={() => setPrimary((people) => [...people, emptyPerson()])}
        onChange={setPrimary}
      />
      <div className="my-6 h-px bg-[#d1d5db]" />
      <PersonGroup
        title="Contigent Beneficaries"
        action="Add Contingent Beneficary"
        people={contingent}
        nameLabel="Label"
        namePlaceholder="Enter text..."
        onAdd={() => setContingent((people) => [...people, emptyPerson()])}
        onChange={setContingent}
      />
    </OnboardingStep>
  );
}

function PersonGroup({
  title,
  action,
  people,
  nameLabel,
  namePlaceholder,
  onAdd,
  onChange,
}: {
  title: string;
  action: string;
  people: Person[];
  nameLabel: string;
  namePlaceholder: string;
  onAdd: () => void;
  onChange: (people: Person[]) => void;
}) {
  function update(id: number, patch: Partial<Person>) {
    onChange(people.map((person) => (person.id === id ? { ...person, ...patch } : person)));
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="flex items-center justify-between gap-3">
          <p className="font-inter text-sm font-medium text-black">{title}</p>
          <button
            type="button"
            onClick={onAdd}
            className="inline-flex h-10 items-center gap-2 rounded-md px-4 text-sm font-semibold text-[#2563eb]"
          >
            <img src="/onboarding/plus-circle.svg" alt="" width={16} height={16} className="max-w-none" />
            {action}
          </button>
        </div>
        <p className="mt-1 font-inter text-sm text-black">subheader text</p>
      </div>
      {people.map((person) => (
        <div key={person.id} className="flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <Label className="font-inter text-[13px] font-semibold text-[#374151]">{nameLabel}</Label>
            <Input
              value={person.name}
              placeholder={namePlaceholder}
              onChange={(event) => update(person.id, { name: event.target.value })}
              className={inputClassName}
            />
          </div>
          <div className="flex items-end gap-6">
            <div className="relative w-[58%]">
              <select
                value={person.relationship}
                onChange={(event) => update(person.id, { relationship: event.target.value })}
                aria-label="Relationship type"
                className={`h-12 w-full appearance-none rounded-[6px] border border-[#d1d5db] bg-white px-3.5 pr-10 text-sm ${
                  person.relationship ? "text-[#111827]" : "text-[#9ca3af]"
                }`}
              >
                <option value="">Relationship type</option>
                <option value="Spouse">Spouse</option>
                <option value="Daughter">Daughter</option>
              </select>
              <img
                src="/onboarding/chevron-down.svg"
                alt=""
                width={16}
                height={16}
                className="pointer-events-none absolute top-1/2 right-3.5 max-w-none -translate-y-1/2"
              />
            </div>
            <div className="flex flex-1 flex-col gap-1.5">
              <Label className="font-inter text-[13px] font-semibold text-[#374151]">Percentage</Label>
              <Input
                inputMode="numeric"
                value={person.percentage}
                placeholder="50%"
                onChange={(event) =>
                  update(person.id, { percentage: event.target.value.replace(/[^\d.]/g, "") })
                }
                className={inputClassName}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
