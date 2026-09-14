import CategoryCard from "./CategoryCard";
import { Link } from "react-router-dom";
import Laptop from "../../assets/laptop-bg.webp";
import Earbuds from "../../assets/speaker-bg.webp";
import Watch from "../../assets/gaming.webp";

function Categories() {
  return (
    <section className="py-12 md:py-20 px-6 md:px-12 lg:px-24">

      <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
        Browse Categories
      </h2>

      <p className="text-center text-gray-500 mt-3 text-sm md:text-base">
        Discover premium devices built for work, entertainment and everyday life.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-10 lg:mt-14">

        <CategoryCard
          image={Laptop}
          title="Dining"
        />

        <CategoryCard
          image={Earbuds}
          title="Lounge"
        />

        <CategoryCard
          image={Watch}
          title="Living"
        />

      </div>
      <div className="text-center mt-12">
        <Link to="/shop" className="inline-block border border-slate-900 px-8 py-3 rounded-lg hover:bg-slate-800 hover:text-white duration-300">
          View All Products
        </Link>
      </div>
    </section>
  );
}

export default Categories;

