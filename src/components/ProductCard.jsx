import { FiShare2, FiHeart } from "react-icons/fi";
import { MdCompareArrows } from "react-icons/md";
import { FaStar } from "react-icons/fa";

function ProductCard({
  image,
  title,
  price,
  rating,
}) {
  return (
   <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

      <div className="relative overflow-hidden">

        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-48 md:h-72 object-cover"
        />
        

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 duration-300 flex flex-col justify-center items-center">

          <button type="button" className="bg-white text-slate-900 px-10 py-3 font-semibold hover:bg-gray-200">

            Add To Cart

          </button>

          <div className="flex gap-6 text-white mt-8">

            <button type="button" aria-label={`Share ${title}`} className="flex items-center gap-2 cursor-pointer">

              <FiShare2 />

              Share

            </button>

            <button type="button" aria-label={`Compare ${title}`} className="flex items-center gap-2 cursor-pointer">

              <MdCompareArrows />

              Compare

            </button>

            <button type="button" aria-label={`Add ${title} to wishlist`} className="flex items-center gap-2 cursor-pointer">

              <FiHeart />

              Like

            </button>

          </div>

        </div>

      </div>

      <div className="p-4 md:p-5">

        <h2 className="text-lg md:text-2xl font-semibold">

          {title}

        </h2>
        <div className="flex items-center gap-1 mt-2">
  {[...Array(Math.round(rating))].map((_, index) => (
    <FaStar
      key={index}
      className="text-yellow-400 text-sm"
    />
  ))}
</div>

       

        <h3 className="text-xl font-bold mt-4">

          {price}

        </h3>

      </div>

    </div>
  );
}

export default ProductCard;