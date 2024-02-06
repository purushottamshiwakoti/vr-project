import { PageWrapper } from "@/components/page-wrapper";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { TimelineHeader } from "./components/timeline-header";
import { TimelineComponent } from "./components/timeline-component";

const TimelinePage = () => {
  return (
    <>
      <div className="pt-20">
        <div className="lg:flex items-center justify-center mx-10 lg:mx-0">
          <TimelineHeader title="Timeline" />
          <div></div>
        </div>
        <div>
          <TimelineComponent />
        </div>
      </div>
    </>
  );
};

export default TimelinePage;
