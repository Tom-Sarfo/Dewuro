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
    if (filter === active) {
      // Toggle off if clicking the same active filter
      setActive("All");
      onChange?.("All");
    } else {
      setActive(filter);
      onChange?.(filter);
    }
  };

  return (
    <div className="flex gap-2 mt-3 flex-wrap text-sm">
      {filters.map((item, i) => (
        <span
          key={i}
          onClick={() => handleClick(item)}
          className={`px-3 py-1 rounded-full cursor-pointer font-semibold transition-colors ${
            item === active
              ? "bg-[#7655FA] text-white"
              : "text-[#7655FA] border border-[#D9D9D9]"
          }`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}
