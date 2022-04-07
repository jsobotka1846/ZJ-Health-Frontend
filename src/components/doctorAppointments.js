import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const DoctorAppt = () => {
  const [appointments, setAppointments] = useState();
  const [viewIntake, setViewIntake] = useState();
  const navigate = useNavigate();
  let appts = [];

  const viewForm = (intake) => {
    setViewIntake(
      <div className="intake" style={{ top: window.scrollY + 100, right: 100 }}>
        <button
          onClick={() => setViewIntake(null)}
          className="btn btn-primary close"
        >
          X
        </button>
        <h2>Patient Intake Form</h2>
        <h5>Emergency Contact Information</h5>
        <p>
          First Name: {intake.emergencyFirstName}
          <br />
          Last Name: {intake.emergencyFirstName}
          <br />
          Phone Number: {intake.emergencyNum}
          <br />
          Relation: {intake.emergencyRelation}
        </p>
        <h5>Current Health</h5>
        <p>
          Symptoms: {intake.primarySymptoms}
          <br />
          Symptom Onset Date: {intake.symptomOnset}
          <br />
          Symptom Description: {intake.symptomDesc}
          <br />
          Current Temperature: {intake.currentTemp}
          <br />
        </p>
        <h5>Current Medication</h5>
        <p>
          Medication Name: {intake.medicationName}
          <br />
          Doseage: {intake.doseage}
        </p>
        <h5>Health History</h5>
        <p>
          Prior Condition: {intake.priorCondition}
          <br />
          Diagnosis Date: {intake.diagDate}
          <br />
          Allergy Names: {intake.allergyName}
          <br />
          Allergy Descriptions: {intake.allergyDesc}
        </p>
      </div>
    );
  };

  useEffect(() => {
    if (Cookies.get("JSESSIONID") == null) {
      navigate("/login");
    }
    else {
      axios.get("http://localhost:8080/api/user/role", {
          withCredentials: true
      }).then((response) => {
          let role=response.data;
          if (role!="doctor") {
              navigate("/");
          }
      })
    }
    axios
      .get("http://localhost:8080/api/doctor/appointments/list", {
        withCredentials: true,
      })
      .then((response) => {
        for (let appt of response.data) {
          appts.push(
            <div className="card text-middle bg-primary border border-dark border-5 mb-3 col-4 mx-auto">
              <div className="card-body">
                <h5 className="card-title text-light">Appointment</h5>
                <p className="card-text text-light">
                  Patient: {appt.patient.firstName} {appt.patient.lastName}
                  <br />
                  Type: {appt.type}
                  <br />
                  {appt.date}
                </p>

                <a
                  href={"/view/record/" + appt.patient.id}
                  className="btn btn-primary border btn-outline-success text-light"
                >
                  Review Patient Medical Record
                </a>
                <button
                  onClick={() => viewForm(appt.intake)}
                  className="btn btn-primary border btn-outline-success text-light"
                >
                  View Intake Form
                </button>

                <a
                  href={"/doctor/appointments/update/" + appt.id + "/diagnosis"}
                  className="btn btn-primary border btn-outline-success text-light"
                >
                  Enter Diagnosis and Close
                </a>
                <a
                  href={"/doctor/appointments/update/" + appt.id + "/treatment"}
                  className="btn btn-primary border btn-outline-success text-light"
                >
                  Enter Treatment
                </a>
              </div>
            </div>
          );
        }

        setAppointments(appts);
      });
  }, []);

  return (
    <div className="profile">
      <div className="mt-5">
        <div className="container">{viewIntake}</div>
        <h1 className="text-center" style={{ color: "navy" }}>
          Welcome
        </h1>
        <br />
        <h2 className="text-center" style={{ color: "navy" }}>
          Scheduled Patients
        </h2>
        {appointments}

        <hr />
      </div>
    </div>
  );
};

export default DoctorAppt;
