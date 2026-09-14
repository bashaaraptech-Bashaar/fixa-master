import Navbar from "../components/Navbar";
import Hero from "./Home/Hero";
import Slider from "../components/Slider";
import Categories from "./Home/Categories";
import Products from "../components/Products";
import Gallery from "./Home/Gallery";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <Slider/>
      <Gallery />
      <Footer />
    </>
  );
}

export default Home;
