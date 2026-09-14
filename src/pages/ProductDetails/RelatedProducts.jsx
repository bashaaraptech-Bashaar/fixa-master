import products from "../../data/products";
import ProductCard from "../../components/ProductCard";
import { Link } from "react-router-dom";

function RelatedProducts() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12 md:py-20">

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-14">
        Related Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

        {products.slice(0,4).map((item)=>(
          <ProductCard
            key={item.id}
            {...item}
          />
        ))}

      </div>

      <div className="text-center mt-12">

        <Link to="/shop">
          <button className="border border-slate-900 px-8 py-3 rounded-lg hover:bg-slate-800 hover:text-white duration-300">
            View All Products
          </button>
        </Link>

      </div>

    </section>
  );
}

export default RelatedProducts;
