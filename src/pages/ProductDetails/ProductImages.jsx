import { useState } from "react";

import p1 from "../../assets/product1.webp";
import p2 from "../../assets/product2.webp";
import p3 from "../../assets/product5.webp";
import p4 from "../../assets/product8.webp";

function ProductImages() {

  const [image, setImage] = useState(p1);

  return (

    <div className="flex flex-col md:flex-row gap-4 md:gap-8">

      <div className="flex md:flex-col gap-3 md:gap-5 order-last md:order-first">

        {[p1, p2, p3, p4].map((img, index) => (

          <img
            key={index}
            src={img}
            alt={`NovaBook Pro view ${index + 1}`}
            onClick={() => setImage(img)}
            className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-lg cursor-pointer border hover:border-slate-900"
          />

        ))}

      </div>

      <div className="bg-[#ffffff] rounded-xl p-4 md:p-10 flex-1">

        <img
          src={image}
          alt="NovaBook Pro product view"
          className="w-full h-64 md:h-125 object-contain"
        />

      </div>

    </div>

  );

}

export default ProductImages;
