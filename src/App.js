import { useState } from "react";
import "./App.css";
import SignUp1 from "./components/SignUp/SignUp1";
import SignUp2 from "./components/SignUp/SignUp2";
import SignUp3 from "./components/SignUp/SignUp3";
import logo from "./images/logo.png";

function App() {
  const [formdata, setformdata] = useState({
    firstname:'',
    lastname:'',
    mobile:'',
    email:'',
    password:'',
  });
  const [showcomponents, setshowcomponents] = useState('1');
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-lg-7 p-5 bg-img">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="col-lg-5 p-4">
          {showcomponents === '1' && <SignUp1 formdata={formdata}setformdata={setformdata} setshowcomponents={setshowcomponents}/>}
          {showcomponents === '2' && <SignUp2 formdata={formdata}setformdata={setformdata} setshowcomponents={setshowcomponents}/>}
          {showcomponents === '3' && <SignUp3 formdata={formdata}setformdata={setformdata} setshowcomponents={setshowcomponents}/>}
          
        </div>
      </div>
    </div>
  );
}

export default App;
