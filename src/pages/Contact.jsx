import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";
import Features from "../components/Features";
import ContactInfo from "./Contact/ContactInfo";
import ContactForm from "./Contact/ContactForm";

import banner from "../assets/prop-img.webp";

function Contact() {
  return (
    <>
      <Navbar />

      <PageBanner
        title="Contact"
        breadcrumb="Home > Contact"
        background={banner}
      />

      <section className="px-6 md:px-12 lg:px-24 py-12 md:py-20">

        <div className="text-center mb-12 md:mb-16">

          <h2 className="text-3xl md:text-4xl font-bold">
            Get In Touch With Us
          </h2>

          <p className="text-gray-500 mt-5 max-w-3xl mx-auto px-4">
            Have questions about our products or services?
            We'd love to hear from you. Fill out the form
            and our team will get back to you shortly.
          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">

          <ContactInfo />

          <ContactForm />

        </div>

      </section>

      <Features />

      <Footer />

    </>
  );
}

export default Contact;
