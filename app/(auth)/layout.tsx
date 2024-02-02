import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full bg-[url('/banner.png')] bg-cover">
      <div className="bg-black/50 h-full ">{children}</div>
    </div>
  );
};

export default RootLayout;
