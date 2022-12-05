import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import axios from "axios";
import "./AttendanceTable.css";

const AttendanceTable = () => {
  const [attendancetabledata, setattendancetabledata] = useState();
  useEffect(() => {
    var accesstokenf = JSON.parse(localStorage.getItem("user"));
    var accesstoken = accesstokenf.access_token;
    axios
      .get("https://test.nexisltd.com/test", {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      })
      .then((res) => {
        let tabledatas = [];

        for (const [keys, values] of Object.entries(res.data)) {
          let tabledata = {};
          for (const [key, value] of Object.entries(values)) {
            if (key === "name") {
              tabledata.name = value;
            }
            if (key === "attendance") {
              var attendancedate = Object.keys(value).map((keay) => [
                keay,
                value[keay],
              ]);
              attendancedate =
                attendancedate[
                  Math.floor(
                    Math.random() * (attendancedate.length - 0 + 1) + 0
                  )
                ];
              tabledata.date = attendancedate[0];
              tabledata.status = attendancedate[1]["status"];
            }
            tabledatas.push(tabledata);
          }
        }
        tabledatas = [
          ...new Map(tabledatas.map((item) => [item["name"], item])).values(),
        ];
        setattendancetabledata(tabledatas);
      })
      .catch((err) => {});
  });
  return (
    <div>
      <div className="container-fluid">
        <div className="row p-5">
          <div className="col-lg-12">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="cutomheads">Attendacne Information</div>
          </div>
          <div className="col-lg-12 col-md-12 col-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Employee Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <></>
              <tbody>
                {attendancetabledata.map((element) => <tr key={element.name}> <td>{element.date}</td><td>{element.name}</td><td>{element.status}</td> </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceTable;
