"use client";
import useCartStore from "@/app/useCartStore";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const ProductPage = ({ product }) => {
  const [count, setCount] = useState(1);
  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setCount(value);
    }
  };

  const [active, setActive] = useState(product.image_urls[0]);

  const addToCart = useCartStore((state) => state.addToCart);
  const cartItems = useCartStore((state) => state.cartItems);
  const isProductInCart = cartItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    addToCart(product, count);
    setCount(1);
  };

  const increment = () => {
    setCount(prevCount => prevCount+1)
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="container w-full m-auto flex gap-6 ">
      <div className="productLeftPart flex flex-col justify-between w-[60%]  pt-[30px] pl-[30px] font-serif text-[16px] font-normal not-italic leading-6 text-[#474747]">
        <div>
          <div className="mb-[25px] text-[#474747] text-[24px] capitalize leading-4 font-semibold">
            {product?.title}
          </div>
          <div className="text-[24px] text-[#212121] leading-[30px] mb-[25px] mt-[10px]  font-serif font-normal not-italic ">
            {product?.currency + " " + product?.price}
          </div>
          <div className=" font-serif font-normal not-italic text-[#474747] text-[16px]">
            {product?.description}
          </div>
        </div>
        <div className="flex  mt-[35px] gap-3 ">
          <Button
            onClick={handleAddToCart}
            className="rounded-none w-[200px] h-[50px] border-0 font-semibold font-serif leading-[50px] text-[16px] bg-[#ff7004] hover:bg-[#000000] duration-300 text-[#ffffff]"
          >
             Add to Cart
          </Button>
          <span className="flex justify-evenly items-center border-[1px] border-[#dddddd] w-[100px] h-[50px]">
            <div onClick={decrement}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14"
                />
              </svg>
            </div>
            <input
              type="text"
              value={count}
              className="w-[30px] h-[30px] outline-none text-center "
              onChange={handleChange}
            />
            <div onClick={increment}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </span>
        </div>
      </div>
      <div className="productRightPart w-[40%] pt-[30px] font-serif text-[16px] font-normal not-italic leading-6 text-[#474747] group">
        <div className="grid gap-4">
          <div className=" relative ">
            <img
              className=" w-full max-w-full rounded-[5px] object-cover object-center h-[300px]   "
              src={active}
              alt=""
            />
          </div>
          <div className="grid grid-cols-4 gap-5">
            {product?.image_urls?.map((url, index) => (
              <div key={index}>
                <img
                  onClick={() => setActive(url)}
                  src={url}
                  className="  cursor-pointer rounded-[5px] object-cover object-center"
                  alt="gallery-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
