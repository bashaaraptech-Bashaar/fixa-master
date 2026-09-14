import { FiFilter } from "react-icons/fi";
import { BsGrid3X3GapFill, BsViewList } from "react-icons/bs";

function FilterBar() {
  return (
    <section className="bg-[#ffffff] px-4 md:px-12 lg:px-24 py-6 md:py-8">

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">

        <div className="flex flex-wrap items-center gap-4 md:gap-6">

          <button type="button" aria-label="Open filters" className="flex items-center gap-2 cursor-pointer">

            <FiFilter size={20} />

            <p>Filter</p>

          </button>

          <button type="button" aria-label="Grid view" className="cursor-pointer">
            <BsGrid3X3GapFill size={20} aria-hidden="true" />
          </button>

          <button type="button" aria-label="List view" className="cursor-pointer">
            <BsViewList size={22} aria-hidden="true" />
          </button>

          <div className="w-px h-8 bg-gray-400 hidden md:block"></div>

          <p className="text-sm md:text-base">
            Showing 1–12 of 100 Results
          </p>

        </div>

        <div className="flex gap-4 md:gap-8">


          <div className="flex items-center gap-2 md:gap-4">

            <p className="text-sm md:text-base">Sort by</p>

            <input
              type="text"
              id="sort-products"
              aria-label="Sort products"
              value="Default"
              readOnly
              className="w-28 md:w-40 h-10 md:h-14 bg-slate-100 pl-3 md:pl-5 outline-none text-sm md:text-base"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default FilterBar;
