import { Link } from "react-router";
import AuctionIcon from "~/svg/Auction";
import MegaPhoneIcon from "~/svg/MegaPhone";

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
    <Link to="/goinglive">
      <div className="bg-white rounded-lg shadow-sm p-2 text-sm border">
        <img
          src={thumbnail}
          alt="Ad Thumbnail"
          className="w-full h-24 object-cover rounded-md"
        />
        <div className="">
          <div className="mt-2 font-medium">{title}</div>
          <div className="text-red-500 text-xs">Going live - {goLiveDate}</div>
          <div className="flex justify-between items-center mt-1">
            <span className="font-semibold text-gray-800">${price}</span>
            <AuctionIcon className="w-6 h-6" />
          </div>
        </div>
      </div>
    </Link>
  );
}
