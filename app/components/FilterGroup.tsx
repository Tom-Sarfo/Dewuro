import React from "react";

interface FilterGroupProps {
  title: string;
  options: (string | { label: string; icon: React.ElementType })[];
  selected: string[];
  setSelected: (val: string[]) => void;
}

const FilterGroup: React.FC<FilterGroupProps> = ({
  title,
  options,
  selected,
  setSelected,
}) => {
  const handleToggle = (value: string) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-2">{title}</h3>
      <div className="space-y-2">
        {options.map((opt, i) => {
          const label = typeof opt === "string" ? opt : opt.label;
          const Icon = typeof opt === "string" ? null : opt.icon;
          const isSelected = selected.includes(label);

          return (
            <div
              key={i}
              onClick={() => handleToggle(label)}
              className={`flex items-center gap-3 cursor-pointer p-2 rounded-md ${
                isSelected ? "bg-[#ECE8FD] text-[#805CF7]" : "hover:bg-gray-100"
              }`}
            >
              {Icon && <Icon className="w-4 h-4 text-[#805CF7]" />}
              <span className="text-sm font-medium text-[#A9AAAA]">
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterGroup;
