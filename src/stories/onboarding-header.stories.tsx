import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { identitySteps, OnboardingHeader } from "@/components/onboarding/onboarding-header";

const meta = {
  title: "Onboarding/Header",
  component: OnboardingHeader,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof OnboardingHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const IdentityStepper: Story = {
  args: {
    steps: identitySteps,
    progress: "w-1/6",
  },
};
