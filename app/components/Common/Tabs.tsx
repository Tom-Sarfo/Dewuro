import React, { useState } from "react";
import { cn } from "~/lib/utils";

interface TabsProps {
  tabOneLabel: string;
  tabTwoLabel: string;
  tabOneContent: React.ReactNode;
  tabTwoContent: React.ReactNode;
  className?: string;
  activeTab?: "tab1" | "tab2";
  setActiveTab?: (tab: "tab1" | "tab2") => void;
}

export const Tabs: React.FC<TabsProps> = ({
  tabOneLabel,
  tabTwoLabel,
  tabOneContent,
  tabTwoContent,
  className,
  activeTab: controlledActiveTab,
  setActiveTab: setControlledActiveTab,
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState<"tab1" | "tab2">(
    "tab1"
  );
  const activeTab = controlledActiveTab ?? internalActiveTab;
  const setActiveTab = setControlledActiveTab ?? setInternalActiveTab;

  return (
    <div className={cn("w-full", className)}>
      {/* Tabs Header - now centered */}
      <div className="flex justify-around space-x-10 border-b border-gray-300">
        <button
          onClick={() => setActiveTab("tab1")}
          className="relative pb-3 text-base font-medium text-gray-500 hover:text-black transition-colors flex flex-col items-center"
        >
          {tabOneLabel}
          {activeTab === "tab1" && (
            <span className="absolute -bottom-0.5 h-[4px] w-20 bg-[#7655FA] rounded-md" />
          )}
        </button>

        <button
          onClick={() => setActiveTab("tab2")}
          className="relative pb-3 text-base font-medium text-gray-500 hover:text-black transition-colors flex flex-col items-center"
        >
          {tabTwoLabel}
          {activeTab === "tab2" && (
            <span className="absolute -bottom-0.5 h-[4px] w-20 bg-[#7655FA] rounded-md" />
          )}
        </button>
      </div>

      {/* Tabs Content */}
      <div className="mt-6 overflow-y-auto">
        {activeTab === "tab1" && tabOneContent}
        {activeTab === "tab2" && tabTwoContent}
      </div>
    </div>
  );
};

export default Tabs;
