import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import Profile from "./components/profile";
import Appointment from "./components/appointment";
import Createdoc from "./components/createdoc";
import ScheduleLab from "./components/scheduleLab";
import CreatePrescription from "./components/createPrescription";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/admin/add" element={<Createdoc />} />
            <Route path="/lab/create" element={<ScheduleLab />} />
            <Route path="/prescription/create" element={<CreatePrescription />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
