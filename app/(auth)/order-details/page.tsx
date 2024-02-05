import React from "react";
import { Order } from "./components/order";
import { OrderForm } from "@/components/forms/order-form";

const OrderDetailsPage = () => {
  return (
    <>
      <div className="pt-20 lg:px-[20rem] px-[1.5rem] ">
        <div>
          <Order
            name="VIP First"
            price="Per unit Price "
            quantity="Quantity :"
            title="Your order"
            totalPrice="$450.00"
            totalQuantity="1"
            product="Product V1 :"
          />
        </div>
        <div className="mt-[1.5rem]">
          <OrderForm />
        </div>
      </div>
    </>
  );
};

export default OrderDetailsPage;
