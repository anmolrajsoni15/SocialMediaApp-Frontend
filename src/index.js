import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import store from "./store";
import AlertTemplate from "react-alert-template-basic"
import {Provider as AlertProvider, positions, transitions} from "react-alert";


const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 4000,
  transition: transitions.SCALE,
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options} >
        <App />
      </AlertProvider>
    </Provider>
  </React.StrictMode>
);

