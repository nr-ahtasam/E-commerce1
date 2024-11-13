"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddToCart from "./components/AddToCart/page";
import Banner from "./components/Banner/page";
import Categories from "./components/Category/page";
import Follow from "./components/Follow/page";
import Footer from "./components/Footer/page";
import Products from "./components/Products/page";
import UserProfileUpdate from "./components/UserProfileUpdate/page";
import Nav from "./components/navBar/page";
import useUserPopupStore from "./useStore";
export default function Home() {
  const router = useRouter();
  const token = localStorage.getItem("token");
  const ispopupopen = useUserPopupStore((state) => state.popupOpen);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    if (ispopupopen) {
      const timer = setTimeout(() => {
        setProfileOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [ispopupopen]);
  return (
    <div>
      <ToastContainer />
      <Nav setIsCartOpen={setIsCartOpen} />
      {isCartOpen && (
        <AddToCart isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
      )}
      {/* <AddToCart />
        <Nav /> */}
      <Banner />
      <Categories />
      <Products />
      <Follow />
      <Footer />
      {profileOpen && <UserProfileUpdate />}
    </div>
  );
}
