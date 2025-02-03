// import { useContext } from "react";
// import { UserContext } from "../userContext";
// import { useState } from "react";

// export default function Homepage() {
//   const { user, age, setUser } = useContext(UserContext);
//   const [name, setName] = useState("");

//   function handleChange(e) {
//     setName(e.target.value);
//   }

//   function handleChangeNameClick() {
//     setUser((user) => ({ ...user, name: name }));
//   }

//   return (
//     <div className="bg-blue-300 p-4 rounded shadow">
//       <h1 className="text-xl font-bold">This is homepage {user.name}</h1>
//       <p className="text-lg">email: {user.email}</p>
//       <p className="text-lg">age: {age}</p>

//       <input type="text" placeholder="Change name" onChange={handleChange} />
//       <div>
//         <button className="bg-red-200" onClick={handleChangeNameClick}>
//           Change Name
//         </button>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  document.title = "Homepage";
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productId, setProductId] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [error, setError] = useState("");

  function handleAddProduct() {
    if (!productId || !productName) {
      setError("Product name and ID are required");
      return;
    }
    if (products.some((product) => product.id === productId)) {
      setError("Product ID must be unique");
      return;
    }
    setProducts([
      ...products,
      {
        id: productId,
        name: productName,
        price: productPrice,
        image: productImage,
      },
    ]);
    setProductName("");
    setProductId("");
    setProductPrice("");
    setProductImage("");
    setError("");
  }
  return (
    <div className="h-[100dvh] flex justify-center items-center">
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="text-2xl">Welcome to out shopping app </div>
        <button
          onClick={() => navigate("/all-products")}
          className="bg-gray-300 rounded px-4 py-2"
        >
          Explore products
        </button>
        <button
          onClick={() => navigate("/cart")}
          className="bg-gray-300 rounded px-4 py-2"
        >
          Go to cart
        </button>
        <div className="mt-4 flex flex-col gap-2 items-center">
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Product ID"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Product Price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Product Image URL"
            value={productImage}
            onChange={(e) => setProductImage(e.target.value)}
            className="border p-2 rounded"
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            onClick={handleAddProduct}
            className="bg-green-300 rounded px-4 py-2"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}
