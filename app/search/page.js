"use client";
import { searchProducts } from "@/services/api";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb/page";
import Footer from "../components/Footer/page";
import Card from "../components/Products/Card";
import Nav from "../components/navBar/page";

const page = () => {
  const params = useSearchParams();
  const param = params.get("q");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await searchProducts(param);
        setProducts(data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [param]);

  return (
    <div>
      <Nav />
      <Breadcrumb />
      <div className="container flex flex-wrap justify-start gap-6 m-auto my-10">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default page;
