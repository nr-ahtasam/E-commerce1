"use client";
import Breadcrumb from "@/app/components/Breadcrumb/page";
import Card from "@/app/components/Products/Card";
import Section from "@/app/components/Section/page";
import Nav from "@/app/components/navBar/page";
import { getFetch } from "@/services/getFetch";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const [products, setProducts] = useState([]);
  //   const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getCategories() {
      const res = await getFetch(
        `${process.env.NEXT_PUBLIC_BASEURL}/categories/${id}`
      );
      setProducts(res.data.products);
    }
    getCategories();
  }, [id]);
  console.log(id);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const data = await fetchProducts();
  //         console.log(data);
  //         setProducts(data.data);
  //         setLoading(false);
  //       } catch (error) {
  //         setError(error);
  //         console.error("Error fetching products:", error);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  //   if (loading) {
  //     return <div>Loading...</div>;
  //   }

  //   if (error) {
  //     return <div>Error loading categories: {error.message}</div>;
  //   }
  return (
    <div>
      <Nav />
      <Breadcrumb presentPage="CategoryWise Product" homePage="Home" />
      <Section sectionHeadding="Category product" />(
      <div className="container flex flex-wrap justify-start gap-6 m-auto mb-10">
        {products.map((product) => (
          <Card product={product} />
        ))}
      </div>
      )
    </div>
  );
};

export default page;
