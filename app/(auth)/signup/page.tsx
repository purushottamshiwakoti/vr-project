import { AuthHeader } from "@/components/auth-header";
import { SignupForm } from "@/components/forms/signup-form";

const SignupPage = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full p-2 md:p-0">
        <div className="flex flex-col items-center space-y-4">
          <AuthHeader
            image="/logo.png"
            alt="logo"
            title="Create an account for Pre-order"
          />
          <div>
            <SignupForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
