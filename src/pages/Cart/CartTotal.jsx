import { Link } from "react-router-dom";
 
function CartTotal() {
  return (
    <div className="bg-[#F9F1E7] p-10 text-center rounded-lg">

      <h2 className="text-3xl font-bold mb-10">
        Cart Totals
      </h2>

      <div className="flex justify-between mb-6">

        <p>Subtotal</p>

        <p className="text-slate-700">$1499</p>

      </div>

      <div className="flex justify-between mb-10">

        <p>Total</p>

        <p className="text-[#090631] text-2xl font-bold">
          $1499
        </p>

      </div>

     <Link to="/checkout">
          <button className="border border-slate-900 px-8 py-3 rounded-lg hover:bg-slate-800 hover:text-white duration-300">
            Check Out
          </button>
        </Link>

    </div>
  );
}

export default CartTotal;
