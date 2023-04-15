import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Link from "next/link";
import { Button } from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import { AuthLayout } from "@/components/AuthLayout";
import Img_GG from "@/images/google.png";
import Img_FB from "@/images/facebook.png";
import { PageSEO } from "@/components/SEO";
import siteMetadata from "@/data/siteMetadata";

const LoginPage = () => {
  const methods = useForm({ mode: "onBlur" });
  const [errorMessage, setErrorMessage] = useState(null);
  const { logIn, ProviderSignIn, ProviderFacebookSignIn } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      await logIn(data.email, data.password);
      router.push("/dashboard");
    } catch (error) {
      console.log(error.message);
      const cleanErrorMessage = error.message
        .split("/")[1]
        .replace(/[^a-zA-Z ]/g, " ");
      setErrorMessage(cleanErrorMessage);
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
      <PageSEO
        title={"เข้าสู่ระบบ "+siteMetadata.title + " | " + siteMetadata.author}
        description={"เข้าสู่ระบบ "+siteMetadata.description}
      />
      <AuthLayout>
        <div>
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-gray-900">
              ลงชื่อเข้าใช้บัญชีของคุณ
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              ไม่มีบัญชี?{" "}
              <Link
                href="/signup"
                className="font-medium text-blue-600 hover:underline"
              >
                ลงทะเบียน
              </Link>{" "}
              เพื่อเริ่มใช้งานฟรี
            </p>
          </div>
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
                    อีเมล์
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
                    รหัสผ่าน
                  </label>
                </div>

                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
                />
                {errors.password && (
                  <p className="text-red-400">{errors.password.message}</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => router.push("/forgot-password")}
                className="text-sm text-blue-500 hover:text-blue-700 cursor-pointer"
              >
                ลืมรหัสผ่าน?
              </button>
              <div className="flex justify-center pt-8">
                <button
                  type="submit"
                  className={`h-12 text-center w-2/3 bg-blue-900 border-2 rounded-md hover:shadow-lg hover:bg-blue-800 text-lg transition`}
                >
                  <p className="capitalize text-white font-normal">
                    เข้าสู่ระบบ
                  </p>
                </button>
              </div>

              {/* <div className="flex justify-center pt-4">
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  className={`h-12 text-center w-2/3 bg-blue-500 border-2 rounded-md hover:shadow-lg
              hover:bg-blue-400 text-lg transition mt-6`}
                >
                  <p className="capitlize text-white font-normal">
                    Log in With Google
                  </p>
                </button>
              </div> */}
            </form>
          </FormProvider>
        </div>
      </AuthLayout>
    </>
  );
};

export default LoginPage;
