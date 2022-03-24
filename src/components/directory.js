import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Directory = () => {
  const [doctors, setDoctors] = useState();
  const returnedDoctors = [];
  const [filter, setFilter] = useState("");
  const searchValue = (e) => {
    setFilter(e.target.value);
  };
  console.log(filter);

  const findDoctor = (e) => {
    axios
      .get(
        "http://localhost:8080/api/doctor/find?name=" + e.target.name.value,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        for (let user of response.data) {
          returnedDoctors.push(
            <div className="col-11 col-md-6 col-lg-3 mx=0 mb-4">
              <div className="card p-0 overfolow-hidden h-100 shadow">
                <img
                  src={require("../images/" + user.doctor.photoPath)}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {user.firstName} {user.lastName}
                  </h5>
                  <p className="card-text">Email: {user.email}</p>
                  <p className="card-text">
                    Specialty: {user.doctor.specialty}
                  </p>
                  <p className="card-text">
                    Department: {user.doctor.department.name}
                  </p>
                </div>
              </div>
            </div>
          );
        }
        setDoctors(returnedDoctors);
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/doctor/list", {
        withCredentials: true,
      })
      .then((response) => {
        for (let user of response.data) {
          returnedDoctors.push(
            <div className="col-11 col-md-6 col-lg-3 mx=0 mb-4">
              <div className="card p-0 overfolow-hidden h-100 shadow">
                <img
                  src={require("../images/" + user.doctor.photoPath)}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {user.firstName} {user.lastName}
                  </h5>
                  <p className="card-text">Email: {user.email}</p>
                  <p className="card-text">
                    Specialty: {user.doctor.specialty}
                  </p>
                  <p className="card-text">
                    Department: {user.doctor.department.name}
                  </p>
                </div>
              </div>
            </div>
          );
        }
        setDoctors(returnedDoctors);
      });
  }, []);

  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="row justify-content-center">
          <div className="mb-3 col-4 mx-auto text-center">
            <form onSubmit={findDoctor}>
              <label className="form-label mt-2">Search</label>
              <input name="name" type="text" className="form-control" />
            </form>
          </div>
        </div>
        {doctors}
      </div>
    </section>
  );
};

export default Directory;
