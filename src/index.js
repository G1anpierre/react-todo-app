import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
);
console.log("initial state", store.getState());
// * Making sure that is has update my Redux
// * because im passing a new object throuth a deep copy
let oldValue = store.getState();
// Everytime you dispatch an action and the reducer finishes running
// redux will call all the subscribers.
store.subscribe(() => {
  let newValue = store.getState();
  if (newValue === oldValue) {
    console.log("same");
  } else {
    console.log("changed", newValue, oldValue);
  }
});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
