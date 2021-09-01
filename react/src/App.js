import React from "react";

import { DataStore } from "./contexts/DataContext";
import LandingPage from "./views/LandingPage";
import "./App.css";
import "antd/dist/antd.css";

const App = () => {
  return (
    <DataStore>
      <LandingPage />
    </DataStore>
  );
};

export default App;
