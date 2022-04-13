import React, { useState, createContext } from "react";
export const UserContext = createContext({});

const UserProvider = ({ children }) => {

  const [user, setUser] = useState("");
  const [isLogIn, setIsLogIn] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, isLogIn, setIsLogIn }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
