import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import setup1 from "../assets/setup1.webp";
import setup2 from "../assets/setup2.webp";
import setup3 from "../assets/setup3.webp";
import setup4 from "../assets/setup4.webp";
import setup5 from "../assets/setup5.webp";

const rooms = [
  setup1,
  setup2,
  setup3,
  setup4,
  setup5,
];

export default function Slider() {
  const [active, setActive] = useState(0);
  const [animate, setAnimate] = useState(true);

  const changeSlide = (newIndex) => {
    setAnimate(false);

    setTimeout(() => {
      setActive(newIndex);
      setAnimate(true);
    }, 180);
  };

  const previous = () => {
    changeSlide(active === 0 ? rooms.length - 1 : active - 1);
  };

  const next = () => {
    changeSlide((active + 1) % rooms.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimate(false);
      setActive((current) => (current + 1) % rooms.length);
      setTimeout(() => setAnimate(true), 180);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const getRoom = (offset) =>
    rooms[(active + offset + rooms.length) % rooms.length];

  return (
    <section className="mt-20 w-full min-h-[550px] bg-[#faf8f3] flex items-center overflow-hidden">

      <div className="max-w-7xl mx-auto grid md:grid-cols-[34%_66%] items-center">

        {/* LEFT */}

        <div className="px-6 lg:px-12 text-center md:text-left mb-10 md:mb-0">

          <p className="uppercase tracking-[4px] text-slate-500 text-sm font-semibold mb-4">
            Aesthetic Rooms
          </p>

          <h2 className="text-4xl lg:text-5xl font-black leading-tight text-slate-900">

            Build Your Dream
            <br />
            Room

          </h2>

          <p className="mt-6 text-slate-500 leading-7">

            Discover premium laptops, gaming accessories,
            mechanical keyboards, RGB setups and flagship
            devices designed for the ultimate experience.

          </p>

          <button type="button" className="mt-8 bg-slate-900 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition duration-300 shadow-lg">
            Shop Collection
          </button>

        </div>

        {/* RIGHT */}

        <div className="relative h-[500px] flex items-center overflow-hidden">

          {/* Left */}

          <div className="hidden lg:block w-[180px] h-[390px] overflow-hidden rounded-2xl shadow-xl rotate-6 opacity-80">

            <img
              src={getRoom(-1)}
              className={`w-full h-full object-cover transition-all duration-500 ${
                animate
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
              alt=""
            />

          </div>

          {/* Center */}

          <div className="relative mx-auto lg:mx-6 w-[300px] lg:w-[360px] h-[450px] rounded-3xl overflow-hidden shadow-2xl">

            <img
              src={rooms[active]}
              className={`w-full h-full object-cover transition-all duration-500 ${
                animate
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
              alt=""
            />

          </div>

          {/* Right */}

          <div className="hidden lg:block w-[180px] h-[390px] overflow-hidden rounded-2xl shadow-xl -rotate-6 opacity-80">

            <img
              src={getRoom(1)}
              className={`w-full h-full object-cover transition-all duration-500 ${
                animate
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
              alt=""
            />

          </div>

          {/* Previous */}

          <button
            type="button"
            aria-label="Show previous room"
            onClick={previous}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-slate-900 hover:text-white transition duration-300"
          >
            <FiChevronLeft size={22} aria-hidden="true" />
          </button>

          {/* Next */}

          <button
            type="button"
            aria-label="Show next room"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-slate-900 hover:text-white transition duration-300"
          >
            <FiChevronRight size={22} aria-hidden="true" />
          </button>

          {/* Dots */}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">

            {rooms.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Show room ${index + 1}`}
                aria-current={active === index ? "true" : undefined}
                onClick={() => changeSlide(index)}
                className={`w-8 h-8 flex items-center justify-center transition-all duration-300 rounded-full ${
                  active === index
                    ? "bg-slate-900"
                    : "bg-gray-300 hover:bg-gray-500"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-current" aria-hidden="true" />
              </button>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}