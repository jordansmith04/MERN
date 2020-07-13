import React from 'react';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from '../src/components/navbar.component'
import pictures from '../src/components/pictures.component'
import Planets from '../src/components/planets.component'
import quotes from './components/quote.component';


function App() {
  return (
      <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={Planets} />
      <Route path="/exoplanets" component={Planets} />
      <Route path="/pictures" component={pictures} />
      <Route path="/quotes" component={quotes} />
      </div>
    </Router>
  );
}

export default App;
