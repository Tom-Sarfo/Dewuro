import React from "react";
import { Link } from "react-router";

interface CreatorCardProps {
  rank: number;
  logo: string;
  name: string;
  acronym: string;
  studio: string;
  engagementRate: number;
  followers: string;
  isHighlighted?: boolean;
  id: string;
}

const CreatorCard: React.FC<CreatorCardProps> = ({
  rank,
  logo,
  name,
  acronym,
  studio,
  engagementRate,
  followers,
  isHighlighted = false,
  id,
}) => {
  return (
    <Link
      to="/creator-profile"
      className="block transition-transform hover:scale-[1.02] active:scale-[0.98]"
    >
      <div
        className={`flex items-center justify-between p-2 sm:p-4 rounded-lg ${
          isHighlighted ? "bg-[#E5DCFF]" : "bg-white border border-gray-100"
        }`}
      >
        {/* Rank and Creator Info */}
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="text-xs sm:text-sm font-semibold text-[#805CF7]">
            #{rank}
          </span>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-9 h-9 sm:w-12 sm:h-12 bg-orange-400 rounded overflow-hidden">
              <img
                src={logo}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0 max-w-[120px] sm:max-w-[180px]">
              <h3 className="font-bold text-black text-xs sm:text-base break-words">
                {name}
              </h3>
              <p className="text-xs text-gray-400 break-words">
                {acronym} {studio}
              </p>
            </div>
          </div>
        </div>

        {/* Engagement Rate */}
        <div className="text-center min-w-[70px] sm:min-w-[80px]">
          <p className="text-[10px] sm:text-xs text-gray-500">Eng. rate</p>
          <div
            className={`inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded-full ${
              rank === 3 || rank === 8
                ? "bg-[rgba(234,14,7,0.28)] text-[#EA0E07] border-2 border-[#EA0E07]"
                : "bg-[rgba(55,174,177,0.28)] text-[#37AEB1] border-2 border-[#37AEB1]"
            }`}
          >
            <span className="text-[10px] sm:text-xs whitespace-nowrap">
              ↑ {engagementRate}%
            </span>
          </div>
        </div>

        {/* Followers */}
        <div className="text-right min-w-[60px] sm:min-w-[80px]">
          <p className="text-[10px] sm:text-xs text-gray-500">Followers</p>
          <p className="font-bold text-xs sm:text-sm">{followers}</p>
        </div>
      </div>
    </Link>
  );
};

export default CreatorCard;
