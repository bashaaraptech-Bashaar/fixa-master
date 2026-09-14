import laptop from "../../assets/product1.webp";
import { FiTrash2 } from "react-icons/fi";

function CartTable() {
  return (
    <div className="w-full overflow-x-auto">

      <table className="w-full min-w-[700px]">

        <thead className="bg-[#F9F1E7] h-16">
          <tr>
            <th className="text-left px-4">Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>

        <tbody>

          <tr className="border-b">

            {/* PRODUCT */}

            <td className="py-8 px-4">

              <div className="flex items-center gap-4">

                <img
                  src={laptop}
                  alt="NovaBook Pro"
                  className="w-16 h-16 md:w-24 md:h-24 rounded-lg object-cover"
                />

                <p className="text-sm md:text-base font-medium">
                  Levoisa
                </p>

              </div>

            </td>


            {/* PRICE */}

            <td className="text-sm md:text-base">
              $1499
            </td>


            {/* QUANTITY */}

            <td>

              <input
                type="number"
                aria-label="Quantity for Levoisa"
                value="1"
                readOnly
                className="w-12 h-10 md:w-14 md:h-14 border border-gray-300 rounded-md text-center"
              />

            </td>


            {/* SUBTOTAL */}

            <td className="font-medium text-sm md:text-base">
              $1499
            </td>


            {/* DELETE */}

            <td>

              <button type="button" aria-label="Remove Levoisa from cart" className="text-red-500 hover:text-red-700 transition">
                <FiTrash2 size={20} aria-hidden="true" />
              </button>

            </td>

          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default CartTable;
