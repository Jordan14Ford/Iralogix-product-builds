import type { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Badge,
  badgeLeadings,
  badgeSizes,
  badgeStates,
  badgeStyles,
  badgeTrailings,
  badgeUseCases,
} from "@/components/ui/badge";

const meta = {
  title: "Design system/Badge",
  component: Badge,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

function Row({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap items-center gap-3">{children}</div>;
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="font-sans text-sm font-semibold text-[#101828]">{title}</h2>
      {children}
    </section>
  );
}

function BadgeBoard() {
  return (
    <div className="flex flex-col gap-10 bg-[var(--status-docs-background)] p-8">
      <Section title="Use case">
        <Row>
          {badgeUseCases.map((useCase) => (
            <Badge key={useCase} useCase={useCase} />
          ))}
        </Row>
      </Section>
      <Section title="Style">
        <Row>
          {badgeStyles.map((badgeStyle) => (
            <Badge key={badgeStyle} badgeStyle={badgeStyle} />
          ))}
        </Row>
      </Section>
      <Section title="Size">
        <Row>
          {badgeSizes.map((size) => (
            <Badge key={size} size={size} />
          ))}
        </Row>
      </Section>
      <Section title="State">
        <Row>
          {badgeStates.map((state) => (
            <Badge key={state} state={state} />
          ))}
        </Row>
      </Section>
      <Section title="Leading">
        <Row>
          {badgeLeadings.map((leading) => (
            <Badge key={leading} leading={leading} />
          ))}
        </Row>
      </Section>
      <Section title="Trailing">
        <Row>
          {badgeTrailings.map((trailing) => (
            <Badge key={trailing} trailing={trailing} />
          ))}
        </Row>
      </Section>
    </div>
  );
}

export const UseCases: Story = {
  name: "Use cases",
  render: () => (
    <div className="bg-[var(--status-docs-background)] p-8">
      <Row>
        {badgeUseCases.map((useCase) => (
          <Badge key={useCase} useCase={useCase} />
        ))}
      </Row>
    </div>
  ),
};

export const Styles: Story = {
  name: "Styles",
  render: () => (
    <div className="flex flex-col gap-4 bg-[var(--status-docs-background)] p-8">
      {badgeUseCases.map((useCase) => (
        <Row key={useCase}>
          {badgeStyles.map((badgeStyle) => (
            <Badge key={badgeStyle} useCase={useCase} badgeStyle={badgeStyle} />
          ))}
        </Row>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  name: "Sizes",
  render: () => (
    <div className="bg-[var(--status-docs-background)] p-8">
      <Row>
        {badgeSizes.map((size) => (
          <Badge key={size} size={size} />
        ))}
      </Row>
    </div>
  ),
};

export const States: Story = {
  name: "States",
  render: () => (
    <div className="bg-[var(--status-docs-background)] p-8">
      <Row>
        {badgeStates.map((state) => (
          <Badge key={state} state={state} />
        ))}
      </Row>
    </div>
  ),
};

export const LeadingAndTrailing: Story = {
  name: "Leading and trailing",
  render: () => (
    <div className="flex flex-col gap-4 bg-[var(--status-docs-background)] p-8">
      <Row>
        {badgeLeadings.map((leading) => (
          <Badge key={leading} leading={leading} />
        ))}
      </Row>
      <Row>
        {badgeTrailings.map((trailing) => (
          <Badge key={trailing} trailing={trailing} />
        ))}
      </Row>
    </div>
  ),
};

export const BadgeComponent: Story = {
  name: "Badge",
  render: () => <BadgeBoard />,
};
