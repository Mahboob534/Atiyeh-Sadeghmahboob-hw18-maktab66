import React, { useContext } from "react";
import HocCheckedLogin from "./HocCheckedLogin";
function SuccessfulLogin({user,setUser,setIsLogIn}) {
    function handleLogOut(){
        setUser("")
        setIsLogIn(false)  
    }
  return (
    <>
      <label> Hello {user.fname}</label>
      <button onClick={handleLogOut}>log out</button>
    </>
  );
}

export default HocCheckedLogin(SuccessfulLogin);
