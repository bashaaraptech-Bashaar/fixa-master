import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";
import CartTable from "./Cart/CartTable";
import CartTotal from "./Cart/CartTotal";
import Features from "../components/Features";

import banner from "../assets/prop-img.webp";

function Cart() {
  return (
    <>
      <Navbar />

      <PageBanner
        title="Cart"
        breadcrumb="Home > Cart"
        background={banner}
      />

      <section className="px-6 md:px-12 lg:px-24 py-12 md:py-20 flex flex-col lg:flex-row gap-8 lg:gap-10">

        <div className="w-full lg:w-[70%] overflow-x-auto">
          <CartTable />
        </div>

        <div className="w-full lg:w-[30%]">
          <CartTotal />
        </div>

      </section>

      <Features />

      <Footer />
    </>
  );
}

export default Cart;
