import React from "react";
import "./SignUp.css";
const SignUp2 = (props) => {
  const { formdata, setformdata, setshowcomponents } = props;
  const getformdata = (e) => {
    e.preventDefault();
    var fomvalue = {
      mobile: e.target[1].value,
      email: e.target[2].value,
    };
    if (formdata.firstname !== "" && formdata.lastname !== "") {
      var fomdata = { ...formdata, ...fomvalue };
      console.log(fomdata);
      document.getElementById("signupform").reset();
      setformdata(fomdata);
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
          />
          <input
            className="w-100 mb-5 inputcss"
            type="email"
            name="email"
            placeholder="Write Email Address"
            id="email"
          />
        </form>
        <div className="mt-4 d-flex justify-content-center">
          <div className="w-25" id="backbtn">
            <button className="border-0 bg-transparent w-25">Back</button>
          </div>
          <div className="w-50 text-center">
            <button className="cusbtn" onClick={() => setshowcomponents("1")}>
              Next Step <i className="bi bi-arrow-right"></i>
            </button>
          </div>
          <div className="w-25" id="fbackbtn"></div>
        </div>
      </div>

      <div className="text-end p-5 w-75 ms-auto me-auto " id="loginhere">
        Already have an account?{" "}
        <a href="" className="text-primary fw-bold">
          LOGIN HERE!
        </a>
      </div>
    </div>
  );
};

export default SignUp2;
