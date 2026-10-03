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
    <div
      className={`fixed inset-x-0 bottom-0 z-[1] border-t border-[#f3f4f6] bg-white px-6 py-6 shadow-[0_-1px_2px_rgba(15,23,42,0.06),0_-4px_10px_rgba(15,23,42,0.06)] ${panelClassName} ${insetClassName}`}
    >
      <div className="mx-auto flex w-full max-w-[580px] flex-col gap-4">{children}</div>
    </div>
  );
}
