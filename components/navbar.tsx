"use client";

import { userNav } from "@/lib/nav";
import { cn } from "@/lib/utils";
import { Book, ChevronDown, ChevronUp, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DialogClose } from "@radix-ui/react-dialog";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export const Navbar = () => {
  const [openNav, setOpenNav] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpenNav("");
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);

  const path = usePathname();
  return (
    <>
      <nav>
        <div className="bg-[#120e16] fixed w-full h-16 flex items-center justify-between lg:px-32 px-5 z-50 ">
          <div className="text-white lg:text-3xl md:text-2xl text-xl  font-medium  ">
            <Link href={"/"}>
              <div className="relative  md:w-[300px] w-[200px] h-[50px]     ">
                <Image src={"/nav-logo.png"} alt={"humanverse"} fill />
              </div>
            </Link>
          </div>
          <div className="lg:flex items-center gap-10 hidden">
            <ul className="text-white flex space-x-10">
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
                    <div className="flex flex-col h-auto ">
                      <div
                        className="flex items-center text-[#b3b3b3] cursor-pointer relative "
                        ref={ref}
                        onClick={() => setOpenNav(item.name)}
                      >
                        {item.name}
                        {item.name == openNav ? (
                          <ChevronUp className="w-5 h-5 ml-1" />
                        ) : (
                          <ChevronDown className="w-5 h-5 ml-1" />
                        )}
                      </div>
                      {item.name === openNav && (
                        <div className="absolute top-14 -ml-[15rem] w-[40rem]  ">
                          <div className="flex ">
                            <div className="bg-[#06090F]  rounded-t-lg rounded-l-lg border-l-[1px] border-b-[1px] border-[#727272]  w-full p-4">
                              <div>
                                {item.name === openNav &&
                                  item.children?.map((item) =>
                                    item.nav.map((navItem) => (
                                      <div className="flex " key={navItem.name}>
                                        <div className="flex mb-4  cursor-pointer">
                                          <navItem.icon className="w-6 h-6 text-green-500 mr-2 items-start mt-2" />
                                          <div>
                                            <h2>{navItem.name}</h2>
                                            <p className="text-[#727272]">
                                              {navItem.description}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    ))
                                  )}
                              </div>
                            </div>
                            <div
                              className="bg-[#202020] w-full
                              rounded-r-lg  border-b-[1px]
                              p-4 border-[#727272]
                            "
                            >
                              {item.name === openNav &&
                                item.children?.map((it) => (
                                  <div key={it.title}>
                                    <div className="w-[17rem] h-[7rem] relative">
                                      <Image
                                        src={it.image}
                                        alt={it.image}
                                        fill
                                        className="rounded-md"
                                      />
                                    </div>
                                    <div className="ml-3 space-y-2">
                                      <h2 className="mt-5  font-medium">
                                        {it.title}
                                      </h2>
                                      <p className="text-[#727272] tracking-tight leading-5">
                                        {it.description}
                                      </p>
                                      <div className="text-[#727272] tracking-normal font-medium flex items-center  space-x-4">
                                        <h2 className="cursor-pointer">
                                          {it.button1}
                                        </h2>
                                        <h2 className="cursor-pointer">
                                          {it.button2}
                                        </h2>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="gap-10 flex">
              <Button variant={"ghost"} className="text-white" asChild>
                <Link href={"/signup"}>Login</Link>
              </Button>
              <Button asChild>
                <Link href={"/pre-order"}>Pre-Order</Link>
              </Button>
            </div>
          </div>
          <div className="lg:hidden  overflow-auto">
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
                          <div
                            className="flex items-center text-[#b3b3b3]  
                           
                            cursor-pointer relative"
                            ref={ref}
                            onClick={() => setOpenNav(item.name)}
                          >
                            {item.name}
                            {item.name == openNav ? (
                              <ChevronUp className="w-5 h-5 ml-1" />
                            ) : (
                              <ChevronDown className="w-5 h-5 ml-1" />
                            )}
                          </div>
                        )}
                        {item.name === openNav && (
                          <div className="absolute lg:-ml-[15rem] -ml-[1rem] mt-[1rem] h-[30rem]  lg:w-[40rem] w-full z-50 overflow-y-auto ">
                            <div className=" ">
                              <div className="bg-[#06090F]  rounded-t-lg rounded-l-lg border-l-[1px] border-b-[1px] border-[#727272]  w-full p-4">
                                <div>
                                  {item.name === openNav &&
                                    item.children?.map((item) =>
                                      item.nav.map((navItem) => (
                                        <div className="" key={navItem.name}>
                                          <div className="flex mb-4   cursor-pointer">
                                            <navItem.icon className="w-6 h-6 text-green-500 mr-2 items-start mt-2" />
                                            <div>
                                              <h2>{navItem.name}</h2>
                                              <p className="text-[#727272]">
                                                {navItem.description}
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      ))
                                    )}
                                </div>
                              </div>
                              <div
                                className="bg-[#202020] w-full
                              rounded-r-lg  border-b-[1px]
                              p-4 border-[#727272]
                            "
                              >
                                {item.name === openNav &&
                                  item.children?.map((it) => (
                                    <div key={it.title}>
                                      <div className="w-[17rem] h-[7rem] relative">
                                        <Image
                                          src={it.image}
                                          alt={it.image}
                                          fill
                                          className="rounded-md"
                                        />
                                      </div>
                                      <div className="ml-3 space-y-2">
                                        <h2 className="mt-5  font-medium">
                                          {it.title}
                                        </h2>
                                        <p className="text-[#727272] tracking-tight leading-5">
                                          {it.description}
                                        </p>
                                        <div className="text-[#727272] tracking-normal font-medium flex items-center  space-x-4">
                                          <h2 className="cursor-pointer">
                                            {it.button1}
                                          </h2>
                                          <h2 className="cursor-pointer">
                                            {it.button2}
                                          </h2>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                              </div>
                            </div>
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
