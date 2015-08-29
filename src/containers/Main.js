import React from 'react';
import {RouteHandler} from 'react-router';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

export default class extends React.Component {

  render() {
    return (
      <div>
        <div id="wrapper">
          <div className="right_grass"></div>
          <div className="left_grass"></div>
          {/* <Header /> */}
          <div className="clear"></div>
          <RouteHandler />
          {/* <Footer /> */}
        </div>
        <div className="luandro-footer"><a href="http://luandro.com">desenvolvido por Luandro</a></div>
      </div>
    );
  }
}
