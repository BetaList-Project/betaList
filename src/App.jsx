import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NavigationBar from './components/navbar/NavigationBar';
import Regions from './components/regions/Regions';
import Newsletter from './components/newsletter/Newsletter';
import MarketsPage from './components/markets/Markets.jsx';
import DTecnology from './components/markets/marketComponents/DTechnology';

function App() {
  return (
	  <Router>
	    <div classNameName="App">
			<NavigationBar/>
			<Switch>
				<Route path='/' exact>
					<Newsletter/>
				</Route>
		    	<Route path='/regions' exact>
					<Regions />
				</Route>	
				<Route path='/newsletter' exact>
					<Newsletter />
				</Route>
				<Route path='/markets' exact>
					<MarketsPage />
				</Route>
				<Route path='/markets/marketComponents' exact>
					<DTecnology />
				</Route>		
	    	</Switch>
		</div>
	  </Router>
  );
}

export default App;
