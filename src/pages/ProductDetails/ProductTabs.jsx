import Product1 from "../../assets/product1.webp";
import Product2 from "../../assets/product2.webp";
function ProductTabs() {
  return (
    <section className="border-t border-b mt-10 px-6 md:px-0">

      <div className="flex flex-wrap justify-center gap-4 md:gap-16 py-6 md:py-10">

        <button className="text-lg md:text-2xl font-semibold border-b-2 border-slate-900 pb-2">
          Description
        </button>

        <button className="text-lg md:text-2xl text-gray-500 hover:text-black duration-300">
          Additional Info
        </button>

        <button className="text-lg md:text-2xl text-gray-500 hover:text-black duration-300">
          Reviews (5)
        </button>

      </div>

      <div className="max-w-5xl mx-auto text-center pb-16">

        <p className="text-gray-500 leading-8">
         levoisa is a vegan cheese made from unpasteurized milk, tofu, and nuts. It is made in small batches and aged in wooden barrels for at least a year.  
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-8 md:mt-12">

         <img
  src={Product1}
  alt="Product"
  className="rounded-xl h-48 md:h-72 w-full object-cover"
/>

<img
  src={Product2}
  alt="Product"
  className="rounded-xl h-48 md:h-72 w-full object-cover"
/>

        </div>

      </div>

    </section>
  );
}

export default ProductTabs;
