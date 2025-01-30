import { useState, createContext } from "react";

export const ShoppingContext = createContext();

export const ShoppingProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([
    {
      pId: 1,
      pName: "kangi",
      pPrice: 20,
      pImage:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/hair-comb/d/c/t/hair-comb-hair-brush-kanghi-for-detangle-hair-pack-of-6-43-original-imagmnz9jmszu2nm.jpeg?q=20&crop=false",
    },
    {
      pId: 2,
      pName: "shampoo",
      pPrice: 150,
      pImage:
        "https://naturali.co.in/cdn/shop/files/DSN_HFA_16527160-1c29-4aeb-8a90-d36f86fea34e.jpg?v=1715838431&width=1946",
    },
    {
      pId: 3,
      pName: "oil",
      pPrice: 50,
      pImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtlT4_v3TvqTZI_nCUIQIyRixom5BU2aWbag&s",
    },
  ]);

  return (
    <ShoppingContext.Provider
      value={{ cartItems, setCartItems, products, setProducts }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};
