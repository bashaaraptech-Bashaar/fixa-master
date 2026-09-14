import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Compare from "./pages/Compare";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import ProductDetails from "./pages/ProductDetails";
import OrderSuccess from "./pages/OrderSuccess";
import ScrollToTop from "./components/ScrollToTop";

const pageMetadata = {
  "/": {
    title: "FIXA | Modern Furniture and Home Accessories",
    description: "Shop modern furniture, home accessories, and lifestyle products from FIXA.",
  },
  "/shop": {
    title: "Shop | FIXA",
    description: "Browse modern furniture and home accessories available from FIXA.",
  },
  "/blog": {
    title: "Furniture and Home Ideas | FIXA Blog",
    description: "Read furniture, workspace, and home design ideas from the FIXA blog.",
  },
  "/contact": {
    title: "Contact FIXA",
    description: "Contact FIXA with questions about products, orders, and support.",
  },
  "/product": {
    title: "NovaBook Pro | FIXA",
    description: "View details, specifications, and related products for the NovaBook Pro.",
  },
};

function SiteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = pageMetadata[pathname] || {
      title: "FIXA | Modern Furniture and Home Accessories",
      description: "Shop modern furniture, home accessories, and lifestyle products from FIXA.",
    };
    const canonicalUrl = `${window.location.origin}${pathname}`;

    document.title = metadata.title;

    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }
    description.content = metadata.description;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <SiteMetadata />
      <ScrollToTop />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/compare" element={<Compare />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/product" element={<ProductDetails />} />

        <Route path="/success" element={<OrderSuccess />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
