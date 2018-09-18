import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Register from './pages/Register'
import Home from './pages/Home'
import Private from './pages/Private'
import Public from './pages/Public'


import AuthService from './services'

class App extends Component {
	render() {
		let auth = new AuthService()

		return (
			<div>
				<Router>
				{ (auth.loggedIn())
					? <Switch>
						<Redirect from="/register" to="/" />
						<Route exact path = "/" component = {Home} />
						<Route path="/public" component={Public} />
						<Route path="/private" component={Private} />
					</Switch>

					: <Switch>
						<Route path="/register" component={Register} />
						<Redirect from="/private" to="/register" />
						<Route path="/public" component={Public} />
						<Route exact path = "/" component = {Home} />
					</Switch>
				}
				</Router>
			</div>
		);
	}
}

export default App;
