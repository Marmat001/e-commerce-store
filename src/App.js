import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/Homepage';
import './sass/app.scss';


function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/hats" component={HatsPage} />
			</Switch>
		</div>
	);
}

export default App;
