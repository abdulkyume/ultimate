import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Login.css";

const LogIn = (props) => {
  const { formdata, setformdata, setshowcomponents } = props;
  const getformdata = (e) => {
    e.preventDefault();
    var fomvalue = {
      password: e.target[0].value,
    };
    if (formdata.firstname !== "" && formdata.lastname !== "") {
      var fomdata = { ...formdata, ...fomvalue };
      console.log(fomdata);
      document.getElementById("signupform").reset();
      setformdata(fomdata);
    }
  };
  return (
    <div className="w-100 d-flex flex-column justify-content-center align-content-center h-100 bshadow">
      <div className="text-center h3 mb-4">SignUp Form</div>
      <div className="p-5 w-75 ms-auto me-auto mt-5">
        <form onSubmit={getformdata} id="signupform">
          <input
            className="w-100 mb-4 inputcss"
            type="email"
            name="email"
            placeholder="Write Email Address"
            id="email"
          />
          <input
            className="w-100 mb-4 inputcss"
            type="password"
            name="password"
            placeholder="Write Password"
            minLength={8}
            id="password"
          />
          <div className="mt-4 d-flex justify-content-center">
            <div className="w-50 text-center">
              <button className="cusbtn" type="submit">
                Log In
              </button>
            </div>
          </div>
          <div className="text-end p-5 w-100 " id="loginhere">
            Don't have an account?{" "}
            <Link to="/" className="text-primary fw-bold">
              SignUp HERE!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
