import React from "react"
import clsx from "clsx"

interface ChipProps {
  label: string
  bgColor?: string
  textColor?: string
  size?: "sm" | "md" | "lg"
  rounded?: string
  className?: string
}

const Chip: React.FC<ChipProps> = ({
  label,
  bgColor = "bg-[#D9D9D9]",
  textColor = "text-black",
  size = "md",
  rounded = "rounded-full",
  className,
}) => {
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-1.5",
  }

  return (
    <span
      className={clsx(
        "inline-block font-semibold",
        bgColor,
        textColor,
        rounded,
        sizeClasses[size],
        className
      )}
    >
      {label}
    </span>
  )
}

export default Chip
