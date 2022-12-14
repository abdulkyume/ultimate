import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp1 = (props) => {
  const { setformdata, setshowcomponents } = props;
  useEffect(() => {
    let userd = localStorage.getItem("user");
    console.log(userd);
    if (userd) {
      var user = JSON.parse(userd);
      document.getElementById("inp1").value = user.first_name;
      document.getElementById("inp2").value = user.last_name;
    }
  });
  const getformdata = (e) => {
    e.preventDefault();
    var fomvalue = {
      first_name: e.target[0].value,
      last_name: e.target[1].value,
    };
    setformdata(fomvalue);
    let userd = localStorage.getItem("user");
    if (userd) {
      var user = JSON.parse(userd);
      user.first_name = e.target[0].value;
      user.last_name = e.target[1].value;
      console.log(user)
      localStorage.setItem("user", JSON.stringify(user));
      setshowcomponents("2");
    } else {
      localStorage.setItem("user", JSON.stringify(fomvalue));
      setshowcomponents("2");
    }

  };
  return (
    <div className="w-100 d-flex flex-column justify-content-center align-content-center h-100 bshadow">
      <div className="text-center h3 mb-4">SignUp Form</div>
      <div className="p-5 w-75 ms-auto me-auto mt-5">
        <form onSubmit={getformdata} id="signupform">
          <input
            className="w-100 mb-4 inputcss"
            type="text"
            name="fname"
            placeholder="Write First Name"
            id="inp1"
            required
          />
          <input
            className="w-100 mb-5 inputcss"
            type="text"
            name="lname"
            placeholder="Write Last Name"
            id="inp2"
            required
          />
          <div className="mt-4 d-flex justify-content-center">
            <div className="w-50 text-center">
              <button type="submit" className="cusbtn">
                Next Step <i className="bi bi-arrow-right"></i>
              </button>
            </div>
            <div className="w-25 d-none" id="fbackbtn"></div>
          </div>
        </form>
      </div>

      <div className="text-end p-5 w-75 ms-auto me-auto " id="loginhere">
        Already have an account?{" "}
        <Link to="/" className="text-primary fw-bold">
          LOGIN HERE!
        </Link>
      </div>
    </div>
  );
};

export default SignUp1;
