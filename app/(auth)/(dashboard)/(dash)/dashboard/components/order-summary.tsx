export const OrderSummary = () => {
  return (
    <>
      <div>
        <div className="bg-[#16131f] p-4  rounded-3xl border-2 border-[#333333]">
          <h2 className="text-xl font-medium text-white">Order Summary</h2>
          <div className="mt-2 bg-[#13101b]  rounded-xl border-2 border-[#333333] p-10">
            <h2 className="text-lg font-medium text-white">VIP First</h2>
            <div className=" flex items-center justify-between">
              <div>
                <ul className="text-white">
                  <li>
                    Payment : <span className="text-[#727272]">Full</span>
                  </li>
                  <li>
                    Deposit Amount :{" "}
                    <span className="text-[#727272]">$410</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="text-white">
                  <li>
                    Quantity : <span className="text-[#727272]">1</span>
                  </li>
                  <li>
                    Order date :{" "}
                    <span className="text-[#727272]">29 Jan 2023</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-2">
              <h3 className="text-white">
                Delivery Country :{" "}
                <span className="text-[#727272]">Australia</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
