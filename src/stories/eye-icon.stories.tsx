import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { EyeIcon } from "@/components/onboarding/eye-icon";

const meta = {
  title: "Onboarding/Eye icon",
  component: EyeIcon,
} satisfies Meta<typeof EyeIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Slashed: Story = {
  args: { slashed: true },
};

export const Open: Story = {
  args: { slashed: false },
};
