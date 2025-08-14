import OtpInput from "react-otp-input";
import Input from "../components/Input";
import { useForm , Controller } from "react-hook-form";
import Button from "../components/Button";
import useResetPassword from "../features/auth/customHooks/useResetPassword";
import ErrorMessage from "../components/ErrorMessage";
export default function ResetPassword() {
  const { control , handleSubmit } = useForm();
  const {isLoading , userResetPassword} = useResetPassword();
  function onSubmit(data){
    if(!data) return;
    userResetPassword(data);
  }
  return (
    <div className="flex flex-col items-center gap-4 mt-[100px] md:p-10 p-5 md:w-[700px] w-[300px] mx-auto border-sunset border-2  bg-darkslate">
      <h1 className="font-bold md:text-2xl text-lg text-white">
        Verify your Password
      </h1>
      <p className="text-turquoise text-sm font-bold">
        Enter the code sent to your email
      </p>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <Input
        disabled={isLoading}
          control={control}
          name="email"
          placeholder="please Enter your email"
          rules={{
            required: "Email is required",
          }}
        />
        <Input
        disabled={isLoading}
          control={control}
          name="newPassword"
          placeholder="Enter new password"
          rules={{
            required: "Password is required",
          }}
        />
        <p className="text-gray-400 text-sm font-semibold">
          Enter code sent to your Email
        </p>
          <Controller
          name="code"
          control={control}
          rules={{
            required: "code is required",
          }}
          render={({field , fieldState:{error}})=>(
            <>
            <OtpInput
            {...field}
              numInputs={6}
              renderSeparator={<span> </span>}
              renderInput={(props) => <input {...props} />}
              containerStyle="flex justify-center gap-2 md:gap-3 w-[100%]"
              inputStyle={`
                       md:!w-11 md:!h-11  !w-7 !h-7
                      text-center text-xl md:text-2xl font-medium
                      bg-white
                      border-2 border-gray-300
                      rounded-lg focus:outline-none
                      focus:border-sunset focus:ring-1 focus:ring-sunset
                      transition-all duration-200
                      appearance-none
                    `}
            />
            {
                error && <ErrorMessage message={error.message}/>
            }
            </>
          )}
          />
        <Button color="bg-sunset" disabled={isLoading}>Reset</Button>
      </form>
    </div>
  );
}
