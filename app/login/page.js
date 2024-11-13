"use client";
import { loginUser, socialLogin } from "@/services/api";
import { useGoogleLogin } from "@react-oauth/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import GoogleButton from "react-google-button";
import Breadcrumb from "../components/Breadcrumb/page";
import Footer from "../components/Footer/page";
import Nav from "../components/navBar/page";
import useUserPopupStore from "../useStore";
const Page = () => {
  const updatePopupOpen = useUserPopupStore((state) => state.updatePopupOpen);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      console.log("User logged in successfully:", response);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        router.push("/");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setErrors(error.message);
    }
  };

  const handleGoogle = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      const res = {
        provider_name: "google",
        access_token: codeResponse.access_token,
      };
      console.log(codeResponse);
      if (codeResponse.access_token) {
        const response = await socialLogin(res);
        localStorage.setItem("token", response.data.token);
        console.log(response);
        router.push("/");
        updatePopupOpen(true);
      }
    },
  });

  return (
    <div>
      {/* <ToastContainer /> */}
      <Nav />
      <Breadcrumb presentPage="Login" homePage="Home" />
      <div className="w-full max-w-sm mx-auto   bg-[#F3F3F3] mt-[100px] mb-[100px] ">
        <div className="px-6 py-4  ">
          <h3 className="mt-3 text-[24px] font-medium text-center text-[#666] ">
            Login
          </h3>

          <p className="text-[#666] text-[14px] flex justify-center pb-[15px]">
            Please login using account detail bellow.
          </p>
          {errors && <p className="text-red-500 text-sm">{errors}</p>}
          <form onSubmit={handleSubmit}>
            <div className="w-full mt-4">
              <input
                name="email"
                className="block outline-none w-full px-4 py-2 mt-2 text-gray-700 placeholder-[#000] placeholder: bg-white border placeholder: text-[14px]"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="w-full mt-4">
              <input
                name="password"
                className="block outline-none w-full px-4 py-2 mt-2  placeholder-[#000] bg-white border  placeholder: text-[14px]"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <a
                href="#"
                className="text-sm  text-gray-600 dark:text-gray-200 hover:text-[#666]"
              >
                Forget Password?
              </a>

              <button
                type="submit"
                className="px-6 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-black font-normal hover:bg-[#666]"
              >
                Sign In
              </button>
            </div>
          </form>

          <GoogleButton onClick={() => handleGoogle()}>
            Log In Using Google
          </GoogleButton>
        </div>

        <div className="flex items-center justify-center py-4 text-center ">
          <span className="text-[14] text-gray-600 hover:text-[#666]">
            Don't have an account?
          </span>

          <Link
            href="/registration"
            className="mx-2 text-sm font-bold text-red-600  no-underline"
          >
            Register
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
