import { Button } from "@/components/ui/button";

export const Rewards = () => {
  return (
    <>
      <div className="bg-[#16131f] p-4  rounded-3xl border-2 border-[#333333]">
        <h2 className="text-lg font-medium text-white">Accumulated Rewards</h2>
        <div className="mt-5 bg-[#13101b]  rounded-xl border-2 border-[#333333] p-5">
          <div className="flex items-center justify-between">
            <p className="text-white">
              You have received rewards of $10 USD on “Deposit 1 Name”{" "}
            </p>
            <Button className="bg-white text-black font-medium hover:bg-white/80">
              Withdraw
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
