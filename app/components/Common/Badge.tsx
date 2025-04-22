import React from "react";

interface BadgeProps {
  text: string;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ text, className = "" }) => {
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${className}`}>
      {text}
    </span>
  );
};
