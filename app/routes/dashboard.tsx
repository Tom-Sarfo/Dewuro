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
    title: "Bants, Rants and conffessions",
    thumbnail:
      "https://afripods-data.s3.amazonaws.com/podcast/cover_image/c0511a3c9b98015ef7bd429c82709004aecab7a4209e935985ab894cf8b63252.jpeg",
    price: 65,
    goLiveDate: "20/12/2024",
  },
  {
    title: "Yawa of the day",
    thumbnail:
      "https://www.kwadwosheldonstudios.com/img/use/logos/shows/YOD-08.png",
    price: 65,
    goLiveDate: "20/12/2024",
  },
  {
    title: "The Break Down - Where them boys dey",
    thumbnail:
      "https://yt3.googleusercontent.com/dXI1qoj7N0LialqRmWvDy0YawrrkMy20CIIEuyHpINvSCHCgGstVnSPBNIzw8vj_y8hqWhLWzEs=s900-c-k-c0x00ffffff-no-rj",
    price: 65,
    goLiveDate: "20/12/2024",
  },
  {
    title: "Evo - Pilot premier",
    thumbnail: "https://sparkmag.live/wp-content/uploads/2024/04/evor.jpg",
    price: 80,
    goLiveDate: "25/12/2024",
  },
];

const creators = [
  {
    name: "Scanty Explore",
    logoUrl:
      "https://yt3.googleusercontent.com/nCxYgQWiq1wcN90FH14BgS066q_dNdWwhuM0oCLliNAV8XARlNcMXbi8qAZciwywkdCCsJfyMg=s900-c-k-c0x00ffffff-no-rj",
    price: 50,
    tag: "SE",
  },
  { name: "Abby’s Kitchen", price: 42, tag: "AK" },
];

const Dashboard = () => {
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
          onChange={(selected) => console.log("Selected filter:", selected)}
        />
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
