"use client";
import { NAV_ITEMS } from "@/app/constants/theme/NavItems";
import useUserPopupStore from "@/app/useStore";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DisplayedSearch from "../DisplayedSearch/page";

const Nav = ({ setIsCartOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useRouter();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const token = localStorage.getItem("token");

  const handleSearch = (e) => {
    e.preventDefault();

    navigate.push(`/search?q=${query}`);
  };
  const handleLogin = () => {
    // e.preventDefault();

    navigate.push(`/login`);
  };
  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    let filteredItems = products.data?.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredProducts(filteredItems);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASEURL}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleLogout = () => {
    fetch(`${process.env.NEXT_PUBLIC_BASEURL}/logout`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.removeItem("token");
        toast.success(data?.message);
        navigate.refresh();
      });
  };
  const updatePopupOpen = useUserPopupStore((state) => state.updatePopupOpen);
  return (
    <div className="relative">
      <div
        className={`  ${
          scrolled ? "animate-fadeInDown fixed top-0" : " "
        } flex items-center w-full bg-gray-800 z-50`}
      >
        <div className="w-[10%] h-full flex items-center">
          <Link href="/">
            <img
              src="/images/cut-typography-sliced-font_53876-104181.jpg"
              alt="/images/avator1.png"
              className="w-3/5 h-3/4 pl-5"
            />
          </Link>
        </div>
        {/* search start */}
        <div className="relative flex items-center justify-center   ">
          <div className="flex justify-center items-center rounded-full h-[30px] bg-[#ffffff]  px-2 w-full max-w-[600px]">
            <button className="self-center flex p-1 cursor-pointer bg-white">
              <svg
                width="15px"
                height="15px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.567 9.8895C12.2495 8.90124 12.114 7.5637 11.247 6.7325C10.3679 5.88806 9.02339 5.75928 7.99998 6.4215C7.57983 6.69308 7.25013 7.0837 7.05298 7.5435C6.85867 7.99881 6.80774 8.50252 6.90698 8.9875C7.00665 9.47472 7.25054 9.92071 7.60698 10.2675C7.97021 10.6186 8.42786 10.8563 8.92398 10.9515C9.42353 11.049 9.94062 11.0001 10.413 10.8105C10.8798 10.6237 11.2812 10.3033 11.567 9.8895Z"
                    stroke="#F56F28"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.433 17.8895C11.7504 16.9012 11.886 15.5637 12.753 14.7325C13.6321 13.8881 14.9766 13.7593 16 14.4215C16.4202 14.6931 16.7498 15.0837 16.947 15.5435C17.1413 15.9988 17.1922 16.5025 17.093 16.9875C16.9933 17.4747 16.7494 17.9207 16.393 18.2675C16.0298 18.6186 15.5721 18.8563 15.076 18.9515C14.5773 19.0481 14.0614 18.9988 13.59 18.8095C13.1222 18.6234 12.7197 18.3034 12.433 17.8895V17.8895Z"
                    stroke="#F56F28"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />{" "}
                  <path
                    d="M12 7.75049C11.5858 7.75049 11.25 8.08627 11.25 8.50049C11.25 8.9147 11.5858 9.25049 12 9.25049V7.75049ZM19 9.25049C19.4142 9.25049 19.75 8.9147 19.75 8.50049C19.75 8.08627 19.4142 7.75049 19 7.75049V9.25049ZM6.857 9.25049C7.27121 9.25049 7.607 8.9147 7.607 8.50049C7.607 8.08627 7.27121 7.75049 6.857 7.75049V9.25049ZM5 7.75049C4.58579 7.75049 4.25 8.08627 4.25 8.50049C4.25 8.9147 4.58579 9.25049 5 9.25049V7.75049ZM12 17.2505C12.4142 17.2505 12.75 16.9147 12.75 16.5005C12.75 16.0863 12.4142 15.7505 12 15.7505V17.2505ZM5 15.7505C4.58579 15.7505 4.25 16.0863 4.25 16.5005C4.25 16.9147 4.58579 17.2505 5 17.2505V15.7505ZM17.143 15.7505C16.7288 15.7505 16.393 16.0863 16.393 16.5005C16.393 16.9147 16.7288 17.2505 17.143 17.2505V15.7505ZM19 17.2505C19.4142 17.2505 19.75 16.9147 19.75 16.5005C19.75 16.0863 19.4142 15.7505 19 15.7505V17.2505ZM12 9.25049H19V7.75049H12V9.25049ZM6.857 7.75049H5V9.25049H6.857V7.75049ZM12 15.7505H5V17.2505H12V15.7505ZM17.143 17.2505H19V15.7505H17.143V17.2505Z"
                    fill="#ff5c5c"
                  />{" "}
                </g>
              </svg>
            </button>
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                onChange={handleChange}
                className="w-full text-[14px]  bg-[#0d1829] flex bg-transparent pl-2 text-[#000] outline-0 placeholder:text-[14px] placeholder:justify-center"
                placeholder="Search our store"
              />
              <button type="submit" className="relative p-2  ">
                <svg
                  width="15px"
                  height="15px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                      stroke="#F56F28"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />{" "}
                  </g>
                </svg>
              </button>
            </form>
          </div>
          <DisplayedSearch filteredProducts={filteredProducts} query={query} />
        </div>
        {/* serch end */}

        <div className="flex justify-center items-center w-[50%]">
          <ul className="flex gap-5 justify-center items-center w-1/2">
            {NAV_ITEMS.map((item) => (
              <li key={item} className="flex justify-center items-center">
                {item == "home" ? (
                  <Link
                    href={"/"}
                    className="text-white uppercase text-[14px] hover:text-[#F56F28] duration-300"
                  >
                    <span>{item}</span>
                  </Link>
                ) : (
                  <Link
                    href={`#${item}`}
                    className="text-white uppercase text-[14px] hover:text-[#F56F28] duration-300"
                  >
                    <span>{item}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="CartIcon flex justify-end items-center w-[15%]">
          <button
            type="button"
            className="relative inline-flex items-center p-[7px] text-sm   mr-[15px] font-medium text-center text-white  rounded-[7px] hover:text-[#F56F28] "
            onClick={() => setIsCartOpen(true)}
          >
            <svg
              className="w-3 h-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <span className="sr-only">Notifications</span>
            <div
              className="absolute inline-flex items-center justify-center w-[15px] h-[15px] text-[8px] font-bold text-white bg-[#F56F28] 
            rounded-full top-0 -end-1"
            >
              20
            </div>
          </button>
        </div>
        <div className="accountImage flex relative justify-right items-center  w-[15%] group z-5">
          {token ? (
            <div>
              <div className=" w-6">
                <img
                  src="/images/avator1.jpg"
                  alt="/images/avator1.jpg"
                  className="w-full rounded-[50%]"
                />
              </div>
              <div className="absolute invisible group-hover:visible  top-[20px] bg-white w-[100px]  h-[100px] shadow-lg rounded-[3px] z-[9999]">
                <ul className="dropdown-menu flex flex-col   text-[12px]">
                  <li
                    className=" flex  px-[7px] py-[7px] border-b-[1px] "
                    onClick={(e) => {
                      updatePopupOpen(true);
                    }}
                  >
                    <a href="#" className="text-[#666] hover:text-[#F56F28]">
                      My account
                    </a>
                  </li>
                  <li className=" flex  px-[7px] py-[7px] border-b-[1px]">
                    <a href="#" className="text-[#666] hover:text-[#F56F28] ">
                      Checkout
                    </a>
                  </li>
                  <li
                    // onClick={handleLogin}
                    className=" flex  px-[7px] py-[8px] border-b-[1px]"
                  >
                    <button
                      onClick={handleLogout}
                      className="text-[#666] hover:text-[#F56F28] "
                    >
                      Log out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link href="/login">
              <Button className=" bg-[#ff7004] w-[80px] h-[25px] text-[#fff]  font-medium  text-[14px] hover:bg-[#FD7E14]">
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
