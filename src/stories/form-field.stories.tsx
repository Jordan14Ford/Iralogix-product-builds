import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { EyeIcon } from "@/components/onboarding/eye-icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const inputClassName =
  "h-[42px] rounded-[8px] border-[#d1d5db] bg-white px-3 text-sm leading-5 font-normal text-[#111827] shadow-none placeholder:text-[#9ca3af] focus-visible:border-[#2563eb] focus-visible:ring-0 md:text-sm";

const meta = {
  title: "Onboarding/Form field",
  component: Input,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FirstName: Story = {
  render: () => (
    <div className="flex w-[420px] flex-col gap-2 bg-white p-6">
      <Label htmlFor="first-name" className="text-sm leading-5 font-semibold text-[#111827]">
        First Name
      </Label>
      <Input
        id="first-name"
        name="firstName"
        autoComplete="given-name"
        placeholder="Enter first name"
        className={inputClassName}
      />
    </div>
  ),
};

export const SocialSecurityNumber: Story = {
  render: () => (
    <div className="flex w-[420px] flex-col gap-1.5 bg-white p-6">
      <Label htmlFor="ssn" className="text-[13px] leading-normal font-normal text-[#111827]">
        SSN
      </Label>
      <div className="relative">
        <Input
          id="ssn"
          name="ssn"
          inputMode="numeric"
          autoComplete="off"
          placeholder="Enter SSN (XXX-XX-XXXX)"
          className="h-12 rounded-[6px] border-[#d1d5db] bg-white px-3 pr-10 text-sm leading-normal font-normal text-[#111827] shadow-none placeholder:text-[#9ca3af] focus-visible:border-[#2563eb] focus-visible:ring-0 md:text-sm"
        />
        <Button
          type="button"
          className="absolute top-1/2 right-3 size-5 -translate-y-1/2 rounded-none border-0 bg-transparent p-0 shadow-none hover:bg-transparent"
          aria-label="Show SSN"
        >
          <EyeIcon slashed />
        </Button>
      </div>
      <p className="text-xs leading-normal text-[#6b7280]">Format: XXX-XX-XXXX</p>
    </div>
  ),
};
