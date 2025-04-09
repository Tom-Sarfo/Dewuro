import type { InputHTMLAttributes } from "react";
import SearchIcon from "~/svg/SearchIcon";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function SearchInput({ ...props }: SearchInputProps) {
  return (
    <div className="w-full flex items-center gap-2 bg-gray-100 p-2 rounded-md">
      <SearchIcon className=" text-gray-500" />
      <input
        type="text"
        className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-500 focus:outline-none"
        {...props}
      />
    </div>
  );
}
