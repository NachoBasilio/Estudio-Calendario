import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";

import './index.css'
import CalendarApp from './CalendarApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <Router>
      <CalendarApp />
    </Router>
  //</React.StrictMode>,
)
