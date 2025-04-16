import { useState } from "react";

interface Tab {
  label: string;
  content: string;
}

interface TabbedContentProps {
  tabs: Tab[];
}



const TabbedContent: React.FC<TabbedContentProps> = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showFull, setShowFull] = useState(false);

  const toggleShowMore = () => setShowFull((prev) => !prev);
  const tabs: Tab[] = [
    {
      label: "Details",
      content:
        "This nonsense must stop is a movement by the two controversial artist in the music industry. They both hold opposing view on how stage craft should look like...",
    },
    { label: "Offers", content: "Offers content goes here..." },
    { label: "Ad files", content: "Uploaded ad files will be shown here." },
  ];

  const renderContent = () => {
    const content = tabs[activeTab].content;
    if (content.length <= 150) return content;

    return (
      <>
        {showFull ? content : `${content.slice(0, 150)}...`}
        <button
          className="ml-1 text-[#805CF7] text-sm"
          onClick={toggleShowMore}
        >
          {showFull ? "view less" : "view more"}
        </button>
      </>
    );
  };

  return (
    <div className="bg-[#F9F9F9] rounded-md">
      {/* Tabs */}
      <div className="flex space-x-6 border-b px-4 pt-3">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`pb-2 text-sm font-medium ${
              activeTab === index
                ? "text-[#805CF7] border-b-2 border-[#805CF7]"
                : "text-gray-400"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="px-4 py-3 text-sm text-gray-500 overflow-y-auto max-h-40">
        {renderContent()}
      </div>
    </div>
  );
};

export default TabbedContent;
