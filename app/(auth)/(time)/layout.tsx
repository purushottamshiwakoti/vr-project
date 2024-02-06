import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[100%] lg:h-[120vh] h-[200vh] md:h-[140vh] bg-[url('/banner.png')] bg-cover">
      <div className="bg-black/50 lg:h-[120vh] h-[200vh] md:h-[140vh]  ">
        {children}
      </div>
    </div>
  );
};

export default RootLayout;
