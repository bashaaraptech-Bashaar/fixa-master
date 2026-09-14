import { GiTrophy } from "react-icons/gi";
import { MdVerified } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";

function Features() {
  return (
    <section className="bg-[#FAF3EA] px-6 md:px-12 lg:px-24 py-12 md:py-20">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

        <div className="flex items-center gap-4 lg:gap-5">

          <GiTrophy
            size={40}
            className="text-[#090631] shrink-0"
          />

          <div>

            <h2 className="text-xl lg:text-2xl font-bold">
              High Quality
            </h2>

            <p className="text-slate-600 text-sm lg:text-base">
              Crafted from top materials
            </p>

          </div>

        </div>

        <div className="flex items-center gap-4 lg:gap-5">

          <MdVerified
            size={40}
            className="text-[#090631] shrink-0"
          />

          <div>

            <h2 className="text-xl lg:text-2xl font-bold">
              Warranty Protection
            </h2>

            <p className="text-slate-600 text-sm lg:text-base">
              Over 2 Years
            </p>

          </div>

        </div>

        <div className="flex items-center gap-4 lg:gap-5">

          <FaShippingFast
            size={40}
           className="text-[#090631] shrink-0"
          />

          <div>

            <h2 className="text-xl lg:text-2xl font-bold">
              Free Shipping
            </h2>

            <p className="text-slate-600 text-sm lg:text-base">
              Order over $150
            </p>

          </div>

        </div>

        <div className="flex items-center gap-4 lg:gap-5">

          <RiCustomerService2Line
            size={40}
            className="text-[#090631] shrink-0"
          />

          <div>

            <h2 className="text-xl lg:text-2xl font-bold">
              24 / 7 Support
            </h2>

            <p className="text-slate-600 text-sm lg:text-base">
              Dedicated Support
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Features;