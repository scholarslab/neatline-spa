import React from 'react';
import Exhibits from '../exhibits';
import ExhibitShow from '../exhibits/show';
import ExhibitCreate from '../exhibits/create';
import {Router, Route, Switch} from 'react-router-dom';
import history from '../../history';
import 'semantic-ui-css/semantic.min.css';

const App = () => (
	<main>
	<Router history={history}>
		<Switch>
			<Route exact path={`${window.baseRoute}/`} component={Exhibits}/>
			<Route path={`${window.baseRoute}/add`} component={ExhibitCreate}/>
			<Route path={`${window.baseRoute}/show/:slug`} component={ExhibitShow}/>
		</Switch>
	</Router>
	</main>
);
export default App;
