import React, { useState } from "react";
import "../App.css";
import { FaGithub, FaFacebook, FaLinkedinIn } from "react-icons/fa";
const Form = () => {
  const [isSubmited, setIsSubmited] = useState(false);

  const NameRegex = RegExp(/^[A-Z][a-zA-Z '.-]*$/);
  const emailRegex = RegExp(/^[^]+@[^]+\.[a-z]{2,3}$/);
  const passRegex = RegExp(/((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]){6,12})/);

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmited(true);
  };
  const { name, email, password } = state;

  return (
    <>
      <div className="container">
        <div className="container1">
          <div className="left-panel">
            <h2>Welcome Back!</h2>
            <p>
              A paragraph is a self-contained, <br />
              dealing with a particular point or idea.
            </p>
            <button className="btn-1">Singin</button>
          </div>

          <div className="right-panel">
            <form onSubmit={handleSubmit}>
              <h1>Create Account</h1>

              <main>
                <FaGithub />

                <FaLinkedinIn />

                <FaFacebook />
              </main>

              <h6>use your email and password</h6>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                autoComplete="off"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <br />
              {isSubmited && !NameRegex.test(name) && (
                <span>please enter valid name</span>
              )}
              <br />

              <input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                autoComplete="off"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <br />
              {isSubmited && !emailRegex.test(email) && (
                <span>Please enter valid email</span>
              )}
              <br />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                autoComplete="off"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <br />
              {isSubmited && !passRegex.test(password) && (
                <span>please enter valid password</span>
              )}
              <br />

              <button type="submit" className="btn">
                Sumbit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
