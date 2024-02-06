import React from "react";

const DashLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full lg:h-[150vh] h-[175vh] md:h-[100vh] bg-[url('/banner.png')] bg-cover">
      <div className="bg-black/50 lg:h-[150vh] h-[175vh] md:h-[10vh]  ">
        {children}
      </div>
    </div>
  );
};

export default DashLayout;
