import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { InputField } from "@/components/onboarding/input-field";
import { flowSteps } from "@/components/onboarding/onboarding-header";
import { OnboardingScreen } from "@/components/onboarding/step-screen";

const meta = {
  title: "Design system/Screen",
  component: OnboardingScreen,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof OnboardingScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FormSection: Story = {
  name: "Form section",
  args: {
    steps: flowSteps(2),
    progress: "w-1/3",
    backHref: "/",
    eyebrow: "Step 2 of 6",
    title: "Create your login",
    helper: "One line of helper text directly below, muted color, explains why or what to expect never decorative.",
    primaryLabel: "Continue",
    secondaryLabel: "Save & Close",
    onSubmit: (event) => event.preventDefault(),
    aside: (
      <div>
        <h2 className="text-xl leading-7 font-semibold text-[#101828]">Panel content</h2>
        <p className="mt-3 text-[15px] leading-[22px] text-[#667085]">
          The right column keeps this card: white, 16px radius, 1px border, 28px padding.
        </p>
      </div>
    ),
    children: (
      <div className="flex flex-col gap-6">
        <InputField label="Username" placeholder="Enter text..." helper="Helper text" />
        <InputField label="Email" fieldType="email" placeholder="name@email.com" helper="Helper text" />
      </div>
    ),
  },
};
