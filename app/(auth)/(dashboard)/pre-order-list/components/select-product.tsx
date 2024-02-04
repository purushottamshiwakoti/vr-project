"use client";

import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { useState } from "react";

export const SelectProduct = () => {
  return (
    <>
      <div className="bg-[#16131f] p-8  rounded-2xl border-2 border-[#333333]">
        <h3 className="text-white font-medium text-center">Select a Product</h3>
        <div className="grid grid-cols-2 mt-10 gap-5">
          <ProductCard
            description="Full Payment - 10% Discount ($450 - $410) Booking with Minimum
          Amount - $100 ($350 at the time of delivery confirmation)"
            title="VIP First"
            value="$450"
            list={
              <>
                <li>USD Accepted</li>
                <li>- 10% APY of deposit till the delivery</li>
                <li>- Only 100 units</li>
              </>
            }
          />
          <ProductCard
            description="Full Payment - 10% Discount ($450 - $410) Booking with Minimum
          Amount - $100 ($350 at the time of delivery confirmation)"
            title="Early Birds"
            value="$500"
            list={
              <>
                <li>- USD & EUR Accepted</li>
                <li>- 8% APY of Deposit till the delivery </li>
              </>
            }
          />
          <ProductCard
            description="Full Payment - 10% Discount ($450 - $410) Booking with Minimum
          Amount - $100 ($350 at the time of delivery confirmation)"
            title="Kickstarter"
            value="$550"
            list={
              <>
                <li>USD Accepted</li>
                <li>- 6% apy of Deposit till the delivery </li>
              </>
            }
          />
          <ProductCard
            description="Full Payment - 10% Discount ($450 - $410) Booking with Minimum
          Amount - $100 ($350 at the time of delivery confirmation)"
            title="Public Perorder"
            value="$600"
            list={
              <>
                <li>- USD & EUR Accepted</li>
                <li>- 5% apy of Deposit till the delivery </li>
                <li>- Give 5%, Get 5% Referral</li>
              </>
            }
          />
        </div>
        <div className="mt-10 ">
          <Button className="w-full flex items-center justify-center">
            Continue
          </Button>
        </div>
      </div>
    </>
  );
};

const ProductCard = ({
  title,
  value,
  description,
  list,
}: {
  title: string;
  value: string;
  description: string;
  list: any;
}) => {
  const [selected, setSelected] = useState("$450");
  return (
    <>
      <div
        className={`border-2 rounded-lg space-y-2 p-5 cursor-pointer ${
          selected === value ? "" : "border-2 border-[#5a5a5a]"
        }`}
        onClick={() => setSelected(`${value}`)}
      >
        <h2 className="text-white font-medium">{title}</h2>
        <h2 className="text-white font-medium">{value}</h2>
        <div>
          <ul className="text-[#727272] list-disc ml-10">{list}</ul>
        </div>
        <div className="text-[#727272] flex items-start mt-2 ">
          <Info className="h-10 w-10 mr-2 " />
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};
