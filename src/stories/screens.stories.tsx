import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { BankStep, BanksConnectedStep } from "@/components/onboarding/bank-step";
import { BeneficiariesStep } from "@/components/onboarding/beneficiaries-step";
import { ContributionStep } from "@/components/onboarding/contribution-step";
import { CreateLogin } from "@/components/onboarding/create-login";
import { ReviewStep } from "@/components/onboarding/review-step";
import { SignatureStep } from "@/components/onboarding/signature-step";
import { StrategyStep } from "@/components/onboarding/strategy-step";

const meta = {
  title: "Onboarding/Screens",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const CreateYourLogin: Story = {
  name: "Create your login",
  render: () => <CreateLogin />,
};

export const Contribution: Story = {
  name: "Contribution",
  render: () => <ContributionStep />,
};

export const Bank: Story = {
  name: "Bank",
  render: () => <BankStep />,
};

export const BanksConnected: Story = {
  name: "Banks connected",
  render: () => <BanksConnectedStep />,
};

export const Strategy: Story = {
  name: "Strategy",
  render: () => <StrategyStep />,
};

export const Beneficiaries: Story = {
  name: "Beneficiaries",
  render: () => <BeneficiariesStep />,
};

export const Signature: Story = {
  name: "Signature",
  render: () => <SignatureStep />,
};

export const Review: Story = {
  name: "Review",
  render: () => <ReviewStep />,
};
