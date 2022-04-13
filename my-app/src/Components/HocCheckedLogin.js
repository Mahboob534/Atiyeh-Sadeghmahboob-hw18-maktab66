import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import Login from "./Login";

export default function HocCheckedLogin(LogComponent) {
  return function HocCheckedLoginComponent() {
    const { user, setUser, isLogIn, setIsLogIn } = useContext(UserContext);
    console.log(user , isLogIn);
    
    function handleLogOut(){
      setUser("")
      setIsLogIn(false)  
  }
    return (
      <>
        {isLogIn ? (
          <>
           <label> Hello {user.fname}</label>
           <button onClick={handleLogOut}>log out</button>
         </>
        ) : (
          <LogComponent
          user={user}
          setUser={setUser}
          isLogIn={isLogIn}
          setIsLogIn={setIsLogIn}/>
         
       
          
        )}
      </>
    );
  };
}
