import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AttendanceTable from "./components/AttendanceTable/AttendanceTable";
import Main from "./components/Main/Main";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
function App() {
  const [formdata, setformdata] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    password: "",
  });
  const [showcomponents, setshowcomponents] = useState("1");
  const [showcomponent, setshowcomponent] = useState(true);
  const [showfull, setshowfull] = useState(false);
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <LogIn
                setshowcomponent={setshowcomponent}
                setshowfull={setshowfull}
              />
            }
          ></Route>
          <Route path="/AttendanceTable" element={<AttendanceTable />}></Route>
          <Route
            path="/signup"
            element={
              <Main
                showcomponents={showcomponents}
                setshowcomponents={setshowcomponents}
                setformdata ={setformdata}
                formdata={formdata}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
