import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
const ScheduleLab = () => {
  const [message, setMessage] = useState();
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    const testName = e.target.test.value;
    const date = e.target.date.value;
    const patientEmail = e.target.patientEmail.value;
    const req = { testName, patientEmail, date };
    fetch("https://zjhealth.herokuapp.com/api/lab/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req),
      credentials: "include",
    }).then((response) => {
      console.log(response.status);
      if (response.status != 200) {
        setMessage(
          <h1 className="bg-danger" style={{ fontSize: "16px" }}>
            Invalid Request, Please try again.
          </h1>
        );
      } else {
        setMessage(
          <h1 className="bg-success" style={{ fontSize: "16px" }}>
            Successfully added Lab for {e.target.patientEmail.value}
          </h1>
        );
      }
      console.log("created");
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
    <form onSubmit={submit}>
      <div className="form-group mt-5 row">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-primary text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                {message}
                <div className="mb-md-5 mt-md-4 pb-5 row g-3">
                  <h2 className="font-weight-bold text-uppercase">Lab Form</h2>

                  <p className="text-white-50 mb-5">
                    Please fill out the following fields
                  </p>
                  <div className="col-md-6 form-outline form-white mb-4">
                    <input
                      type="text"
                      name="patientEmail"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Patient Email</label>
                  </div>

                  <div className="col-md-6 form-outline form-white mb-4">
                    {/* <input
                      type="text"
                      name="test"
                      className="form-control"
                      required
                    /> */}
                    <input
                      list="tests"
                      name="test"
                      className="form-control"
                      placeholder="Type to search..."
                      required
                    />
                    <datalist id="tests">
                      <option value="Complete Blood Count"></option>
                      <option value="Prothrombin Time"></option>
                      <option value="Basic Metabolic Panel"></option>
                      <option value="Comprehensive Metabolic Panel"></option>
                      <option value="Lipid Panel"></option>
                      <option value="Liver Panel"></option>
                      <option value="Thyroid Stimulating Hormone"></option>
                      <option value="Hemoglobin A1C"></option>
                      <option value="Urinalysis"></option>
                      <option value="Infection Culture"></option>
                    </datalist>
                    <label className="form-label">Test Performed</label>
                  </div>

                  <div className="col-md-6 form-outline form-white mb-4">
                    <input
                      type="datetime-local"
                      name="date"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Date</label>
                  </div>

                  <button
                    className="btn btn-outline-light btn-lg"
                    type="submit"
                  >
                    Submit Lab
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

export default ScheduleLab;
