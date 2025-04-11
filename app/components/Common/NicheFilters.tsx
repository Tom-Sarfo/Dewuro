import {
    Shirt,
    Lightbulb,
    Utensils,
    Tv,
    Paintbrush,
    MoreHorizontal,
  } from "lucide-react";
  
  const options = [
    { label: "Fashion", icon: Shirt },
    { label: "Technology", icon: Lightbulb },
    { label: "Food", icon: Utensils },
    { label: "Entertainment", icon: Tv },
    { label: "Art", icon: Paintbrush },
    { label: "Other", icon: MoreHorizontal },
  ];
  
  export default function NicheFilters() {
    return (
      <div className="bg-white rounded-lg p-4 shadow-md w-full max-w-xs">
        <h2 className="text-sm font-semibold text-gray-700 mb-3">
          Niche Filters
        </h2>
        <div className="flex flex-col gap-3">
          {options.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2 rounded-md cursor-pointer transition"
            >
              <Icon className="w-5 h-5 text-[#805CF7]" />
              <span className="font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  