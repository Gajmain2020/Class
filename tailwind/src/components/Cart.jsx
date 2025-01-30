import { useContext } from "react";
import { ShoppingContext } from "../utils/shoppingContext";

export default function Cart() {
  const { cartItems } = useContext(ShoppingContext);

  let totalPrice = 0;
  cartItems.forEach((item) => (totalPrice += item.pPrice));

  return (
    <div>
      Cart products will be displayed here {cartItems.length}
      <div className="flex gap-2 flex-col w-full">
        {cartItems.length > 0
          ? cartItems.map((product) => (
              <div key={product.pId} className="flex">
                <div className="bg-gray-200 flex-1">
                  <h2>{product.pName}</h2>
                  <p>Price: {product.pPrice}</p>
                </div>
                {totalPrice}
                <img src={product.pImage} className="w-16" alt="" />
              </div>
            ))
          : "No items in cart"}
      </div>
    </div>
  );
}

//homework
