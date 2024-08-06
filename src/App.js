import React from "react";
import "./App.css";
import Horizontalbar from "./components/horizontalbar/Horizontalbar";
import Vertical from "./components/verticalbar/Vertical";
import Infocard from "./components/infocard/Infocard";
import Chart from "./components/chart/Chart";
import Orederr from "./components/orders/Orederr";
import Profitmenu from "./components/profit/Profitmenu";




const App = () => {
  return (
    <div className="maindiv">
      <Horizontalbar />
      <div className="vercon">
        <Vertical />
        <div className="innerdiv">
          <p style={{ color: "white", fontSize: "15px", fontWeight: "bold" }}>
            Dashboard
          </p>
          <div className="allcontent" >
            <div className="leftcontent" >
              <Infocard/>
              <Chart/>
              <Orederr/>
            </div>
            <div className="rightcontent" >
              <Profitmenu/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
