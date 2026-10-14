import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Label } from "@/components/ui/label";

const meta = {
  title: "Design system/Label",
  component: Label,
  args: {
    children: "First Name",
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
