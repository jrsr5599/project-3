import React, { useState } from "react";
import { ADD_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";

const SignUp = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [createUser] = useMutation(ADD_USER);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.preventPropagation();
    }

    try {
      const { data } = await createUser({
        variables: { ...userData },
      });

      Auth.login(data.addUser.token);
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
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          value={userData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default SignUp;
