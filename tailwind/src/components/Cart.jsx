import { useContext } from "react";
import { ShoppingContext } from "../utils/shoppingContext";
import BackButton from "./BackButton";

export default function Cart() {
  const { cartItems, setCartItems } = useContext(ShoppingContext);

  let totalPrice = 0;
  cartItems.forEach((item) => (totalPrice += item.pPrice * item.quantity));

  function handleRemoveItem(pId) {
    // // pid
    // const temp = itemsToShow.map((item) => {
    //   if (item.pId === pId) {
    //     return { ...item, quantity: item.quantity - 1 };
    //   }
    //   return item;
    // });
    // const updatedItemsToShow = temp.filter((item) => item.quantity > 0);
    // setItemsToShow(updatedItemsToShow);
    // // [{pid:1,pnam:,quantity:0  } {pid:2,pnam:,quantity:2} {pid:3,pnam:,quantity:1}] -> itemsToShow
    // // quantity >0
  }

  function handleIncrementItem() {
    // implement this function (to dalima)
  }

  return (
    <div className="mx-28">
      <div className="text-xl">Cart</div>
      <BackButton />
      <div className="flex gap-2 flex-col w-full ">
        {cartItems.length > 0
          ? cartItems.map((product) => (
              <div key={product.pId} className="flex py-1 px-2">
                <div className="bg-gray-200 flex-1 p-4 rounded shadow hover:border hover:border-black hover:bg-gray-300  transition">
                  <h2>{product.pName}</h2>
                  <p>Price: {product.pPrice}</p>
                  <p>Quantity: {product.quantity}</p>
                  <div>
                    <button
                      className="text-xl"
                      onClick={() => handleRemoveItem(product.pId)}
                    >
                      ⛔
                    </button>
                    {product.quantity}
                    <button
                      className="text-xl"
                      onClick={() => handleIncrementItem(product.pId)}
                    >
                      🟢
                    </button>
                  </div>
                </div>
                <img src={product.pImage} className="w-16" alt="" />
              </div>
            ))
          : "No items in cart"}
      </div>
      {cartItems.length > 0 && <div>Total Price = {totalPrice}</div>}
    </div>
  );
}

// todo : style thing a lot
