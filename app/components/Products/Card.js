"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ProductModal from "./ProductModal";
import useCartStore from "@/app/useCartStore";

const Card = ({ product }) => {
  const {
    id,
    title,
    currency,
    price,
    stock_quantity,
    description,
    image_urls,
  } = product;
  const router = useRouter();
  // console.log(product);
  const saleParcentage = () => {
    const percentage = Math.floor(Math.random() * 60) + 1;

    return percentage.toString() + "%";
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const handleCardClick = () => {
    router.push(`/product/${id}`);
  };
  const addToCart = useCartStore((state) => state.addToCart);
  const cartItems = useCartStore((state) => state.cartItems);
  const isProductInCart = cartItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <div className=" flex flex-col container w-[23%]  p-0 bg-grid-4 mb-5 group ">
      <div className="relative w-[100%] h-[80%] bg-[#F2F2F2]">
        <div className="w-[100%] h-[80%]">
          <a className=" w-[100%] object-cover" onClick={handleCardClick}>
            <img src={image_urls[0]} />
          </a>
        </div>
        <div className="badges flex flex-col absolute z-40 right-[18px] left-auto top-[18px]">
          {stock_quantity !== 0 && (
            <div className="block text-white bg-green-700 text-[14px] font-medium leading-[24px] px-[7px] py-0 align-middle rounded-[3px]">
              {"Sale"}
            </div>
          )}
          <div className="bg-[#ff7004] text-[14px] font-medium leading-5 block px-[7px] py-0 align-middle capitalize rounded-[3px] text-white mt-[10px]">
            {stock_quantity === 0 ? "Sold Out" : saleParcentage()}
          </div>
        </div>

        <div className="  actions justify-between min-h-[140px] left-[18px] right-auto flex flex-col   absolute z-40 last: top-[25px] invisible group-hover:visible  group-hover:transition-all transition ease-in-out delay-100  group-hover:-translate-y-1 group-hover:scale-110  group-hover:duration-300 ">
          <button
            onClick={handleOpen}
            className=" flex justify-center items-center w-[40px] h-[40px] rounded-[50%] text-black bg-white hover:bg-[#ff7004] hover:duration-200"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3 text-[14px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                />
              </svg>
            </div>
          </button>
        </div>
        <div className="invisible flex justify-center group-hover:visible  group-hover:transition-all transition ease-in-out delay-100  group-hover:-translate-y-1 group-hover:scale-110  group-hover:duration-300">
          <>
            {stock_quantity !== 0 && (
              <Button onClick={handleAddToCart} disabled={isProductInCart} className="m-auto absolute left-0 right-0  w-[60%] text-[#3f3f3f] bg-white hover:bg-[#ff7004] hover:text-white">
               {isProductInCart ? "Added to Cart" : "Add to Cart"}
              </Button>
            )}

            {stock_quantity === 0 && (
              <div className="flex absolute left-5  z-40 text-[#3f3f3f]  ">
                <input
                  type="checkbox"
                  className="form-checkbox mx-[10px]"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span className=" text-[12px] hover:text-[#ff7004]">
                  Notify when Product back in stock
                </span>
              </div>
            )}
          </>
        </div>
      </div>
      <div className="flex flex-col justify-center align-middle items-center py-[10px]  w-[100%] h-[20%]">
        <div className="productTitle  text-[#1d1d1d] hover:text-[#ff7004] dupriceration-300">
          {title}
        </div>
        <div className="productPrice  text-[#1d1d1d]">
          {stock_quantity !== 0 && (
            <span className="line-through pr-[5px] text-[#999]">
              {currency}
              {price}
            </span>
          )}
          {currency}
          {price}
        </div>
      </div>
      <ProductModal product={product} open={open} handleOpen={handleOpen} />
    </div>
  );
};

export default Card;
