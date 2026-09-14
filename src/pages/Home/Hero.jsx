import HeroImage from "../../assets/hero.webp";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative h-[80vh] overflow-hidden">

      <img
        src={HeroImage}
        alt="Modern furniture and technology collection"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
   <div className="relative z-10 h-full max-w-[1600px] mx-auto flex items-center justify-end px-6 md:px-12 lg:px-8 xl:px-0">

       <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-10 lg:p-12 max-w-xl border border-slate-200">

  <p className="uppercase tracking-[4px] text-slate-800 font-semibold text-sm">
    NEW ARRIVAL
  </p>

  <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
    Discover Our
    <br />
    New Collection
  </h1>

  <p className="mt-6 text-slate-600 leading-8 text-base">
    Experience cutting-edge laptops, gaming gear, smartphones,
    and premium accessories designed to power your work,
    creativity, and entertainment.
  </p>

  <div className="flex gap-4 mt-8">

   <Link
  to="/shop"
  className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold duration-300 shadow-lg"
>
  Shop Now
</Link>

    

  </div>

</div>

      </div>

    </section>
  );
}

export default Hero;
