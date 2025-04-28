import React, { useState } from "react";
import { Target, DollarSign, Clock, Megaphone, Gift } from "lucide-react";
import { Link } from "react-router";
import Tabs from "./Common/Tabs";
import TargetIcon from "~/svg/TargetIcon";
import MoneyBagIcon from "~/svg/MoneyBagIcon";
import TimeIcon from "~/svg/TimeIcon";
import MegaPhoneIcon from "~/svg/MegaPhone";
import GiftIcon from "~/svg/GiftIcon";
import EmptyState from "./EmptyState";
import CreatorCard from "./CreatorCard";
import CheckedIcon from "~/svg/CheckedIcon";

interface BrandCampaignProps {
  logo: string;
  name: string;
  description: string;
  objective: string;
  earnings: string;
  duration: string;
  platforms: string[];
  bonus: string;
}

const BrandCampaign: React.FC<BrandCampaignProps> = ({
  logo,
  name,
  description,
  objective,
  earnings,
  duration,
  platforms,
  bonus,
}) => {
  // Modal and tab state
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState<"tab1" | "tab2">("tab1");

  // Campaign Details Content
  const CampaignDetails = () => (
    <div className="space-y-6 px-4">
      <h3 className="text-lg font-semibold text-gray-900">
        Campaign description
      </h3>

      <div className="space-y-6">
        {/* Objective */}
        <div className="flex items-start gap-3">
          <TargetIcon className="w-6 h-6 text-[#805CF7] mt-1" />
          <div>
            <p className="text-gray-500 text-sm">Objective:</p>
            <p className="text-gray-900">{objective}</p>
          </div>
        </div>

        {/* Earnings */}
        <div className="flex items-start gap-3">
          <MoneyBagIcon className="w-6 h-6 text-[#805CF7] mt-1" />
          <div>
            <p className="text-gray-500 text-sm">Earnings:</p>
            <p className="text-gray-900">{earnings}</p>
          </div>
        </div>

        {/* Duration */}
        <div className="flex items-start gap-3">
          <TimeIcon className="w-6 h-6 text-[#805CF7] mt-1" />
          <div>
            <p className="text-gray-500 text-sm">Duration:</p>
            <p className="text-gray-900">{duration}</p>
          </div>
        </div>

        {/* Preferred platforms */}
        <div className="flex items-start gap-3">
          <MegaPhoneIcon className="w-6 h-6 text-[#805CF7] mt-1" />
          <div>
            <p className="text-gray-500 text-sm">Preferred platforms:</p>
            <p className="text-gray-900">{platforms.join(", ")}</p>
          </div>
        </div>

        {/* Bonus */}
        <div className="flex items-start gap-3">
          <GiftIcon className="w-6 h-6 text-[#805CF7] mt-1" />
          <div>
            <p className="text-gray-500 text-sm">Bonus:</p>
            <p className="text-gray-900">{bonus}</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Creators on Board Content (now displays three CreatorCards if not empty)
  const creators = [
    {
      rank: 8,
      logo: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "John Doe",
      acronym: "JD",
      studio: "StudioX",
      engagementRate: 12.5,
      followers: "10.2K",
      id: "1",
    },
    {
      rank: 6,
      logo: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Jane Smith",
      acronym: "JS",
      studio: "StudioY",
      engagementRate: 15.3,
      followers: "8.7K",
      id: "2",
    },
    {
      rank: 3,
      logo: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Mike Brown",
      acronym: "MB",
      studio: "StudioZ",
      engagementRate: 9.8,
      followers: "12.1K",
      id: "3",
    },
  ];

  const CreatorsOnBoard = () => (
    <div className="py-8 px-4">
      {creators.length === 0 ? (
        <div className="text-center text-gray-500">
          <EmptyState />
        </div>
      ) : (
        <div className="space-y-4">
          {creators.map((creator) => (
            <CreatorCard key={creator.id} {...creator} />
          ))}
        </div>
      )}
    </div>
  );

  // Modal UI for success
  const SuccessModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl p-4 max-w-xs w-full text-center sm:p-8 sm:max-w-sm relative">
        <button
          className="absolute px-2 top-2 right-2 text-gray-400 hover:text-gray-700 text-3xl focus:outline-none"
          onClick={() => {
            setShowModal(false);
            setActiveTab("tab2");
          }}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center mb-6">
            <CheckedIcon />
          </div>
          <h2 className="text-2xl font-semibold mb-2">
            Creator applied successfully
          </h2>
          <p className="text-[#6EC1C6] mb-6">
            Awaiting approval from Tap tap send
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b">
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt={name}
            className="w-12 h-12 rounded-lg object-contain"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
            <p className="text-gray-500">{description}</p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="py-4">
        <Tabs
          tabOneLabel="Details"
          tabTwoLabel="Creators on Board"
          tabOneContent={<CampaignDetails />}
          tabTwoContent={<CreatorsOnBoard />}
          className="mb-6"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      {/* Action Buttons */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t z-50 flex justify-between items-center px-4 py-3 bg-[#f9f9f9]">
        <Link
          to="/chat"
          className="text-[#805CF7] font-medium px-4 py-2 bg-white border rounded-md"
        >
          Chat now
        </Link>
        <button
          className="bg-[#805CF7] text-white text-center hover:bg-[#805CF7]/90 transition-colors font-medium px-4 py-2 rounded-md"
          onClick={() => setShowModal(true)}
        >
          Apply
        </button>
      </div>
      {showModal && <SuccessModal />}
    </div>
  );
};

export default BrandCampaign;
