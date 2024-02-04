import { AuthHeader } from "@/components/auth-header";
import { PreorderForm } from "@/components/forms/pre-order-form";

const PreorderPage = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col items-center space-y-4">
          <AuthHeader
            image="/logo.jpg"
            alt="logo"
            title="Create an account for Pre-order"
          />
          <div>
            <PreorderForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default PreorderPage;
