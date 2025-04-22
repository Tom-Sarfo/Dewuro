import { Button } from "../ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { CheckCheckIcon, StarIcon } from "lucide-react";
import Tabs from "../Common/Tabs";
import Chip from "../Common/Chip";
import { Badge } from "../ui/badge";
import TwoColumnTable from "../Common/TwoColumnTable";
import BrandHistory from "./BrandCollaborationHistory";
import CheckMark from "~/svg/CheckMark";
import AvailableAdSpace from "./AvailableAdSpace";
import ContentCalendar from "./ContentCalendar";
// import { cn } from "../lib/utils"
// import { StarIcon, CheckCircledIcon } from "@radix-ui/react-icons"

interface CreatorProfileCardProps {
  bannerUrl: string;
  avatarUrl: string;
  rank: number;
  creatorName: string;
  description: string;
  ownerName: string;
  industries: string[];
}

export const CreatorProfileCard: React.FC<CreatorProfileCardProps> = ({
  bannerUrl,
  avatarUrl,
  rank,
  creatorName,
  description,
  ownerName,
  industries,
}) => {
  return (
    <div className="border bg-white shadow-sm overflow-hidden w-full">
      {/* Banner */}
      <div className="relative w-full h-40 bg-muted">
        <img
          src={bannerUrl}
          alt="banner"
          className="w-full h-full object-cover"
        />
        {/* Rank */}
        <Badge className="absolute top-45 right-2 bg-[#7B61FF] text-white rounded-full px-3 py-1 text-sm font-bold">
          #{rank}
        </Badge>

        {/* Avatar */}
        <div className="absolute -bottom-8 left-4">
          <div className="relative">
            <Avatar className="h-16 w-16 border-4 border-white ring-2 ring-purple-300">
              <AvatarImage src={avatarUrl} alt="creator avatar" />
              <AvatarFallback>SE</AvatarFallback>
            </Avatar>
            <StarIcon className="absolute bottom-0 right-0 h-4 w-4 text-yellow-400 bg-white rounded-full" />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="pt-10 pb-4 px-4">
        <div className="flex items-center gap-2">
          <h2 className="font-bold text-lg">{creatorName}</h2>
          <CheckMark className="text-[#7B61FF] h-5 w-5" />
        </div>
        <p className="text-muted-foreground text-sm mt-1">{description}</p>
      </div>

      {/* Tabs */}
      <Tabs
        tabOneLabel="About"
        tabTwoLabel="Available Ad Space"
        tabOneContent={
          <>
            <TwoColumnTable
              rows={[
                {
                  left: (
                    <span>
                      <Chip
                        label="Creator:"
                        bgColor="bg-[#7655FA]/10"
                        textColor="text-[#7655FA]"
                        className="rounded-full px-3 py-1.5 text-sm font-medium whitespace-nowrap inline-block"
                      />
                    </span>
                  ),
                  right: <span>Edward Owusu</span>,
                },
                {
                  left: (
                    <span>
                      <Chip
                        label="Niche/Industry:"
                        bgColor="bg-[#7655FA]/10"
                        textColor="text-[#7655FA]"
                        className="rounded-full px-3 py-1.5 text-sm font-medium whitespace-nowrap inline-block"
                      />
                    </span>
                  ),
                  right: <span>Travel</span>,
                },
                {
                  left: (
                    <span>
                      <Chip
                        label="Avg Engagement Rate:"
                        bgColor="bg-[#7655FA]/10"
                        textColor="text-[#7655FA]"
                        className="rounded-full px-3 py-1.5 text-sm font-medium whitespace-nowrap inline-block"
                      />
                    </span>
                  ),
                  right: <span>1.2%</span>,
                },
              ]}
            />
            <div className="border-t border-gray-200 my-4" />
            <BrandHistory />
            <div className="border-t border-gray-200 my-4" />
            <ContentCalendar />
          </>
        }
        tabTwoContent={<AvailableAdSpace />}
      />
      <div className="fixed bottom-0 left-0 w-full bg-white border-t z-50 flex justify-between items-center px-4 py-3 bg-[#f9f9f9]">
        <button
          className="text-[#805CF7] font-medium px-4 py-2 bg-white border rounded-md"
          onClick={() => {}}
        >
          Chat now
        </button>
      </div>
    </div>
  );
};

export default CreatorProfileCard;
