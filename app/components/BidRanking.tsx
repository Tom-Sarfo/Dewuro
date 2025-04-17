import React, { useState } from "react";
import PlaceBidModal from "./Common/PlacebidModal";
import { Button } from "./ui/button";

interface BidItem {
  logo: string;
  name: string;
  acronym: string;
  bidAmount: number;
  time: string;
  status: "Outbid" | "Underbid";
}

interface BidRankingProps {
  bids: BidItem[];
}

const BidRanking: React.FC<BidRankingProps> = ({ bids }) => {
  return (
    <div className="w-full max-w-md space-y-3">
      <h3 className="text-sm font-medium text-black">Rank by highest offer</h3>
      {bids.map((bid, index) => {
        const isTopBid = index === 0;
        return (
          <div
            key={bid.acronym}
            className={`flex items-center justify-between rounded-md p-2 ${
              isTopBid ? "bg-[#E5DCFF]" : "bg-gray-100"
            }`}
          >
            {/* Logo and name */}
            <div className="flex items-center space-x-3">
              <img
                src={bid.logo}
                alt={bid.name}
                className="w-14 h-14 rounded object-contain bg-white"
              />
              <div>
                <p className="text-sm font-semibold text-black">{bid.name}</p>
                <p className="text-xs text-gray-500">{bid.acronym}</p>
              </div>
            </div>

            {/* Bid */}
            <div className="text-right">
              <p className="text-[10px] text-gray-500 font-medium">Bid</p>
              <p
                className={`text-sm font-bold ${
                  isTopBid ? "text-red-500" : "text-[#805CF7]"
                }`}
              >
                ${bid.bidAmount}
              </p>
            </div>

            {/* Time */}
            <div className="text-right">
              <p className="text-[10px] text-gray-500 font-medium">Time</p>
              <p className="text-xs text-gray-500">{bid.time}</p>
            </div>

            {/* Status Button */}
            <span
              className={`text-xs py-1 rounded ml-2 font-medium ${
                isTopBid
                  ? "bg-[#805CF7] text-white px-3 "
                  : "bg-gray-300 text-gray-700 px-2"
              }`}
            >
              {bid.status}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default BidRanking;
