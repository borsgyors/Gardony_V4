import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-3 rounded-lg text-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring focus-visible:ring-offset-3 disabled:pointer-events-none disabled:opacity-50 touch-target",
  {
    variants: {
      variant: {
        default:
          "bg-[#0F7464] text-white hover:bg-[#0D6658] active:bg-[#0B5B4F] shadow-md hover:shadow-lg",
        secondary:
          "bg-[#A9C23F] text-black hover:bg-[#98B33A] active:bg-[#8AA332] shadow-md hover:shadow-lg",
        outline:
          "border-3 border-[#0F7464] text-[#0F7464] bg-white hover:bg-[#E8F4F8] active:bg-[#D4EBF3]",
        ghost:
          "text-[#0F7464] hover:bg-[#E8F4F8] hover:text-[#0D6658]",
        destructive:
          "bg-[#DC2626] text-white hover:bg-[#B91C1C] active:bg-[#991B1B] shadow-md hover:shadow-lg",
        success:
          "bg-[#2D8659] text-white hover:bg-[#236B47] active:bg-[#1D5838] shadow-md hover:shadow-lg",
        heroPrimary:
          "bg-[#0F7464] text-white hover:bg-[#0D6658] active:bg-[#0B5B4F] rounded-full shadow-2xl hover:shadow-2xl font-sans font-bold text-[24px] leading-[28px] tracking-normal",
        heroAccent:
          "bg-[#A9C23F] text-black hover:bg-[#98B33A] active:bg-[#8AA332] hover:text-black active:text-black rounded-full font-sans font-bold text-[24px] leading-[28px] tracking-normal",
      },
      size: {
        default: "h-14 px-8 py-4 text-lg min-w-[140px]",
        sm: "h-12 px-6 py-3 text-base min-w-[120px]",
        lg: "h-16 px-10 py-5 text-xl min-w-[160px]",
        icon: "h-14 w-14 p-0",
        cta: "h-14 px-9 py-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"