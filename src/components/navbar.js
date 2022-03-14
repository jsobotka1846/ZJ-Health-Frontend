import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [status, setStatus] = useState();
  const [signup, setSignup] = useState();
  const navigate = useNavigate();

  const logout = (e) => {
    
    
    fetch("http://localhost:8080/logout", {
            method: "POST",
            credentials: "include"

        }).then(()=> {
          navigate("/");
          window.location.reload();
        })
    
    }
    useEffect(() => {
      if (Cookies.get("JSESSIONID")==null) {
        const logStatus = <a href="/login"> <button className="item btn" type="submit" style={{color: "white"}}>Login</button></a>
        const signupLink = <a className="item nav-link active" href="/signup" style={{color: "white"}}>Sign up</a>
        setStatus(logStatus);
        setSignup(signupLink);
      }
      else {
        const logStatus = <button className="item btn" type="submit" onClick={logout} style={{color: "white"}}>Logout</button>
        
        setStatus(logStatus);
        
      }
      
    }, [])

    return (
        <header>
          <nav className="navbar fixed-top ">
            <div className="container-fluid">
              <div className="navbar-nav me-auto">
                <div className="nav-item" >
                  <a className="item nav-link" href="/" style={{color: "white"}}>Home</a>
                  <a className="item nav-link" href="/" style={{color: "white"}}>Directory</a>
                  <div className="dropdown" style={{display: "inline-block"}}>
                    <a className="drop nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" style={{color: "white"}}>
                        Services
                    </a>
                    <ul className="dropdown-menu" style={{position: "absolute"}}>
                      <li><a className="dropdown-item" href="#cards">Appointments</a></li>
                      <li><a className="dropdown-item" href="#cards">Perscriptions</a></li>
                      <li><a className="dropdown-item" href="#cards">Lab Testing</a></li>
                    </ul>
                  </div>
                  
                </div>
                
              </div>
              {status}
              {signup}
            </div>
          </nav>
          <br />
      </header>
      );
}
 
export default Navbar;