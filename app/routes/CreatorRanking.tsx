import React, { useState } from "react";
import { Search } from "lucide-react";
import CreatorCard from "../components/CreatorCard";
import FiltersIcon from "~/svg/Filters";
import { Drawer } from "vaul";
import FilterGroup from "~/components/FilterGroup";
import {
  adData,
  adListings,
  creatorFilters,
  creators,
  nicheFilters,
  platformFilters,
} from "~/utils";

interface Creator {
  id: string;
  rank: number;
  logo: string;
  name: string;
  acronym: string;
  studio: string;
  engagementRate: number;
  followers: string;
}

type FilterTab = "All" | "Platforms" | "Niche" | "Creator follower range";

const CreatorRanking: React.FC = () => {
  const [activeTab, setActiveTab] = useState<FilterTab>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedNiche, setSelectedNiche] = useState<string[]>([]);
  const [selectedPlatform, setSelectedPlatform] = useState<string[]>([]);
  const [selectedCreator, setSelectedCreator] = useState<string[]>([]);

  // Mock data for creators
  const creators: Creator[] = Array(12)
    .fill({
      id: "1",
      rank: 1,
      logo: "https://yt3.googleusercontent.com/nCxYgQWiq1wcN90FH14BgS066q_dNdWwhuM0oCLliNAV8XARlNcMXbi8qAZciwywkdCCsJfyMg=s900-c-k-c0x00ffffff-no-rj", // You'll need to add this image to your public folder
      name: "SE",
      acronym: "Scanty Explore",
      studio: "",
      engagementRate: 1.5,
      followers: "5M",
    })
    .map((creator, index) => ({
      ...creator,
      id: String(index + 1),
      rank: index + 1,
    }));

  const filterTabs: FilterTab[] = [
    "All",
    "Platforms",
    "Niche",
    "Creator follower range",
  ];

  const handleApplyFilters = () => {
    console.log("Applied Filters:", {
      niche: selectedNiche,
      platform: selectedPlatform,
      creator: selectedCreator,
    });

    setIsDrawerOpen(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold mb-4">Creator Ranking</h1>
        <button
          className="bg-white text-[#7655FA] border border-[#7655FA] mb-4 px-2 py-1 rounded-sm text-sm flex items-center gap-2"
          onClick={() => setIsDrawerOpen(true)}
        >
          Filters
          <FiltersIcon className="w-4 h-4 text-[#7655FA]" />
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search creator"
          className="w-full pl-12 pr-4 py-3 rounded-lg bg-white border border-gray-200"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>


      {/* Creators List */}
      <div className="space-y-4">
        {creators.map((creator) => (
          <CreatorCard
            id={creator.id}
            key={creator.id}
            rank={creator.rank}
            logo={creator.logo}
            name={creator.name}
            acronym={creator.acronym}
            studio={creator.studio}
            engagementRate={creator.engagementRate}
            followers={creator.followers}
            isHighlighted={creator.rank === 1}
          />
        ))}
      </div>

      {/* Bottom Drawer for Filters */}
      <Drawer.Root open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40 z-40" />
          <Drawer.Content className="fixed inset-x-0 bottom-0 bg-white rounded-t-2xl z-50">
            <div className="max-h-[100vh] overflow-y-auto px-4 pt-5 pb-6">
              <div className="w-full max-w-md mx-auto">
                <div className="h-1.5 w-12 bg-gray-300 rounded-full mx-auto mb-5" />

                {/* Filter Groups */}
                <FilterGroup
                  title="Niche Filters"
                  options={nicheFilters}
                  selected={selectedNiche}
                  setSelected={setSelectedNiche}
                />
                <FilterGroup
                  title="Platform Filters"
                  options={platformFilters}
                  selected={selectedPlatform}
                  setSelected={setSelectedPlatform}
                />
                <FilterGroup
                  title="Top Creators"
                  options={creatorFilters}
                  selected={selectedCreator}
                  setSelected={setSelectedCreator}
                />

                {/* Apply Button */}
                <div className="sticky bottom-0 bg-white pt-6 pb-4">
                  <button
                    onClick={handleApplyFilters}
                    className="w-full bg-[#805CF7] text-white py-3 rounded-full"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};

export default CreatorRanking;
