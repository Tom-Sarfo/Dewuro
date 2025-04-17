import type { FC } from "react";

interface AdTypeOptionProps {
  label: string;
  selected: boolean;
  onSelect: () => void;
}

const AdTypeOption: FC<AdTypeOptionProps> = ({ label, selected, onSelect }) => {
  return (
    <label
      className="flex items-center gap-3 py-2 cursor-pointer"
      onClick={onSelect}
    >
      <div
        className={`w-5 h-5 rounded-full border-2 ${
          selected ? "border-[#805CF7]" : "border-gray-300"
        } flex items-center justify-center`}
      >
        {selected && <div className="w-2.5 h-2.5 bg-[#805CF7] rounded-full" />}
      </div>
      <span className="text-sm">{label}</span>
    </label>
  );
};

export default AdTypeOption;
