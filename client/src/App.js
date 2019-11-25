import React from 'react';
import Header from './components/header/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header></Header>
    </Router>
  );
}

export default App;
