import Input from "../components/Input";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import useForgotPassword from "../features/auth/customHooks/useForgotPassword"
export default function ForgetPassword() {
  const { control, handleSubmit } = useForm();
  const {isLoading , userForgotPassword}=useForgotPassword();

  function onSubmit(data) {
    if(!data) return;
    userForgotPassword(data);
  }
  return (
    <div className="w-full h-screen bg-darkslate flex justify-center">
      <div className="mt-[150px] h-fit md:w-[450px] bg-white p-12 rounded-lg border-2 border-turquoise">
        <h1 className="text-center mb-6 font-bold text-xl text-darkslate">Forgot Your Password?</h1>
        <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="please enter your email"
            disabled={isLoading}
            type="email"
            label=""
            expand={false}
            width="w-full"
            control={control}
            name="email"
            rules={{
              required: "Email is required in this process",
            }}
          />
          <Button color="bg-sunset" disabled={isLoading}>Continue</Button>
        </form>
      </div>
    </div>
  );
}
