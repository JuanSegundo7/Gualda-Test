import React from "react";
import Switch from "./components/switch/switchComponent";
import { BrowserRouter } from "react-router-dom";
import styles from "./App.module.css";

const App = () => {
  return (
    <BrowserRouter>
      <main className={styles.main}>
        <Switch />
      </main>
    </BrowserRouter>
  );
};

export default App;
