"use client";
import { fetchProducts } from "@/services/api";
import { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb/page";
import Card from "../components/Products/Card";
import Nav from "../components/navBar/page";

const page = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function getcategories() {
      const res = await getFetch(
        `${process.env.NEXT_PUBLIC_BASEURL}/categories/${id}`
      );
      setProduct(res.data);
    }
    getcategories();
  }, [id]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        console.log(data);
        setProducts(data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading categories: {error.message}</div>;
  }
  return (
    <div>
      <Nav />
      <Breadcrumb />
      <Section sectionHeadding="Category product" />(
      <div className="container flex flex-wrap justify-start gap-6 m-auto mb-10">
        {products.map((product) => (
          <Card product={product} />
        ))}
      </div>
      )
      <div className="container flex flex-wrap justify-start gap-6 m-auto mb-10">
        {products.map((product) => (
          <Card product={product} />
        ))}
      </div>
    </div>
  );
};

export default page;
