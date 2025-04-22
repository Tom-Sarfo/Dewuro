import { ChevronLeft, ChevronRight } from "lucide-react";
import Tabs from "../Common/Tabs";
import { useState } from "react";
import AdFormats from "./AdFormats";

const ContentCalendar = () => {
  const weekData = [
    {
      day: "Monday",
      banner: "YouTube Video: Travel Tips for Ghana",
      description: "Main video content about exploring Ghana's hidden gems",
    },
    {
      day: "Tuesday",
      banner: "Instagram Story Series",
      description: "Behind the scenes footage from Monday's shoot",
    },
    {
      day: "Wednesday",
      banner: "YouTube Shorts: Quick Tips",
      description: "3 must-know travel hacks for Africa",
    },
    {
      day: "Thursday",
      banner: "Community Post",
      description: "Q&A session about Ghana travel experience",
    },
    {
      day: "Friday",
      banner: "Collaboration Live Stream",
      description: "Live discussion with local tour guides",
    },
  ];

  const [currentDayIndex, setCurrentDayIndex] = useState(0);

  const handlePrevDay = () => {
    setCurrentDayIndex((prev) => (prev === 0 ? weekData.length - 1 : prev - 1));
  };

  const handleNextDay = () => {
    setCurrentDayIndex((prev) => (prev === weekData.length - 1 ? 0 : prev + 1));
  };

  const calendarContent = (
    <div className="space-y-4 p-4">
      <div>
        <h2 className="text-2xl font-bold">Jananuary 2025</h2>
        <p className="text-gray-500">
          Jan 1 2025 - Jan 5 2025{" "}
          <span className="text-red-500">(deadline)</span>
        </p>
      </div>

      {/* Day Navigation */}
      <div className="flex items-center border rounded-lg">
        <button
          className="p-4 hover:bg-gray-50 transition-colors"
          onClick={handlePrevDay}
        >
          <ChevronLeft className="w-6 h-6 text-gray-400" />
        </button>
        <div className="flex-1 text-center py-4 font-medium">
          {weekData[currentDayIndex].day}
        </div>
        <button
          className="p-4 hover:bg-gray-50 transition-colors"
          onClick={handleNextDay}
        >
          <ChevronRight className="w-6 h-6 text-gray-400" />
        </button>
      </div>

      {/* Content Banner Area */}
      <div className="space-y-2">
        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center p-6 text-center transition-all duration-300">
          <div className="space-y-2">
            <h3 className="text-xl font-medium text-gray-600">
              {weekData[currentDayIndex].banner}
            </h3>
            <p className="text-sm text-gray-500">
              {weekData[currentDayIndex].description}
            </p>
          </div>
        </div>
      </div>

      {/* Sponsor Button */}
      <button className="w-full bg-[#7655FA] text-white py-4 rounded-lg font-medium hover:bg-[#6549FF] transition-colors">
        Sponsor
      </button>
    </div>
  );

  return (
    <Tabs
      tabOneLabel="Content Ad Calender"
      tabTwoLabel="Ad formats"
      tabOneContent={calendarContent}
      tabTwoContent={<AdFormats />}
      className="mb-6"
    />
  );
};

export default ContentCalendar;
