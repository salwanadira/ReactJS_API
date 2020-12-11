import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Pegawai from './Components/Pegawai';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to='/pegawai' className='nav-link'>
									Daftar Link
								</Link>
							</li>
						</ul>
					</nav>
					<Switch>
						<Route path='/pegawai'>
							<Pegawai />
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}
export default App;
