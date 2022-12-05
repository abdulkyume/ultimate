import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import { Link } from "react-router-dom";
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
  const { setshowfull, setshowcomponent } = props;
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
          localStorage.setItem("user", JSON.stringify(alldata));
          document.getElementById("signupform").reset();
          setshowcomponent(false);
          setshowfull(true);
        }
      })
      .catch((err) => {
        setsubtitle("email/password is wrong");
        openModal();
      });
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
