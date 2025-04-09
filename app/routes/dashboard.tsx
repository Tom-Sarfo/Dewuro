import { Filter, Megaphone } from "lucide-react";
import type { Route } from "./+types/home";
import SearchInput from "~/components/Common/SearchInput";
import FilterChips from "~/components/Common/FilterChips";
import AdCard from "~/components/Common/AdCard";
import AdSpaceCard from "~/components/Common/AdSpaceCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const filters = ["All", "Top creators", "Niche", "Platforms", "Ad type"];
const adData = [
  {
    title: "This must stop!!!",
    thumbnail: "/thumb-placeholder.jpg",
    price: 65,
    goLiveDate: "20/12/2024",
  },
  {
    title: "This must stop!!!",
    thumbnail: "/thumb-placeholder.jpg",
    price: 65,
    goLiveDate: "20/12/2024",
  },
  {
    title: "This must stop!!!",
    thumbnail: "/thumb-placeholder.jpg",
    price: 65,
    goLiveDate: "20/12/2024",
  },
  {
    title: "Clean up your digital space!",
    thumbnail: "/thumb-placeholder.jpg",
    price: 80,
    goLiveDate: "25/12/2024",
  },
];

const creators = [
  { name: "Scanty Explore", price: 50, tag: "SE" },
  { name: "Abby’s Kitchen", price: 42, tag: "AK" },
];

const Dashboard = () => {
  return (
    <>
      {/* Search + Filters */}
      <div className="px-4 py-3">
        <SearchInput placeholder="Search Ad space to sponsor" />
        <FilterChips
          filters={filters}
          onChange={(selected) => console.log("Selected filter:", selected)}
        />
      </div>

      {/* Going Live Section */}
      <div className="px-4">
        <span className="bg-[#805CF7] text-white text-xs px-2 py-1 rounded-full">
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
        <span className="bg-[#805CF7] text-white text-xs px-2 py-1 rounded-full">
          Ad spaces
        </span>
        <div className="mt-3 flex flex-col gap-3">
          {creators.map((creator, i) => (
            <AdSpaceCard
              key={i}
              name={creator.name}
              price={creator.price}
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
