import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";

import App from "../App";

export default function HocCheckedLogin(LogComponent) {
  return function HocCheckedLoginComponent() {
    const { user, setUser, isLogIn, setIsLogIn } = useContext(UserContext);
    console.log(user , isLogIn);
    return (
      <>
        {isLogIn ? (
          <LogComponent
            user={user}
            setUser={setUser}
            isLogIn={isLogIn}
            setIsLogIn={setIsLogIn}
          />
        ) : (
          <LogComponent
          user={user}
          setUser={setUser}
          isLogIn={isLogIn}
          setIsLogIn={setIsLogIn}
        />
          
        )}
      </>
    );
  };
}
