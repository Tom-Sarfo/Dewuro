
import React from "react";

interface BrandListingCardProps {
  logo: string;
  brand: string;
  title: string;
  type: string;
  typeDescription: string;
}

export const BrandListingCard: React.FC<BrandListingCardProps> = ({
  logo,
  brand,
  title,
  type,
  typeDescription,
}) => {
  return (
    <div className="flex items-center justify-between bg-[#EFEDED] p-2 mb-4 shadow-sm">
      <div className="flex space-between gap-3">
        <img
          src={logo}
          alt={`${brand} logo`}
          className="w-14 h-14 object-contain"
        />
        <div>
          <p className="text-xs font-semibold">{title}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs font-medium">{type}</span>
            <span className="text-xs italic text-muted-foreground text-gray-200">
              {typeDescription}
            </span>
          </div>
        </div>
      </div>
      <button className="px-4 py-1 text-xs rounded-md bg-[#7655FA] text-white hover:bg-[#6847e3]">
        View
      </button>
    </div>
  );
};
