import React from "react";
import BrandCampaign from "../components/BrandCampaign";

const CampaignDetails: React.FC = () => {
  const campaignData = {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjeVdsvELOFki1dcywiYrEFOLa5RAOPFKUsA&s", // You'll need to add this image to your public folder
    name: "Tap tap send",
    description: "Send money to Africa, Asia, and Latin America",
    objective: "Share our promo flyer on instagram",
    earnings: "10% commission per sale",
    duration: "1 month",
    platforms: ["YouTube", "Tiktok", "Instagram"],
    bonus: "Extra 5% commission for top perfomers",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <BrandCampaign {...campaignData} />
    </div>
  );
};

export default CampaignDetails;
