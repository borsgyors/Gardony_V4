"use client"

import Link from "next/link"
import React from "react"

type ReadMoreCTAProps = {
  href: string
  label: string
  ariaLabel?: string
  className?: string
}

// Mirrors the visual style of the news card "Tovább olvasom" CTA
export function ReadMoreCTA({ href, label, ariaLabel, className = "" }: ReadMoreCTAProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel ?? label}
      className={
        `flex items-center gap-2 text-[14px] leading-5 font-medium tracking-[0.1px] ` +
        `text-[#007A6C] no-underline focus-visible:outline-none focus-visible:ring-2 ` +
        `focus-visible:ring-offset-2 focus-visible:ring-[#007A6C] rounded-md ${className}`
      }
      style={{ fontFamily: "Poppins" }}
    >
      {label}
      <img src="/media/arrow-right.svg" alt="" className="w-[10.56px] h-[10.56px]" />
    </Link>
  )
}

export default ReadMoreCTA
