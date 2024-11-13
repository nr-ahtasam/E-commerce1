"use client";
import Breadcrumb from "@/app/components/Breadcrumb/page";
import Footer from "@/app/components/Footer/page";
import Card from "@/app/components/Products/Card";
import ProductPage from "@/app/components/Products/Product";
import Section from "@/app/components/Section/page";
import Nav from "@/app/components/navBar/page";
import DetailsTabs from "@/app/components/tabs/DetailsTabs";
import Divider from "@/app/lib/divider";
import { fetchProducts } from "@/services/api";
import { getFetch } from "@/services/getFetch";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    async function getProduct() {
      const res = await getFetch(
        `${process.env.NEXT_PUBLIC_BASEURL}/products/${id}`
      );
      setProduct(res.data);
    }
    getProduct();
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
      <Breadcrumb presentPage="Product" homePage="Home" />
      <ProductPage product={product} />
      <Divider space={10} />
      <DetailsTabs />
      <Section sectionHeadding="Related Product" />(
      <div className="container flex flex-wrap justify-start gap-6 m-auto mb-10">
        {products.map((product) => (
          <Card product={product} />
        ))}
      </div>
      )
      <Section sectionHeadding="You may also like" />
      <div className="container flex flex-wrap justify-start gap-6 m-auto mb-10">
        {products.map((product) => (
          <Card product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default page;
