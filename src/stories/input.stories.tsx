import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "@/components/ui/input";

const meta = {
  title: "Design system/Input",
  component: Input,
  args: {
    placeholder: "Enter text...",
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: "Disabled" },
};
