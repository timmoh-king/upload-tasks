import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const FormSignup = () => {
  let navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({
    usernameError: "",
    emailError: "",
    passwordError: "",
    Password2Error: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const validate = () => {
    let usernameError = "";
    let emailError = "";
    let passwordError = "";
    let password2Error = "";

    if (!values.username) {
      usernameError = "name cannot be blank";
    }

    if (!values.email) {
      emailError = "please enter email address";
    } else if (!values.email.includes("@")) {
      emailError = "invalid email";
    }

    if (!values.password) {
      passwordError = "please enter password";
    } else if (values.password.length < 8) {
      passwordError = "password length minimum 8 characters";
    }

    if (!values.password2) {
      password2Error = "please confirm password";
    } else if (values.password2 !== values.password) {
      password2Error = "passwords do not match";
    }

    if (emailError || usernameError) {
      setErrors({ emailError, usernameError });
      return false;
    }
    if (passwordError || password2Error) {
      setErrors({ passwordError, password2Error });
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      navigate("./todolist");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <h1 style={{ color: "orange" }}>Upload your tasks today</h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
            <input
              id="username"
              type="text"
              name="username"
              className="form-input"
              placeholder="Enter your username"
              value={values.username}
              onChange={handleChange}
            />
            <div style={{ fontSize: 16, color: "red" }}>
              {errors.usernameError}
            </div>
          </label>
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
            <input
              id="email"
              type="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            />
            <div style={{ fontSize: 16, color: "red" }}>
              {errors.emailError}
            </div>
          </label>
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
            <input
              id="password"
              type="password"
              name="password"
              className="form-input"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
            />
            <div style={{ fontSize: 16, color: "red" }}>
              {errors.passwordError}
            </div>
          </label>
        </div>
        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            Confirm
            <input
              id="password2"
              type="password"
              name="password2"
              className="form-input"
              placeholder="Confirm your password"
              value={values.password2}
              onChange={handleChange}
            />
            <div style={{ fontSize: 16, color: "red" }}>
              {errors.password2Error}
            </div>
          </label>
        </div>
        <button
          onSubmit={handleSubmit}
          className="form-input-btn"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
