import products from "../data/products";
import { Link } from "react-router-dom";

function CartDrawer({ open, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        aria-hidden={!open}
        className={`fixed inset-0 bg-black/40 z-40 transition duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-drawer-title"
        aria-hidden={!open}
        inert={!open}
        className={`fixed top-0 right-0 h-screen w-[85%] max-w-[380px] bg-white shadow-2xl z-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 sm:p-6 border-b">
          <h2 id="cart-drawer-title" className="text-xl sm:text-2xl font-bold text-slate-900">
            Shopping Cart
          </h2>

          <button
            type="button"
            aria-label="Close shopping cart"
            onClick={onClose}
            className="text-2xl text-gray-500 hover:text-red-500 duration-300"
          >
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 sm:p-6">

          <div className="flex gap-4 items-center border-b pb-5">

            <img
              src={products[0].image}
              alt={products[0].title}
              loading="lazy"
              className="w-16 h-16 sm:w-24 sm:h-24 rounded-xl object-cover bg-slate-100"
            />

            <div className="flex-1">

              <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                Levoisa
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                Qty: 1
              </p>

              <p className="text-blue-600 font-bold mt-2">
                $1499
              </p>

            </div>

            <button type="button" aria-label="Remove item from cart" className="text-gray-400 hover:text-red-500 text-xl">
              ✕
            </button>

          </div>

        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 border-t bg-white p-4 sm:p-6">

          <div className="flex justify-between items-center mb-5">

            <span className="text-gray-600">
              Subtotal
            </span>

            <span className="text-xl font-bold text-blue-600">
              $1499
            </span>

          </div>

          <div className="flex flex-col sm:flex-row gap-3">

            <Link to="/cart" className="flex-1 w-full text-center border border-slate-900 text-slate-900 rounded-lg py-3 font-medium hover:bg-slate-900 hover:text-white duration-300">
              View Cart
            </Link>

            <Link to="/checkout" className="flex-1 w-full text-center bg-slate-900 text-white rounded-lg py-3 font-medium hover:bg-blue-600 duration-300">
              Checkout
            </Link>

          </div>

        </div>

      </div>
    </>
  );
}

export default CartDrawer;