import React, { useEffect } from "react";
import "./SignUp.css";

const SignUp2 = (props) => {
  const { formdata, setformdata, setshowcomponents } = props;
  useEffect(() => {
    let userd = localStorage.getItem("user");
    if (userd) {
      var user = JSON.parse(userd);
      if (user.phone_number === undefined || user.email === undefined) {
        document.getElementById("phone").value = '';
        document.getElementById("email").value = '';
      } else {
        document.getElementById("phone").value = user.phone_number;
        document.getElementById("email").value = user.email;
      }
    }
  });
  const getformdata = (e) => {
    e.preventDefault();
    var fomvalue = {
      phone_number: e.target[1].value,
      email: e.target[2].value,
    };
    if (formdata.first_name !== "" && formdata.last_name !== "") {
      var fomdata = { ...formdata, ...fomvalue };
      document.getElementById("signupform").reset();
      setformdata(fomdata);
      localStorage.setItem("user", JSON.stringify(fomdata));
      setshowcomponents("3");
    }
  };
  return (
    <div className="w-100 d-flex flex-column justify-content-center align-content-center h-100 bshadow">
      <div className="text-center h3 mb-4">SignUp Form</div>
      <div className="p-5 w-75 ms-auto me-auto mt-5">
        <form onSubmit={getformdata} id="signupform">
          <input
            type="text"
            placeholder="+880"
            readOnly
            className="w-25 inputcss"
            id="phncode"
          />
          <input
            className="w-75 mb-4 inputcss"
            type="text"
            name="phone"
            placeholder="1xxxxxxxx"
            maxLength={10}
            id="phone"
            required
          />
          <input
            className="w-100 mb-5 inputcss"
            type="email"
            name="email"
            placeholder="Write Email Address"
            id="email"
            required
          />
          <div className="mt-4 d-flex justify-content-center">
            <div className="w-25" id="backbtn">
              <button
                className="border-0 bg-transparent w-25"
                onClick={() => setshowcomponents("1")}
              >
                Back
              </button>
            </div>
            <div className="w-50 text-center">
              <button className="cusbtn" type="submit">
                Next Step <i className="bi bi-arrow-right"></i>
              </button>
            </div>
            <div className="w-25" id="fbackbtn"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp2;
