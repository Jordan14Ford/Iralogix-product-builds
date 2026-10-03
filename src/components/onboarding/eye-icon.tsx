/* Design SVGs must keep their intrinsic width and height. */
/* eslint-disable @next/next/no-img-element */

type EyeIconProps = {
  slashed?: boolean;
};

export function EyeIcon({ slashed = true }: EyeIconProps) {
  return (
    <span className="relative block size-5 shrink-0" aria-hidden="true">
      <img
        src="/onboarding/eye-outline.svg"
        alt=""
        width={19.5}
        height={13.5}
        className="absolute left-[0.25px] top-[3.25px] max-w-none"
      />
      <img
        src="/onboarding/iris.svg"
        alt=""
        width={8}
        height={8}
        className="absolute top-[6px] left-[6px] max-w-none"
      />
      <img
        src="/onboarding/pupil.svg"
        alt=""
        width={4}
        height={4}
        className="absolute top-2 left-2 max-w-none"
      />
      {slashed ? (
        <img
          src="/onboarding/slash.svg"
          alt=""
          width={16}
          height={18}
          className="absolute top-px left-[2px] max-w-none"
        />
      ) : null}
    </span>
  );
}
