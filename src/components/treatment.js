import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
const Treatment = () => {
  const params = useParams();
  const navigate = useNavigate();

  const updateTreatment = (e) => {
    e.preventDefault();
    const treatmentName = e.target.treatmentName.value;
    const treatmentReason = e.target.treatmentReason.value;
    const req = { treatmentName, treatmentReason };
    fetch(
      "https://zjhealth.herokuapp.com/api/appointment/update/" +
        params.appointmentId +
        "/treatment",
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req),
        credentials: "include",
      }
    ).then(() => {
      navigate("/doctor/appointments");
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
    <form onSubmit={updateTreatment}>
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
                    Enter Treatment for Appointment
                  </h2>
                  <p className="text-white-50 mb-5">
                    Please fill out the following field
                  </p>

                  <div className="col-md-12 form-outline form-white mb-4">
                    <input
                      type="text"
                      name="treatmentName"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Treatment Name</label>

                    <input
                      type="text"
                      name="treatmentReason"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Treatment Reason</label>
                  </div>
                  <button
                    className="btn btn-outline-light btn-lg"
                    type="submit"
                  >
                    Update Appointment
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

export default Treatment;
