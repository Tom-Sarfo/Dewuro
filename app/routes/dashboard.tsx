import { useState } from "react";
import { Drawer } from "vaul";

import SearchInput from "~/components/Common/SearchInput";
import AdCard from "~/components/Common/AdCard";
import AdSpaceCard from "~/components/Common/AdSpaceCard";
import {
  adData,
  adListings,
  creatorFilters,
  creators,
  nicheFilters,
  platformFilters,
} from "~/utils";
import FiltersIcon from "~/svg/Filters";
import FilterGroup from "~/components/FilterGroup";
import { BrandListingCard } from "~/components/Common/BrandListingCard";
import DewuroLogo from "~/svg/DewuroLogo";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedNiche, setSelectedNiche] = useState<string[]>([]);
  const [selectedPlatform, setSelectedPlatform] = useState<string[]>([]);
  const [selectedCreator, setSelectedCreator] = useState<string[]>([]);

  const navigate = useNavigate();

  const handleSponsorClick = () => {
    navigate(`/adspace-booking/`); // Replace with the actual route including creatorId
  };

  const handleApplyFilters = () => {
    console.log("Applied Filters:", {
      niche: selectedNiche,
      platform: selectedPlatform,
      creator: selectedCreator,
    });

    setIsDrawerOpen(false);
  };

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
              onSponsor={handleSponsorClick}
            />
          ))}
        </div>
        {/* Brand Listings */}
        <div className="mt-6">
          <span className="bg-[#805CF7] text-white text-xs font-bold px-2 py-1 rounded-full">
            Brand Ad Listings
          </span>
          <div className="mt-3">
            {adListings.map((listing, index) => (
              <BrandListingCard key={index} {...listing} />
            ))}
          </div>
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
    </>
  );
};

export default Dashboard;
