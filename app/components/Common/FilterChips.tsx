import { useState } from "react";

interface FilterChipsProps {
  readonly filters: string[];
  readonly onChange?: (active: string) => void;
  readonly defaultActive?: string;
}

export default function FilterChips({
  filters,
  onChange,
  defaultActive = "All",
}: FilterChipsProps) {
  const [active, setActive] = useState(defaultActive);

  const handleClick = (filter: string) => {
    setActive(filter);
    onChange?.(filter);
  };

  return (
    <div className="flex gap-2 mt-3 flex-wrap text-sm">
      {filters.map((item, i) => (
        <span
          key={i}
          onClick={() => handleClick(item)}
          className={`px-3 py-1 rounded-full cursor-pointer transition-colors ${
            item === active
              ? "bg-[#805CF7] text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}
