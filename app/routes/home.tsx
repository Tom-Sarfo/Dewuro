import React, { useState } from "react";
import { Outlet } from "react-router";
import Header from "~/components/Common/Header";
import SideMenu from "~/components/SideMenu";

function Home() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen text-gray-900">
      {/* Header */}
      <Header title="Dewuro" onMenuClick={() => setIsSideMenuOpen(true)} />
      {/* Side Menu */}
      <SideMenu
        isOpen={isSideMenuOpen}
        onClose={() => setIsSideMenuOpen(false)}
      />
      {/* Main Content */}
      <main className="pt-[44px]">
        <Outlet />
      </main>
    </div>
  );
}

export default Home;
