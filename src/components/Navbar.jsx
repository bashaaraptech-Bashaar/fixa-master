import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiMenu,
  FiX,
} from "react-icons/fi";

import { NavLink } from "react-router-dom";
import CartDrawer from "./CartDrawer";
import { useState } from "react";

function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white text-slate-800 h-20 px-5 sm:px-6 md:px-12 lg:px-24 flex justify-between items-center shadow-lg">

        {/* LOGO */}
        <NavLink to="/" className="ml-1 md:ml-6">
          <span className="text-slate-800 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide">
            FIXA
          </span>
        </NavLink>


        {/* DESKTOP NAVIGATION */}
        <ul className="hidden md:flex gap-4 lg:gap-8 font-medium">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-slate-900"
                  : "text-slate-600 hover:text-slate-900 transition"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive
                  ? "text-slate-900"
                  : "text-slate-600 hover:text-slate-900 transition"
              }
            >
              Shop
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "text-slate-900"
                  : "text-slate-600 hover:text-slate-900 transition"
              }
            >
              Blog
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive
                  ? "text-slate-900"
                  : "text-slate-600 hover:text-slate-900 transition"
              }
            >
              Details
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-slate-900"
                  : "text-slate-600 hover:text-slate-900 transition"
              }
            >
              Contact
            </NavLink>
          </li>

        </ul>


        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4 sm:gap-5 md:gap-6 text-2xl text-slate-800">

          {/* SEARCH */}
          <button type="button" aria-label="Search" className="hover:text-slate-500 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
            <FiSearch aria-hidden="true" />
          </button>


          {/* HEART - DESKTOP ONLY */}
          <button type="button" aria-label="View wishlist" className="hover:text-slate-500 transition hidden md:block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
            <FiHeart aria-hidden="true" />
          </button>


          {/* CART */}
          <button
            type="button"
            aria-label="Open shopping cart"
            onClick={() => setCartOpen(true)}
            className="hover:text-slate-500 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            <FiShoppingCart aria-hidden="true" />
          </button>


          {/* HAMBURGER - MOBILE ONLY */}
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>

        </div>


        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white shadow-xl border-t border-slate-100 md:hidden">

            <ul className="flex flex-col">

              <li>
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className="block px-6 py-4 text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/shop"
                  onClick={closeMenu}
                  className="block px-6 py-4 text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition"
                >
                  Shop
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/blog"
                  onClick={closeMenu}
                  className="block px-6 py-4 text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition"
                >
                  Blog
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/product"
                  onClick={closeMenu}
                  className="block px-6 py-4 text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition"
                >
                  Details
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  onClick={closeMenu}
                  className="block px-6 py-4 text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition"
                >
                  Contact
                </NavLink>
              </li>

            </ul>

          </div>
        )}

      </nav>


      {/* CART DRAWER */}
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      />

    </>
  );
}

export default Navbar;
