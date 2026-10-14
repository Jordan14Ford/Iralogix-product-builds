import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { OnboardingActions, OnboardingBack, OnboardingData } from "@/components/onboarding/onboarding-panel";
import { Button } from "@/components/ui/button";

const meta = {
  title: "Onboarding/Panel",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const BackLink: Story = {
  name: "Back",
  render: () => (
    <div className="relative h-40 bg-white">
      <OnboardingBack href="/" />
    </div>
  ),
};

export const FormColumn: Story = {
  name: "Data and actions",
  render: () => (
    <div className="relative min-h-screen bg-white">
      <OnboardingData insetClassName="lg:px-12">
        <OnboardingBack href="/" />
        <h1 className="text-[28px] leading-8 font-semibold tracking-[-0.7px]">Create your login</h1>
      </OnboardingData>
      <OnboardingActions panelClassName="lg:w-1/2" insetClassName="lg:px-12">
        <Button className="h-12 w-full rounded-[7px] bg-[#2563eb] px-6 text-base font-semibold text-white hover:bg-[#1d4ed8]">
          Continue
        </Button>
      </OnboardingActions>
    </div>
  ),
};
