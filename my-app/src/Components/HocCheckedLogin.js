import React, { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";

export default function HocCheckedLogin(LogComponent) {
  return function HocCheckedLoginComponent() {
    const { user, setUser, isLogIn, setIsLogIn } = useContext(UserContext);

    //console.log(user, isLogIn);

    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [iconEye, setIconEye] = useState("eye");

    const handlePasswordVisibility = () => {
      if (iconEye === "eye") {
        setIconEye("eye-off");
        setPasswordVisibility(!passwordVisibility);
      } else if (iconEye === "eye-off") {
        setIconEye("eye");
        setPasswordVisibility(!passwordVisibility);
      }
    };

    function handleLogOut() {
      setUser("");
      setIsLogIn(false);
    }
    return (
      <>
        {isLogIn ? (
          <>
            <div className="field">
              <label> Hello {user.fname}</label>
            </div>
            <button onClick={handleLogOut}>log out</button>
          </>
        ) : (
          <LogComponent
            passwordVisibility={passwordVisibility}
            iconEye={iconEye}
            handlePasswordVisibility={handlePasswordVisibility}
            setUser={setUser}
            setIsLogIn={setIsLogIn}
          />
        )}
      </>
    );
  };
}
