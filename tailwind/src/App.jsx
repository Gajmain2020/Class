// import { useState } from "react";
// import "./App.css";
// import Button from "./components/Button";
// import UserDetails from "./components/UserDetails";

// function App() {
//   const [todo, setTodo] = useState("");
//   const [allTodo, setAllTodo] = useState([]);

//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//   });

//   const [updatedUser, setUpdatedUser] = useState(null);

//   function handleInputChange(e) {
//     const { name, value } = e.target;
//     setUser((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   }

//   function handleChange(e) {
//     setTodo(e.target.value);
//   }

//   function handleAddTodo() {
//     if (todo.trim() !== "") {
//       setAllTodo((allTodo) => [{ text: todo, isComplete: false }, ...allTodo]);
//       setTodo("");
//     }
//   }

//   function handleDelete(index) {
//     setAllTodo((allTodo) => allTodo.filter((_, i) => i !== index));
//   }

//   function handleMarkComplete(index) {
//     setAllTodo((allTodo) =>
//       allTodo.map((item, i) =>
//         i === index ? { ...item, isComplete: !item.isComplete } : item
//       )
//     );
//   }

//   function handleUpdate() {
//     setUpdatedUser(user);
//   }

//   return (
//     <>
//       <div className="bg-red-200">
//         <Button
//           clickHandle={() => alert("button 1 clicked")}
//           title="button 1"
//         />
//         <Button
//           clickHandle={() => alert("button 2 clicked")}
//           title="button 2"
//         />
//         <Button
//           clickHandle={() => alert("button 3 clicked")}
//           title="button 3"
//         />
//       </div>

//       {/* Todo Application */}
//       <div className="bg-pink-400 px-20 py-10">
//         <div className="font-semibold text-2xl">TODO APP</div>
//         {/* Input field */}
//         <div className="flex gap-4 mt-4">
//           <input
//             value={todo}
//             type="text"
//             className="border bg-green-200 rounded px-2 py-0.5"
//             placeholder="Write your todo here."
//             onChange={handleChange}
//           />
//           <button
//             onClick={handleAddTodo}
//             className="bg-blue-300 px-2 rounded hover:bg-blue-500 transition"
//           >
//             ADD
//           </button>
//         </div>

//         {/* Display Todos */}
//         <div className="mt-6">
//           {allTodo.map((item, index) => (
//             <div
//               key={index}
//               className={`flex justify-between items-center bg-white rounded p-2 mb-2 shadow ${
//                 item.isComplete ? "line-through text-gray-500" : ""
//               }`}
//             >
//               <span>{item.text}</span>
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => handleMarkComplete(index)}
//                   className={`px-2 py-1 rounded ${
//                     item.isComplete
//                       ? "bg-green-400 hover:bg-green-600"
//                       : "bg-yellow-400 hover:bg-yellow-600"
//                   }`}
//                 >
//                   {item.isComplete ? "Undo" : "Complete"}
//                 </button>
//                 <button
//                   onClick={() => handleDelete(index)}
//                   className="px-2 py-1 bg-red-400 hover:bg-red-600 rounded"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="p-6 bg-gray-200 rounded-lg w-[400px] mx-auto mt-10">
//         <h2 className="text-xl font-bold mb-4 text-center">Update Profile</h2>
//         <div className="mb-4">
//           <input
//             type="text"
//             name="name"
//             value={user.name}
//             onChange={handleInputChange}
//             placeholder="Enter your name"
//             className="w-full px-3 py-2 border border-gray-400 rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <input
//             type="email"
//             name="email"
//             value={user.email}
//             onChange={handleInputChange}
//             placeholder="Enter your email"
//             className="w-full px-3 py-2 border border-gray-400 rounded"
//           />
//         </div>
//         <button
//           onClick={handleUpdate}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Update
//         </button>
//         {updatedUser && <UserDetails user={updatedUser} />}
//         {/* Show updated details in the child component */}
//       </div>
//     </>
//   );
// }

// export default App;

//! DAY 12 starts here

// import { UserProvider } from "./userContext";
// import Homepage from "./components/Homepage";

// export default function App() {
//   return (
//     <UserProvider>
//       <Homepage />
//     </UserProvider>
//   );
// }

//! DAY 12 CREATING Simple project CART PROJECT
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { ShoppingProvider } from "./utils/shoppingContext";
import ProductDetails from "./components/ProductDetails";

export default function App() {
  // CART_ARRAY
  return (
    <ShoppingProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/all-products" element={<Products />} />
          <Route path="/product/:pId" element={<ProductDetails />} />
          {/** Create product details page */}
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ShoppingProvider>
  );
}

// day 13 homework:
// UI
// create a nav to go to hompage products and cart
// style things a bit better

// function
// implement handleIncrementItem() in cart component
// fix handleRemoveItem() in cart component to work accordingly
// add a button to add product at the homepage -> ensure that product id is unique -> if same product id is entered by user then show them error

// Reading
// Read about localStorage
