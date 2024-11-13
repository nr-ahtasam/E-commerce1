import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DisplayedSearch = ({ filteredProducts, query }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const navigate = useRouter();
  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      setSelectedIndex((prevIndex) =>
        Math.min(prevIndex + 1, filteredProducts.length - 1)
      );
    } else if (event.key === "ArrowUp") {
      setSelectedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (event.key === "Enter" && selectedIndex !== -1) {
      const selectedProduct = filteredProducts[selectedIndex];
      setSelectedProduct(selectedProduct);
      console.log(selectedProduct);
      navigate.push(`/product/${selectedProduct.id}`);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, filteredProducts]);

  return (
    <div className="absolute top-[35px] left-[30px] overflow-hidden">
      <ul className="fixed w-[190px]  bg-white shadow-[0_4px_7px_rgba(0,0,0,0.5)] z-50 rounded-[2px]">
        <ul>
          {query.length > 0 &&
            filteredProducts.map((product, index) => (
              <li
                key={index}
                className={`flex border-b-[1px] text-[12px] ${
                  selectedIndex === index ? "bg-gray-200" : ""
                }`}
              >
                <a href={`/product/${product.id}`} className="flex">
                  <img
                    src={product.image_urls}
                    alt={product.title}
                    className="w-8 h-8 m-2"
                  />
                  <div className="flex items-center">{product.title}</div>
                </a>
              </li>
            ))}
        </ul>
      </ul>
    </div>
  );
};

export default DisplayedSearch;
