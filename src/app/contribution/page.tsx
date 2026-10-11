import type { Metadata } from "next";
import { ContributionStep } from "@/components/onboarding/contribution-step";

export const metadata: Metadata = { title: "Create your contribution amount" };

export default function ContributionPage() {
  return <ContributionStep />;
}
