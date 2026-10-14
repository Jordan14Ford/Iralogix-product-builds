import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { flowSteps, identitySteps, loginSteps, OnboardingHeader } from "@/components/onboarding/onboarding-header";

const meta = {
  title: "Onboarding/Header",
  component: OnboardingHeader,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof OnboardingHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const IdentityStepper: Story = {
  name: "Identity",
  args: {
    steps: identitySteps,
    progress: "w-1/6",
  },
};

export const LoginStepper: Story = {
  name: "Login",
  args: {
    steps: loginSteps,
    progress: "w-1/3",
  },
};

export const FlowStepper: Story = {
  name: "Flow",
  args: {
    steps: flowSteps(4),
    progress: "w-2/3",
  },
};
