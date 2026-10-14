import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { InputField } from "@/components/onboarding/input-field";

const meta = {
  title: "Onboarding/Form field",
  component: InputField,
  parameters: { layout: "centered" },
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FirstName: Story = {
  args: {
    id: "first-name",
    name: "firstName",
    label: "First Name",
    fieldType: "name",
    autoComplete: "given-name",
    placeholder: "Enter first name",
    size: "desktop",
  },
};

export const SocialSecurityNumber: Story = {
  args: {
    id: "ssn",
    name: "ssn",
    label: "SSN",
    fieldType: "ssn",
    autoComplete: "off",
    placeholder: "Enter SSN (XXX-XX-XXXX)",
    helper: "Format: XXX-XX-XXXX",
    masked: true,
    revealable: true,
    size: "desktop",
  },
};
