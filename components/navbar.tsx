"use client";

import { userNav } from "@/lib/nav";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DialogClose } from "@radix-ui/react-dialog";

export const Navbar = () => {
  const path = usePathname();
  return (
    <>
      <nav>
        <div className="bg-[#120e16] fixed w-full h-16 flex items-center justify-between lg:px-32 px-5">
          <div className="text-white lg:text-3xl md:text-2xl text-xl  font-medium  ">
            <Link href={"/"}>logo</Link>
          </div>
          <div className="lg:flex items-center gap-10 hidden">
            <ul className="text-white flex gap-10">
              {userNav.map((item, index) => (
                <li key={index}>
                  {!item.hasChildren ? (
                    <Link
                      href={item.href}
                      className={cn(
                        path == item.href ? "text-white" : "text-[#b3b3b3]"
                      )}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div className="flex items-center text-[#b3b3b3] cursor-pointer">
                      {item.name}
                      <ChevronDown className="w-5 h-5 ml-1" />
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="gap-10 flex">
              <Button variant={"ghost"} className="text-white">
                Login
              </Button>
              <Button>Pre-Order</Button>
            </div>
          </div>
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu className="w-7 h-7" color="white" />
              </SheetTrigger>
              <SheetContent className="bg-black/80">
                <div className="space-y-6">
                  <ul className="text-white  space-y-6">
                    {userNav.map((item, index) => (
                      <li key={index}>
                        {!item.hasChildren ? (
                          <DialogClose asChild>
                            <Link
                              href={item.href}
                              className={cn(
                                path == item.href
                                  ? "text-white"
                                  : "text-[#b3b3b3]"
                              )}
                            >
                              {item.name}
                            </Link>
                          </DialogClose>
                        ) : (
                          <div className="flex items-center text-[#b3b3b3] cursor-pointer">
                            {item.name}
                            <ChevronDown className="w-5 h-5 ml-1" />
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col space-y-6">
                    <Button
                      variant={"ghost"}
                      className="text-white flex items-start justify-start -ml-4"
                      asChild
                    >
                      <DialogClose asChild>
                        <Link href={"/login"}>Login</Link>
                      </DialogClose>
                    </Button>
                    <Button
                      className="flex items-start justify-start -ml-4"
                      asChild
                    >
                      <DialogClose asChild>
                        <Link href={"/pre-order"}>Pre-Order</Link>
                      </DialogClose>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
};
