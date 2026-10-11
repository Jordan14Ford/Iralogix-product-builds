import type { Metadata } from "next";
import { StrategyStep } from "@/components/onboarding/strategy-step";

export const metadata: Metadata = { title: "Select your strategy" };

export default function StrategyPage() {
  return <StrategyStep />;
}
