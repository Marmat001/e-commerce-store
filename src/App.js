import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './sass/app.scss';

import Navigation from './components/Navigation';
import HomePage from './pages/Homepage';
import ShopPage from './pages/ShopPage';
import SignInAndSignUpPage from './pages/SignIn-and-SignUp';

import { auth } from './firebase.utils';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });

			console.log(user);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Navigation currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" component={SignInAndSignUpPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
