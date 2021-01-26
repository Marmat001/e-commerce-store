import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/Homepage';
import ShopPage from './pages/ShopPage';
import './sass/app.scss';

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;
