import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// https://stackoverflow.com/questions/74233860/how-to-use-react-bootstrap-in-vitejs
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
