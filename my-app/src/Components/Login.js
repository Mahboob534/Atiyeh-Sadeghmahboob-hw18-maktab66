import React, { useEffect, useState,memo } from "react";
import { useFormik } from "formik";
import HocCheckedLogin from "./HocCheckedLogin";
import axios from "axios";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "فیلد پست الکترونیکی  را نمی تواند خالی باشد";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "maktab@... .com";
  }
  if (!values.password) {
    errors.password = "پسورد نمی تواند خالی باشد";
  }
 
  return errors;
};

const Login = ({setUser, setIsLogIn,iconEye,
  passwordVisibility,
  handlePasswordVisibility}) => {
  const [userInfo, setUserInfo] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((res) => setUserInfo(res.data));
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate ,
    onSubmit: (values) => {
      userInfo.map((item) => {
        if (values.email == item.email && values.password == item.password) {
          setUser(item);
          setIsLogIn(true);
        }
      });
    },
  });

  return (
    <div>
      <h1>خوش آمدید</h1>
      <div className="feild">
        <form className="formHolder" onSubmit={formik.handleSubmit}>
          <div className="field">
            <input
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <label htmlFor="email">*پست الکترونیکی</label>
             {formik.touched.email && formik.errors.email ? (
          <p className="error">{formik.errors.email}</p>
        ) : null} 
          </div>
          <div className="field">
            <input
              name="password"
              type={passwordVisibility ? "password": "text"}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <label htmlFor="password">پسورد*</label>
            <span>{iconEye == "eye" ? (
            <FaRegEye
              icon={["fa", "FaRegEye"]}
              onClick={handlePasswordVisibility}
            />
          ) : (
            <FaRegEyeSlash
              icon={["fa", "FaRegEye"]}
              onClick={handlePasswordVisibility}
            />
          )}</span>


            {formik.touched.password && formik.errors.password ? (
          <p className="error">{formik.errors.password}</p>
        ) : null} 
          </div>
          <button type="submit">ورود</button>
        </form>
      </div>
    </div>
  );
};

export default HocCheckedLogin(memo(Login));
