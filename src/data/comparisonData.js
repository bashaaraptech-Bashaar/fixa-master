import product1 from "../assets/product1.webp";
import product2 from "../assets/product2.webp";

const comparison = [
  {
    id: 1,
    image: product1,
    name: "Aurelia Lounge Chair",
    price: "$250",
    rating: "⭐⭐⭐⭐⭐",

    general: {
      material: "Premium Fabric",
      frame: "Solid Wood",
      color: "Beige",
      style: "Modern",
    },

    dimensions: {
      width: '30"',
      height: '34"',
      depth: '32"',
    },

    comfort: {
      seating: "1 Person",
      cushion: "High-Density Foam",
      upholstery: "Soft Fabric",
    },

    warranty: {
      years: "2 Years",
      support: "Customer Support",
    },
  },

  {
    id: 2,
    image: product2,
    name: "Velora Accent Chair",
    price: "$180",
    rating: "⭐⭐⭐⭐☆",

    general: {
      material: "Linen Fabric",
      frame: "Engineered Wood",
      color: "Cream",
      style: "Contemporary",
    },

    dimensions: {
      width: '28"',
      height: '32"',
      depth: '30"',
    },

    comfort: {
      seating: "1 Person",
      cushion: "Foam Padding",
      upholstery: "Linen Fabric",
    },

    warranty: {
      years: "1 Year",
      support: "Customer Support",
    },
  },
];

export default comparison;