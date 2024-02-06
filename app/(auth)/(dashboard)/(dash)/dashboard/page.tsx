import React from "react";
import { OrderSummary } from "./components/order-summary";
import { Rewards } from "./components/rewards";
import { Refferal } from "./components/refferal";
import { Order } from "../../(order-details)/order-details/components/order";

const DashboardPage = () => {
  return (
    <div className="pt-20  lg:px-[25rem] px-[1.5rem]   ">
      <div>
        <Order title="Dashboard" />
      </div>
      <div>
        <OrderSummary />
      </div>
      <div className="mt-10">
        <Rewards />
      </div>
      <div className="mt-10">
        <Refferal />
      </div>
    </div>
  );
};

export default DashboardPage;
