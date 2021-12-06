import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {AppRouter} from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import {store} from "./store";
import {Home} from "./pages/Home/Home";

ReactDOM.render(
  <Provider store={store}>
      <Home/>
      {/*<BrowserRouter>*/}
      {/*    <AppRouter />*/}
      {/*</BrowserRouter>*/}
  </Provider>,
  document.getElementById('root')
);


// reportWebVitals();
