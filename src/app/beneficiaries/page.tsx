import type { Metadata } from "next";
import { BeneficiariesStep } from "@/components/onboarding/beneficiaries-step";

export const metadata: Metadata = { title: "Add beneficiaries" };

export default function BeneficiariesPage() {
  return <BeneficiariesStep />;
}
