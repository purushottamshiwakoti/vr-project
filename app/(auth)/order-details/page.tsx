import React from "react";
import { Order } from "./components/order";
import { OrderForm } from "@/components/forms/order-form";

const OrderDetailsPage = () => {
  return (
    <>
      <div className="pt-20 lg:px-[30rem] px-[1.5rem] ">
        <div>
          <Order />
        </div>
        <div className="mt-[1.5rem]">
          <OrderForm />
        </div>
      </div>
    </>
  );
};

export default OrderDetailsPage;
