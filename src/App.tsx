import React from "react";

import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Switch from "./components/switch/switchComponent";

import styles from "./App.module.css";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <main className={styles.main}>
          <Switch />
        </main>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
