import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProductInfo() {

  const [quantity, setQuantity] = useState(1);

  return (

    <div className="mt-8 md:mt-0">

      <h1 className="text-3xl md:text-5xl font-bold">

        Levoise

      </h1>

      <h2 className="text-2xl md:text-3xl text-slate-900 font-semibold mt-4">

        $1499

      </h2>

      <div className="flex items-center gap-2 mt-5">

        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />

        <span className="ml-3 text-gray-500 text-sm md:text-base">

          5 Customer Reviews

        </span>

      </div>

      <p className="text-gray-600 mt-6 md:mt-8 leading-7 md:leading-8 text-sm md:text-base">

        levoisa lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        eget nisl euismod, aliquam magna in, finibus nisi. Sed eget nisl
        euismod, aliquam magna in, finibus nisi. Sed eget nisl euismod,

      </p>

      <h3 className="mt-8 md:mt-10 font-semibold">

        Color

      </h3>

      <div className="flex gap-4 mt-4">

        <button type="button" aria-label="Select black color" className="w-8 h-8 rounded-full bg-black"></button>

        <button type="button" aria-label="Select blue color" className="w-8 h-8 rounded-full bg-blue-700"></button>

        <button type="button" aria-label="Select gray color" className="w-8 h-8 rounded-full bg-gray-400"></button>

      </div>

      <div className="flex flex-wrap gap-3 md:gap-5 mt-8 md:mt-12">

        <div className="flex items-center border rounded-lg">

          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            className="px-4 md:px-5 py-3"
          >
            -
          </button>

          <span className="px-4 md:px-6">

            {quantity}

          </span>

          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 md:px-5 py-3"
          >
            +
          </button>

        </div>

        <button type="button" className="border px-6 md:px-10 rounded-lg hover:bg-slate-800 hover:text-white duration-300 text-sm md:text-base">

          Add To Cart

        </button>

        <Link to="/compare" className="border border-slate-900 px-6 md:px-8 py-3 rounded-lg hover:bg-slate-800 hover:text-white duration-300 text-sm md:text-base">
          Compare
        </Link>

      </div>

      <div className="mt-8 md:mt-12 space-y-3 text-gray-500 text-sm md:text-base">

        <p>SKU : NB-001</p>

        <p>Category : Laptop</p>

        <p>Tags : Laptop, Gaming, Tech</p>

      </div>

    </div>

  );

}

export default ProductInfo;
