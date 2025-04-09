import Thumbnail from "~/svg/Thumbnail";
import YouTubeIcon from "~/svg/YouTubeIcon";

interface AdSpaceCardProps {
  readonly name: string;
  readonly price: number;
  readonly tag: string;
  readonly adType?: string;
  readonly logoUrl?: string;
  readonly onSponsor?: () => void;
}

export default function AdSpaceCard({
  name,
  price,
  tag,
  adType = "Mention",
  logoUrl,
  onSponsor,
}: AdSpaceCardProps) {
  return (
    <div className="bg-[#EFEDED] rounded-[5px] px-2 py-2 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 shadow-sm w-full">
      {/* Left: Logo + Name */}
      <div className="flex items-center gap-2 flex-1 min-w-[100px]">
        {logoUrl ? (
          <img
            src={logoUrl}
            alt={name}
            className="w-[56px] h-[56px] sm:w-10 sm:h-10 object-cover"
          />
        ) : (
          <Thumbnail className="w-[56px] h-[56px] sm:w-10 sm:h-10 object-cover" />
        )}
        <div className="text-xs sm:text-sm">
          <div className="font-semibold">{name}</div>
          <div className="flex items-center gap-1 text-[11px] text-gray-600">
            {tag}
            <YouTubeIcon className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Middle: Price */}
      <div className="text-xs sm:text-sm text-center min-w-[60px]">
        <div className="font-semibold">Price</div>
        <div className="text-[#805CF7] font-bold text-sm sm:text-base">
          ${price}
        </div>
      </div>

      {/* Middle: Ad Type */}
      <div className="text-xs sm:text-sm text-center min-w-[70px]">
        <div className="font-semibold">Ad type</div>
        <div className="text-gray-400 italic">{adType}</div>
      </div>

      {/* Right: Button */}
      <div className="min-w-[80px]">
        <button
          onClick={onSponsor}
          className="bg-[#805CF7] text-white text-xs sm:text-sm px-3 py-[6px] rounded-md font-semibold w-full"
        >
          Sponsor
        </button>
      </div>
    </div>
  );
}
