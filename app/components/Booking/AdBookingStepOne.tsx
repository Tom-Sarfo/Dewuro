import { useState } from "react";
import AdTypeOption from "./AdTypeOption";

const adTypes = ["Sponsored post", "Shoutout", "Product review"];

const AdBookingStepOne = () => {
  const [selectedAdType, setSelectedAdType] = useState("Sponsored post");

  return (
    <div>
      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        <p className="font-semibold mb-2">Ad type</p>
        {adTypes.map((type) => (
          <AdTypeOption
            key={type}
            label={type}
            selected={selectedAdType === type}
            onSelect={() => setSelectedAdType(type)}
          />
        ))}

        {/* Price */}
        <div className="mt-6">
          <p className="font-semibold">Price</p>
          <p className="text-[#805CF7] font-bold text-lg">$85</p>
          <p className="text-sm text-gray-400">-Base price</p>
        </div>

        {/* Delivery time */}
        <div className="mt-6">
          <label className="font-semibold block mb-2">Delivery time</label>
          <select className="border px-3 py-2 rounded-md w-full text-sm">
            <option>1 week</option>
            <option>2 weeks</option>
            <option>1 month</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AdBookingStepOne;
