import type { Meta, StoryObj } from "@storybook/nextjs-vite";

type Token = {
  name: string;
  variable: string;
  value: string;
  usage: string;
  kind?: "color" | "measure";
};

const brand: Token[] = [
  { name: "brand.primary", variable: "--brand-primary", value: "#2563EB", usage: "Primary actions, links, active states, key data" },
  { name: "brand.primary-hover", variable: "--brand-primary-hover", value: "#1D4ED8", usage: "Hover state" },
  { name: "brand.primary-active", variable: "--brand-primary-active", value: "#1E40AF", usage: "Pressed state" },
  { name: "brand.primary-subtle", variable: "--brand-primary-subtle", value: "#EFF6FF", usage: "Selected fills, accent badges" },
  { name: "brand.on-primary", variable: "--brand-on-primary", value: "#FFFFFF", usage: "Text and icons on primary fills" },
];

const semantic: Token[] = [
  { name: "semantic.success", variable: "--semantic-success", value: "#16A34A", usage: "Positive confirmation, valid states" },
  { name: "semantic.success-subtle", variable: "--semantic-success-subtle", value: "#E8F7EE", usage: "Success alert background" },
  { name: "semantic.danger", variable: "--semantic-danger", value: "#DC2626", usage: "Errors, destructive actions" },
  { name: "semantic.danger-subtle", variable: "--semantic-danger-subtle", value: "#FDECEC", usage: "Danger alert background" },
  { name: "semantic.warning", variable: "--semantic-warning", value: "#D97706", usage: "Caution states, risk indicators" },
  { name: "semantic.warning-subtle", variable: "--semantic-warning-subtle", value: "#FDF3E3", usage: "Warning alert background" },
  { name: "semantic.info", variable: "--semantic-info", value: "#0284C7", usage: "Informational states, help text" },
  { name: "semantic.info-subtle", variable: "--semantic-info-subtle", value: "#E6F4FB", usage: "Info alert background" },
];

const financial: Token[] = [
  { name: "data.positive", variable: "--data-positive", value: "#16A34A", usage: "Gains, income — always pair with ▲ or +" },
  { name: "data.negative", variable: "--data-negative", value: "#DC2626", usage: "Losses, outflows — always pair with ▼ or −" },
  { name: "data.neutral", variable: "--data-neutral", value: "#737373", usage: "Unchanged, baseline values" },
];

const chart: Token[] = [
  { name: "data.chart.1", variable: "--data-chart-1", value: "#6C2BD9", usage: "Series 1 — the only branded series" },
  { name: "data.chart.2", variable: "--data-chart-2", value: "#0284C7", usage: "Series 2 — platform-locked" },
  { name: "data.chart.3", variable: "--data-chart-3", value: "#0D9488", usage: "Series 3 — platform-locked" },
  { name: "data.chart.4", variable: "--data-chart-4", value: "#D97706", usage: "Series 4 — platform-locked" },
  { name: "data.chart.5", variable: "--data-chart-5", value: "#DB2777", usage: "Series 5 — platform-locked" },
  { name: "data.chart.6", variable: "--data-chart-6", value: "#6366F1", usage: "Series 6 — platform-locked" },
];

const backgrounds: Token[] = [
  { name: "theme.bg-app", variable: "--theme-bg-app", value: "#FCFCFC", usage: "App canvas — dark mode: #0A0A0A" },
  { name: "theme.bg-surface", variable: "--theme-bg-surface", value: "#FFFFFF", usage: "Cards, tables, topbars — dark: #141414" },
  { name: "state.hover-overlay", variable: "--state-hover-overlay", value: "rgb(0 0 0 / 0.04)", usage: "Transparent overlay, not a solid fill" },
  { name: "state.selected-bg", variable: "--state-selected-bg", value: "#F3EFFF", usage: "Flat brand.primary-subtle, no edge stroke" },
  { name: "state.disabled-bg", variable: "--state-disabled-bg", value: "#F5F5F5", usage: "Disabled element background (neutral.100)" },
  { name: "skeleton.base", variable: "--skeleton-base", value: "#F5F5F5", usage: "Skeleton loading shimmer base (neutral.100)" },
];

const borders: Token[] = [
  { name: "theme.border", variable: "--theme-border", value: "#EBEBEB", usage: "All borders and dividers — dark: #262626" },
  { name: "stroke.thin", variable: "--stroke-thin", value: "1px", usage: "Standard border width", kind: "measure" },
];

const strokes: Token[] = [
  { name: "state.focus-ring", variable: "--state-focus-ring", value: "rgb(108 43 217 / 0.35)", usage: "primary@35% — 3px ring on every focusable element" },
  { name: "stroke.thick", variable: "--stroke-thick", value: "2px", usage: "Icons, chart lines, underlines", kind: "measure" },
];

const shadow: Token[] = [
  { name: "Shadow/Light 2", variable: "--shadow-light-2", value: "0 2px 4px #0000000F", usage: "Drop shadow, offset (0, 2), radius 4, spread 0", kind: "measure" },
];

function Swatch({ token }: { token: Token }) {
  if (token.kind === "measure") {
    return (
      <div
        className="size-9 shrink-0 rounded-lg border border-theme-border bg-theme-bg-surface"
        style={token.name === "Shadow/Light 2" ? { boxShadow: `var(${token.variable})` } : undefined}
      >
        {token.name.startsWith("stroke") ? (
          <div className="flex h-full items-center px-1">
            <div className="w-full bg-data-neutral" style={{ height: `var(${token.variable})` }} />
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className="size-9 shrink-0 rounded-lg border border-theme-border" style={{ background: `var(${token.variable})` }} />
  );
}

function TokenList({ tokens }: { tokens: Token[] }) {
  return (
    <ul className="flex flex-col">
      {tokens.map((token) => (
        <li key={token.name} className="flex h-14 items-center gap-5 px-4">
          <Swatch token={token} />
          <p className="w-[220px] font-sans text-sm font-medium text-black/85">{token.name}</p>
          <p className="w-[150px] font-sans text-[13px] text-black/40">{token.value}</p>
          <p className="font-sans text-[13px] text-black/35">{token.usage}</p>
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
  title: "Foundations/Color",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const BrandAndSemantic: Story = {
  name: "Brand and semantic",
  render: () => (
    <div className="flex flex-col gap-10 bg-theme-bg-surface p-8">
      <Group title="Brand palette" tokens={brand} />
      <Group title="Semantic — status colors" tokens={semantic} />
    </div>
  ),
};

export const DataAndVisualization: Story = {
  name: "Data and visualization",
  render: () => (
    <div className="flex flex-col gap-10 bg-theme-bg-surface p-8">
      <Group title="Financial indicators" tokens={financial} />
      <Group title="Chart series" tokens={chart} />
    </div>
  ),
};

export const SurfacesBordersStrokes: Story = {
  name: "Surfaces, borders, and strokes",
  render: () => (
    <div className="flex flex-col gap-10 bg-theme-bg-surface p-8">
      <Group title="Backgrounds" tokens={backgrounds} />
      <Group title="Borders" tokens={borders} />
      <Group title="Strokes" tokens={strokes} />
      <Group title="Shadow" tokens={shadow} />
    </div>
  ),
};
