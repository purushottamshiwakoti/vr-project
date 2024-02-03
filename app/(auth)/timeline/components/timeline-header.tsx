"use client";

import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React, { useState } from "react";
import { PopoverClose } from "@radix-ui/react-popover";

export const TimelineHeader = () => {
  const [openDate, setOpenDate] = useState<Date>();
  const [closeDate, setCloseDate] = useState<Date>();

  return (
    <>
      <div className="  ">
        <div>
          <h2 className="text-white text-3xl font-medium tracking-wide">
            Timeline
          </h2>
          <Separator className="lg:w-[60rem] mt-2 border-[#393939] " />
          <div className="w-[60rem] mt-4 lg:flex items-center justify-between space-y-6">
            <div className="flex items-center space-x-1 ">
              <h2 className="text-[#686868] text-xl font-medium">Open Date:</h2>
              <div className="text-white">
                <Popover>
                  <PopoverTrigger asChild>
                    <span className="text-lg font-normal cursor-pointer">
                      {openDate ? (
                        format(openDate, "dd-MM-yyyy")
                      ) : (
                        <span> DD-MM-YYYY</span>
                      )}
                    </span>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={openDate}
                      onSelect={setOpenDate}
                      initialFocus
                    />
                    <PopoverClose asChild>
                      <Button variant={"ghost"} className="w-full">
                        Done
                      </Button>
                    </PopoverClose>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="flex items-center space-x-1 ">
              <h2 className="text-[#686868] text-xl font-medium">
                Closing Date:
              </h2>
              <div className="text-white">
                <Popover>
                  <PopoverTrigger asChild>
                    <span className="text-lg font-normal cursor-pointer">
                      {closeDate ? (
                        format(closeDate, "dd-MM-yyyy")
                      ) : (
                        <span> DD-MM-YYYY</span>
                      )}
                    </span>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={closeDate}
                      onSelect={setCloseDate}
                      initialFocus
                    />
                    <PopoverClose asChild>
                      <Button variant={"ghost"} className="w-full">
                        Done
                      </Button>
                    </PopoverClose>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
