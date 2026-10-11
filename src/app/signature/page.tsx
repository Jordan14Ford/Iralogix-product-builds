import type { Metadata } from "next";
import { SignatureStep } from "@/components/onboarding/signature-step";

export const metadata: Metadata = { title: "We’ll need your signature" };

export default function SignaturePage() {
  return <SignatureStep />;
}
