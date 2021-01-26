import React from 'react';
import Homepage from './pages/Homepage';
import './sass/app.scss';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Homepage />
			</div>
		);
	}
}

export default App;
