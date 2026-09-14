import comparison from "../../data/comparisonData";

function CompareTable() {
  return (
    <section className="px-6 md:px-12 lg:px-24 pb-12 md:pb-20">

      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-[700px]">

          <tbody>

            {/* General */}

            <tr>
              <th className="text-left text-2xl py-8">General</th>
              <th></th>
              <th></th>
            </tr>

            <tr className="border-b">
              <td className="py-4 font-semibold">Material</td>
              <td>{comparison[0].general.material}</td>
              <td>{comparison[1].general.material}</td>
            </tr>

            <tr className="border-b">
              <td className="py-4 font-semibold">Frame</td>
              <td>{comparison[0].general.frame}</td>
              <td>{comparison[1].general.frame}</td>
            </tr>

            <tr className="border-b">
              <td className="py-4 font-semibold">Color</td>
              <td>{comparison[0].general.color}</td>
              <td>{comparison[1].general.color}</td>
            </tr>

            <tr className="border-b">
              <td className="py-4 font-semibold">Style</td>
              <td>{comparison[0].general.style}</td>
              <td>{comparison[1].general.style}</td>
            </tr>

            {/* Dimensions */}

            <tr>
              <th className="text-left text-2xl py-8">Dimensions</th>
              <th></th>
              <th></th>
            </tr>

            <tr className="border-b">
              <td className="py-4 font-semibold">Width</td>
              <td>{comparison[0].dimensions.width}</td>
              <td>{comparison[1].dimensions.width}</td>
            </tr>

            <tr className="border-b">
              <td className="py-4 font-semibold">Height</td>
              <td>{comparison[0].dimensions.height}</td>
              <td>{comparison[1].dimensions.height}</td>
            </tr>

            <tr className="border-b">
              <td className="py-4 font-semibold">Depth</td>
              <td>{comparison[0].dimensions.depth}</td>
              <td>{comparison[1].dimensions.depth}</td>
            </tr>

            {/* Comfort */}

            <tr>
              <th className="text-left text-2xl py-8">Comfort</th>
              <th></th>
              <th></th>
            </tr>

            <tr className="border-b">
              <td className="py-4 font-semibold">Seating</td>
              <td>{comparison[0].comfort.seating}</td>
              <td>{comparison[1].comfort.seating}</td>
            </tr>

            <tr className="border-b">
              <td className="py-4 font-semibold">Cushion</td>
              <td>{comparison[0].comfort.cushion}</td>
              <td>{comparison[1].comfort.cushion}</td>
            </tr>

            <tr className="border-b">
              <td className="py-4 font-semibold">Upholstery</td>
              <td>{comparison[0].comfort.upholstery}</td>
              <td>{comparison[1].comfort.upholstery}</td>
            </tr>

            {/* Warranty */}

            <tr>
              <th className="text-left text-2xl py-8">Warranty</th>
              <th></th>
              <th></th>
            </tr>

            <tr className="border-b">
              <td className="py-4 font-semibold">Warranty</td>
              <td>{comparison[0].warranty.years}</td>
              <td>{comparison[1].warranty.years}</td>
            </tr>

            <tr className="border-b">
              <td className="py-4 font-semibold">Support</td>
              <td>{comparison[0].warranty.support}</td>
              <td>{comparison[1].warranty.support}</td>
            </tr>

          </tbody>

        </table>
      </div>

    </section>
  );
}

export default CompareTable;