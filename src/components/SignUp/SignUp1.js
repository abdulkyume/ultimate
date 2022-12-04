import React from "react";
import "./SignUp1.css";
const formdata = (e) => {};
const SignUp1 = (props) => {
  const { formdata, setformdata } = props;
  if (Object.keys(formdata).length > 0) {
    if (formdata.firstname !== "" && formdata.lastname !== "") {
      document.getElementById("phncode").classList.remove("d-none");
      document.getElementById("inp1").classList.remove("w-100");
      document.getElementById("inp1").classList.add("w-75");
      document.getElementById("backbtn").classList.remove("d-none");
      document.getElementById("fbackbtn").classList.remove("d-none");
      document.getElementById("loginhere").classList.add("d-none");
      document.getElementById("inp1").setAttribute("mexLength", "10");
      document.getElementById("inp1").type="number";
      document.getElementById("inp1").placeholder = "1xxxxxxxxx";
      document.getElementById("inp2").type = "email";
      document.getElementById("inp2").placeholder = "Write Email Address";
    }
  }
  const getformdata = (e) => {
    e.preventDefault();
    var fomvalue = {
      FirstName: e.target[1].value,
      LirstName: e.target[2].value,
    };
    if (formdata.firstname !== "" && formdata.lastname !== "") {
      var fomdata = { ...formdata, ...fomvalue };
      console.log(fomdata)
      document.getElementById("signupform").reset();
      setformdata(fomdata);
    } else {
      document.getElementById("signupform").reset();
      setformdata(fomvalue);
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
            className="w-25 inputcss d-none"
            id="phncode"
          />
          <input
            className="w-100 mb-4 inputcss"
            type="text"
            name="fname"
            placeholder="Write First Name"
            id="inp1"
          />
          <input
            className="w-100 mb-5 inputcss"
            type="text"
            name="lname"
            placeholder="Write Last Name"
            id="inp2"
          />
          <div className="mt-4 d-flex justify-content-center">
            <div className="w-25 d-none" id="backbtn">
              <button className="border-0 bg-transparent w-25">Back</button>
            </div>
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
        <a href="" className="text-primary fw-bold">
          LOGIN HERE!
        </a>
      </div>
    </div>
  );
};

export default SignUp1;
