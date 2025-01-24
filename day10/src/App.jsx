import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import UserDetails from "./pages/UserDetails";

const products = [
  {
    productId: 123,
    productName: "Chabi challa",
    productPrice: 200,
  },
  {
    productId: 122,
    productName: "Chabi ",
    productPrice: 500,
  },
  //   ... so many products
];

export default function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 500);
  }, []);

  if (showContent === false) {
    return (
      <div className="flex justify-center items-center bg-red-200 p-10">
        spalsh screen this is
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Static Route */}
        <Route path="/" element={<Homepage products={products} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user" element={<>User </>} />

        {/* Dynamic Route */}
        <Route path="/user/:userId" element={<UserDetails />} />

        <Route path="*" element={<>Path not found</>} />
      </Routes>
      {/* user/123=>userId = 123 ||  user/234=>userId=234 user/kachraSeth=>userId=kachraSeth user/heraPheri */}
    </BrowserRouter>
  );
}

// App.jsx => sabse bada parent

// use the products to show them as list in the homepage
// and show its details in the product description page
