import { Separator } from "@/components/ui/separator";

export const Order = () => {
  return (
    <>
      <div className="space-y-4">
        <h2 className="text-white text-xl font-medium">Your Order</h2>
        <Separator className="w-full border-[#393939]" />
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-[#686868]">
              Product V1: <span className="text-white">VIP First</span>
            </h2>
            <h2 className="text-lg font-medium text-[#686868]">
              Quantity: <span className="text-white">1</span>
            </h2>
          </div>
          <div>
            <h2 className="text-lg font-medium text-[#686868]">
              Per unit Price
            </h2>
            <h2 className="text-lg font-medium text-[#686868]">
              <span className="text-white -ml-5">$450.00</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
