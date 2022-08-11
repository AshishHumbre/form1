import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import RideSummary from "./components/RideSummary";

const showResults = (values) =>
  new Promise((resolve) => {
    setTimeout(() => {
      // simulate server latency
      //window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
      console.log(values)
      resolve();
    }, 500);
  });

function App() {
  return (
    <div className="App">
      <RideSummary onSubmit={showResults} />
    </div>
  );
}

export default App;
