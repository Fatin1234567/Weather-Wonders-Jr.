import { useState } from "react";
import BarChart from "./BarChart";
import { UserData } from "./Data";
import "../style/barChart.css"

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "Avg Temperature(last 6 months)",
        data: UserData.map((data) => data.temperature),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 5,
        borderWidth:5,
      },
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="barChartContainer">
     
      <div className="barChart" >
        <BarChart chartData={userData} />
      </div>
     
    </div>
  );
}

export default App;