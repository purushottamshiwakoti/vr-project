import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Copy } from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaGoogle,
  FaTiktok,
  FaTelegram,
} from "react-icons/fa";
import { FaXTwitter, FaSnapchat } from "react-icons/fa6";

export const Refferal = () => {
  return (
    <>
      <div className="bg-[#16131f] p-8  rounded-3xl border-2 border-[#333333]">
        <h2 className="text-lg font-medium text-white">
          Earn rewards on every referral.
        </h2>
        <p className="text-[#727272] font-medium">
          {" "}
          Share your unique link on the web and let your friends know how you
          get up to $5.
        </p>
        <div className="mt-4 md:flex">
          <div className=" w-[90%]">
            <Select>
              <SelectTrigger className=" md:rounded-r-none h-[2.7rem] ring-0">
                <SelectValue placeholder="hanumanverse.com/id/#12345" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="-mt-[0.2px]">
            <Button className="md:absolute  md:flex hidden items-center  -ml-[15px] h-[2.7rem] rounded-l-none bg-[#333039] text-[#a1a1a1] border-[2px] border-[#5a5a5a] hover:bg-[#333039]  ">
              <Copy className="w-5 h-5 mr-2" />
              Copy
            </Button>
          </div>
          <div className="mt-3 ">
            <Button className="  md:hidden   bg-[#333039] text-[#a1a1a1] border-[2px] border-[#5a5a5a] hover:bg-[#333039]  ">
              <Copy className="w-5 h-5 mr-2" />
              Copy
            </Button>
          </div>
        </div>
        <div className="text-[#a3a3a3] mt-5 flex w-full items-center justify-center gap-6 ">
          <FaFacebook className="w-7 h-7 cursor-pointer" />
          <FaInstagram className="w-7 h-7 cursor-pointer" />
          <FaGoogle className="w-7 h-7 cursor-pointer" />
          <FaXTwitter className="w-7 h-7 cursor-pointer" />
          <FaTiktok className="w-7 h-7 cursor-pointer" />
          <FaTelegram className="w-7 h-7 cursor-pointer" />
          <FaSnapchat className="w-7 h-7 cursor-pointer" />
        </div>
        <Separator className="mt-10 w-full " />
        <div className="mt-10 space-y-3">
          <h2 className="text-white text-lg font-medium">Referral History</h2>
          <p className="text-[#8c8c8c]">You haven’t referred anyone yet. </p>
        </div>
      </div>
    </>
  );
};
