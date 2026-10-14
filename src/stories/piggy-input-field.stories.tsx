import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CurrencyField, type CurrencyCode } from "@/components/onboarding/currency-field";
import { InputField, piggyFieldTypes, type PiggyFieldState } from "@/components/onboarding/input-field";

const states: PiggyFieldState[] = ["default", "hover", "filled", "focused", "error", "disabled"];

const meta = {
  title: "Design system/Input field",
  component: InputField,
  parameters: { layout: "fullscreen" },
  args: {
    label: "Label",
    placeholder: "Placeholder",
    helper: "Helper text",
  },
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const States: Story = {
  name: "States",
  render: () => (
    <div className="grid gap-8 bg-white p-8 md:grid-cols-3">
      {states.map((state) => (
        <InputField
          key={state}
          label="Label"
          placeholder="Placeholder"
          helper={state === "error" ? "Helper text" : "Helper text"}
          state={state}
          size="desktop"
          value={state === "filled" || state === "focused" || state === "disabled" ? "Sample Value" : ""}
        />
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  name: "Sizes",
  render: () => (
    <div className="flex max-w-md flex-col gap-8 bg-white p-8">
      <InputField label="Desktop" placeholder="Placeholder" helper="Helper text" size="desktop" />
      <InputField label="Tablet" placeholder="Placeholder" helper="Helper text" size="tablet" />
      <InputField label="Mobile" placeholder="Placeholder" helper="Helper text" size="mobile" />
    </div>
  ),
};

export const FieldTypes: Story = {
  name: "Field types",
  render: () => (
    <div className="grid max-w-5xl gap-8 bg-white p-8 md:grid-cols-2">
      {piggyFieldTypes.map((fieldType) => (
        <InputField
          key={fieldType}
          label={fieldType}
          fieldType={fieldType}
          placeholder="Placeholder"
          helper="Helper text"
          size="desktop"
          revealable={fieldType === "ssn" || fieldType === "account"}
          masked={fieldType === "account"}
        />
      ))}
    </div>
  ),
};

const currencyStates: Array<PiggyFieldState | "typing"> = ["default", "typing", "focused", "error", "disabled"];

function CurrencyBoard() {
  return (
    <div className="flex flex-col gap-10 bg-white p-8">
      <section className="flex flex-col gap-4">
        <h2 className="font-sans text-sm font-semibold text-[#101828]">USD denomination</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <CurrencyField label="Default" helper="Preset before typing" />
          <CurrencyField label="Typing" helper="First digit replaces $0.00" value="$1,250.00" />
          <CurrencyField label="Focus" helper="Helper text" state="focused" value="$0.00" />
          <CurrencyField label="Error" helper="Helper text" errorHelper="Enter an amount" state="error" value="$0.00" />
          <CurrencyField label="Disabled" helper="Helper text" state="disabled" value="$0.00" />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="font-sans text-sm font-semibold text-[#101828]">Currency choice</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <CurrencyField selectable label="Default" helper="USD is the preset" />
          <CurrencyField selectable label="Typing" helper="Symbol follows the currency" currency={"EUR" as CurrencyCode} value="€1,250.00" />
          <CurrencyField selectable label="Focus" helper="Helper text" state="focused" />
          <CurrencyField selectable label="Error" helper="Helper text" errorHelper="Enter an amount" state="error" />
          <CurrencyField selectable label="Disabled" helper="Helper text" state="disabled" />
        </div>
      </section>
    </div>
  );
}

export const UsdDefault: Story = {
  name: "USD denomination / Default",
  render: () => (
    <div className="bg-white p-8">
      <CurrencyField label="Amount" helper="US dollars use two decimal places" />
    </div>
  ),
};

export const UsdTyping: Story = {
  name: "USD denomination / Typing",
  render: () => (
    <div className="flex flex-col gap-6 bg-white p-8">
      <CurrencyField label="Amount" helper="Type a digit to replace $0.00" />
      <CurrencyField label="After typing" helper="Thousands separators and two decimals" value="$1,250.00" />
    </div>
  ),
};

export const UsdFocus: Story = {
  name: "USD denomination / Focus",
  render: () => (
    <div className="bg-white p-8">
      <CurrencyField label="Amount" helper="Helper text" state="focused" value="$0.00" />
    </div>
  ),
};

export const UsdError: Story = {
  name: "USD denomination / Error",
  render: () => (
    <div className="bg-white p-8">
      <CurrencyField label="Amount" errorHelper="Enter an amount" state="error" value="$0.00" />
    </div>
  ),
};

export const UsdDisabled: Story = {
  name: "USD denomination / Disabled",
  render: () => (
    <div className="bg-white p-8">
      <CurrencyField label="Amount" helper="Helper text" state="disabled" value="$0.00" />
    </div>
  ),
};

export const ChoiceDefault: Story = {
  name: "Currency choice / Default",
  render: () => (
    <div className="bg-white p-8">
      <CurrencyField selectable label="Amount" helper="Change the currency to update the flag and symbol" />
    </div>
  ),
};

export const ChoiceTyping: Story = {
  name: "Currency choice / Typing",
  render: () => (
    <div className="bg-white p-8">
      <CurrencyField selectable label="Amount" helper="Typing keeps the selected currency's format" />
    </div>
  ),
};

export const ChoiceFocus: Story = {
  name: "Currency choice / Focus",
  render: () => (
    <div className="bg-white p-8">
      <CurrencyField selectable label="Amount" helper="Helper text" state="focused" />
    </div>
  ),
};

export const ChoiceError: Story = {
  name: "Currency choice / Error",
  render: () => (
    <div className="bg-white p-8">
      <CurrencyField selectable label="Amount" errorHelper="Enter an amount" state="error" />
    </div>
  ),
};

export const ChoiceDisabled: Story = {
  name: "Currency choice / Disabled",
  render: () => (
    <div className="bg-white p-8">
      <CurrencyField selectable label="Amount" helper="Helper text" state="disabled" />
    </div>
  ),
};

export const CurrencyInputs: Story = {
  name: "Currency inputs",
  render: () => <CurrencyBoard />,
};

export const MaskedSsn: Story = {
  name: "Masked SSN",
  args: {
    label: "SSN",
    fieldType: "ssn",
    helper: "Format: XXX-XX-XXXX",
    placeholder: "Enter SSN (XXX-XX-XXXX)",
    defaultValue: "123-45-6789",
    masked: true,
    revealable: true,
    size: "desktop",
  },
};
