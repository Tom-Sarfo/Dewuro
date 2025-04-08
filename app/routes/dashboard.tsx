import { Megaphone } from "lucide-react";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const Dashboard = () => {
  return (
    <>
      {/* Search + Filters */}
      <div className="px-4 py-3">
        <input
          type="text"
          placeholder="Search content to sponsor"
          className="w-full p-2 rounded-md bg-gray-100 text-sm"
        />
        <div className="flex gap-2 mt-3 flex-wrap text-sm">
          {["All", "Top creators", "Niche", "Platforms", "Ad type"].map(
            (item, i) => (
              <span
                key={i}
                className={`px-3 py-1 rounded-full ${
                  item === "All"
                    ? "bg-[#805CF7] text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {item}
              </span>
            )
          )}
        </div>
      </div>

      {/* Going Live Section */}
      <div className="px-4">
        <span className="bg-[#805CF7] text-white text-xs px-2 py-1 rounded-full">
          Going live
        </span>
        <div className="grid grid-cols-2 gap-4 mt-3">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-sm p-2 text-sm border"
            >
              <img
                src="/thumb-placeholder.jpg" // You can use actual thumbnails here
                className="w-full h-24 object-cover rounded-md"
                alt="Ad Thumbnail"
              />
              <div className="mt-2 font-medium">This must stop!!!</div>
              <div className="text-red-500 text-xs">
                Going live - 20/12/2024
              </div>
              <div className="flex justify-between items-center mt-1">
                <span className="font-semibold text-gray-800">$65</span>
                <Megaphone className="w-4 h-4 text-[#805CF7]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ad Spaces */}
      <div className="px-4 mt-6">
        <span className="bg-[#805CF7] text-white text-xs px-2 py-1 rounded-full">
          Ad spaces
        </span>
        <div className="mt-3 flex flex-col gap-3">
          {[
            { name: "Scanty Explore", price: 50, tag: "SE" },
            { name: "Abby’s Kitchen", price: 42, tag: "AK" },
          ].map((creator, i) => (
            <div
              key={i}
              className="bg-white shadow-sm border rounded-lg p-3 flex justify-between items-center"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-green-200 rounded-md" />
                <div>
                  <div className="font-semibold">{creator.name}</div>
                  <div className="text-xs text-gray-500">
                    {creator.tag} <span className="ml-1">🎥</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500">Price</div>
                <div className="text-[#805CF7] font-bold">${creator.price}</div>
                <button className="mt-1 px-3 py-1 text-white bg-[#805CF7] rounded-md text-xs">
                  Sponsor
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
