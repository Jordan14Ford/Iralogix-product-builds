import type { Meta, StoryObj } from "@storybook/nextjs-vite";

type Token = {
  name: string;
  variable: string;
  value: string;
};

const success: Token[] = [
  { name: "success/soft-fill", variable: "--status-success-soft-fill", value: "#ECFDF3" },
  { name: "success/soft-border", variable: "--status-success-soft-border", value: "#A6F4C5" },
  { name: "success/outline-border", variable: "--status-success-outline-border", value: "#75E0A7" },
  { name: "success/text", variable: "--status-success-text", value: "#027A48" },
  { name: "success/icon", variable: "--status-success-icon", value: "#039855" },
  { name: "success/solid-fill", variable: "--status-success-solid-fill", value: "#027A48" },
  { name: "success/on-solid", variable: "--status-success-on-solid", value: "#FFFFFF" },
  { name: "success/soft-hover", variable: "--status-success-soft-hover", value: "#DEFAEA" },
  { name: "success/soft-pressed", variable: "--status-success-soft-pressed", value: "#CFF6E1" },
  { name: "success/solid-hover", variable: "--status-success-solid-hover", value: "#026E41" },
  { name: "success/solid-pressed", variable: "--status-success-solid-pressed", value: "#02623A" },
];

const info: Token[] = [
  { name: "info/soft-fill", variable: "--status-info-soft-fill", value: "#F0F9FF" },
  { name: "info/soft-border", variable: "--status-info-soft-border", value: "#B9E6FE" },
  { name: "info/outline-border", variable: "--status-info-outline-border", value: "#84CAFF" },
  { name: "info/text", variable: "--status-info-text", value: "#026AA2" },
  { name: "info/icon", variable: "--status-info-icon", value: "#0284C7" },
  { name: "info/solid-fill", variable: "--status-info-solid-fill", value: "#026AA2" },
  { name: "info/on-solid", variable: "--status-info-on-solid", value: "#FFFFFF" },
  { name: "info/soft-hover", variable: "--status-info-soft-hover", value: "#E3F3FF" },
  { name: "info/soft-pressed", variable: "--status-info-soft-pressed", value: "#D6EEFF" },
  { name: "info/solid-hover", variable: "--status-info-solid-hover", value: "#025F92" },
  { name: "info/solid-pressed", variable: "--status-info-solid-pressed", value: "#025582" },
];

const warning: Token[] = [
  { name: "warning/soft-fill", variable: "--status-warning-soft-fill", value: "#FFFAEB" },
  { name: "warning/soft-border", variable: "--status-warning-soft-border", value: "#FEDF89" },
  { name: "warning/outline-border", variable: "--status-warning-outline-border", value: "#FEC84B" },
  { name: "warning/text", variable: "--status-warning-text", value: "#B54708" },
  { name: "warning/icon", variable: "--status-warning-icon", value: "#D97706" },
  { name: "warning/solid-fill", variable: "--status-warning-solid-fill", value: "#F79009" },
  { name: "warning/on-solid", variable: "--status-warning-on-solid", value: "#101828" },
  { name: "warning/soft-hover", variable: "--status-warning-soft-hover", value: "#FFF4D8" },
  { name: "warning/soft-pressed", variable: "--status-warning-soft-pressed", value: "#FFEEC5" },
  { name: "warning/solid-hover", variable: "--status-warning-solid-hover", value: "#F89B22" },
  { name: "warning/solid-pressed", variable: "--status-warning-solid-pressed", value: "#F9A63A" },
];

const danger: Token[] = [
  { name: "danger/soft-fill", variable: "--status-danger-soft-fill", value: "#FEF3F2" },
  { name: "danger/soft-border", variable: "--status-danger-soft-border", value: "#FECDCA" },
  { name: "danger/outline-border", variable: "--status-danger-outline-border", value: "#FDA29B" },
  { name: "danger/text", variable: "--status-danger-text", value: "#B42318" },
  { name: "danger/icon", variable: "--status-danger-icon", value: "#D92D20" },
  { name: "danger/solid-fill", variable: "--status-danger-solid-fill", value: "#D92D20" },
  { name: "danger/on-solid", variable: "--status-danger-on-solid", value: "#FFFFFF" },
  { name: "danger/soft-hover", variable: "--status-danger-soft-hover", value: "#FEE9E8" },
  { name: "danger/soft-pressed", variable: "--status-danger-soft-pressed", value: "#FEE0DD" },
  { name: "danger/solid-hover", variable: "--status-danger-solid-hover", value: "#C3291D" },
  { name: "danger/solid-pressed", variable: "--status-danger-solid-pressed", value: "#AE241A" },
];

