import comparison from "../../data/comparisonData";

function CompareProducts() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12 md:py-16">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

        <div className="flex flex-col justify-center">

          <h2 className="text-4xl font-bold">
            Compare Products
          </h2>

          <p className="text-gray-500 mt-4">
            Compare our premium furniture pieces and choose
            the one that best fits your space and style.
          </p>

        </div>

        {comparison.map((item) => (

          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-8 text-center"
          >

            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover rounded-lg"
            />

            <h2 className="text-2xl font-bold mt-6">
              {item.name}
            </h2>

            <p className="text-gray-500 mt-2">
              {item.rating}
            </p>

            <h3 className="text-slate-950 text-2xl font-semibold mt-4">
              {item.price}
            </h3>

            <button className="mt-8 px-8 py-3 rounded bg-white text-slate-900 hover:bg-slate-900 hover:text-white duration-300">
              Add To Cart
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default CompareProducts;