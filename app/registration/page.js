"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerUser, socialLogin } from "@/services/api";
import { useGoogleLogin } from "@react-oauth/google";
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
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  console.log(formData);
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
    const newErrors = {};

    // Basic validation

    if (!formData.name) newErrors.name = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.confirm_password)
      newErrors.confirm_password = "Confirm password is required";
    if (
      formData.confirm_password.length > 0 &&
      formData.password !== formData.confirm_password
    )
      newErrors.confirm_password = "Passwords do not match";

    if (Object.values(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    try {
      const response = await registerUser(formData);
      console.log("User registered successfully:", response);
      setFormData({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
      });
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        router.push("/");
      }
    } catch (error) {
      console.error("Error registering user:", error);
      setErrors(error.response.data.data.email[0]);
      console.log(error);
    }
  };

  const handleGoogle = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      const res = {
        provider_name: "google",
        access_token: codeResponse.access_token,
      };
      if (codeResponse.access_token) {
        const response = await socialLogin(res);
        localStorage.setItem("token", response.data.token);

        router.push("/");
        updatePopupOpen(true);
      }
    },
  });

  return (
    <div>
      <Nav />

      <Breadcrumb presentPage="Registration" homePage="Home" />

      <div className="w-full max-w-sm mx-auto   bg-[#F3F3F3] mt-[100px] mb-[100px] ">
        <div className="px-6 py-4  ">
          <h3 className="mt-3 text-[24px] font-medium text-center text-[#666] ">
            Create Account
          </h3>

          <p className="text-[#666] text-[14px] flex justify-center pb-[15px]">
            Please Register using account detail bellow.
          </p>
          {errors && <p className="text-red-500 text-sm">{errors}</p>}
          <form onSubmit={handleSubmit}>
            <div className="w-full mt-4">
              <Label htmlFor="FullName">Full Name</Label>

              <Input
                name="name"
                className="block outline-none w-full px-4 py-2 mt-2 text-gray-700 placeholder-[#000] placeholder: bg-white border placeholder: text-[14px]"
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            {errors && <p className="text-red-500 text-sm">{errors.name}</p>}

            <div className="w-full mt-4">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                className="block  w-full px-4 py-2 mt-2  placeholder-[#000] bg-white border  placeholder: text-[14px]"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {errors && <p className="text-red-500 text-sm">{errors.email}</p>}

            <div className="w-full mt-4">
              <Label htmlFor="email">Password</Label>
              <Input
                name="password"
                className="block outline-none w-full px-4 py-2 mt-2  placeholder-[#000] bg-white border  placeholder: text-[14px]"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            {errors && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}

            <div className="w-full mt-4">
              <Label htmlFor="email">Confirm Password</Label>
              <Input
                name="confirm_password"
                className="block outline-none w-full px-4 py-2 mt-2  placeholder-[#000] bg-white border  placeholder: text-[14px]"
                type="password"
                placeholder="Confirm Password"
                value={formData.confirm_password}
                onChange={handleChange}
              />
            </div>
            {errors && (
              <p className="text-red-500 text-sm">{errors.confirm_password}</p>
            )}
            <div className="flex  items-end justify-between mt-4">
              <Button
                type="submit"
                className="px-4 py-2 mb-[15px] text-sm tracking-wide text-[white] capitalize transition-colors duration-300 transform bg-black font-normal hover:bg-[#666]"
              >
                Create
              </Button>
            </div>
            <a href="#" className="text-[14px] text-[#666]">
              Return to Store
            </a>
          </form>

          <GoogleButton onClick={() => handleGoogle()}>
            Log In Using Google
          </GoogleButton>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
