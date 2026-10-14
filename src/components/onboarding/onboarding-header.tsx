import { Stepper, type StepperStep } from "@/components/ui/stepper";

export type OnboardingStepState = "current" | "complete" | "upcoming";

export type OnboardingStep = {
  state: OnboardingStepState;
  label?: string;
};

export function OnboardingHeader({
  steps,
}: {
  steps: OnboardingStep[];
  progress?: string;
}) {
  const current = steps.findIndex((step) => step.state === "current");
  const step = Math.min(6, Math.max(1, (current < 0 ? 0 : current) + 1)) as StepperStep;
  return <Stepper step={step} />;
}

export const identitySteps: OnboardingStep[] = [
  { state: "current", label: "Identity" },
  { state: "upcoming" },
  { state: "upcoming" },
  { state: "upcoming" },
  { state: "upcoming" },
  { state: "upcoming" },
];

export const loginSteps: OnboardingStep[] = [
  { state: "complete" },
  { state: "current", label: "Identity" },
  { state: "upcoming" },
  { state: "upcoming" },
  { state: "upcoming" },
  { state: "upcoming" },
];

export function flowSteps(current: number): OnboardingStep[] {
  return Array.from({ length: 6 }, (_, index) => {
    const step = index + 1;
    if (step < current) return { state: "complete" };
    if (step === current) return { state: "current", label: "Identity" };
    return { state: "upcoming" };
  });
}
