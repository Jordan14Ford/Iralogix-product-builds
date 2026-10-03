import type { Metadata } from "next";
import { CreateLogin } from "@/components/onboarding/create-login";

export const metadata: Metadata = {
  title: "Create your login",
  description: "Step 2 of onboarding: create a login after identity is complete.",
};

export default function CreateLoginPage() {
  return <CreateLogin />;
}
