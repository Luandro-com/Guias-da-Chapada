import React from 'react';
import {Route} from 'react-router';
import AppContainer from 'containers/AppContainer';
import Home from 'views/Home';

/**
 * The React Routes for both the server and the client.
 *
 * @class Routes
 */
export default (
	<Route handler={AppContainer}>
		<Route path="/" name="home" handler={Home} />
	</Route>
);
