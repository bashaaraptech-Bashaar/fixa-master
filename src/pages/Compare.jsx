import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Features from "../components/Features";
import PageBanner from "../components/PageBanner";
import CompareProducts from "./Compare/CompareProducts";
import CompareTable from "./Compare/CompareTable";

import banner from "../assets/prop-img.webp";

function Compare() {
  return (
    <>
      <Navbar />

      <PageBanner
        title="Product Comparison"
        breadcrumb="Home > Comparison"
        background={banner}
      />

      <CompareProducts />

      <CompareTable />

      <Features />

      <Footer />
    </>
  );
}

export default Compare;
