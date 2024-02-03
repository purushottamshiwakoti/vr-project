import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full lg:h-[120vh] h-[150vh] md:h-[100vh] bg-[url('/banner.png')] bg-cover">
      <div className="bg-black/50 lg:h-[120vh] h-[150vh] md:h-[100vh]  ">
        {children}
      </div>
    </div>
  );
};

export default RootLayout;
