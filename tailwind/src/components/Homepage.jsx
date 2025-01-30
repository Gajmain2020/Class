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

import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();
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
      </div>
    </div>
  );
}
