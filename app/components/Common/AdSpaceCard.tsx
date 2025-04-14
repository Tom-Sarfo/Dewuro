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
    <div className="bg-[#EFEDED] rounded-[5px] px-2 py-2 flex items-center justify-between gap-2 shadow-sm w-full max-w-full">
      {/* Left: Logo + Name */}
      <div className="flex items-center gap-2 flex-1 min-w-0">
        {logoUrl ? (
          <img
            src={logoUrl}
            alt={name}
            className="w-10 h-10 sm:w-[56px] sm:h-[56px] object-cover shrink-0"
          />
        ) : (
          <Thumbnail className="w-10 h-10 sm:w-[56px] sm:h-[56px] object-cover shrink-0" />
        )}
        <div className="flex flex-col text-[11px] sm:text-sm min-w-0">
          <div className="font-semibold break-words leading-tight">{name}</div>
          <div className="flex items-center gap-1 text-[10px] text-gray-600">
            {tag}
            <YouTubeIcon className="w-3 h-3" />
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="text-[11px] sm:text-sm text-center min-w-[50px]">
        <div className="font-semibold">Price</div>
        <div className="text-[#7655FA] font-bold text-xs sm:text-base">
          ${price}
        </div>
      </div>

      {/* Ad Type */}
      <div className="text-[11px] sm:text-sm text-center min-w-[60px]">
        <div className="font-semibold">Ad type</div>
        <div className="text-gray-400 italic">{adType}</div>
      </div>

      {/* Button */}
      <div className="min-w-[70px]">
        <button
          onClick={onSponsor}
          className="bg-[#7655FA] text-white text-[10px] sm:text-sm px-2 py-[5px] rounded-md font-semibold w-full"
        >
          Sponsor
        </button>
      </div>
    </div>
  );
}
