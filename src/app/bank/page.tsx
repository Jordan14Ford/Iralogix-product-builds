import type { Metadata } from "next";
import { BankStep } from "@/components/onboarding/bank-step";

export const metadata: Metadata = { title: "Connect your bank" };

export default function BankPage() {
  return <BankStep />;
}
