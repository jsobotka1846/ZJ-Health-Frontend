import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState();
  const login = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const credentials = { email, password };

    fetch("http://localhost:8080/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
      credentials: "include",
    }).then((response) => {
      if (response.status !== 200) {
        setMessage(
          <h1 className="bg-danger" style={{ fontSize: "16px" }}>
            Invalid email or password
          </h1>
        );
        e.target.password.value = "";
      } else {
          navigate("/profile");
      }
    });
  };

  return (
    <form onSubmit={login}>
      <div className="form-group mt-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-primary text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  {message}
                  <h2 className="font-weight-bold text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">
                    Please enter your email and password
                  </p>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label">Email</label>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="password"
                      name="password"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label">Password</label>
                  </div>

                  <p className="small mb-5 pb-lg-2">
                    <a className="text-white-50" href="../forgot">
                      Forgot password?
                    </a>
                  </p>

                  <button
                    className="btn btn-outline-light btn-lg"
                    type="submit"
                  >
                    Login
                  </button>
                </div>

                <div>
                  <p className="mb-0">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-white-50 fw-bold">
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
