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
