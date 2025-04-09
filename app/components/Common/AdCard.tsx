import { Megaphone } from "lucide-react";

interface AdCardProps {
  readonly title: string;
  readonly thumbnail: string;
  readonly price: string | number;
  readonly goLiveDate: string;
}

export default function AdCard({
  title,
  thumbnail,
  price,
  goLiveDate,
}: AdCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-2 text-sm border">
      <img
        src={thumbnail}
        alt="Ad Thumbnail"
        className="w-full h-24 object-cover rounded-md"
      />
      <div className="mt-2 font-medium">{title}</div>
      <div className="text-red-500 text-xs">Going live - {goLiveDate}</div>
      <div className="flex justify-between items-center mt-1">
        <span className="font-semibold text-gray-800">${price}</span>
        <Megaphone className="w-4 h-4 text-[#805CF7]" />
      </div>
    </div>
  );
}
