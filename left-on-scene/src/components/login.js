import React, { useState } from "react";
import SignUp from "./SignUp";
import FadeIn from "react-fade-in/lib/FadeIn";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [loginUser] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.preventPropagation();
    }

    try {
      const { data } = await loginUser({
        variables: { ...userData },
      });

      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }

    setUserData({
      username: "",
      email: "",
      password: "",
    });
  };
  return (
    <FadeIn>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="mt-4 mb-4" onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  value={userData.email}
                  onChange={handleChange}
                  required
                />
                <small id="emailHelp" className="form-text textMute">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={userData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            <button
              type="button"
              className="btn btn-secondary mr-2"
              onClick={() => setShowSignUp(true)}
            >
              Sign Up
            </button>
            {showSignUp && <SignUp />}
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default Login;
