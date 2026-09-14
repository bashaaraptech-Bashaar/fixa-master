import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiSend,
} from "react-icons/fi";

import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 px-6 md:px-12 lg:px-24">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">

        {/* Brand */}

        <div>

          <div className="text-4xl font-extrabold tracking-wide">
            FIXA
          </div>

          <p className="text-slate-400 mt-5 leading-7">
            Discover timeless furniture designed to bring
            comfort, elegance, and character into your home.
          </p>

          <div className="flex gap-5 mt-8 text-2xl">

            <a href="#facebook" aria-label="Facebook" className="hover:text-slate-300 duration-300">
              <FiFacebook aria-hidden="true" />
            </a>

            <a href="#instagram" aria-label="Instagram" className="hover:text-slate-300 duration-300">
              <FiInstagram aria-hidden="true" />
            </a>

            <a href="#twitter" aria-label="Twitter" className="hover:text-slate-300 duration-300">
              <FiTwitter aria-hidden="true" />
            </a>

            <a href="#linkedin" aria-label="LinkedIn" className="hover:text-slate-300 duration-300">
              <FiLinkedin aria-hidden="true" />
            </a>

          </div>

        </div>


        {/* Quick Links */}

        <div>

          <h2 className="text-xl font-semibold mb-6">
            Quick Links
          </h2>

          <ul className="space-y-4">

            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-white"
                    : "text-slate-400 hover:text-white duration-300"
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
                    ? "text-white"
                    : "text-slate-400 hover:text-white duration-300"
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
                    ? "text-white"
                    : "text-slate-400 hover:text-white duration-300"
                }
              >
                Blog
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/compare"
                className={({ isActive }) =>
                  isActive
                    ? "text-white"
                    : "text-slate-400 hover:text-white duration-300"
                }
              >
                Compare
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-white"
                    : "text-slate-400 hover:text-white duration-300"
                }
              >
                Contact
              </NavLink>
            </li>

          </ul>

        </div>


        {/* Support */}

        <div>

          <h2 className="text-xl font-semibold mb-6">
            Support
          </h2>

          <ul className="space-y-4 text-slate-400">

            <li className="hover:text-white cursor-pointer duration-300">
              Help Center
            </li>

            <li className="hover:text-white cursor-pointer duration-300">
              Shipping & Delivery
            </li>

            <li className="hover:text-white cursor-pointer duration-300">
              Returns & Exchanges
            </li>

            <li className="hover:text-white cursor-pointer duration-300">
              Privacy Policy
            </li>

            <li className="hover:text-white cursor-pointer duration-300">
              Terms & Conditions
            </li>

          </ul>

        </div>


        {/* Newsletter */}

        <div>

          <h2 className="text-xl font-semibold mb-6">
            Newsletter
          </h2>

          <p className="text-slate-400 mb-5">
            Subscribe to receive new collection updates,
            special offers, and interior inspiration.
          </p>

          <div className="flex">

            <input
              type="email"
              id="footer-email"
              aria-label="Email address for newsletter"
              placeholder="Enter your email"
              className="bg-slate-800 text-white w-full px-4 py-3 rounded-l-lg outline-none placeholder:text-slate-500"
            />

            <button
              type="submit"
              aria-label="Subscribe to newsletter"
              className="bg-slate-700 px-5 rounded-r-lg hover:bg-slate-600 duration-300"
            >
              <FiSend />
            </button>

          </div>

        </div>

      </div>


      {/* Bottom */}

      <hr className="border-slate-700 my-10" />

      <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-slate-400">

        <p>
          © 2026 FIXA. All rights reserved.
        </p>

        <p>
          Designed with React & Tailwind CSS
        </p>

      </div>

    </footer>
  );
}

export default Footer;