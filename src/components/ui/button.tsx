"use client"

import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import { motion } from "motion/react"
import { settleSpring, usePrefersReducedMotion } from "@/lib/motion"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center border border-transparent font-sans font-semibold whitespace-nowrap transition-colors duration-hover ease-hover outline-none select-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-on-primary disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-primary text-brand-on-primary hover:bg-brand-primary-hover active:bg-brand-primary-active disabled:bg-state-disabled-bg disabled:text-[#94a3b8]",
        secondary:
          "border-[1.5px] border-brand-primary bg-brand-on-primary text-[#0f172a] hover:border-brand-primary-hover hover:bg-brand-primary-subtle active:border-brand-primary-active active:bg-brand-primary-subtle disabled:border-theme-border disabled:bg-state-disabled-bg disabled:text-[#94a3b8]",
        tertiary:
          "bg-transparent text-[#0f172a] hover:bg-brand-primary-subtle active:bg-brand-primary-subtle disabled:bg-transparent disabled:text-[#94a3b8]",
        "secondary-brand":
          "border-[1.5px] border-brand-primary bg-brand-on-primary text-brand-primary hover:border-brand-primary-hover hover:bg-brand-primary-subtle hover:text-brand-primary-hover active:border-brand-primary-active active:bg-brand-primary-subtle active:text-brand-primary-active disabled:border-theme-border disabled:bg-state-disabled-bg disabled:text-[#94a3b8]",
        "tertiary-brand":
          "bg-transparent text-brand-primary hover:bg-brand-primary-subtle hover:text-brand-primary-hover active:bg-brand-primary-subtle active:text-brand-primary-active disabled:bg-transparent disabled:text-[#94a3b8]",
      },
      size: {
        xs: "h-6 gap-1 rounded-[4px] px-2 text-[12px] [&_svg]:size-3",
        sm: "h-8 gap-1.5 rounded-[5px] px-3 text-[13px] [&_svg]:size-3.5",
        md: "h-10 gap-2 rounded-[6px] px-4 text-[14px] [&_svg]:size-4",
        lg: "h-12 gap-2 rounded-[7px] px-6 text-[16px] [&_svg]:size-5",
        xl: "h-14 gap-2.5 rounded-[8px] px-8 text-[18px] [&_svg]:size-5",
      },
      state: {
        default: "",
        hover: "",
        active: "",
        focused: "ring-2 ring-brand-primary ring-offset-2 ring-offset-brand-on-primary",
        disabled: "",
      },
    },
    compoundVariants: [
      { variant: "primary", state: "hover", class: "bg-brand-primary-hover text-brand-on-primary" },
      { variant: "primary", state: "active", class: "bg-brand-primary-active text-brand-on-primary" },
      { variant: "primary", state: "disabled", class: "bg-state-disabled-bg text-[#94a3b8]" },
      {
        variant: "secondary",
        state: "hover",
        class: "border-brand-primary-hover bg-brand-primary-subtle text-[#0f172a]",
      },
      {
        variant: "secondary",
        state: "active",
        class: "border-brand-primary-active bg-brand-primary-subtle text-[#0f172a]",
      },
      {
        variant: "secondary",
        state: "disabled",
        class: "border-theme-border bg-state-disabled-bg text-[#94a3b8]",
      },
      { variant: "tertiary", state: "hover", class: "bg-brand-primary-subtle text-[#0f172a]" },
      { variant: "tertiary", state: "active", class: "bg-brand-primary-subtle text-[#0f172a]" },
      { variant: "tertiary", state: "disabled", class: "bg-transparent text-[#94a3b8]" },
      {
        variant: "secondary-brand",
        state: "hover",
        class: "border-brand-primary-hover bg-brand-primary-subtle text-brand-primary-hover",
      },
      {
        variant: "secondary-brand",
        state: "active",
        class: "border-brand-primary-active bg-brand-primary-subtle text-brand-primary-active",
      },
      {
        variant: "secondary-brand",
        state: "disabled",
        class: "border-theme-border bg-state-disabled-bg text-[#94a3b8]",
      },
      { variant: "tertiary-brand", state: "hover", class: "bg-brand-primary-subtle text-brand-primary-hover" },
      { variant: "tertiary-brand", state: "active", class: "bg-brand-primary-subtle text-brand-primary-active" },
      { variant: "tertiary-brand", state: "disabled", class: "bg-transparent text-[#94a3b8]" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "xs",
      state: "default",
    },
  }
)

function Button({
  className,
  variant = "primary",
  size = "xs",
  state = "default",
  leadingIcon,
  trailingIcon,
  disabled,
  children,
  ...props
}: ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants> & {
    leadingIcon?: React.ReactNode
    trailingIcon?: React.ReactNode
  }) {
  const reduce = usePrefersReducedMotion()
  const blocked = disabled || state === "disabled"

  return (
    <ButtonPrimitive
      data-slot="button"
      disabled={blocked}
      className={cn(buttonVariants({ variant, size, state, className }))}
      render={
        <motion.button
          whileTap={reduce || blocked ? undefined : { y: 2 }}
          transition={reduce ? { duration: 0 } : settleSpring}
        />
      }
      {...props}
    >
      {leadingIcon}
      {children}
      {trailingIcon}
    </ButtonPrimitive>
  )
}

export { Button, buttonVariants }
