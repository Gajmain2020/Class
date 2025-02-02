import { useContext } from "react";
import { ShoppingContext } from "../utils/shoppingContext";
import BackButton from "./BackButton";

export default function Cart() {
  const { cartItems, setCartItems } = useContext(ShoppingContext);

  let totalPrice = cartItems.reduce(
    (sum, item) => sum + item.pPrice * item.quantity,
    0
  );

  function handleRemoveItem(pId) {
    setCartItems(cartItems.filter((item) => item.pId !== pId));
  }

  function handleIncrementItem(pId) {
    setCartItems(
      cartItems.map((item) =>
        item.pId === pId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function handleDecrementItem(pId) {
    setCartItems(
      cartItems.map((item) =>
        item.pId === pId
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  }

  return (
    <div className="mx-28">
      <div className="text-xl font-bold mb-4">Cart</div>
      <BackButton />
      <div className="flex flex-col gap-4 w-full">
        {cartItems.length > 0 ? (
          cartItems.map((product) => (
            <div
              key={product.pId}
              className="flex items-center justify-between p-4 bg-gray-100 rounded shadow"
            >
              <div className="flex-1">
                <h2 className="font-semibold">{product.pName}</h2>
                <p>Price: ${product.pPrice}</p>
                <p>Quantity: {product.quantity}</p>
                <div className="flex items-center mt-2 gap-2">
                  <button
                    className="text-lg bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    onClick={() => handleRemoveItem(product.pId)}
                  >
                    Remove
                  </button>
                  <button
                    className="text-lg bg-gray-300 px-2 py-1 rounded hover:bg-gray-400"
                    onClick={() => handleDecrementItem(product.pId)}
                  >
                    ➖
                  </button>
                  {product.quantity}
                  <button
                    className="text-lg bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                    onClick={() => handleIncrementItem(product.pId)}
                  >
                    ➕
                  </button>
                </div>
              </div>
              <img
                src={product.pImage}
                className="w-20 h-20 object-cover rounded"
                alt={product.pName}
              />
            </div>
          ))
        ) : (
          <p className="text-gray-500">No items in cart</p>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="mt-4 text-lg font-semibold">
          Total Price: ${totalPrice}
        </div>
      )}
    </div>
  );
}