const neutral: Token[] = [
  { name: "neutral/soft-fill", variable: "--status-neutral-soft-fill", value: "#F2F4F7" },
  { name: "neutral/soft-border", variable: "--status-neutral-soft-border", value: "#D0D5DD" },
  { name: "neutral/outline-border", variable: "--status-neutral-outline-border", value: "#D0D5DD" },
  { name: "neutral/text", variable: "--status-neutral-text", value: "#344054" },
  { name: "neutral/icon", variable: "--status-neutral-icon", value: "#667085" },
  { name: "neutral/solid-fill", variable: "--status-neutral-solid-fill", value: "#475467" },
  { name: "neutral/on-solid", variable: "--status-neutral-on-solid", value: "#FFFFFF" },
  { name: "neutral/soft-hover", variable: "--status-neutral-soft-hover", value: "#EEF0F4" },
  { name: "neutral/soft-pressed", variable: "--status-neutral-soft-pressed", value: "#EAEDF1" },
  { name: "neutral/solid-hover", variable: "--status-neutral-solid-hover", value: "#404C5D" },
  { name: "neutral/solid-pressed", variable: "--status-neutral-solid-pressed", value: "#394352" },
];

const brand: Token[] = [
  { name: "brand/soft-fill", variable: "--status-brand-soft-fill", value: "#EFF6FF" },
  { name: "brand/soft-border", variable: "--status-brand-soft-border", value: "#B2CCFF" },
  { name: "brand/outline-border", variable: "--status-brand-outline-border", value: "#84A9FF" },
  { name: "brand/text", variable: "--status-brand-text", value: "#1849A9" },
  { name: "brand/icon", variable: "--status-brand-icon", value: "#2563EB" },
  { name: "brand/solid-fill", variable: "--status-brand-solid-fill", value: "#2563EB" },
  { name: "brand/on-solid", variable: "--status-brand-on-solid", value: "#FFFFFF" },
  { name: "brand/soft-hover", variable: "--status-brand-soft-hover", value: "#E2EDFF" },
  { name: "brand/soft-pressed", variable: "--status-brand-soft-pressed", value: "#D5E4FF" },
  { name: "brand/solid-hover", variable: "--status-brand-solid-hover", value: "#1D4ED8" },
  { name: "brand/solid-pressed", variable: "--status-brand-solid-pressed", value: "#1E40AF" },
];

const shared: Token[] = [
  { name: "outline/fill", variable: "--status-outline-fill", value: "#FFFFFF" },
  { name: "disabled/text", variable: "--status-disabled-text", value: "#667085" },
  { name: "disabled/border", variable: "--status-disabled-border", value: "#98A2B3" },
  { name: "docs/background", variable: "--status-docs-background", value: "#F8FAFC" },
];

function TokenList({ tokens }: { tokens: Token[] }) {
  return (
    <ul className="flex flex-col">
      {tokens.map((token) => (
        <li key={token.name} className="flex h-14 items-center gap-5 px-4">
          <div
            className="size-9 shrink-0 rounded-lg border border-[#e5e7eb]"
            style={{ background: `var(${token.variable})` }}
          />
          <p className="w-[240px] font-sans text-sm font-medium text-black/85">{token.name}</p>
          <p className="w-[120px] font-sans text-[13px] text-black/40">{token.value}</p>
          <p className="font-sans text-[13px] text-black/35">{token.variable}</p>
        </li>
      ))}
    </ul>
  );
}

function Group({ title, tokens }: { title: string; tokens: Token[] }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="font-sans text-[13px] font-medium tracking-[0.8px] text-black/35 uppercase">{title}</h2>
      <TokenList tokens={tokens} />
    </section>
  );
}

const meta = {
  title: "Foundations/Badge status",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const StatusFoundations: Story = {
  name: "Status foundations",
  render: () => (
    <div className="flex flex-col gap-10 bg-[var(--status-docs-background)] p-8">
      <Group title="Success" tokens={success} />
      <Group title="Info" tokens={info} />
      <Group title="Warning" tokens={warning} />
      <Group title="Danger" tokens={danger} />
      <Group title="Neutral" tokens={neutral} />
      <Group title="Brand" tokens={brand} />
      <Group title="Shared" tokens={shared} />
    </div>
  ),
};
