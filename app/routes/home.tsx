import React from "react";
import { Outlet } from "react-router";
import Header from "~/components/Common/Header";

function Home() {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      {/* Header */}
      <Header title="Dewuro" />
      {/* Main Content */}
      <main className="pt-[44px]">
        <Outlet />
      </main>
    </div>
  );
}

export default Home;
