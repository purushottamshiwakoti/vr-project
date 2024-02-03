import React from "react";
import { Order } from "../order-details/components/order";
import { PaymentForm } from "@/components/forms/payment-form";

const PaymentPage = () => {
  return (
    <div>
      <div className="pt-20 lg:px-[30rem] px-[1.5rem] ">
        <Order
          name="VIP First"
          price="Per unit Price "
          quantity="Quantity :"
          title="Check Out"
          totalPrice="$450.00"
          totalQuantity="1"
          product="Product V1 :"
        />
      </div>
      <div className="flex items-center justify-center mt-10">
        <PaymentForm />
      </div>
    </div>
  );
};

export default PaymentPage;
