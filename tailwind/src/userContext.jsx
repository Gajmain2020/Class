import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
  });
  const [age, setAge] = useState(22);

  return (
    <UserContext.Provider value={{ user, setUser, age }}>
      {children}
    </UserContext.Provider>
  );
};
