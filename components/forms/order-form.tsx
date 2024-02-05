"use client";

import { orderSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Info, Mail, Minus, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import { countries } from "countries-list";
import { Input } from "../ui/input";

export const OrderForm = () => {
  const [totalQuantity, setTotalQuantity] = useState<number>(1);

  const countryNames = Object.values(countries).map((country) => country.name);
  const router = useRouter();
  const [options, setOptions] = useState("fullPayment");
  const form = useForm<z.infer<typeof orderSchema>>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      country: "",
      email: "",
      options: "",
      quantity: 1,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof orderSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    router.push("/payment");
  }
  return (
    <>
      <div className="border-2 border-[#333333] bg-[#1b1b1d] p-10 rounded-xl shadow-lg">
        <h2 className="text-white text-xl font-medium">Add your information</h2>

        <div className="mt-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-7">
                <div className="grid grid-cols-4 ">
                  <div className="col-span-3 mr-10">
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">
                            What country are you in? (required)
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a Country" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <Command>
                                <CommandInput placeholder="Search country..." />
                                <CommandList>
                                  <CommandEmpty>No results found.</CommandEmpty>
                                  <CommandGroup>
                                    {countryNames.map((item, index) => (
                                      <CommandItem key={item}>
                                        <SelectItem value={item} key={index}>
                                          {item}
                                        </SelectItem>
                                      </CommandItem>
                                    ))}
                                  </CommandGroup>
                                </CommandList>
                              </Command>
                            </SelectContent>
                          </Select>
                          <FormDescription className="flex items-center text-[#7d7d7f] mt-1">
                            <Info className="h-4 w-4 mr-1 " />
                            We are only able to accept the peroder from the
                            countries in this list
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="relative">
                    <FormField
                      control={form.control}
                      name="quantity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white ml-2">
                            Quantity
                          </FormLabel>

                          <FormControl>
                            <div className="flex items-center">
                              <Button
                                variant={"ghost"}
                                className="text-white  absolute left-2  cursor-pointer hover:bg-[#352F3D] hover:text-white/80"
                                onClick={(e) => {
                                  e.preventDefault();
                                  totalQuantity > 1 &&
                                    setTotalQuantity(totalQuantity - 1);
                                }}
                              >
                                <Minus className="w-5" />
                              </Button>
                              <Input
                                value={totalQuantity}
                                onChange={(e) => {
                                  setTotalQuantity(parseInt(e.target.value));
                                  field.onChange(parseInt(e.target.value));
                                }}
                                type="number"
                                className="w-[12.6rem] text-center h-[3rem]"
                              />
                              <Button
                                variant={"ghost"}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setTotalQuantity(totalQuantity + 1);
                                }}
                                className="text-white  absolute bg-[#352F3D] right-2 cursor-pointer hover:bg-[#352F3D] hover:text-white/80"
                              >
                                <Plus className="w-5" />
                              </Button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        Add your alternative email
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <div className="relative">
                            <SelectTrigger className="pl-8">
                              <SelectValue placeholder="Alternative email" />
                            </SelectTrigger>
                            <div className="absolute top-3 left-2  mt-1 mr-1">
                              <Mail className="text-[#898989] w-5 h-5  " />
                            </div>
                          </div>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="m@example.com">
                            m@example.com
                          </SelectItem>
                          <SelectItem value="m@google.com">
                            m@google.com
                          </SelectItem>
                          <SelectItem value="m@support.com">
                            m@support.com
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription className="flex items-center text-[#7d7d7f] mt-1">
                        <Info className="h-7 w-7 mr-1" />
                        We will send you email to ask your final location to
                        delivery (the location should be in same country you
                        selected at the time of delivery)
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="options"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        Select Options
                      </FormLabel>
                      <FormControl>
                        <div className="grid lg:grid-cols-2 grid-cols-1 space-y-3 lg:space-y-0 lg:space-x-2 mt-5 ">
                          <div
                            className={
                              options == "fullPayment"
                                ? "border-2 rounded-md p-3 space-y-1 cursor-pointer"
                                : "border-2 border-[#5a5a5a] rounded-md p-3 space-y-1 cursor-pointer"
                            }
                            onClick={() => setOptions("fullPayment")}
                          >
                            <h2 className="font-medium text-xl">
                              <span className="text-[#727272]  line-through">
                                $450
                              </span>
                              <span className="ml-2 text-white">$410</span>
                            </h2>
                            <h3 className="text-[#c1c1c1] text-sm">
                              Full Payment
                            </h3>
                            <p className="text-[#727272] text-sm">
                              10% Discount (You save $40){" "}
                            </p>
                          </div>
                          <div
                            className={
                              options == "minimumPayment"
                                ? "border-2 rounded-md p-3 space-y-1 cursor-pointer "
                                : "border-2 border-[#5a5a5a] rounded-md p-3 space-y-1 cursor-pointer min-w-[50%]"
                            }
                            onClick={() => setOptions("minimumPayment")}
                          >
                            <h2 className="font-medium text-xl">
                              <span className="ml-2 text-white">$100</span>
                            </h2>
                            <h3 className="text-[#c1c1c1] text-sm">
                              Booking with Minimum Amount
                            </h3>
                            <p className="text-[#727272] text-sm">
                              ($350 at the time of delivery confirmation)
                            </p>
                          </div>
                        </div>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full h-[56px]">
                  Continue to payment
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};
