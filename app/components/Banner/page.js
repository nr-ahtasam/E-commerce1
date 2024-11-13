"use client";
import { fetchBanners } from "@/services/api";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";

const Banner = () => {
  const [slides, setSlides] = useState([]);
  const [prevSlideIndex, setPrevSlideIndex] = useState(0);

  useEffect(() => {
    const getBanners = async () => {
      try {
        const data = await fetchBanners();
        setSlides(data.data);
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };

    getBanners();
  }, []);

  const handleSlideChange = (swiper) => {
    const currentSlideIndex = swiper.activeIndex;
    setPrevSlideIndex(
      currentSlideIndex === 0 ? slides.length - 1 : currentSlideIndex - 1
    );
  };

  return (
    <div
      id="home"
      className=" relative flex justify-center  items-center w-full h-full bg-[#E7E7E6]  "
    >
      <div className=" container mx-auto flex justify-between items-center w-full h-[900px]">
        <div className="w-full h-[700px]">
          <Swiper
            direction={"vertical"}
            autoplay={{ delay: 4000 }}
            speed={1000}
            navigation={{
              clickable: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            onSlideChange={handleSlideChange}
            loop
            className="BannerSwiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                className="flex justify-center items-center m-0 gap-8 slide-animation  "
                key={index}
              >
                <div className={`w-[50%] animate-fadein`}>
                  <img
                    className=" object-contain"
                    src={slide.image_url}
                    alt={`Slide ${index + 1}`}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="w-[50%] flex items-start  flex-col ">
                  <div className="animate-fadein  text-[#474646] text-[24px] font-semibold font-sans ">
                    {slide.title}
                  </div>
                  <div className="animate-fadein-2 m-0 p-0   text-[40px] font-serif font-bold mb-[10px] text-[#212121]">
                    {slide.subtitle}
                  </div>
                  <div className="animate-fadein-3 text-right text-[#474646] mb-[16px] font-normal font-serif text-[25px]">
                    {slide.description}
                  </div>
                  <div id="product">
                    <button className="animate-fadein-4 bg-[#ff7004] w-[80px] h-[30px] text-[#fff]  font-medium  text-[14px] hover:bg-[#FD7E14]">
                      {slide.button_text}
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
