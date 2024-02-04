import React from "react";
import { Order } from "../order-details/components/order";
import { TimelineHeader } from "../timeline/components/timeline-header";
import { TimelineComponent } from "./components/timeline-component";

const NewTimeline = () => {
  return (
    <>
      <div className="pt-20 mx-10 lg:mx-0">
        <div className="lg:flex items-center justify-center ">
          <TimelineHeader title="Timeline" />
        </div>
      </div>
      <div className="mt-10">
        <TimelineComponent />
      </div>
    </>
  );
};

export default NewTimeline;
