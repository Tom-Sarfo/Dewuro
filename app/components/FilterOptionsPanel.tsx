import { cn } from "~/lib/utils";

type Option = {
  label: string;
  icon?: React.ReactNode;
};

interface FilterOptionsPanelProps {
  options: Option[];
  selectedOption?: string;
  onSelect: (value: string) => void;
}

const FilterOptionsPanel = ({
  options,
  selectedOption,
  onSelect,
}: FilterOptionsPanelProps) => {
  return (
    <div className="rounded-lg bg-white p-2 shadow-sm">
      <div className="space-y-1">
        {options.map((option) => (
          <button
            key={option.label}
            onClick={() => onSelect(option.label)}
            className={cn(
              "flex items-center gap-2 w-full px-3 py-2 rounded-md text-sm font-medium text-left",
              selectedOption === option.label
                ? "bg-gray-100 text-gray-900"
                : "hover:bg-gray-50 text-gray-600"
            )}
          >
            {option.icon && <span className="text-lg">{option.icon}</span>}
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterOptionsPanel;
