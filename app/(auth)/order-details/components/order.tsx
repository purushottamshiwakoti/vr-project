import { Separator } from "@/components/ui/separator";

interface OrderProps {
  title: string;
  name?: string;
  quantity?: string;
  totalQuantity?: string;
  price?: string;
  totalPrice?: string;
  product?: string;
}

export const Order = ({
  product,
  name,
  price,
  quantity,
  title,
  totalPrice,
  totalQuantity,
}: OrderProps) => {
  return (
    <>
      <div className="space-y-4">
        <h2 className="text-white text-xl font-medium">{title}</h2>
        <Separator className="w-full border-[#393939]" />
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-[#686868]">
              {product} <span className="text-white">{name}</span>
            </h2>
            <h2 className="text-lg font-medium text-[#686868]">
              {quantity}
              <span className="text-white">{totalQuantity}</span>
            </h2>
          </div>
          <div>
            <h2 className="text-lg font-medium text-[#686868]">{price}</h2>
            <h2 className="text-lg font-medium text-[#686868]">
              <span className="text-white ">{totalPrice}</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
