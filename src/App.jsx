import { useState } from "react";
import "./app.css";
import FormInput from "./components/FormInput";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const [strong, setStrong] = useState({
    isCaseStrong: false,
    isSpecialStrong: false,
    is8Strong: false
  })

  const passwordStrength = [
    {
      "name": "Lower and Upper case character",
      "is_strong": strong.isCaseStrong
    },
    {
      "name": "At least 1 special character",
      "is_strong": strong.isSpecialStrong
    },
    {
      "name": "8 characters long",
      "is_strong": strong.is8Strong
    },
  ]

  const nameInputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      errorMessage:
        "First Name should be 3-16 characters and shouldn't include any special character!",
      label: "First Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      errorMessage:
        "Last Name should be 3-16 characters and shouldn't include any special character!",
      label: "Last Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
  ]

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email Address",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 3,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="project">
      <div className="header">
        <h4>Logo</h4>
      </div>
      <div className="app">
        <div className="app_center">
          <h3>Create account</h3>
          <p>Get up and running and start booking appointments.</p>

          <form onSubmit={handleSubmit} className="">
            <div className="google_auth">
              <img alt="google" src={require("./assets/google.png")}/>
              <p>Sign up with Google</p>
            </div>

            <div className="container">
              <div className="line"></div>
              <p>OR</p>
              <div className="line"></div>
            </div>

            <div className="name_container">
              {nameInputs.map((input) => {
                return (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                  />
                )
              })}
            </div>

            {inputs.map((input) => {
              if(input.id === 2) {
                return (
                  <>
                    <FormInput
                      key={input.id}
                      {...input}
                      value={values[input.name]}
                      onChange={onChange}
                    />
                    <div className="password_strength_checker">
                      <p>Password must contain:</p>
                      {passwordStrength.map((input) => {
                        return <div className="strength">{input.name}</div>
                      })}
                    </div>
                  </>
                )
              }

              return (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              )
            })}
            <button>Create Account</button>
          </form>
          <p className="footer-text">Already have an account? <span>Log in</span></p>
        </div>
      </div>
    </div>
  );
};

export default App;