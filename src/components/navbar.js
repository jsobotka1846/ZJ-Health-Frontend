import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [status, setStatus] = useState();
  const [signup, setSignup] = useState();
  const [profile, setProfile] = useState();
  const [viewLabs, setViewLabs] = useState();
  const [record, setRecord] = useState();
  const [reviews, setReviews] = useState();
  const [adminStats, setAdminStats] = useState();
  const [createDr, setCreateDr] = useState();
  const [viewUnclaimedAppt, setViewUnclaimedAppt] = useState();
  const [viewDoctorStats, setViewDoctorStats] = useState();
  const [drAppt, setDrAppt] = useState();
  const [lab, setLab] = useState();
  const [createPrescription, setCreatePrescription] = useState();
  const navigate = useNavigate();
  var session = Cookies.get("JSESSIONID");
  const logout = (e) => {
    fetch("https://zjhealth.herokuapp.com/logout", {
      method: "POST",
      credentials: "include",
    }).then(() => {
      Cookies.remove("JSESSIONID");
      navigate("/");
    });
  };
  useEffect(() => {
    if (session == null) {
      setStatus(
        <a href="/login">
          <button className="item btn" type="submit" style={{ color: "white" }}>
            Login
          </button>
        </a>
      );
      setSignup(
        <a
          className="item nav-link active"
          href="/signup"
          style={{ color: "white" }}
        >
          Sign up
        </a>
      );
      setProfile(null);
      setCreateDr(null);
      setLab(null);
      setViewLabs(null);
      setCreatePrescription(null);
      setDrAppt(null);
      setRecord(null);
      setViewUnclaimedAppt(null);
      setReviews(null);
      setAdminStats(null);
      setViewDoctorStats(null);
    } else {
      axios
        .get("https://zjhealth.herokuapp.com/api/user/role", {
          withCredentials: true,
        })
        .then((response) => {
          var role = response.data;
          if (role == "administrator") {
            setCreateDr(
              <a
                className="item nav-link"
                href="/admin/edit"
                style={{ color: "white" }}
              >
                Add/Remove Doctor
              </a>
            );
            setReviews(
              <a
                className="item nav-link"
                href="/admin/reviews"
                style={{ color: "white" }}
              >
                View Appointment Reviews
              </a>
            );
            setAdminStats(
              <a
                className="item nav-link"
                href="/admin/statistics"
                style={{ color: "white" }}
              >
                View Hospital Statistics
              </a>
            );
          } else if (role == "doctor") {
            setDrAppt(
              <a
                className="item nav-link"
                href="/doctor/appointments"
                style={{ color: "white" }}
              >
                Doctor Appointments
              </a>
            );

            setLab(
              <a
                className="item nav-link"
                href="/lab/create"
                style={{ color: "white" }}
              >
                Schedule Lab
              </a>
            );

            setViewLabs(
              <a
                className="item nav-link"
                href="/view/labs"
                style={{ color: "white" }}
              >
                Update Labs
              </a>
            );

            setViewDoctorStats(
              <a
                className="item nav-link"
                href="/doctor/statistics"
                style={{ color: "white" }}
              >
                View Stats
              </a>
            );

            setViewUnclaimedAppt(
              <a
                className="item nav-link"
                href="/profile/viewUnclaimed"
                style={{ color: "white" }}
              >
                View Unclaimed Appointments
              </a>
            );
            setCreatePrescription(
              <a
                className="item nav-link"
                href="/prescription/create"
                style={{ color: "white" }}
              >
                Create Prescription
              </a>
            );
          }

          setRecord(
            <a
              className="item nav-link"
              href="/view/record"
              style={{ color: "white" }}
            >
              View Record
            </a>
          );

          setStatus(
            <button
              className="item btn"
              type="submit"
              onClick={logout}
              style={{ color: "white" }}
            >
              Logout
            </button>
          );
          setProfile(
            <a
              className="item nav-link"
              href="/profile"
              style={{ color: "white" }}
            >
              View Profile
            </a>
          );
          setSignup(null);
        });
    }
  }, [session]);

  return (
    <header>
      <nav className="navbar fixed-top ">
        <div className="container-fluid">
          <div className="navbar-nav me-auto">
            <div className="nav-item">
              {profile}
              <a className="item nav-link" href="/" style={{ color: "white" }}>
                Home
              </a>
              <a
                className="item nav-link"
                href="/directory"
                style={{ color: "white" }}
              >
                Directory
              </a>
              <div className="dropdown" style={{ display: "inline-block" }}>
                <a
                  className="drop nav-link dropdown-toggle "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  style={{ color: "white" }}
                >
                  Services
                </a>
                <ul className="dropdown-menu" style={{ position: "absolute" }}>
                  <li>
                    <a className="dropdown-item" href="/profile">
                      Appointments
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/profile/prescriptions">
                      Prescriptions
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/view/record">
                      View Record
                    </a>
                  </li>
                </ul>
              </div>
              {drAppt}
              {createDr}
              {lab}
              {viewLabs}
              {createPrescription}
              {viewUnclaimedAppt}
              {reviews}
              {adminStats}
              {viewDoctorStats}
            </div>
          </div>
          {status}
          {signup}
        </div>
      </nav>
      <br />
    </header>
  );
};

export default Navbar;
