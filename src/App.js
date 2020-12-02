import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './pages/about/about.js';
import Home from './pages/home/home.js';
import Newjam from './pages/newjam/newjam.js';
import Jams from './pages/jams/jams.js';
import Nav from './pages/nav/nav.js';
import './App.css';


class App extends Component {
	constructor() {
		super();
		this.state = {
			route: 'home'
		}
	}

	render() {
		return (
			<Router>
				<div className="App">
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/about" component={About}/>
							<Route path="/jams" component={Jams}/>
							<Route path="/newjam" component={Newjam}/>
						</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
