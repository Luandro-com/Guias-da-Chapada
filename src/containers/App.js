import React from 'react';
import 'isomorphic-fetch';
import {RouteHandler} from 'react-router';
import Transmit from 'react-transmit';
import { createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';
import * as reducers from '../reducers/index';
import {createClass} from 're-base';
const base = createClass('https://guias.firebaseio.com/');

class AppContainer extends React.Component {
  componentWillMount() {
    if (__CLIENT__) {
      document.getElementsByClassName("loader-container-main")[0].remove();
    }
  }

  render() {
    const reducer = combineReducers(reducers);
    const store = createStore(reducer, this.props.initialState);
    return (
      <Provider store={store}>
        {() =>
          <div className="map-container">
            <RouteHandler base={base} />
          </div>
        }
      </Provider>
    );
  }
}
export default Transmit.createContainer(AppContainer, {});
