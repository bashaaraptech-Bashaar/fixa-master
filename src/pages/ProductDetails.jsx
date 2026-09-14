import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ProductImages from "./ProductDetails/ProductImages";
import ProductInfo from "./ProductDetails/ProductInfo";
import ProductTabs from "./ProductDetails/ProductTabs";
import RelatedProducts from "./ProductDetails/RelatedProducts";

function ProductDetails() {
  return (
    <>
      <Navbar />

      {/* Breadcrumb */}

      <section className="bg-[#fdfdfd] px-6 md:px-12 lg:px-24 py-4 md:py-8">
        <div className="flex items-center gap-3 text-gray-500">

          <span>Home</span>

          <span>{'>'}</span>

          <span>Shop</span>

          <span>{'>'}</span>

          <span className="text-black font-medium">
            NovaBook Pro
          </span>

        </div>
      </section>

      {/* Product Section */}

      <section className="px-6 md:px-12 lg:px-24 py-12 md:py-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">

          <ProductImages />

          <ProductInfo />

        </div>

      </section>

      {/* Description */}

      <ProductTabs />

      {/* Related Products */}

      <RelatedProducts />

      <Footer />

    </>
  );
}

export default ProductDetails;
