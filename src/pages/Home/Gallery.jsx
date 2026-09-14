import g1 from "../../assets/gallery1.jpg.webp";
import g2 from "../../assets/gallery2.jpg.webp";
import g3 from "../../assets/gallery3.jpg.webp";
import g4 from "../../assets/gallery4.jpg.webp";
import g5 from "../../assets/gallery5.jpg.webp";
import g6 from "../../assets/gallery6.jpg.webp";
import g7 from "../../assets/gallery7.jpg.webp";
import g8 from "../../assets/gallery8.jpg.webp";

function Gallery() {
  return (
    <section className="bg-white px-8  md:py-20 ">

      <p className="text-center text-blue-500 uppercase tracking-[4px] text-sm md:text-base">
        Share Your Setup With
      </p>

      <h2 className="text-center text-3xl md:text-5xl font-bold text-slate-900 mt-3">
        #TechnovaTech
      </h2>
<div className="grid grid-cols-2 md:grid-cols-12 auto-rows-[170px] md:auto-rows-[120px]   mt-16 flex gap-3">

  {/* Keyboard */}
  <div className="col-span-1 md:col-span-2 md:row-span-3 overflow-hidden  shadow-lg group rounded-2xl">
    <img
      src={g3}
      alt="Keyboard on a modern desk"
      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
    />
  </div>

  {/* Earbuds */}
  <div className="col-span-1 md:col-span-4 md:row-span-2 overflow-hidden  shadow-lg group rounded-2xl">
    <img
      src={g2}
      alt="Wireless earbuds and desk accessories"
      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
    />
  </div>

  {/* Gaming Setup */}
  <div className="col-span-2 md:col-span-3 md:row-span-4 overflow-hidden  shadow-lg group rounded-2xl">
    <img
      src={g1}
      alt="Gaming computer workspace"
      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
    />
  </div>

  {/* Watch */}
  <div className="col-span-1 md:col-span-3 md:row-span-2 overflow-hidden  shadow-lg group rounded-2xl">
    <img
      src={g4}
      alt="Smartwatch and modern desk setup"
      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
    />
  </div>

  {/* Tablet */}
  <div className="col-span-1 md:col-span-2 md:row-span-2 overflow-hidden  shadow-lg group rounded-2xl">
    <img
      src={g6}
      alt="Tablet on a workspace"
      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
    />
  </div>

  {/* RGB Workspace */}
  <div className="col-span-1 md:col-span-2 md:row-span-2 overflow-hidden  shadow-lg group rounded-2xl">
    <img
      src={g5}
      alt="RGB workspace accessories"
      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
    />
  </div>

  {/* Gaming Mouse */}
  <div className="col-span-2 md:col-span-3 md:row-span-2 overflow-hidden  shadow-lg group rounded-2xl">
    <img
      src={g7}
      alt="Gaming mouse and keyboard"
      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
    />
  </div>

  {/* Extra */}
  <div className="col-span-2 md:col-span-2 md:row-span-1 overflow-hidden  shadow-lg group rounded-2xl">
    <img
      src={g8}
      alt="Modern technology setup"
      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
    />
  </div>

</div>

    </section>
  );
}

export default Gallery;

