import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Change = () => {
  let navigate = useNavigate();
  const [message, setMessage] = useState();
  const params = useParams();

  const submit = (e) => {
    e.preventDefault();
    const newPassword = e.target.newPassword.value;

    const req = { newPassword };
    fetch("http://localhost:8080/api/user/forgot/" + params.token, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req),
    }).then((response) => {
      if (response.status != 200) {
        setMessage(
          <h1 className="bg-danger" style={{ fontSize: "16px" }}>
            Invalid request, double check confirmation code.
          </h1>
        );
      } else {
        navigate("/login");
      }
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/user/forgot/" + params.token, {
        withCredentials: true,
      })

      .then((response) => {
        if (response.status != 200) {
          navigate("/");
        } else {
          navigate("/login");
        }
      });
  }, []);

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
                    Change Password
                  </h2>
                  <p className="text-white-50 mb-5">
                    Please fill out the following fields
                  </p>

                  <div className="col-md-12 form-outline form-white mb-4">
                    <input
                      type="newPassword"
                      name="newPassword"
                      className="form-control"
                      required
                    />
                    <label className="form-label">
                      Enter your new password
                    </label>
                  </div>

                  <button
                    className="col-md-12 btn btn-outline-light btn-lg"
                    type="submit"
                  >
                    Submit
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

export default Change;
