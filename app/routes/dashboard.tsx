import { useState } from "react";
import { Drawer } from "vaul";

import SearchInput from "~/components/Common/SearchInput";
import AdCard from "~/components/Common/AdCard";
import AdSpaceCard from "~/components/Common/AdSpaceCard";
import { adData, creators } from "~/utils";
import YouTubeIcon from "~/svg/YouTubeIcon";
import TiktokIcon from "~/svg/TiktokIcon";
import SnapchatIcon from "~/svg/SnapchatIcon";
import XtwitterIcon from "~/svg/XtwitterIcon";
import FoodIcon from "~/svg/FoodIcon";
import TechnologyIcon from "~/svg/TechnologyIcon";
import ShirtIcon from "~/svg/ShirtIcon";
import TelevisionIcon from "~/svg/TelevisionIcon";
import ArtIcon from "~/svg/Art";
import OthersIcon from "~/svg/OthersIcon";
import FiltersIcon from "~/svg/Filters";

const Dashboard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedNiche, setSelectedNiche] = useState<string[]>([]);
  const [selectedPlatform, setSelectedPlatform] = useState<string[]>([]);
  const [selectedCreator, setSelectedCreator] = useState<string[]>([]);

  const handleToggle = (
    value: string,
    selected: string[],
    setSelected: (val: string[]) => void
  ) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  const handleApplyFilters = () => {
    console.log("Applied Filters:", {
      niche: selectedNiche,
      platform: selectedPlatform,
      creator: selectedCreator,
    });

    setIsDrawerOpen(false);
  };

  const nicheFilters = [
    { label: "Food", icon: FoodIcon },
    { label: "Fashion", icon: ShirtIcon },
    { label: "Technology", icon: TechnologyIcon },
    { label: "Entertainment", icon: TelevisionIcon },
    { label: "Art", icon: ArtIcon },
    { label: "Others", icon: OthersIcon },
  ];

  const platformFilters = [
    { label: "YouTube", icon: YouTubeIcon },
    { label: "TikTok", icon: TiktokIcon },
    { label: "SnapChat", icon: SnapchatIcon },
    { label: "X (twitter)", icon: XtwitterIcon },
  ];

  const creatorFilters = [
    "Mega/Celebrity - score (96-100)",
    "Macro  -  score (81 - 95)",
    "Mid-Tier  - score (61 - 80)",
    "Micro  -  score (31 - 60)",
    "Nano  -  score (0 - 30)",
  ];

  const renderFilterGroup = (
    title: string,
    options: (string | { label: string; icon: React.ElementType })[],
    selected: string[],
    setSelected: (val: string[]) => void
  ) => (
    <div className="mb-6">
      <h3 className="font-semibold mb-2">{title}</h3>
      <div className="space-y-2">
        {options.map((opt, i) => {
          const label = typeof opt === "string" ? opt : opt.label;
          const Icon = typeof opt === "string" ? null : opt.icon;
          const isSelected = selected.includes(label);

          return (
            <div
              key={i}
              onClick={() => handleToggle(label, selected, setSelected)}
              className={`flex items-center gap-3 cursor-pointer p-2 rounded-md ${
                isSelected ? "bg-[#ECE8FD] text-[#805CF7]" : "hover:bg-gray-100"
              }`}
            >
              {Icon && <Icon className="w-4 h-4 text-[#805CF7]" />}
              <span className="text-sm font-medium text-[#A9AAAA]">
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      {/* Header + Filters button */}
      <div className="px-4 py-3">
        <h1 className="text-xl font-semibold mt-4 text-left py-2">
          Ad Space Market
        </h1>
        <SearchInput placeholder="Search Ad space to sponsor" />
      </div>

      {/* Going Live Section */}
      <div className="px-4">
        <div className="flex items-center justify-between">
          <span className="bg-[#805CF7] text-white text-xs px-2 py-1 font-bold rounded-full">
            Going live
          </span>
          <button
            className="bg-white text-[#7655FA] border border-[#7655FA] px-4 py-1 rounded-full text-sm flex items-center gap-2"
            onClick={() => setIsDrawerOpen(true)}
          >
            Filters
            <FiltersIcon className="w-4 h-4 text-[#7655FA]" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-3">
          {adData.map((ad, i) => (
            <AdCard
              key={i}
              title={ad.title}
              thumbnail={ad.thumbnail}
              price={ad.price}
              goLiveDate={ad.goLiveDate}
            />
          ))}
        </div>
      </div>

      {/* Ad Spaces */}
      <div className="px-4 mt-6">
        <span className="bg-[#805CF7] text-white text-xs font-bold px-2 py-1 rounded-full">
          Ad spaces
        </span>
        <div className="mt-3 flex flex-col gap-3">
          {creators.map((creator, i) => (
            <AdSpaceCard
              key={i}
              name={creator.name}
              price={creator.price}
              logoUrl={creator.logoUrl}
              tag={creator.tag}
              onSponsor={() => console.log(`Sponsored ${creator.name}`)}
            />
          ))}
        </div>
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
                {renderFilterGroup(
                  "Niche Filters",
                  nicheFilters,
                  selectedNiche,
                  setSelectedNiche
                )}
                {renderFilterGroup(
                  "Platform Filters",
                  platformFilters,
                  selectedPlatform,
                  setSelectedPlatform
                )}
                {renderFilterGroup(
                  "Top Creators",
                  creatorFilters,
                  selectedCreator,
                  setSelectedCreator
                )}

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
    </>
  );
};

export default Dashboard;
