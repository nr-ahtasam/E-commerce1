"use client";
import { fetchCategories } from "@/services/api";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError(error);
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading categories: {error.message}</div>;
  }

  return (
    <div className="bg-white">
      <div className="max-w-[1200px] w-[100%] h-[300px]   m-auto p-0 justify-center">
        <Swiper
          autoplay={{ delay: 2000 }}
          slidesPerView={5}
          modules={[Autoplay]}
          onSlideChange={() => {}}
          loop
          className="CategorySwiper"
        >
          {categories.map(({ id, image_url, title }) => (
            <SwiperSlide
              key={id}
              className="CategorySwiperSlide relative group "
            >
              <a
                href={`/categories/${id}`}
                className=" absolute w-[180px] h-[180px]  bg-trasfarent border-[2px] rounded-[50%] animate-spin border-none group-hover:border-dashed  border-red-500  "
              ></a>
              <div className="flex justify-center w-[180px] h-[180px]  items-center  rounded-[50%]  group-hover:border-none border-[2px]   border-black">
                <div className="flex flex-col justify-center  items-center ">
                  <img src={image_url} alt="/images/avator1.png " />
                  <p className="  text-[12px] text-[#474747] group-hover:text-red-500 mt-[12px]  font-bold">
                    {title}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Categories;
