import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Features from "../components/Features";
import PageBanner from "../components/PageBanner";
import BlogCard from "./Blog/BlogCard";
import Sidebar from "./Blog/Sidebar";
import Pagination from "../components/Pagination";

import banner from "../assets/prop-img.webp";

import blog1 from "../assets/blogpost1.webp";
import blog2 from "../assets/blogpost2.webp";
import blog3 from "../assets/blogpost3.webp";

function Blog() {
  return (
    <>
      <Navbar />

      <PageBanner
        title="Blog"
        breadcrumb="Home > Blog"
        background={banner}
      />

      <section className="px-6 md:px-12 lg:px-24 py-12 md:py-20">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">

          <div className="lg:col-span-2 space-y-12 lg:space-y-16">

            <BlogCard
              image={blog1}
              title="Top 5 Gaming Laptops You Should Buy in 2026"
              category="Gaming"
              date="20 Jan 2026"
              description="Explore the latest high-performance gaming laptops featuring RTX graphics, Intel Ultra processors, and advanced cooling systems for gamers and creators."
            />

            <BlogCard
              image={blog2}
              title="Why Wireless Earbuds Are Taking Over"
              category="Audio"
              date="16 Jan 2026"
              description="Discover the newest ANC earbuds with crystal-clear sound, long battery life, and premium comfort for work, travel, and entertainment."
            />

            <BlogCard
              image={blog3}
              title="Building the Perfect Tech Workspace"
              category="Technology"
              date="12 Jan 2026"
              description="Upgrade your productivity with ergonomic monitors, mechanical keyboards, RGB lighting, and minimalist desk accessories."
            />

            <Pagination />

          </div>

          <Sidebar />

        </div>

      </section>

      <Features />

      <Footer />

    </>
  );
}

export default Blog;
