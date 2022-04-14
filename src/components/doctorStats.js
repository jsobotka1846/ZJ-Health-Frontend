import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import React from "react";

const DoctorStats = () => {
  const navigate = useNavigate();
  const [totalCompleted, setTotalCompleted] = useState();
  const [totalNotCompleted, setTotalNotCompleted] = useState();

  useEffect(() => {
    if (Cookies.get("JSESSIONID") == null) {
      navigate("/login");
    }
    axios
      .get("https://zjhealth.herokuapp.com/api/user/role", {
        withCredentials: true,
      })
      .then((response) => {
        let role = response.data;
        if (role != "doctor") {
          navigate("/");
        }
      });

    axios
      .get("https://zjhealth.herokuapp.com/api/doctor/doctor/statistics", {
        withCredentials: true,
      })
      .then((response) => {
        let complete = 0;
        let notComplete = 0;
        for (let doc of response.data) {
          if (doc.diagnosis != null) {
            complete += 1;
          } else {
            notComplete += 1;
          }
        }
        setTotalCompleted(complete);
        setTotalNotCompleted(notComplete);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="mt-3">
        <br />
        <h2 className="text-center" style={{ color: "navy" }}>
          Doctor Statistics
        </h2>

        <hr />
        <div className="card text-middle bg-primary border border-dark border-5 mb-3 col-4 mx-auto">
          <div className="card-body">
            <h5 className="card-title text-light">Appointments In Progress</h5>
            <p className="card-text text-light">
              <h2>You have {totalNotCompleted} active appointments.</h2>
            </p>
          </div>
        </div>

        <div className="card text-middle bg-primary border border-dark border-5 mb-3 col-4 mx-auto">
          <div className="card-body">
            <h5 className="card-title text-light">
              Appointments Completed
            </h5>
            <p className="card-text text-light">
              <h2>You have {totalCompleted} closed appointments.</h2>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default DoctorStats;
