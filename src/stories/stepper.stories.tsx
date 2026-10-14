import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Stepper, stepperSteps } from "@/components/ui/stepper";

const meta = {
  title: "Design system/Stepper",
  component: Stepper,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Stepper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Steps: Story = {
  name: "Steps",
  render: () => (
    <div className="flex flex-col gap-6 bg-[#4b5563] p-6">
      {stepperSteps.map((step) => (
        <Stepper key={step} step={step} />
      ))}
    </div>
  ),
};

export const Step1: Story = {
  name: "Step 1",
  render: () => (
    <div className="bg-white p-6">
      <Stepper step={1} />
    </div>
  ),
};

export const Step2: Story = {
  name: "Step 2",
  render: () => (
    <div className="bg-white p-6">
      <Stepper step={2} />
    </div>
  ),
};

export const Step3: Story = {
  name: "Step 3",
  render: () => (
    <div className="bg-white p-6">
      <Stepper step={3} />
    </div>
  ),
};

export const Step4: Story = {
  name: "Step 4",
  render: () => (
    <div className="bg-white p-6">
      <Stepper step={4} />
    </div>
  ),
};

export const Step5: Story = {
  name: "Step 5",
  render: () => (
    <div className="bg-white p-6">
      <Stepper step={5} />
    </div>
  ),
};

export const Step6: Story = {
  name: "Step 6",
  render: () => (
    <div className="bg-white p-6">
      <Stepper step={6} />
    </div>
  ),
};
