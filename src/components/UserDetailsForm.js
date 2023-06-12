import React, { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import "../App.css";
import axios from "axios";
import { context } from "../App";
const UserDetailsForm = () => {
  const [editId, setEditId, formOperations, setFormOperations] =
    useContext(context);
  const [editUserData, setEditUserData] = useState({
    fullname: "",
    email: "",
    region: "",
    gender: "",
  });

  const handleFormSubmit = (values, { resetForm }) => {
    if (!editId) {
      axios
        .post("http://localhost:3030/users", values)
        .then((res) => setFormOperations(res.statusText))
        .catch((e) => setFormOperations(e.message));
      setEditUserData({
        fullname: "",
        email: "",
        region: "",
        gender: "",
      });
      setEditId("");
      resetForm();
    } else {
      axios
        .put("http://localhost:3030/users/" + editId, values)
        .then((res) => setFormOperations(res.statusText))
        .catch((e) => setFormOperations(e.message));
      setEditUserData({
        fullname: "",
        email: "",
        region: "",
        gender: "",
      });
      setEditId("");
      resetForm();
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.fullname) {
      errors.fullname = "*Required";
    }

    if (!values.email) {
      errors.email = "*Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "*Invalid email address";
    }
    if (!values.region) {
      errors.region = "*Select Region";
    }
    if (!values.gender) {
      errors.gender = "*Select Gender";
    }
    return errors;
  };
  useEffect(() => {
    axios
      .get("http://localhost:3030/users/" + editId)
      .then((resp) =>
        setEditUserData({
          fullname: resp.data.fullname,
          email: resp.data.email,
          region: resp.data.region,
          gender: resp.data.gender,
        }),
      )
      .catch((e) => setFormOperations(e.message));
  }, [editId,setFormOperations]);
  const formik = useFormik({
    initialValues: editUserData,
    enableReinitialize: true,
    validate,
    onSubmit: handleFormSubmit,
  });
  return (
    <div className="card form-background">
      <form className="d-flex flex-column p-4 " onSubmit={formik.handleSubmit}>
        <label htmlFor="fullname">Full Name</label>
        <input
          type="text"
          className={formik.errors.fullname ? "" : "mb-4"}
          placeholder="Fullname"
          name="fullname"
          id="fullname"
          value={formik.values.fullname}
          onChange={formik.handleChange}
        />
        {formik.errors.fullname ? (
          <div className="text-danger">{formik.errors.fullname}</div>
        ) : null}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          className={formik.errors.email ? "" : "mb-4"}
          placeholder="Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email ? (
          <div className="text-danger">{formik.errors.email}</div>
        ) : null}

        <label htmlFor="region">Region</label>
        <select
          name="region"
          id="region"
          className={formik.errors.region ? "" : "mb-4"}
          value={formik.values.region}
          onChange={formik.handleChange}
        >
          <option value="">--Select--</option>
          <option value="India">India</option>
          <option value="London">London</option>
          <option value="Japan">Japan</option>
          <option value="France">France</option>
          <option value="U.K">U.K</option>
          <option value="U.S">U.S</option>
        </select>
        {formik.errors.region ? (
          <div className="text-danger">{formik.errors.region}</div>
        ) : null}

        <div
          className={formik.errors.gender ? "btn-group" : "btn-group mb-4"}
          role="group"
          aria-label="Basic radio toggle button group"
          value={formik.values.gender}
          onChange={formik.handleChange}
        >
          <input
            type="radio"
            className="btn-check"
            name="gender"
            value="male"
            id="btnradio1"
            checked={"male" === formik.values.gender}
            onChange={() => formik.handleChange}
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio1">
            Male
          </label>

          <input
            type="radio"
            className="btn-check"
            name="gender"
            value="female"
            id="btnradio2"
            autoComplete="off"
            checked={"female" === formik.values.gender}
            onChange={() => formik.handleChange}
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio2">
            Female
          </label>
        </div>
        {formik.errors.gender ? (
          <div className="text-danger">{formik.errors.gender}</div>
        ) : null}

        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-success">
            {!editId ? "Submit" : "Update"}
          </button>
          <button
            type="reset"
            className="btn btn-danger"
            onClick={() => {
              setEditId("");
              formik.handleReset();
              setFormOperations("Reset");
            }}
          >
            Reset
          </button>
        </div>
      </form>
      <h5 className="text-color text-center">.....{formOperations}.....</h5>
    </div>
  );
};

export default UserDetailsForm;
