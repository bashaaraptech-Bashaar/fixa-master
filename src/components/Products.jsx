import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import localProducts from "../data/products";

import product1 from "../assets/product1.webp";
import product2 from "../assets/product2.webp";
import product3 from "../assets/product3.webp";
import product4 from "../assets/product4.webp";
import product5 from "../assets/product5.webp";
import product6 from "../assets/product6.webp";
import product7 from "../assets/product7.webp";
import product8 from "../assets/product8.webp";
import product9 from "../assets/product9.webp";
import product10 from "../assets/product10.webp";
import product11 from "../assets/product11.webp";
import product12 from "../assets/product12.webp";
import product13 from "../assets/product13.webp";
import product14 from "../assets/product14.webp";
import product15 from "../assets/product15.webp";
import product16 from "../assets/product16.webp";

const productImages = {
  "product1.jpg": product1,
  "product2.jpg": product2,
  "product3.jpg": product3,
  "product4.jpg": product4,
  "product5.jpg": product5,
  "product6.jpg": product6,
  "product7.jpg": product7,
  "product8.jpg": product8,
  "product9.jpg": product9,
  "product10.jpg": product10,
  "product11.jpg": product11,
  "product12.jpg": product12,
  "product13.jpg": product13,
  "product14.jpg": product14,
  "product15.jpg": product15,
  "product16.jpg": product16,
};

function Products() {
  const [products, setProducts] = useState(localProducts);

  useEffect(() => {
    fetch("https://furniture-backend-beta.vercel.app/products")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setProducts(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <section className="bg-white py-16">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 lg:px-10">

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={productImages[product.image] || product.image}
              title={product.title}
              price={product.price}
              rating={product.rating}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Products;