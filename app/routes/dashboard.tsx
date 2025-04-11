import { useState } from "react";
import SearchInput from "~/components/Common/SearchInput";
import FilterChips from "~/components/Common/FilterChips";
import AdCard from "~/components/Common/AdCard";
import AdSpaceCard from "~/components/Common/AdSpaceCard";
import NicheFilters from "~/components/Common/NicheFilters";
import { adData, creators, filters } from "~/utils";
import { AnimatePresence, motion } from "framer-motion";

const Dashboard = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleFilterChange = (filter: string) => {
    // Toggle off if the same filter is clicked
    if (filter === selectedFilter) {
      setSelectedFilter("All");
    } else {
      setSelectedFilter(filter);
    }
  };

  return (
    <>
      {/* Title + Search + Filters */}
      <div className="px-4 py-3">
        <h1 className="text-xl font-semibold mt-4 text-left py-2">
          Ad Space Market
        </h1>
        <SearchInput placeholder="Search Ad space to sponsor" />
        <FilterChips
          filters={filters}
          defaultActive={selectedFilter}
          onChange={handleFilterChange}
        />

        {/* Show niche options if 'Niche' is selected */}
        <AnimatePresence>
          {selectedFilter === "Niche" && (
            <motion.div
              key="niche-filters"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mt-4"
            >
              <NicheFilters />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Going Live Section */}
      <div className="px-4">
        <span className="bg-[#805CF7] text-white text-xs px-2 py-1 font-bold rounded-full">
          Going live
        </span>
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
    </>
  );
};

export default Dashboard;
