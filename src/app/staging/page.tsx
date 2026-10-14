import type { Metadata } from "next";
import { StagingCanvas } from "@/components/staging/staging-canvas";

export const metadata: Metadata = {
  title: "Onboarding staging canvas",
  description: "Every onboarding screen, live, on one pannable canvas.",
};

export default function StagingPage() {
  return <StagingCanvas />;
}
