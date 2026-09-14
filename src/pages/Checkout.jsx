import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";
import BillingForm from "./Checkout/BillingForm";
import OrderSummary from "./Checkout/OrderSummary";
import Features from "../components/Features";

import { useState } from "react";

import banner from "../assets/prop-img.webp";

function Checkout() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "Pakistan",
    street: "",
    city: "",
    province: "Sindh",
    zip: "",
    phone: "",
    email: "",
    additionalInfo: ""
  });

  return (
    <>
      <Navbar />

      <PageBanner
        title="Checkout"
        breadcrumb="Home > Checkout"
        background={banner}
      />

      <section className="px-6 md:px-12 lg:px-24 py-12 md:py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">

          <BillingForm
            formData={formData}
            setFormData={setFormData}
          />

          <OrderSummary
            formData={formData}
          />

        </div>

      </section>

      <Features />

      <Footer />
    </>
  );
}

export default Checkout;