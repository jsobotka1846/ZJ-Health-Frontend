import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { data } from "browserslist";

const Directory = () => {
  const [doctors, setdoctors] = useState([]);
  axios.get("http://localhost:8080/api/doctor/list").then((response) => {
    const doctors = response.data;
    setdoctors({ doctors });
  });

  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        {data.doctors.map((item, index) => {
          return (
            <div className="col-11 col-md-6 col-lg-3 mx=0 mb-4">
              <div className="card p-0 overfolow-hidden h-100 shadow">
                <img src={item.photoPath} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">
                    {item.firstName} {item.lastName}
                  </h5>
                  <p className="card-text">{item.specialty}</p>
                  <p className="card-text">{item.name}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Directory;
