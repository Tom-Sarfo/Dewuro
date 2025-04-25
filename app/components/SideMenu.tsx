import { Link } from "react-router";
import BillboardIcon from "~/svg/BillboardIcon";
import HomeIcon from "~/svg/HomeIcon";
import RankingIcon from "~/svg/RankingIcon";
import SettingsIcon from "~/svg/SettingsIcon";
import WalletIcon from "~/svg/WalletIcon";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
  const menuItems = [
    {
      icon: (
        <HomeIcon />
      ),
      label: "Dashboard",
      path: "/",
    },
    {
      icon: (
        <WalletIcon />
      ),
      label: "Wallet",
      path: "/wallet",
    },
    {
      icon: (
        <RankingIcon />
      ),
      label: "Creator Ranking",
      path: "/creator-ranking",
    },
    {
      icon: (
        <BillboardIcon />
      ),
      label: "Create Ad space",
      path: "/create-ad-space",
    },
    {
      icon: (
        <SettingsIcon />
      ),
      label: "Settings",
      path: "/settings",
    },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-600/20 z-40" onClick={onClose} />
      )}

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Main menu items */}
          <div className="p-4 space-y-6">
            {menuItems.slice(0, -1).map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="flex items-center space-x-4 text-gray-600 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                onClick={onClose}
              >
                <div className="text-gray-400">{item.icon}</div>
                <span className="text-lg text-[#A9AAAA]">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Settings at bottom */}
          <div className="mt-auto p-4 border-t border-gray-100">
            <Link
              to={menuItems[menuItems.length - 1].path}
              className="flex items-center space-x-4 text-gray-600 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              onClick={onClose}
            >
              <div className="text-gray-400">
                {menuItems[menuItems.length - 1].icon}
              </div>
              <span className="text-lg">
                {menuItems[menuItems.length - 1].label}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
