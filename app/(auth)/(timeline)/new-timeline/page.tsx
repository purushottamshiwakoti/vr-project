import React from "react";

import { TimelineComponent } from "./components/timeline-component";
import { TimelineHeader } from "../../timeline/components/timeline-header";

const NewTimeline = () => {
  return (
    <>
      <div className="pt-20 mx-10 lg:mx-0 overflow-y-hidden">
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
