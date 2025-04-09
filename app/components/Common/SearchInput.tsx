import type { InputHTMLAttributes } from "react";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function SearchInput({ ...props }: SearchInputProps) {
  return (
    <input
      type="text"
      className="w-full p-2 rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#805CF7]"
      {...props}
    />
  );
}
