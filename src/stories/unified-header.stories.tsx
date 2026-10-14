import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { UnifiedHeader, headerSteps, type HeaderSize } from "@/components/ui/unified-header";

const meta = {
  title: "Design system/Unified header",
  component: UnifiedHeader,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof UnifiedHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

function Steps({ size }: { size: HeaderSize }) {
  return (
    <div className="flex flex-col gap-6 bg-[#4b5563] p-6">
      {headerSteps.map((step) => (
        <UnifiedHeader key={step} step={step} size={size} />
      ))}
    </div>
  );
}

export const Desktop: Story = {
  name: "Desktop",
  render: () => <Steps size="desktop" />,
};

export const Mobile: Story = {
  name: "Mobile",
  render: () => <Steps size="mobile" />,
};

export const DesktopStep1: Story = {
  name: "Desktop / Step 1",
  render: () => (
    <div className="bg-white p-6">
      <UnifiedHeader step={1} size="desktop" />
    </div>
  ),
};

export const DesktopStep2: Story = {
  name: "Desktop / Step 2",
  render: () => (
    <div className="bg-white p-6">
      <UnifiedHeader step={2} size="desktop" />
    </div>
  ),
};

export const DesktopStep3: Story = {
  name: "Desktop / Step 3",
  render: () => (
    <div className="bg-white p-6">
      <UnifiedHeader step={3} size="desktop" />
    </div>
  ),
};

export const DesktopStep4: Story = {
  name: "Desktop / Step 4",
  render: () => (
    <div className="bg-white p-6">
      <UnifiedHeader step={4} size="desktop" />
    </div>
  ),
};

export const DesktopStep5: Story = {
  name: "Desktop / Step 5",
  render: () => (
    <div className="bg-white p-6">
      <UnifiedHeader step={5} size="desktop" />
    </div>
  ),
};

export const DesktopStep6: Story = {
  name: "Desktop / Step 6",
  render: () => (
    <div className="bg-white p-6">
      <UnifiedHeader step={6} size="desktop" />
    </div>
  ),
};

export const MobileStep1: Story = {
  name: "Mobile / Step 1",
  render: () => (
    <div className="bg-white p-6">
      <UnifiedHeader step={1} size="mobile" />
    </div>
  ),
};

export const MobileStep2: Story = {
  name: "Mobile / Step 2",
  render: () => (
    <div className="bg-white p-6">
      <UnifiedHeader step={2} size="mobile" />
    </div>
  ),
};

export const MobileStep3: Story = {
  name: "Mobile / Step 3",
  render: () => (
    <div className="bg-white p-6">
      <UnifiedHeader step={3} size="mobile" />
    </div>
  ),
};

export const MobileStep4: Story = {
  name: "Mobile / Step 4",
  render: () => (
    <div className="bg-white p-6">
      <UnifiedHeader step={4} size="mobile" />
    </div>
  ),
};

export const MobileStep5: Story = {
  name: "Mobile / Step 5",
  render: () => (
    <div className="bg-white p-6">
      <UnifiedHeader step={5} size="mobile" />
    </div>
  ),
};

export const MobileStep6: Story = {
  name: "Mobile / Step 6",
  render: () => (
    <div className="bg-white p-6">
      <UnifiedHeader step={6} size="mobile" />
    </div>
  ),
};
