import { FaStar } from "react-icons/fa";

function BestSellerCard({ image, title, price, rating }) {
  return (
    <div className=" flex gap-3 p-3 border rounded-xl hover:shadow-md duration-300 bg-white">

      <img
        src={image}
        alt={title}
        className="w-16 h-16 object-cover rounded-lg"
      />

      <div className="flex-1">

        <h3 className="text-sm font-semibold text-slate-900 leading-5 line-clamp-2">
          {title}
        </h3>

        <div className="flex gap-0.5 mt-1">
          {[...Array(Math.round(rating || 5))].map((_, index) => (
            <FaStar
              key={index}
              className="text-yellow-400 text-[11px]"
            />
          ))}
        </div>

        <p className="text-sm font-bold text-slate-900 mt-1">
          {price}
        </p>

      </div>
    </div>
    
  );
}

export default BestSellerCard;