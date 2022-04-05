import { useParams } from "react-router-dom";
import React from "react";

const Diagnosis = () => {
  const params = useParams();

  const updateDiag = (e) => {
    e.preventDefault();
    const diagnosisName = e.target.diagnosisName.value;
    const req = {diagnosisName};
    fetch(
      "http://localhost:8080/api/appointment/update/" +params.appointmentId +"/diagnosis", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req),
        credentials: "include",
      }
    ).then(() => {
      console.log("diag created");
    });
  };

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
