import React from 'react'
import { PasswordField } from './PasswordField';
import { useForm } from 'react-hook-form';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate()
      const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
      const onSubmit = function(data){
console.log(data)
localStorage.setItem("data", JSON.stringify(data));
navigate("/rootlayout/dashboard");

      }
  return (
    <div className="grid place-items-center mt-4">
      <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-center text-[1.4rem] text-[#4C689E] font-semibold">
          Login
        </h3>
        <button className="bg-white shadow-xl py-3 px-11 rounded-md justify-center  flex gap-x-3 items-center">
          <svg
            width="24"
            height="23"
            viewBox="0 0 24 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.04 11.7615C23.04 10.946 22.9668 10.1619 22.8309 9.40918H12V13.8576H18.1891C17.9225 15.2951 17.1123 16.513 15.8943 17.3285V20.214H19.6109C21.7855 18.2119 23.04 15.2637 23.04 11.7615Z"
              fill="#4285F4"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.9999 23.0001C15.1049 23.0001 17.7081 21.9703 19.6108 20.2139L15.8942 17.3285C14.8644 18.0185 13.5472 18.4262 11.9999 18.4262C9.00467 18.4262 6.46945 16.4032 5.56513 13.6851H1.72308V16.6646C3.61536 20.423 7.50445 23.0001 11.9999 23.0001Z"
              fill="#34A853"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.56523 13.685C5.33523 12.995 5.20455 12.2579 5.20455 11.5C5.20455 10.742 5.33523 10.005 5.56523 9.31499V6.33545H1.72318C0.944318 7.88795 0.5 9.64431 0.5 11.5C0.5 13.3557 0.944318 15.112 1.72318 16.6645L5.56523 13.685Z"
              fill="#FBBC05"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.9999 4.57386C13.6883 4.57386 15.2042 5.15409 16.396 6.29364L19.6944 2.99523C17.7029 1.13955 15.0997 0 11.9999 0C7.50445 0 3.61536 2.57705 1.72308 6.33545L5.56513 9.315C6.46945 6.59682 9.00468 4.57386 11.9999 4.57386Z"
              fill="#EA4335"
            />
          </svg>
          <span className="capitalize text-[1.2rem] font-semibold ">
            login with google
          </span>
        </button>
        <div className="flex items-center gap-x-2">
          <img src="/images/line.png" alt="img" />
          <span className="capitalize">or continue with </span>
          <img src="/images/line.png" alt="img" />
        </div>

        <div className="border border-stone-200  bg-white p-8 rounded-md">
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <label className="text-[#4C689E]">Email Address</label>
              <input
                type="email"
                className="border p-1 rounded-md border-stone-200"
                {...register("email", {
                  required: "this field is required",
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                })}
              />
              {errors?.email?.message && (
                <p className="text-red-500 text-sm capitalize">
                  {errors.email.message}
                </p>
              )}
            </div>
            <PasswordField
              label="Password"
              placeholder="password"
              register={register}
              errors={errors}
              errorMessage="Password is required and must be at least 8 characters long, containing both letters and numbers"
            />
            <div className="flex items-center mt-3 justify-between ">
              <div className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  id="check"
                  className="checkbtn hidden"
                  {...register("checkbox", { required: true })}
                />
                <label
                  htmlFor="check"
                  className="bg-[#EFF3FB] relative label w-[40px] h-[20px] rounded-full"
                ></label>

                <span className="capitalize text-[#4C689E] font-semibold text-sm">
                  remember me{" "}
                </span>
                
              </div>
              <button className="text-[#EE5D50] capitalize">
                recover password
              </button>
            </div>
            {/* <button>login</button> */}
            <Button className="w-full">Log in</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
