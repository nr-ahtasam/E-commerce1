"use client";
import { fetchProducts } from "@/services/api";
import { useEffect, useState } from "react";
import Section from "../Section/page";
import Card from "./Card";

const Products = () => {
  const [selectedTab, setSelectedTab] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleTabClick = (type) => {
    setSelectedTab(type);
    // filterProducts(type);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts(selectedTab);
        setProducts(data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [selectedTab]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading categories: {error.message}</div>;
  }

  return (
    <div id="product" className="ProductSectionFullWrapper">
      <div className=" flex flex-col justify-center items-center mt-[50px] mb-[50px] ">
        <Section
          sectionHeadding="Our Product"
          sectionParagraph="Torem ipsum dolor sit amet, consectetur adipisicing elitsed do"
          sectionSubParagraph="eiusmo tempor incididunt ut labore"
        />

        <div className=" flex gap-6">
          <button
            className={`font-semibold not-italic text-[16px] text-[#474747] ${
              selectedTab === "" ? "text-[#ff7004]" : ""
            }`}
            onClick={() => handleTabClick("")}
          >
            All Products
          </button>

          <button
            className={`font-semibold not-italic text-[16px] text-[#474747] ${
              selectedTab === "Top Grossing" ? "text-[#ff7004]" : ""
            }`}
            onClick={() => {
              handleTabClick("Top Grossing");
            }}
          >
            Top Grossing
          </button>
          <button
            className={`font-semibold not-italic text-[16px] text-[#474747] ${
              selectedTab === "trending" ? "text-[#ff7004]" : ""
            }`}
            onClick={() => handleTabClick("trending")}
          >
            Trending
          </button>
          <button
            className={`font-semibold not-italic text-[16px] text-[#474747] ${
              selectedTab === "new-arrival" ? "text-[#ff7004]" : ""
            }`}
            onClick={() => handleTabClick("new-arrival")}
          >
            New Arrivals
          </button>
        </div>
      </div>

      <div className="container flex flex-wrap justify-start gap-6 m-auto mb-10">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
