import React, { useState } from 'react'; 
import SignUp from './SignUp';

const Login = (props) => {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignUp = (userData) => {
    // Example: Sending a POST request to create a new user
    fetch('https://example.com/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('New user created:', data);
      setShowSignUp(false); // Hide the sign-up form after successful signup
    })
    .catch(error => {
      console.error('Error creating user:', error);
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
  };
  return (
    // <div className="form-container">
    //   <div className="row justify-content-center">
    //     <div className="col-md-6">
    //       <form>
    //         <div className="form-group">
    //           <label htmlFor="exampleInputEmail1">Email address</label>
    //           <input type="email" className="form-control custom-form-control"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    //           <small id="emailHelp" className="form-text textMute">We'll never share your email with anyone else.</small>
    //         </div>
    //         <div className="form-group">
    //           <label htmlFor="exampleInputPassword1">Password</label>
    //           <input type="password" className="form-control custom-form-control"  id="exampleInputPassword1" placeholder="Password"/>
    //         </div>
    //         <button type="submit" className="btn btn-primary">Submit</button>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <form className="mt-4 mb-4" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text textMute">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div>
        
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <button
          type="button"
          className="btn btn-secondary mr-2"
          onClick={() => setShowSignUp(true)}
        >
          Sign Up
        </button>
        {showSignUp && <SignUp handleSignUp={handleSignUp} />}
      </div>
    </div>
  </div>
  );
};

export default Login;