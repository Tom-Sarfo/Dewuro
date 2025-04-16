import { Button } from "../components/ui/button";
import { BadgeCheck } from "lucide-react";
import { Link, Outlet } from "react-router";

const AdDetailScreen = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner */}
      <div className="h-60 w-full rounded-b-xl overflow-hidden">
        <img
          src="https://afripods-data.s3.amazonaws.com/podcast/cover_image/c0511a3c9b98015ef7bd429c82709004aecab7a4209e935985ab894cf8b63252.jpeg"
          alt="banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex-1 pb-32">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">New hosts and life lately</h2>
          <Button
            size="sm"
            className="bg-[#E5E1FD] text-[#805CF7] rounded-full text-xs px-3 py-1.5"
          >
            Chat now
          </Button>
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-400 mb-4">
          <span>Bants, rants and confession.</span>
          <BadgeCheck className="w-4 h-4 text-[#805CF7]" />
        </div>

        <Outlet />
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 w-full bg-[#EFEDED] p-4 border-t flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Highest bid</p>
          <p className="text-lg font-bold">$72</p>
        </div>
        <Link to="/goinglive/details">
          <Button className="bg-[#805CF7] text-white text-sm px-6 py-2 rounded-md">
            Continue
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AdDetailScreen;
