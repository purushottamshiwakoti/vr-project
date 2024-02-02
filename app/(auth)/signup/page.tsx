import { SignupForm } from "@/components/forms/signup-form";
import Image from "next/image";

const SignupPage = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative  w-[80px] h-[80px] ">
            <Image src={"/logo.png"} alt="logo" fill />
          </div>
          <h2 className="text-white text-2xl mb-5 font-medium tracking-normal">
            Create an account for Pre-order
          </h2>
          <div>
            <SignupForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
