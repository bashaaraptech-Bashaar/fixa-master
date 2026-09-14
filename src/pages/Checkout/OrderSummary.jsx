import { useNavigate } from "react-router-dom";

function OrderSummary() {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">

      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Order Summary
      </h2>

      <div className="space-y-4 text-slate-600">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>$1,250</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>$50</span>
        </div>

        <div className="border-t pt-4 flex justify-between text-lg font-bold text-slate-900">
          <span>Total</span>
          <span>$1,300</span>
        </div>

      </div>

      <button
        onClick={() => navigate("/success")}
        className="w-full mt-8 bg-slate-900 hover:bg-slate-700 text-white py-4 rounded-lg font-semibold transition"
      >
        Place Order
      </button>

    </div>
  );
}

export default OrderSummary;