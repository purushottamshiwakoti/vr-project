"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";
import { useRouter } from "next/navigation";

// ... (imports)

export const TimelineComponent = () => {
  const router = useRouter();
  return (
    <div className="lg:mt-[30rem] mt-[1rem]">
      <div className="relative">
        <Separator className="w-[100%] border-white/40 border-[1.8px] absolute left-0 lg:block hidden" />
        <Separator
          orientation="vertical"
          className="h-[50vh] border-[1.8px] lg:hidden ml-10"
        />
        <div className="lg:flex justify-between max-w-[90%] hidden">
          <TimelineCard
            currentStep
            showCard
            title="Phase 1"
            subTitle="VIP First"
            cardTitle="VIP First"
            cardSubtitle="$450"
          />
          <TimelineCard showIcon title="Phase 2" subTitle="Early Birds" />
          <TimelineCard
            showIcon
            showCard
            changeColor
            title="Phase 3"
            subTitle="Kickstarter"
            cardTitle="Kickstarter"
            cardSubtitle="$450"
          />
          <TimelineCard showIcon subTitle="Public Pre-order" title="Phase 4" />
        </div>

        <div className="lg:hidden">
          <TimelineCard
            currentStep
            showCard
            title="Phase 1"
            subTitle="VIP First"
            cardTitle="VIP First"
            cardSubtitle="$450"
          />
        </div>

        <div>{/* whiteis rounded cirxle  */}</div>
      </div>

      <div className="pt-[7rem] w-full flex items-center justify-center">
        <Button
          className="lg:w-[40rem] w-[20rem] "
          onClick={() => {
            router.push("/order-details");
          }}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export const TimelineCard = ({
  currentStep,
  showCard,
  changeColor,
  showIcon,
  title,
  subTitle,
  cardTitle,
  cardSubtitle,
}: {
  currentStep?: boolean;
  showCard?: boolean;
  changeColor?: boolean;
  showIcon?: boolean;
  title: string;
  subTitle: string;
  cardTitle?: string;
  cardSubtitle?: string;
}) => {
  return (
    <Separator
      className={cn(
        currentStep
          ? "border-[#f95611] w-[10%] border-[2px] z-10 relative hidden lg:block"
          : "w-[10%] border-[2px] z-10 relative hidden lg:block"
      )}
    >
      <div className="bg-white/20 w-12 h-12 rounded-full absolute -right-5 -top-6" />

      <div
        className={cn(
          currentStep
            ? "bg-[#f95611] border-4 border-[#fa6a2d] w-8 h-8 rounded-full absolute -right-3 -top-4"
            : "bg-[#8b8b8b]  w-8 h-8 rounded-full absolute -right-3 -top-4 z-20"
        )}
      />
      {showCard && (
        <>
          <div
            className={cn(
              changeColor
                ? "bg-[#5a5a5a] border-2 border-[#5a5a5a] h-[7rem] w-[1px]  absolute right-0 bottom-[0.7rem]"
                : "bg-[#f95611] border-2 border-[#fa6a2d] h-[7rem] w-[1px]  absolute right-0 bottom-[0.7rem]"
            )}
          />
          <div
            className={cn(
              changeColor
                ? "w-[28rem] h-[16.7rem]   rounded-lg bg-[#5a5a5a] absolute left-[5rem] bottom-[7.6rem]"
                : "w-[28rem] h-[16.7rem]   rounded-lg bg-gradient-to-tr from-orange-600 to-orange-300 absolute left-[5rem] bottom-[7.6rem]"
            )}
          >
            <div
              className={cn(
                changeColor
                  ? "h-[16.5rem] w-[27.78rem]  border-t-[1.8px] border-[#5a5a5a] ml-[2px] mr-[1px] bg-[#2e2939]  rounded-md"
                  : "h-[16.5rem] w-[27.78rem]  border-t-[1.8px] border-[#fa6a2d] ml-[2px] mr-[1px] bg-[#2e2939]  rounded-md"
              )}
            >
              <div className="p-3 ">
                <h2 className="text-white text-xl font-medium mb-2">
                  {cardTitle}
                </h2>
                <div className="text-white text-xl font-medium mb-2">
                  {cardSubtitle}
                </div>
                <div className="text-[#727272] mb-2">
                  <ul className="list-disc ml-7">
                    <li>USD Accepted</li>
                    <li>- 10% APY of deposit till the delivery</li>
                    <li>- Only 100 units</li>
                  </ul>
                </div>
                <div className="text-[#727272] mb-2 flex ">
                  <div>
                    <Info className="w-5 h-5" />
                  </div>
                  <ul className=" ml-2">
                    <li>Full Payment - 10% Discount ($450 $410)</li>
                    <li>Booking with Minimum Amount - $100</li>
                    <li>($350 at the time of delivery confirmation)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="absolute -right-10 mt-10 ">
        <div className="flex items-start space-x-2">
          {showIcon && <Info className="w-7 h-7 text-[#727272] mt-1" />}
          <div>
            <h2 className="text-white text-xl font-medium">{title} </h2>
            <span className="text-[#727272] text-base font-medium">
              {subTitle}
            </span>
          </div>
        </div>
      </div>
    </Separator>

    //   todo: make responsive
  );
};
