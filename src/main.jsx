import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";

import './index.css'
import CalendarApp from './CalendarApp'
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <Provider store={store}>
      <Router>
        <CalendarApp />
      </Router>
    </Provider>
  //</React.StrictMode>,
)
