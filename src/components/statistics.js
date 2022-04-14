import axios from "axios";
import { useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { Bar } from "react-chartjs-2";
import { BarElement, Chart, LinearScale } from "chart.js";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

import { CategoryScale } from "chart.js";
const AdminStatistics = () => {
  Chart.register(CategoryScale, LinearScale, BarElement);
  const [ages, setAges] = useState([]);
  const [diagnoses, setDiagnoses] = useState();
  const navigate = useNavigate();
  let statesDict = {
    AL: 0,
    AK: 0,
    AR: 0,
    AZ: 0,
    CA: 0,
    CO: 0,
    CT: 0,
    DC: 0,
    DE: 0,
    FL: 0,
    GA: 0,
    HI: 0,
    IA: 0,
    ID: 0,
    IL: 0,
    IN: 0,
    KS: 0,
    KY: 0,
    LA: 0,
    MA: 0,
    MD: 0,
    ME: 0,
    MI: 0,
    MN: 0,
    MO: 0,
    MS: 0,
    MT: 0,
    NC: 0,
    NE: 0,
    NH: 0,
    NJ: 0,
    NM: 0,
    NV: 0,
    NY: 0,
    ND: 0,
    OH: 0,
    OK: 0,
    OR: 0,
    PA: 0,
    RI: 0,
    SC: 0,
    SD: 0,
    TN: 0,
    TX: 0,
    UT: 0,
    VT: 0,
    VA: 0,
    WA: 0,
    WI: 0,
    WV: 0,
    WY: 0,
  };
  let ageList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let diagCount = 0;
  const [states, setStates] = useState({});
  useEffect(() => {
    if (Cookies.get("JSESSIONID") == null) {
      navigate("/login");
    }
    axios
      .get("http://zjhealth.herokuapp.com/api/user/role", {
        withCredentials: true,
      })
      .then((response) => {
        let role = response.data;
        if (role != "administrator") {
          navigate("/");
        }
      });
    axios
      .get("https://zjhealth.herokuapp.comapi/user/admin/statistics", {
        withCredentials: true,
      })
      .then((response) => {
        for (let state of response.data.states) {
          statesDict[state] += 1;
        }
        let i = 0;
        for (let curr of response.data.ages) {
          if (curr < 13) {
            ageList[0]++;
          } else if (13 < curr && curr <= 18) {
            ageList[1]++;
          } else if (18 < curr && curr <= 25) {
            ageList[2]++;
          } else if (25 < curr && curr <= 30) {
            ageList[3]++;
          } else if (30 < curr && curr <= 40) {
            ageList[4]++;
          } else if (40 < curr && curr <= 50) {
            ageList[5]++;
          } else if (50 < curr && curr <= 60) {
            ageList[6]++;
          } else if (60 < curr && curr <= 70) {
            ageList[7]++;
          } else if (70 < curr && curr <= 80) {
            ageList[8]++;
          } else if (80 < curr && curr <= 90) {
            ageList[9]++;
          } else if (90 < curr && curr <= 100) {
            ageList[10]++;
          } else if (100 < curr && curr <= 110) {
            ageList[11]++;
          }
        }

        diagCount = response.data.diagnoses.length;
        setAges(ageList);
        setDiagnoses(diagCount);
        setStates(statesDict);
      });
  }, []);

  return (
    <div className="container">
        <br />
        <br />
        <div>
            <h2>Total number of diagnoses: {diagnoses}</h2>
        </div>
        <br />
        <br />
        <div style={{ height: "300px" }}>
        <p>States of Patients</p>
        <PieChart
            data={[
            { title: "AL", value: states["AL"], color: "#C0C0C0" },
            { title: "AK", value: states["AK"], color: "#808080" },
            { title: "AR", value: states["AR"], color: "#800080" },
            { title: "AZ", value: states["AZ"], color: "#CD5C5C" },
            { title: "CA", value: states["CA"], color: "#E38627" },
            { title: "CO", value: states["CO"], color: "#F08080" },
            { title: "CT", value: states["CT"], color: "#FA8072" },
            { title: "DC", value: states["DC"], color: "#E9967A" },
            { title: "DE", value: states["DE"], color: "#FFA07A" },
            { title: "FL", value: states["FL"], color: "#DC143C" },
            { title: "GA", value: states["GA"], color: "#B22222" },
            { title: "HI", value: states["HI"], color: "#FF0000" },
            { title: "IA", value: states["IA"], color: "#8B0000" },
            { title: "ID", value: states["ID"], color: "#800000" },
            { title: "IL", value: states["IL"], color: "#FFFACD" },
            { title: "IN", value: states["IN"], color: "#FFEFD5" },
            { title: "KS", value: states["KS"], color: "#FFFF00" },
            { title: "KY", value: states["KY"], color: "#7CFC00" },
            { title: "LA", value: states["LA"], color: "#228B22" },
            { title: "MA", value: states["MA"], color: "#98FB98" },
            { title: "MD", value: states["MD"], color: "#B0E0E6" },
            { title: "ME", value: states["ME"], color: "#1E90FF" },
            { title: "MI", value: states["MI"], color: "#4682B4" },
            { title: "MN", value: states["MN"], color: "#FFFAFA" },
            { title: "MO", value: states["MO"], color: "#F0FFFF" },
            { title: "MS", value: states["MS"], color: "#FFEBCD" },
            { title: "MT", value: states["MT"], color: "#F5DEB3" },
            { title: "NC", value: states["NC"], color: "#D2B48C" },
            { title: "NE", value: states["NE"], color: "#A52A2A" },
            { title: "NH", value: states["NH"], color: "#a83273" },
            { title: "NJ", value: states["NJ"], color: "#b56b94" },
            { title: "NM", value: states["NM"], color: "#c78bac" },
            { title: "NV", value: states["NV"], color: "#a37a91" },
            { title: "NY", value: states["NY"], color: "#750f0f" },
            { title: "ND", value: states["ND"], color: "#d19090" },
            { title: "OH", value: states["OH"], color: "#c7a9a9" },
            { title: "OK", value: states["OK"], color: "#0d00ff" },
            { title: "OR", value: states["OR"], color: "#191569" },
            { title: "PA", value: states["PA"], color: "#4d48b0" },
            { title: "RI", value: states["RI"], color: "#8581d4" },
            { title: "SC", value: states["SC"], color: "#b6b4db" },
            { title: "SD", value: states["SD"], color: "#0ce8b5" },
            { title: "TN", value: states["TN"], color: "#4a9685" },
            { title: "TX", value: states["TX"], color: "#97ad15" },
            { title: "UT", value: states["UT"], color: "#c79528" },
            { title: "VT", value: states["VT"], color: "#832194" },
            { title: "VA", value: states["VA"], color: "#942d21" },
            { title: "WA", value: states["WA"], color: "#ff9185" },
            { title: "WI", value: states["WI"], color: "#e4fa1b" },
            { title: "WV", value: states["WV"], color: "#759e1c" },
            { title: "WY", value: states["WY"], color: "#0d8537" },
            ]}
        />
        </div>
        <div>
        <br />
        <br />
        <hr />
        <p>Age of Registered Patients</p>
        <Bar
            data={{
            labels: [
                "0-12",
                "13-18",
                "19-25",
                "26-30",
                "31-40",
                "41-50",
                "51-60",
                "61-70",
                "71-80",
                "81-90",
                "91-100",
                "101-110",
            ],
            datasets: [
                {
                data: [
                    ages[0],
                    ages[1],
                    ages[2],
                    ages[3],
                    ages[4],
                    ages[5],
                    ages[6],
                    ages[7],
                    ages[8],
                    ages[9],
                    ages[10],
                    ages[11],
                ],
                },
            ],
            }}
            options={{
            scales: {
                y: {
                title: {
                    display: true,
                    text: "Number of Patients",
                },
                },
                x: {
                title: {
                    display: true,
                    text: "Age",
                },
                },
            },
            }}
        />
        </div>

        
    </div>
  );
};

export default AdminStatistics;
