import React, { useState } from "react";
import "./SignUp.css";
import axios from "axios";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

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

const SignUp3 = (props) => {
  const {
    formdata,
    setformdata,
    setshowcomponent,
    setshowcomponents,
    setshowfull,
  } = props;
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
      password: e.target[0].value,
    };
    if (formdata.firstname !== "" && formdata.lastname !== "") {
      var fomdata = { ...formdata, ...fomvalue };
      setformdata(fomdata);
      await axios
        .post("https://test.nexisltd.com/signup", fomdata)
        .then((res) => {
          if (Object.keys(res.data).indexOf("sucess") > -1) {
            localStorage.removeItem("user");
            localStorage.clear();
            document.getElementById("signupform").reset();
            setshowcomponent(false);
            setshowfull(true);
          }
        })
        .catch((err) => {
          setsubtitle("email/phone number already exists");
          openModal();
        });
    }
  };
  return (
    <div className="w-100 d-flex flex-column justify-content-center align-content-center h-100 bshadow">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {subtitle}
      </Modal>
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
              <button className="cusbtn" type="submit">
                Sign Up
              </button>
            </div>
            <div className="w-25 " id="fbackbtn"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp3;
