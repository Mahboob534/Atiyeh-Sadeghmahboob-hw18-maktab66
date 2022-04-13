import React,{useState,useEffect} from "react";
import axios from "axios";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.fname) {
    errors.fname = "فیلد نام را نمی تواند خالی باشد";
  } else if (values.fname.length > 15) {
    errors.fname = "بیشتر از 15 کاراکتر نمی تواند باشد";
  }
  if (!values.lname) {
    errors.lname = "فیلد نام خانوادگی را نمی تواند خالی باشد";
  } else if (values.lname.length > 25) {
    errors.lname = "بیشتر از 25 کاراکتر نمی تواند باشد";
  }
  if (!values.email) {
    errors.email = "فیلد پست الکترونیکی  را نمی تواند خالی باشد";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "maktab@... .com";
  }
  if (!values.password) {
    errors.password = "پسورد نمی تواند خالی باشد";
  }
  if (!values.educationPlace) {
    errors.educationPlace = "محل تحصیل نمی تواند خالی باشد";
  }
  if (!values.provinceOfBirth) {
    errors.provinceOfBirth = "استان محل تولد نمی تواند خالی باشد";
  }
  if (!values.cityOfBirth) {
    errors.cityOfBirth = "شهرستان محل تولد نمی تواند خالی باشد";
  }
  return errors;
};

const SignupForm = () => {
  const [data, setData] = useState({});
  

  useEffect(() => {
    axios
      .get("./json/iranstates.json")
      .then((res) => setData(res.data))
      .catch((err) => alert(err))
      
  }, []);
  //console.log(data);

  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email:"",
      password: "",
      education: "",
      educationPlace: "",
      provinceOfBirth: "",
      cityOfBirth:"",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      axios.post("http://localhost:3001/users",values)
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="field">
        <input
          id="fname"
          name="fname"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.fname}
        />
        <label htmlFor="firstName">نام*</label>
        {formik.touched.fname && formik.errors.fname ? (
          <p className="error">{formik.errors.fname}</p>
        ) : null}
      </div>
      <div className="field">
        <input
          id="lname"
          name="lname"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lname}
        />
        <label htmlFor="lastName">نام خانوادگی*</label>

        {formik.touched.lname && formik.errors.lname ? (
          <p className="error">{formik.errors.lname}</p>
        ) : null}
      </div>
      <div className="field">
        <input
          id="email"
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
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <label htmlFor="password">پسورد*</label>
        {formik.touched.password && formik.errors.password ? (
          <p className="error">{formik.errors.password}</p>
        ) : null}
      </div>

      <div className="field">
        <select
          id="education"
          name="education"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.education}
          style={{ display: "block" }}
        >
         <option value="تحصیلات" >
            تحصیلات
          </option>
          <option value="1" >
            زیردیپلم
          </option>
          <option value="2" >
            دیپلم
          </option>
          <option value="3" >
          کاردانی
          </option>
          <option value="4" >
          کارشناسی
          </option>
          <option value="5" >
          کارشناسی ارشد
          </option>
          <option value="6" >
         دکترا
          </option>
        </select>
        
      </div>

      {formik.values.education !='' || formik.values.education =='تحصیلات'  ? <div className="field">
        <select
          id="educationPlace"
          name="educationPlace"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.educationPlace}
          placeholder="محل تحصیل"
          style={{ display: "block" }}
        >
          <option value="1" >
              محل تحصیل* انتخاب کنید
            </option>
          {Object.keys(data).map((province) => (
            <option value={province} key={province}>
              {province}
            </option>
          ))}
        </select>

        {formik.touched.educationPlace && formik.errors.educationPlace ? (
          <p className="error">{formik.errors.educationPlace}</p>
        ) : null}
      </div> :null }

      <div className="field">
        <select
          id="provinceOfBirth"
          name="provinceOfBirth"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.provinceOfBirth}
          style={{ display: "block" }}
        >
          <option value="1" >
              استان محل تولد*انتخاب کنید
            </option>
          {Object.keys(data).map((province) => (
            <option value={province} key={province}>
              {province}
            </option>
          ))}
        </select>
        {formik.touched.provinceOfBirth && formik.errors.provinceOfBirth ? (
          <p className="error">{formik.errors.provinceOfBirth}</p>
        ) : null}
      </div>

      <div className="field">
        <select
          id="cityOfBirth"
          name="cityOfBirth"
          onChange={formik.handleChange}
          value={formik.values.cityOfBirth}
          placeholder="شهر تولد"
          style={{ display: "block" }}
        >
          <option value="1" >
              شهر محل تولد*انتخاب کنید
            </option>
          {formik.values.provinceOfBirth != ""
            ? Object.values(data)[
                Object.keys(data).findIndex(
                  (e) => e === formik.values.provinceOfBirth
                )
              ].map((city) => <option value={city} key={city}>{city}</option>)
            : ""}
        </select>
        {formik.touched.cityOfBirth && formik.errors.cityOfBirth ? (
          <p className="error">{formik.errors.cityOfBirth}</p>
        ) : null}
      </div>
      <button type="submit">ثبت نام </button>
    </form>
  );
};
//const Search=HocJson(SignupForm,"users");
export default SignupForm;

// https://stackoverflow.com/questions/70413214/problem-with-select-field-in-formik-when-onchange-option-given
