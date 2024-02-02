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

import { signupSchema } from "@/schemas";
import { Lock, Mail } from "lucide-react";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";

export const SignupForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof signupSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Enter your email"
                          className="w-[20rem] h-[3rem] pl-8 "
                          type="email"
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
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Password"
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
                <Button className="w-[20rem] h-[3rem] mt-3">Get started</Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
      <div
        className="flex items-center justify-center "
        style={{ marginTop: 20, marginBottom: 20 }}
      >
        <Separator className="mr-2" style={{ marginRight: 10 }} />
        <p className="text-[#898989]">OR</p>
        <Separator style={{ marginLeft: 10 }} />
      </div>

      <div className="flex items-center justify-center">
        <div>
          <Button className="w-[20rem] h-[3rem]  bg-[#352f3d] text-[#898989] hover:bg-[#352f3d]/90 tracking-normal">
            <FaTwitter color="#1e98e3" className="w-5 h-5 mr-2" />
            Sign up with Twitter
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5">
        <p className="text-[#898989] tracking-tight">
          Already have an account?{" "}
          <span className="-ml-4">
            <Button className=" items-start justify-start" variant={"link"}>
              Login
            </Button>
          </span>
        </p>
      </div>
    </>
  );
};
