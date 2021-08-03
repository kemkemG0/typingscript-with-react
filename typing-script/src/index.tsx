import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { gameSlice } from "./features/game";
import App from "./App";

// ストアにReducerを登録?
const store = configureStore({ reducer: gameSlice.reducer });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="container">
        <App />
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);
