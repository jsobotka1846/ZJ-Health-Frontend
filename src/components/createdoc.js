import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Createdoc = () => {
  const [message, setMessage] = useState();
  const [departments, setDepartments] = useState();
  let depts = [];
  const navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get("JSESSIONID") == null) {
      navigate("/login");
    }
    axios
      .get("http://localhost:8080/api/department/list", {
        withCredentials: true,
      })
      .then((response) => {
        for (let dept of response.data) {
          depts.push(<option value={dept.name}>{dept.name}</option>);
        }

        setDepartments(depts);
      });
  }, []);

  const submit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const deptName = e.target.deptName.value;
    const specialty = e.target.specialty.value;
    const salary = e.target.salary.value;
    const photoPath = e.target.photoPath.files[0];
    const docInfo = new FormData();
    docInfo.append("email", email);
    docInfo.append("deptName", deptName);
    docInfo.append("specialty", specialty);
    docInfo.append("salary", salary);
    docInfo.append("photoPath", photoPath);
    fetch("http://localhost:8080/api/doctor/update", {
      method: "PUT",
      body: docInfo,
      credentials: "include",
    }).then((response) => {
      if (response.status != 200) {
        setMessage(
          <h1 className="bg-danger" style={{ fontSize: "16px" }}>
            Invalid request, double check doctor email and department
          </h1>
        );
      } else {
        setMessage(
          <h1 className="bg-success" style={{ fontSize: "16px" }}>
            Set Doctor Role for {email}
          </h1>
        );
      }
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
                {message}
                <div className="mb-md-5 mt-md-4 pb-5 row g-3">
                  <h2 className="font-weight-bold text-uppercase">
                    Create Doctor Account
                  </h2>
                  <p className="text-white-50 mb-5">
                    Please fill out the following doctor information.
                  </p>

                  <div className="col-md-6 form-outline form-white mb-4">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Doctor Email</label>
                  </div>

                  <div className="col-md-6 form-outline form-white mb-4">
                    <select
                      type="text"
                      name="deptName"
                      className="form-select"
                      required
                    >
                      {departments}
                    </select>
                    <label className="form-label">Department</label>
                  </div>

                  <div className="col-md-9 form-outline form-white mb-4">
                    <input
                      type="text"
                      name="specialty"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Specialty</label>
                  </div>

                  <div className="col-md-3 form-outline form-white mb-4">
                    <input
                      type="number"
                      name="salary"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Salary</label>
                  </div>

                  <div className="col-md-12 form-outline form-white mb-4">
                    <input
                      type="file"
                      name="photoPath"
                      accept="image/png, image/gif, image/jpeg"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Image</label>
                  </div>

                  <button
                    className="btn btn-outline-light btn-lg"
                    type="submit"
                  >
                    Create Doctor
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

export default Createdoc;
