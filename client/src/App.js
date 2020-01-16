import React from 'react';
import Header from './components/header/header';
import HomePage from './pages/home';
import AboutPage from './pages/about'
import PortfolioPage from './pages/portfolio'
import Contact from './pages/contact';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path ="/" render={() => <HomePage/>}/>
        <Route exact path ="/about" render={() => <AboutPage/>}/>
        <Route exact path ="/portfolio" render={() => <PortfolioPage/>}/>
        {/* <Route exact path ="/contact" render={() => <Contact/>}/> */}
      </Switch>

    </Router>
  );
}

export default App;
