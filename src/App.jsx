import { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";

function App() {

  return <div className="container">
    <Heading />
    <ClockSlogan />
    <CurrentTime />
  </div>;
}

export default App;
