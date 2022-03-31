import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const DoctorAppt = () => {
    const [appointments, setAppointments] = useState();
    const navigate = useNavigate();
    let appts = [];

    useEffect(() => {
        if (Cookies.get("JSESSIONID") == null) {
          navigate("/login");
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
                    </p>
                    <p className="card-text text-light">{appt.date}</p>

                    <a
                      href={"/view/record/"+appt.patient.id}
                      className="btn btn-primary border btn-outline-success text-light"
                    >
                      Review Patient Medical Record
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
}
 
export default DoctorAppt;