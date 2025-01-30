import { useContext } from "react";
import { ShoppingContext } from "../utils/shoppingContext";
import { useNavigate } from "react-router-dom";

export default function Products() {
  // array of products which will show cart items CART_ARRAY
  const navigate = useNavigate();
  const { products, setCartItems, cartItems } = useContext(ShoppingContext);

  function handleAddToCartClick(product) {
    setCartItems((cartItems) => [product, ...cartItems]);
  }

  return (
    <div>
      <div>All Available Products</div>

      <div>
        {cartItems.length !== 0 && (
          <button
            onClick={() => navigate("/cart")}
            className="relative bg-blue-300 py-1 rounded hover:bg-blue-400 transition"
          >
            Go to Cart
            <span className="absolute -right-2 -top-2 ml-2 bg-red-500 px-1 rounded-full text-sm text-gray-900">
              {cartItems.length}
            </span>
          </button>
        )}
      </div>

      <div className="flex gap-2">
        {products.map((product) => (
          <div
            onClick={() => navigate(`/product/${product.pId}`)}
            key={product.pId}
            className="border rounded-lg shadow-md p-4 w-64 hover:bg-gray-200 transition hover:shadow"
          >
            <img
              src={product.pImage}
              className="w-full h-40 object-cover rounded-md"
            />
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{product.pName}</h2>
              <p className="text-gray-500">ID: {product.pId}</p>
              <p className="text-xl font-bold mt-2">Rs. {product.pPrice}</p>
            </div>
            <button
              onClick={() => handleAddToCartClick(product)}
              className="w-full bg-blue-300 py-1 rounded hover:bg-blue-400 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const ProductCard = ({ product }) => {
  function handleAddToCartClick(pId) {
    console.log(pId);
  }
  return (
    <div className="border rounded-lg shadow-md p-4 w-64 hover:bg-gray-200 transition hover:shadow">
      <img
        src={product.pImage}
        className="w-full h-40 object-cover rounded-md"
      />
      <div className="mt-4">
        <h2 className="text-lg font-semibold">{product.pName}</h2>
        <p className="text-gray-500">ID: {product.pId}</p>
        <p className="text-xl font-bold mt-2">Rs. {product.pPrice}</p>
      </div>
      <button
        onClick={() => handleAddToCartClick(product.pId)}
        className="w-full bg-blue-300 py-1 rounded hover:bg-blue-400 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};
