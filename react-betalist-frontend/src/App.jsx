import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import Regions from './components/Regions';

function App() {
  return (
	  <Router>
	    <div className="App">
				<NavigationBar/>
		    <Route path='/regions' exact component={Regions}/>
	    </div>
	  </Router>
  );
}

export default App;
