import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
  const [appointments, setAppointments] = useState();
  let appts = [];
  const navigate = useNavigate();

  const delAppt = (id) => {

      axios.delete("http://localhost:8080/api/appointment/delete/"+id, {
          withCredentials: true
      })
      .then(() => {
          window.location.reload();
      })
  }


  useEffect(() => {
    if (Cookies.get("JSESSIONID")==null) {
        navigate("/login");
    }
    axios.get("http://localhost:8080/api/appointment/user/appointments", {
        withCredentials: true
      })
      .then((response) => {
        for (let appt of response.data) {
          appts.push(
            <div className="card text-center bg-primary border border-dark border-5">
              <div className="card-body">
                <h5 className="card-title text-light">Appointment</h5>
                <p className="card-text text-light">{appt.doctor.firstName}</p>
                <p className="card-text text-light">{appt.date}</p>
                <button
                  className="btn btn-primary border btn-outline-danger text-light"
                  onClick={() => delAppt(appt.id)}
                >
                  Cancel Appointment
                </button>
                <a
                  href="#"
                  className="btn btn-primary border btn-outline-success text-light"
                >
                  Review Appointment
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
          Current Appointments
        </h2>
        <p className="text-center">
          <a href="/appointment" className="btn btn-outline-success">
            Create New Apppointment
          </a>
        </p>
        <hr />
      </div>
      {appointments}
    </div>
  );
};

export default Profile;
