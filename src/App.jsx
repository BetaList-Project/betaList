import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NavigationBar from './components/navbar/NavigationBar';
import Regions from './components/regions/Regions';
import Newsletter from './components/newsletter/Newsletter';

function App() {
  return (
	  <Router>
	    <div className="App">
			<NavigationBar/>
			<Switch>
		    	<Route path='/regions' exact>
					<Regions />
				</Route>	
				<Route path='/newsletter' exact>
					<Newsletter />
				</Route>	
	    	</Switch>
		</div>
	  </Router>
  );
}

export default App;
