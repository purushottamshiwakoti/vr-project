import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import Image from "next/image";

export const TimelineComponent = () => {
  return (
    <>
      <div className="flex flex-col overflow-x-hidden">
        <div className="md:space-x-6 flex md:flex-row flex-col space-y-4 md:space-y-0 px-10 md:px-0 items-center justify-center">
          <Button className="px-8 py-2 bg-white text-black font-medium md:w-auto w-full text-lg hover:bg-white/80">
            Phase 1
          </Button>
          <Button className="px-8 md:w-auto w-full py-2 bg-transparent border-2 border-[#5a5a5a] text-white  font-medium text-lg hover:bg-transparent">
            Phase 2
          </Button>
          <Button className="px-8 md:w-auto w-full py-2 bg-transparent border-2 border-[#5a5a5a] text-white  font-medium text-lg hover:bg-transparent">
            Phase 3
          </Button>
          <Button className="px-8 md:w-auto w-full py-2 bg-transparent border-2 border-[#5a5a5a] text-white  font-medium text-lg hover:bg-transparent">
            Phase 4
          </Button>
        </div>
        <div className="mt-10 flex lg:flex-row flex-col justify-between md:mx-32 mx-10 ">
          <div className="flex md:space-x-16 space-x-8  md:mt-3">
            <div className="space-y-10  ">
              <div className="relative">
                <div className="bg-[#f45516] w-5 h-5 rounded-full z-50  " />
                <div className="bg-[#f45516]/20 w-10 h-10 rounded-full absolute -top-[10px]  -left-[10px] " />
              </div>
              <div className="bg-[#8B8B8B] w-5 h-5 rounded-full z-50  " />
              <div className="bg-[#8B8B8B] w-5 h-5 rounded-full z-50  " />
              <div className="bg-[#8B8B8B] w-5 h-5 rounded-full z-50  " />
              <div></div>
            </div>
            <div className="space-y-4 -mt-3">
              <h2 className="text-white md:text-3xl font-semibold w-[20rem] tracking-wide leading-10">
                Explore a new virtual reality world.
              </h2>
              <div>
                <h2 className="text-white font-medium">VIP First</h2>
              </div>
              <div>
                <h2 className="text-white font-medium">$450</h2>
                <div>
                  <ul className="mt-2 ml-2 text-[#727272] max-w-[17rem] md:max-w-full list-disc">
                    <li>USD Accepted</li>
                    <li>- 10% APY of deposit till the delivery</li>
                    <li>- Only 100 units</li>
                  </ul>
                </div>
                <div className="text-[#727272] max-w-[16rem] md:max-w-full flex mt-4">
                  <Info className="w-5 h-5 mr-2" />
                  <p className="w-[28rem]">
                    Full Payment - 10% Discount ($450 - $410) Booking with
                    Minimum Amount - $100 ($350 at the time of delivery
                    confirmation)
                  </p>
                </div>
              </div>
              <div className="px-5">
                <Button className="md:w-full w-[10rem] md:h-[56px]">
                  Continue
                </Button>
              </div>
            </div>
          </div>

          <div className="relative md:-mt-[2rem] z-[999] opacity-70">
            <Image
              src={"/banner2.png"}
              alt="hii"
              width={500}
              height={500}
              className=""
            />
            {/* <div className="w-96 h-96 rounded-full bg-[#6941C6] absolute top-0 left-[20rem]"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};
