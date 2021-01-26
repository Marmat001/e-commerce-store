import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/Homepage';
import ShopPage from './pages/ShopPage';
import './sass/app.scss';

function App() {
	return (
		<div>
			<Navigation />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;
