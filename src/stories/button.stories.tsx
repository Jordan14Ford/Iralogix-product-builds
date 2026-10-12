import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "@/components/ui/button";

const variants = ["primary", "secondary", "tertiary", "secondary-brand", "tertiary-brand"] as const;
const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
const states = ["default", "hover", "active", "focused", "disabled"] as const;

const variantLabels: Record<(typeof variants)[number], string> = {
  primary: "Primary",
  secondary: "Secondary",
  tertiary: "Tertiary",
  "secondary-brand": "Secondary Brand",
  "tertiary-brand": "Tertiary Brand",
};

const meta = {
  title: "Onboarding/Button",
  component: Button,
  args: {
    children: "Label",
    variant: "primary",
    size: "md",
    state: "default",
  },
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

function VariantMatrix({ variant }: { variant: (typeof variants)[number] }) {
  return (
    <div className="flex flex-col gap-4 bg-white p-8">
      {sizes.map((size) => (
        <div key={size} className="flex flex-wrap items-center gap-4">
          {states.map((state) => (
            <Button key={state} variant={variant} size={size} state={state}>
              Label
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
}

export const Primary: Story = {
  name: "Primary",
  render: () => <VariantMatrix variant="primary" />,
};

export const Secondary: Story = {
  name: "Secondary",
  render: () => <VariantMatrix variant="secondary" />,
};

export const Tertiary: Story = {
  name: "Tertiary",
  render: () => <VariantMatrix variant="tertiary" />,
};

export const SecondaryBrand: Story = {
  name: "Secondary Brand",
  render: () => <VariantMatrix variant="secondary-brand" />,
};

export const TertiaryBrand: Story = {
  name: "Tertiary Brand",
  render: () => <VariantMatrix variant="tertiary-brand" />,
};

export const All: Story = {
  name: "All",
  render: () => (
    <div className="flex flex-col gap-10 bg-white p-8">
      {variants.map((variant) => (
        <section key={variant} className="flex flex-col gap-4">
          <h2 className="font-sans text-sm font-semibold text-[#0f172a]">{variantLabels[variant]}</h2>
          <VariantMatrix variant={variant} />
        </section>
      ))}
    </div>
  ),
};
