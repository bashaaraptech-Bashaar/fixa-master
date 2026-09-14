import { Link } from "react-router-dom";
import confetti from "../assets/confetti.gif";

function OrderSuccess() {
  return (
    <section className="min-h-screen bg-white flex justify-center items-center px-6">

<div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl p-6 md:p-12 text-center">

        <img
          src={confetti}
          alt="Order Success"
className="w-40 md:w-60 mx-auto"
        />

       

<h1 className="text-3xl md:text-5xl font-bold text-slate-900 mt-8">
          Thank You!
        </h1>

        <p className="text-xl md:text-2xl text-green-600 font-semibold mt-4">
          Your Order Has Been Placed Successfully
        </p>

        <p className="text-gray-500 leading-8 mt-6">
          Thank you for shopping with <b>TechNova</b>.
          We've received your order and our team is already
          preparing it for shipment.
        </p>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-10">

          <div className="bg-slate-100 rounded-xl p-5">

            <h3 className="text-gray-500 text-sm">
              Order No.
            </h3>

            <p className="font-bold text-xl mt-2">
              #TN24861
            </p>

          </div>

          <div className="bg-slate-100 rounded-xl p-5">

            <h3 className="text-gray-500 text-sm">
              Estimated Delivery
            </h3>

            <p className="font-bold text-xl mt-2">
              2-4 Days
            </p>

          </div>

          <div className="bg-slate-100 rounded-xl p-5">

            <h3 className="text-gray-500 text-sm">
              Payment
            </h3>

            <p className="font-bold text-xl mt-2">
              Confirmed
            </p>

          </div>

        </div>

<div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mt-12">

          <Link
            to="/shop"
className="bg-slate-900 text-white px-6 md:px-8 py-4 rounded-xl hover:bg-blue-600 duration-300 text-sm md:text-base text-center"
          >
            Continue Shopping
          </Link>

          <Link
            to="/"
className="border border-slate-900 px-6 md:px-8 py-4 rounded-xl hover:bg-slate-900 hover:text-white duration-300 text-sm md:text-base text-center"
          >
            Go To Home
          </Link>

        </div>

      </div>

    </section>
  );
}

export default OrderSuccess;