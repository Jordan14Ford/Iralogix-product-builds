import type { Metadata } from "next";
import { ReviewStep } from "@/components/onboarding/review-step";

export const metadata: Metadata = { title: "Review Summary" };

export default function ReviewPage() {
  return <ReviewStep />;
}
