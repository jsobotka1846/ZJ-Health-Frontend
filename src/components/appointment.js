import { useNavigate } from "react-router-dom";

const Appointment = () => {
  let navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    // const patientEmail = e.target.patientEmail.value;
    const doctorEmail = e.target.doctorEmail.value;
    const date = e.target.date.value;
    const emergencyFirstName = e.target.emergencyFirstName.value;
    const emergencyLastName = e.target.emergencyLastName.value;
    const emergencyNum = e.target.emergencyNum.value;
    const emergencyRelation = e.target.emergencyRelation.value;
    const primarySymptoms = e.target.primarySymptoms.value;
    const symptomOnset = e.target.symptomOnset.value;
    const symptomDesc = e.target.symptomDesc.value;
    const currentTemp = e.target.currentTemp.value;
    const medicationName = e.target.medicationName.value;
    const doseage = e.target.doseage.value;
    const diagDate = e.target.diagDate.value;
    const allergyName = e.target.allergyName.value;
    const allergyDesc = e.target.allergyDesc.value;
    const emails = { doctorEmail, date };
    const intake = {
      emergencyFirstName,
      emergencyLastName,
      emergencyNum,
      emergencyRelation,
      primarySymptoms,
      symptomOnset,
      symptomDesc,
      currentTemp,
      medicationName,
      doseage,
      diagDate,
      allergyName,
      allergyDesc,
    };
    const req = { emails, intake };
    fetch("http://localhost:8080/api/appointment/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req),
      credentials: "include",
    }).then(() => {
      navigate("/profile");
    });
  };

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
                <div className="mb-md-5 mt-md-4 pb-5 row g-3">
                  <h2 className="font-weight-bold text-uppercase">
                    Request Appointment
                  </h2>
                  <p className="text-white-50 mb-5">
                    Please fill out the following fields
                  </p>

                  {/* <div className="col-md-6 form-outline form-white mb-4">
                    <input
                      type="email"
                      name="patientEmail"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Your Email</label>
                  </div> */}

                  <div className="col-md-6 form-outline form-white mb-4">
                    <input
                      type="email"
                      name="doctorEmail"
                      className="form-control"
                      required
                    />
                    <label className="form-label">
                      Requested Doctor's Email
                    </label>
                  </div>

                  <div className="col-md-6 form-outline form-white mb-4">
                    <input
                      type="datetime-local"
                      name="date"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Requested Date/Time</label>
                  </div>

                  <div className="col-md-6 form-outline form-white mb-4">
                    <input
                      type="text"
                      name="emergencyFirstName"
                      className="form-control"
                      required
                    />
                    <label className="form-label">
                      Emergency Contact First Name
                    </label>
                  </div>

                  <div className="col-md-6 form-outline form-white mb-4">
                    <input
                      type="text"
                      name="emergencyLastName"
                      className="form-control"
                      required
                    />
                    <label className="form-label">
                      Emergency Contact Last Name
                    </label>
                  </div>

                  <div className="col-md-6 form-outline form-white mb-4">
                    <input
                      type="text"
                      name="emergencyNum"
                      className="form-control"
                      required
                    />
                    <label className="form-label">
                      Emergency Contact Number{" "}
                    </label>
                  </div>

                  <div className="col-md-7 form-outline form-white mb-4">
                    <input
                      type="text"
                      name="emergencyRelation"
                      className="form-control"
                      required
                    />
                    <label className="form-label">
                      Emergency Contact Relation
                    </label>
                  </div>

                  <div className="col-md-7 form-outline form-white mb-4">
                    <input
                      type="text"
                      name="primarySymptoms"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Primary Symptoms</label>
                  </div>

                  <div className="col-md-3 form-outline form-white mb-4">
                    <input
                      type="date"
                      name="symptomOnset"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Symptom Onset Date</label>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="text"
                      name="symptomDesc"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Symptom Description</label>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="number"
                      name="currentTemp"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Current Body Temp</label>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="text"
                      name="medicationName"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Current Medications</label>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="text"
                      name="doseage"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Doseage of Medication</label>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="date"
                      name="diagDate"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Date of Diagnosis</label>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="text"
                      name="allergyName"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Current Allergies</label>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="text"
                      name="allergyDesc"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Allergy Description</label>
                  </div>

                  <button
                    className="btn btn-outline-light btn-lg"
                    type="submit"
                  >
                    Request Appointment
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

export default Appointment;
