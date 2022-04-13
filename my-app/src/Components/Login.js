import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import HocCheckedLogin from "./HocCheckedLogin";

const Login = ({ user, setUser, isLogIn, setIsLogIn }) => {
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
            {/* {formik.touched.email && formik.errors.email ? (
          <p className="error">{formik.errors.email}</p>
        ) : null} */}
          </div>
          <div className="field">
            <input
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <label htmlFor="password">پسورد*</label>
            {/* {formik.touched.password && formik.errors.password ? (
          <p className="error">{formik.errors.password}</p>
        ) : null} */}
          </div>
          <button type="submit">ورود</button>
        </form>
      </div>
    </div>
  );
};

export default HocCheckedLogin(Login);
