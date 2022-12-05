import { useState } from "react";
import "./App.css";
import AttendanceTable from "./components/AttendanceTable/AttendanceTable";
import Main from "./components/Main/Main";
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
      {showfull && <AttendanceTable />}
      {showcomponent && (
        <Main
          setformdata={setformdata}
          setshowcomponents={setshowcomponents}
          setshowcomponent={setshowcomponent}
          setshowfull={setshowfull}
          showcomponents={showcomponents}
          formdata={formdata}
        />
      )}
    </>
  );
}

export default App;
