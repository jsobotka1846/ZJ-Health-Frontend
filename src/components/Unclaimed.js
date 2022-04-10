import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import React from "react";
const Unclaimed = () => {
  const [appointments, setAppointments] = useState();
  let appts = [];
  const navigate = useNavigate();

  const delAppt = (id) => {
    axios
      .delete("https://zjhealth.herokuapp.com/api/appointment/delete/" + id, {
        withCredentials: true,
      })
      .then(() => {
        window.location.reload();
      });
  };

  const claimAppt = (id) => {
    fetch("https://zjhealth.herokuapp.com/api/appointment/addDoctor/" + id, {
      method: "PUT",
      credentials: "include",
    }).then(() => {
      window.location.reload();
    });
  };

  useEffect(() => {
    if (Cookies.get("JSESSIONID") == null) {
      navigate("/login");
    }
    axios
      .get("https://zjhealth.herokuapp.com/api/appointment/list/unassigned", {
        withCredentials: true,
      })
      .then((response) => {
        for (let appt of response.data) {
          appts.push(
            <div className="card text-middle bg-primary border border-dark border-5 mb-3 col-4 mx-auto">
              <div className="card-body">
                <h5 className="card-title text-light">Appointment</h5>
                <p className="card-text text-light">
                  {/* {appt.patient.firstName} {appt.patient.lastName} */}
                  No Doctor Assigned
                </p>
                <p className="card-text text-light">{appt.date}</p>

                <button
                  className="btn btn-primary border btn-outline-danger text-light"
                  onClick={() => delAppt(appt.id)}
                >
                  Cancel Appointment
                </button>
                <a
                  className="btn btn-primary border btn-outline-success text-light"
                  onClick={() => claimAppt(appt.id)}
                >
                  Claim Appointment
                </a>
              </div>
            </div>
          );
        }
        setAppointments(appts);
      });
  }, []);

  return (
    <React.Fragment>
      <h2 className="text-center mt-5" style={{ color: "navy" }}>
        Unassigned Appointments
      </h2>
      <hr />
      <div className="mt-3">{appointments}</div>
    </React.Fragment>
  );
};
export default Unclaimed;
