import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "../../images/logo.png";
import AttendanceTable from "../AttendanceTable/AttendanceTable";
import LogIn from "../LogIn/LogIn";
import SignUp from "../SignUp/SignUp";
const Main = (props) => {
  const {
    formdata,
    setformdata,
    setshowcomponents,
    showcomponents,
    setshowfull,
    setshowcomponent,
  } = props;
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-lg-7 p-5 bg-img">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="col-lg-5 p-4">
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <SignUp
                    formdata={formdata}
                    setformdata={setformdata}
                    setshowcomponents={setshowcomponents}
                    showcomponents={showcomponents}
                    setshowfull={setshowfull}
                    setshowcomponent={setshowcomponent}
                  />
                }
              ></Route>
              <Route
                path="/login"
                element={
                  <LogIn
                  setshowcomponent={setshowcomponent}
                  setshowfull={setshowfull}
                  />
                }
              ></Route>
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default Main;
