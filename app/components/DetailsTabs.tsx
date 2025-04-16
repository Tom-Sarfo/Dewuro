import React, { useState } from "react";
import type { ReactNode } from "react";

interface TabItem {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  defaultActive?: string;
  className?: string;
}

const DetailsTabs: React.FC<TabsProps> = ({ tabs, defaultActive, className = "" }) => {
  const [activeTab, setActiveTab] = useState(defaultActive || tabs[0]?.label);

  return (
    <div className={`w-full max-w-md mx-auto text-sm ${className}`}>
      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-4">
        {tabs.map((tab) => (
          <div
            key={tab.label}
            className={`px-4 py-2 cursor-pointer relative transition-colors duration-200 ${
              activeTab === tab.label ? "text-[#805CF7] font-medium" : "text-gray-400"
            }`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
            {activeTab === tab.label && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-[#805CF7] rounded-t-full" />
            )}
          </div>
        ))}
      </div>

      {/* Tab content */}
      <div className="px-4 text-gray-400">
        {tabs.find((tab) => tab.label === activeTab)?.content}
      </div>
    </div>
  );
};

export default DetailsTabs;
