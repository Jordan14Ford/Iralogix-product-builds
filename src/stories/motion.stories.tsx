import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { panelTransition, settleSpring } from "@/lib/motion";

type Token = {
  name: string;
  variable: string;
  value: string;
  usage: string;
};

const hover: Token[] = [
  {
    name: "motion.hover-duration",
    variable: "--motion-hover-duration",
    value: "150ms",
    usage: "Color and opacity hovers",
  },
  {
    name: "motion.hover-ease",
    variable: "--motion-hover-ease",
    value: "cubic-bezier(0, 0, 0.2, 1)",
    usage: "Ease-out for hovers",
  },
];

const panel: Token[] = [
  {
    name: "motion.panel-duration",
    variable: "--motion-panel-duration",
    value: "280ms",
    usage: "Panels and step changes",
  },
  {
    name: "motion.panel-ease",
    variable: "--motion-panel-ease",
    value: "cubic-bezier(0, 0, 0.2, 1)",
    usage: "Ease-out for panels and steps",
  },
];

const spring: Token[] = [
  {
    name: "motion.spring-duration",
    variable: "--motion-spring-duration",
    value: "450ms",
    usage: "Settle spring duration",
  },
  {
    name: "motion.spring-bounce",
    variable: "--motion-spring-bounce",
    value: "0.18",
    usage: "Settle spring bounce. Button press travels 2px, then rests.",
  },
];

function TokenList({ tokens }: { tokens: Token[] }) {
  return (
    <ul className="flex flex-col">
      {tokens.map((token) => (
        <li key={token.name} className="flex h-14 items-center gap-5 px-4">
          <div
            className="h-2 w-16 shrink-0 rounded-full bg-brand-primary"
            style={
              token.value.endsWith("ms")
                ? {
                    transformOrigin: "left center",
                    animation: `motion-demo var(${token.variable}) var(--motion-hover-ease) infinite alternate`,
                  }
                : undefined
            }
          />
          <p className="w-[240px] font-sans text-sm font-medium text-black/85">{token.name}</p>
          <p className="w-[220px] font-sans text-[13px] text-black/40">{token.value}</p>
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

function StepSample() {
  const [play, setPlay] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <motion.div
        key={play}
        className="w-[280px] rounded-xl border border-theme-border bg-theme-bg-surface p-6 shadow-[var(--shadow-light-2)]"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={panelTransition}
      >
        <p className="font-sans text-sm font-medium">Step change</p>
        <p className="mt-1 font-sans text-[13px] text-black/45">280ms ease-out, 12px of travel</p>
      </motion.div>
      <Button type="button" size="md" onClick={() => setPlay((value) => value + 1)}>
        Replay step
      </Button>
    </div>
  );
}

const meta = {
  title: "Foundations/Motion",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Tokens: Story = {
  name: "Tokens",
  render: () => (
    <div className="flex min-h-screen flex-col gap-10 bg-theme-bg-surface p-8">
      <style>{`@keyframes motion-demo { from { transform: scaleX(0.35); } to { transform: scaleX(1); } }`}</style>
      <Group title="Hover" tokens={hover} />
      <Group title="Panel and step" tokens={panel} />
      <Group title="Settle spring" tokens={spring} />
      <section className="flex flex-col gap-4">
        <h2 className="font-sans text-[13px] font-medium tracking-[0.8px] text-black/35 uppercase">Press</h2>
        <p className="font-sans text-[13px] text-black/45">
          Spring {settleSpring.duration}s, bounce {settleSpring.bounce}. Reduced motion skips the travel and still completes the press.
        </p>
        <div>
          <Button size="lg">Press me</Button>
        </div>
        <StepSample />
      </section>
    </div>
  ),
};
