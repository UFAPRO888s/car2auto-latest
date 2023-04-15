import React, { useState, useRef } from "react";
import Head from "next/head";
import { AuthLayout } from "@/components/AuthLayout";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/Button";
import Img_GG from "@/images/google.png";
import Img_FB from "@/images/facebook.png";
import Image from "next/image";

const SignupPage = () => {
  const methods = useForm({ mode: "onBlur" });
  const [errorMessage, setErrorMessage] = useState(null);
  const { signUp, ProviderSignIn, ProviderFacebookSignIn } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const password = useWatch({
    control: methods.control,
    name: "password",
  });
  const confirmPassword = useWatch({
    control: methods.control,
    name: "confirmPassword",
  });

  const onSubmit = async (data) => {
    try {
      await signUp(data.email, data.password);

      router.push("/dashboard");
    } catch (error) {
      console.log(error);
      const cleanErrorMessage = error.message
        .split("/")[1]
        .replace(/[^a-zA-Z ]/g, " ");
      setErrorMessage(cleanErrorMessage);
    }
  };

  const handleButtonClick = () => {
    if (password !== confirmPassword) {
      setErrorMessage("รหัสผ่านไม่ตรงกัน");
    } else {
      handleSubmit(onSubmit)();
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await ProviderSignIn();
      router.push("/dashboard");
    } catch (error) {
      console.log(error.message);
      const cleanErrorMessage = error.message
        .split("/")[1]
        .replace(/[^a-zA-Z ]/g, " ");
      setErrorMessage(cleanErrorMessage);
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      await ProviderFacebookSignIn();
      router.push("/dashboard");
    } catch (error) {
      console.log(error.message);
      const cleanErrorMessage = error.message
        .split("/")[1]
        .replace(/[^a-zA-Z ]/g, " ");
      setErrorMessage(cleanErrorMessage);
    }
  };

  return (
    <>
      <Head>
        <title>
          สมัครสมาชิก รถมือสอง ราคาคุ้มค่า รับประกันคุณภาพ - รถมือสอง
          car2autobuy
        </title>
        <meta
          name="description"
          content="สมัครสมาชิก รถยนต์มือสอง คุณภาพเชื่อถือได้ บริการฟรี รถยนต์มือสอง ซื้อ-ขายรถบ้านบนเว็บ สะดวก ปลอดภัย ทั้งผู้ซื้อและผู้ขาย ลงประกาศขายรถมือสอง"
        />
      </Head>
      <AuthLayout>
        <div>
          <h2 className="text-center text-2xl font-semibold text-blue-900">
            Sign Up
          </h2>
          <FormProvider {...methods}>
            <form
              action=""
              className="w-80 mx-auto pb-12 px-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor=""
                    className="block mb-3 font-sans text-blue-900"
                  >
                    Email
                  </label>
                </div>

                <input
                  type="email"
                  {...register("email", { required: "จำเป็นต้องใช้อีเมล" })}
                  className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
                />
                {errors.email && (
                  <p className="text-red-400">{errors.email.message}</p>
                )}
              </div>
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor=""
                    className="block mb-3 font-sans text-blue-900"
                  >
                    Password
                  </label>
                </div>

                <input
                  type="password"
                  {...register("password", { required: "ต้องการรหัสผ่าน" })}
                  className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
                />
                {errors.password && (
                  <p className="text-red-400">{errors.password.message}</p>
                )}
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor=""
                    className="block mb-3 font-sans text-blue-900"
                  >
                    Confirm Password
                  </label>
                </div>

                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: "ยืนยันรหัสผ่านของคุณ",
                  })}
                  className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
                />
                {errors.confirmPassword && (
                  <p className="text-red-400">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
              {errorMessage && (
                <div className="mt-8">
                  <p className="text-red-400">{errorMessage}</p>
                </div>
              )}
              <div className="flex justify-center pt-8">
                <button
                  type="button"
                  onClick={handleButtonClick}
                  className={`h-12 text-center w-2/3 bg-blue-900 border-2 rounded-md hover:shadow-lg hover:bg-blue-800 text-lg transition`}
                >
                  <p className="capitalize text-white font-normal">submit</p>
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-700">หรือสมัครโดยใช้</p>
              <div className="grid grid-cols-2 gap-2 py-2">
                <div>
                  <Button
                    type="submit"
                    color="cyan"
                    onClick={handleGoogleSignIn}
                    className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Google</span>
                    <Image
                      className="h-20 w-20"
                      src={Img_GG}
                      alt="google"
                      width={100}
                      height={100}
                    />
                  </Button>
                </div>
                <div>
                  <Button
                    type="submit"
                    color="cyan"
                    onClick={handleFacebookSignIn}
                    className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Facebook</span>
                    <Image
                      className="h-20 w-20"
                      src={Img_FB}
                      alt="facebook"
                      width={100}
                      height={100}
                    />
                  </Button>
                </div>
              </div>

              <div className="text-center">
                <p className="text-base text-red-500">{errorMessage}</p>
              </div>
            </form>
          </FormProvider>
        </div>
      </AuthLayout>
    </>
  );
};

export default SignupPage;
