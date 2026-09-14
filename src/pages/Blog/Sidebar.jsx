import { FiSearch } from "react-icons/fi";

import RecentPost from "./RecentPost";

import blog1 from "../../assets/product1.webp";
import blog2 from "../../assets/product5.webp";
import blog3 from "../../assets/product4.webp";
import blog4 from "../../assets/product7.webp";

function Sidebar() {
  return (
<div className="mt-10 lg:mt-0 hidden lg:block">

      <div className="relative">

        <input
          type="text"
          id="blog-search"
          aria-label="Search blog posts"
          placeholder="Search..."
          className="w-full border rounded-lg p-4 pr-12 outline-none"
        />

        <FiSearch
          className="absolute right-5 top-1/2 -translate-y-1/2"
          size={20}
        />

      </div>

      <div className="mt-16">

       

        <div className="space-y-6 text-gray-500">

          <div className="flex justify-between">
            <p>Livings</p>
            <span>8</span>
          </div>

          <div className="flex justify-between">
            <p>Chairs</p>
            <span>12</span>
          </div>

          <div className="flex justify-between">
            <p>Sofa</p>
            <span>10</span>
          </div>

          <div className="flex justify-between">
            <p>Accessories</p>
            <span>15</span>
          </div>

          <div className="flex justify-between">
            <p>Bed</p>
            <span>9</span>
          </div>

        </div>

      </div>

      <div className="mt-20">

        <h2 className="text-2xl font-bold mb-8">
          Recent Posts
        </h2>

        <div className="space-y-8">

         <RecentPost
  image={blog1}
  title="How to Create a Cozy Living Room"
  date="20 Jan 2026"
/>

<RecentPost
  image={blog2}
  title="Choosing the Perfect Accent Chair"
  date="18 Jan 2026"
/>

<RecentPost
  image={blog3}
  title="Modern Furniture Trends for 2026"
  date="14 Jan 2026"
/>

<RecentPost
  image={blog4}
  title="Simple Ways to Refresh Your Home"
  date="10 Jan 2026"
/>

        </div>

      </div>

    </div>
  );
}

export default Sidebar;
