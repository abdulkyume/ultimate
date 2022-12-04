import { useState } from "react";
import "./App.css";
import SignUp1 from "./components/SignUp/SignUp1";
import logo from "./images/logo.png";

function App() {
  const [formdata, setformdata] = useState({
    firstname:'',
    lastname:'',
    mobile:'',
    email:'',
    password:'',
  });
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-lg-7 p-5 bg-img">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="col-lg-5 p-4">
          <SignUp1 formdata={formdata}setformdata={setformdata}/>
        </div>
      </div>
    </div>
  );
}

export default App;
