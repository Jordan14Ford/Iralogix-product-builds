import type { Metadata } from "next";
import { BanksConnectedStep } from "@/components/onboarding/bank-step";

export const metadata: Metadata = { title: "Connected banks" };

export default function BanksConnectedPage() {
  return <BanksConnectedStep />;
}
