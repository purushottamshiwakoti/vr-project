import React from "react";
import { SelectProduct } from "./components/select-product";
import { TimelineHeader } from "../../(time)/timeline/components/timeline-header";

const PreOrderList = () => {
  return (
    <>
      <div className="pt-20 mx-10 lg:mx-0">
        <div className="lg:flex items-center justify-center ">
          <TimelineHeader title="Pre-order List" />
        </div>
        <div className="lg:mx-[15rem] md:mx-[1rem] mt-10">
          <SelectProduct />
        </div>
      </div>
    </>
  );
};

export default PreOrderList;
