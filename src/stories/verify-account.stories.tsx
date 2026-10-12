import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { VerifyAccount } from "@/components/onboarding/verify-account";

const meta = {
  title: "Onboarding/Verify account",
  component: VerifyAccount,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof VerifyAccount>;

export default meta;

type Story = StoryObj<typeof meta>;

export const IdentityStep: Story = {};
