import React from "react";
import "./SignUp.css";
const SignUp3 = (props) => {
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
            type="password"
            name="password"
            placeholder="Write Password"
            minLength={8}
            id="password"
            required
          />
        </form>
        <div className="mt-4 d-flex justify-content-center">
          <div className="w-25" id="backbtn">
            <button
              className="border-0 bg-transparent w-25"
              onClick={() => setshowcomponents("2")}
            >
              Back
            </button>
          </div>
          <div className="w-50 text-center">
            <button className="cusbtn">
              Sign Up
            </button>
          </div>
          <div className="w-25 " id="fbackbtn"></div>
        </div>
      </div>
    </div>
  );
};

export default SignUp3;
