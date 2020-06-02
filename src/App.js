import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import HOC from './component/hoc';
import Index from './component/Index';
import Series from './component/Series';
import Movies from './component/Movies';

class App extends Component {
	
	render() {

		return (
			<Switch>
				<HOC>
					<Route path='/series' exact component={Series} />
					<Route path='/movies' exact component={Movies} />
					<Route path='/' exact component={Index} />
				</HOC>
			</Switch>	
			
		)
	}
};
  
export default App ;