"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export const PaymentForm = () => {
  const router = useRouter();
  return (
    <>
      <div className="border-2 border-[#333333] bg-[#1b1b1d] p-5 rounded-xl shadow-lg lg:w-[35rem] h-[30rem] items-center   flex flex-col">
        <h2 className="text-white text-xl justify-center h-full items-center flex font-medium ">
          Add your payment information
        </h2>
        <div className=" flex justify-end items-end">
          <Button
            type="submit"
            className="lg:w-[30rem] "
            onClick={() => router.push("/dashboard")}
          >
            Continue to payment
          </Button>
        </div>
      </div>
    </>
  );
};
