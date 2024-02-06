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
          className="md:h-[95vh] h-[140vh] border-[1.8px] lg:hidden ml-[3rem]"
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
    <>
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

      <div className="lg:hidden">
        <div>
          <div className="w-16 md:w-[6rem] h-1 bg-[#f95611] absolute top-[1.8rem] md:top-[2.8rem] left-[1.1rem] md:left-[1.4px] rotate-90 " />
          <div className="w-8 h-8 bg-[#8b8b8b]/20 rounded-full absolute top-[3.4rem] md:top-[4.6rem] left-[1.9rem]"></div>
          <div className="w-5 h-5 bg-[#f95611] rounded-full absolute top-[3.8rem] md:top-[5rem] left-[2.3rem]"></div>
          <div className="w-[5rem]  md:w-[10rem] h-1 bg-[#f95611] absolute top-[4.3rem] md:top-[5.5rem] left-[2.5rem] md:left-[2.9rem]  " />
        </div>
        <div className="bg-[#2E2939] border-2 border-[#f95611] w-[15rem] md:w-[25rem] h-[22rem] md:h-[17rem] p-2 absolute top-0 left-[7rem] rounded-3xl">
          <div>
            <h2 className="text-white text-xl font-medium mb-2">VIP First</h2>
            <div className="text-white text-xl font-medium mb-2">$450</div>
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

        <div className="absolute top-16 -left-[4rem] rotate-90">
          <div className="flex items-center space-x-2">
            <Info className="w-4 h-4 text-[#727272] mt-1" />
            <div className="flex items-center space-x-2">
              <h2 className="text-white text-xl font-medium">Phase 1</h2>
              <span className="text-[#727272] text-base font-medium">
                VIP First
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="w-8 h-8 bg-[#8b8b8b]/20 rounded-full absolute top-[25rem] md:top-[22rem] left-[1.9rem]"></div>
          <div className="w-5 h-5 bg-[#8B8B8B] rounded-full absolute top-[25.4rem] md:top-[22.3rem] left-[2.3rem]"></div>

          <div className="absolute top-[26rem] md:top-[24rem] -left-[4.4rem] rotate-90">
            <div className="flex items-center space-x-2">
              <Info className="w-4 h-4 text-[#727272] mt-1" />
              <div className="flex items-center space-x-2">
                <h2 className="text-white text-xl font-medium">Phase 2</h2>
                <span className="text-[#727272] text-base font-medium">
                  Early Bids
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-8 h-8 bg-[#8b8b8b]/20 rounded-full absolute top-[38rem] md:top-[38.6rem] left-[1.9rem]"></div>
          <div className="w-5 h-5 bg-[#8B8B8B] rounded-full absolute top-[38.4rem] md:top-[39rem] left-[2.3rem]"></div>
          <div className="w-[5rem]  md:w-[10rem] h-1 bg-[#8B8B8B] absolute top-[38.9rem] md:top-[39.5rem] left-[2.5rem] md:left-[2.9rem]  " />
          <div className="bg-[#2E2939] border-2 border-[#f95611] w-[15rem] md:w-[25rem] h-[22rem] md:h-[17rem] p-2 absolute top-[30rem] left-[7rem] rounded-3xl">
            <div>
              <h2 className="text-white text-xl font-medium mb-2">
                Kickstarter
              </h2>
              <div className="text-white text-xl font-medium mb-2">$450</div>
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
          <div className="absolute top-[40rem] -left-[4.8rem] rotate-90">
            <div className="flex items-center space-x-2">
              <Info className="w-4 h-4 text-[#727272] mt-1" />
              <div className="flex items-center space-x-2">
                <h2 className="text-white text-xl font-medium">Phase 3</h2>
                <span className="text-[#727272] text-base font-medium">
                  Kickstarter
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="w-8 h-8 bg-[#8b8b8b]/20 rounded-full absolute top-[55rem] md:top-[55rem] left-[1.9rem]"></div>
          <div className="w-5 h-5 bg-[#8B8B8B] rounded-full absolute top-[55.4rem] md:top-[55.4rem] left-[2.3rem]"></div>

          <div className="absolute top-[56rem] -left-[6rem] rotate-90">
            <div className="flex items-center space-x-2">
              <Info className="w-4 h-4 text-[#727272] mt-1" />
              <div className="flex items-center space-x-2">
                <h2 className="text-white text-xl font-medium">Phase 4</h2>
                <span className="text-[#727272] text-base font-medium">
                  Public Pre-order
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="w-10 h-1 bg-red-500 absolute top-0 left-10"></div> */}
      </div>
    </>

    //   todo: make responsive
  );
};
