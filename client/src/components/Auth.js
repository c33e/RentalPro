import React, { useState } from "react"
import PropTypes from 'prop-types';
import "./styles/App.css"

//hardcoded data allows only this user to access system
//var emailallowed = "user@mail.com";
//var pwdallowed = ("123456");

//login based on the https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications tutorial
async function loginUser(credentials) {
  return fetch('http://localhost:8080/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

 //default is sign in
export default function Auth({ setToken }) {
  let [authMode, setAuthMode] = useState("signin")

  //can also register
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  //declarations
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    /*
    if (email == emailallowed && password == pwdallowed) {
      setToken(token);
    }
    else {
       window.alert(`Email invalid`);
       navigate("/");
       return;
    }*/
    setToken(token);
  }

  //presume user wants to sign in use this form
  //on change data is inputted into email and password
  //form validation incl
  if (authMode === "signin") {
    
    return (
      <div className="Authformcontainer">
        <form className="Authform" onSubmit={handleSubmit}>
          <div className="formcontent">
            <h3 className="formtitle">Sign In</h3>
            <div className="text-center">
              Not a registered user yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                required type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                required type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                minlength="6"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
//register form
  return (
    <div className="Authformcontainer">
      <form className="Authform">
        <div className="formcontent">
          <h3 className="formtitle">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              required type="name"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              required type="email"
              className="form-control mt-1"
              placeholder="Enter Email Address"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              required type="password"
              className="form-control mt-1"
              placeholder="Enter Password"
              minlength="6"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

Auth.propTypes = {
  setToken: PropTypes.func.isRequired
}