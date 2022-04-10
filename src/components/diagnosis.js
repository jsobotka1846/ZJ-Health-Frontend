import { useParams } from "react-router-dom";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
const Diagnosis = () => {
  const params = useParams();
  const navigate = useNavigate();
  const updateDiag = (e) => {
    e.preventDefault();
    const diagnosisName = e.target.diagnosisName.value;
    const req = {diagnosisName};
    fetch(
      "https://zjhealth.herokuapp.com/api/appointment/update/" +params.appointmentId +"/diagnosis", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req),
        credentials: "include",
      }
    ).then(() => {
      navigate("/doctor/appointments")
    });
  };

  useEffect(() => {
    if (Cookies.get("JSESSIONID") == null) {
      navigate("/login");
    }
    else {
        axios.get("https://zjhealth.herokuapp.com/api/user/role", {
            withCredentials: true
        }).then((response) => {
            let role=response.data;
            if (role!="doctor") {
                navigate("/");
            }
        })
    }
    }, [])

  return (
    <form onSubmit={updateDiag}>
      <div className="form-group mt-5 row">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-primary text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5 row g-3">
                  <h2 className="font-weight-bold text-uppercase">
                    Enter Diagnosis for Appointment
                  </h2>
                  <p className="text-white-50 mb-5">
                    Please fill out the following field
                  </p>

                  <div className="col-md-12 form-outline form-white mb-4">
                    <input
                      type="text"
                      name="diagnosisName"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Diagnosis Name</label>
                  </div>
                  <button
                    className="btn btn-outline-light btn-lg"
                    type="submit"
                  >
                    Close Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Diagnosis;
