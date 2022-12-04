import { useState } from "react";
import "./App.css";
import SignUp1 from "./components/SignUp/SignUp1";
import SignUp2 from "./components/SignUp/SignUp2";
import SignUp3 from "./components/SignUp/SignUp3";
import logo from "./images/logo.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
function App() {
  const [formdata, setformdata] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    password: "",
  });
  const [showcomponents, setshowcomponents] = useState("1");
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
                  />
                }
              ></Route>
              <Route path="/login" element={<LogIn />}></Route>
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
