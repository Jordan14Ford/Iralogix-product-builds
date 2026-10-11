import Link from "next/link";
import { asset } from "@/lib/public-asset";

/* The back mark is a fixed 18px design asset. */
/* eslint-disable @next/next/no-img-element */

export function OnboardingBack({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="absolute -top-9 -left-2 inline-flex min-h-9 items-center gap-1.5 rounded-md p-2 text-sm leading-5 font-medium text-[#6b7280] hover:bg-black/[0.06] focus-visible:bg-black/[0.06] focus-visible:outline-none"
    >
      <img src={asset("/onboarding/back.svg")} alt="" width={18} height={18} className="max-w-none" />
      Back
    </Link>
  );
}

export function OnboardingData({
  children,
  insetClassName,
}: {
  children: React.ReactNode;
  insetClassName: string;
}) {
  return (
    <div className={`relative z-0 px-6 pt-[110px] pb-[184px] ${insetClassName}`}>
      <div className="relative mx-auto w-full max-w-[580px]">{children}</div>
    </div>
  );
}

export function OnboardingActions({
  children,
  panelClassName,
  insetClassName,
}: {
  children: React.ReactNode;
  panelClassName: string;
  insetClassName: string;
}) {
  return (
    <div className={`pointer-events-none fixed inset-x-0 bottom-0 z-[1] ${panelClassName}`}>
      <div
        aria-hidden="true"
        className="h-9 bg-[linear-gradient(to_bottom,transparent,#fff)]"
      />
      <div className={`pointer-events-auto bg-white px-6 py-6 ${insetClassName}`}>
        <div className="mx-auto flex w-full max-w-[580px] flex-col gap-4">{children}</div>
      </div>
    </div>
  );
}
