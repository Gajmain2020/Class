import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShoppingContext } from "../utils/shoppingContext";
import BackButton from "./BackButton";

export default function ProductDetails() {
  const { pId } = useParams();
  const { products, setCartItems, cartItems } = useContext(ShoppingContext);

  // Find the product based on the pId
  const product = products.find((product) => product.pId.toString() === pId);

  if (!product) {
    return <div className="text-center text-red-500">Product not found!</div>;
  }

  function handleAddToCartClick() {
    setCartItems([...cartItems, product]);
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <BackButton />
      {/* Check here if that item is added to cart if yes added then just show to go to cart or other button not add to cart */}
      <div className="border rounded-lg shadow-md p-6">
        <img
          src={product.pImage}
          alt={product.pName}
          className="w-full h-64 object-cover rounded-md"
        />
        <div className="mt-4">
          <h2 className="text-2xl font-semibold">{product.pName}</h2>
          <p className="text-gray-500">ID: {product.pId}</p>
          <p className="text-xl font-bold mt-2">Rs. {product.pPrice}</p>
          <p className="mt-4">{product.pDescription}</p>
        </div>
        <button
          onClick={handleAddToCartClick}
          className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
