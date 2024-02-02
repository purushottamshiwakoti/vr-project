"use client";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { preorderSchema, signupSchema } from "@/schemas";
import { Lock, Mail } from "lucide-react";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { useRouter } from "next/navigation";

export const PreorderForm = () => {
  const router = useRouter();

  // 1. Define your form.
  const form = useForm<z.infer<typeof preorderSchema>>({
    resolver: zodResolver(preorderSchema),
    defaultValues: {
      code: "",
      name: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof preorderSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    router.push("/pre-order");
  }

  return (
    <>
      <div className=" flex flex-col items-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
            method="post"
          >
            <div className="space-y-[16px]">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Your name"
                          className="w-[20rem] h-[3rem] pl-8 "
                          {...field}
                        />
                        <div className="absolute top-[0.8rem] left-3 mt-1 mr-1">
                          <Mail className="text-[#898989] w-4 h-4 " />
                        </div>
                      </div>
                    </FormControl>

                    <FormMessage className="ml-10" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Refferal Code (optional)"
                          className="w-[20rem] h-[3rem] pl-8 "
                          type="password"
                          {...field}
                        />
                        <div className="absolute top-[0.8rem] left-3 mt-1 mr-1">
                          <Lock className="text-[#898989] w-4 h-4 " />
                        </div>
                      </div>
                    </FormControl>

                    <FormMessage className="ml-10" />
                  </FormItem>
                )}
              />
              <div>
                <Button className="w-[20rem] h-[3rem] mt-3">Continue</Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};
