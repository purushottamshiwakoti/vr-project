import React from "react";
import { SelectProduct } from "./components/select-product";
import { TimelineHeader } from "../../timeline/components/timeline-header";

const PreOrderList = () => {
  return (
    <>
      <div className="pt-20 mx-10 lg:mx-0">
        <div className="lg:flex items-center justify-center ">
          <TimelineHeader title="Pre-order List" />
        </div>
        <div className="mx-[15rem] mt-10">
          <SelectProduct />
        </div>
      </div>
    </>
  );
};

export default PreOrderList;
