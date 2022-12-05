import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";

import "./Login.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");
const LogIn = (props) => {
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [subtitle, setsubtitle] = useState("");
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const getformdata = async (e) => {
    e.preventDefault();
    var fomvalue = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    await axios
      .post("https://test.nexisltd.com/login", fomvalue)
      .then((res) => {
        if (Object.keys(res.data).indexOf("access_token") > -1) {
          var alldata = { ...fomvalue, ...res.data };
          console.log(alldata);
          localStorage.setItem("usert", JSON.stringify(alldata));
          localStorage.removeItem("user");
          document.getElementById("signupform").reset();
          navigate("/AttendanceTable");
        }
      })
      .catch((err) => {
        setsubtitle("email/password is wrong");
        openModal();
      });
  };

  return (
    <div className="container-fluid">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        Email/Phone Already Exist
      </Modal>
      <div className="row vh-100">
        <div className="col-lg-7 d-md-none d-lg-block d-none p-lg-5 bg-img">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="col-lg-5 col-md-12 p-lg-4 col-12 col-md-12">
          <img src={logo} alt="logo" className="d-lg-none d-md-block d-block"/>
          <div className="h-100 w-100 d-flex flex-column justify-content-center align-content-center bshadow">
            <div className="text-center h3 mb-sm-3 mt-5">LogIn Form</div>
            <div className="p-lg-5 p-md-3 p-3 w-lg-75 ms-auto me-auto mt-5 mt-lg-5">
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
                  <Link to="/signup" className="text-primary fw-bold">
                    SignUp HERE!
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
