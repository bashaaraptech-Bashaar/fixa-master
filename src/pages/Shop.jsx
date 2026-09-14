import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";
import FilterBar from "./Shop/FilterBar";
import Products from "../components/Products";
import Pagination from "../components/Pagination";
import Features from "../components/Features";

import banner from "../assets/prop-img.webp";

function Shop() {
  return (
    <>
      <Navbar />

      <PageBanner
        title="Shop"
        breadcrumb="Home > Shop"
        background={banner}
      />

      <FilterBar />

      <Products />

      <Pagination />

      <Features />

      <Footer />
    </>
  );
}

export default Shop;
