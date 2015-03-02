'use strict';
var Router = require('react-router');
var authLib = require('../auth.jsx'),
    Authentication = require('../auth.jsx').Authentication;
var ReactBootstrap = require('react-bootstrap'),
    TabbedArea = require('react-bootstrap').TabbedArea, 
    TabPane = require('react-bootstrap').TabPane;
var React= require('react'), 
  Admin = React.createClass({
  mixins: [ Authentication ],

  render: function () {
    return (
      <div>
        <TabbedArea defaultActiveKey={2}>
          <TabPane eventKey={1} tab="Conteúdo">
            <p></p>
          </TabPane>
          <TabPane eventKey={2} tab="Pontos do mapa">
            <h1>Pontos do mapa</h1>
          </TabPane>
          <TabPane eventKey={3} tab="Agenda">
            <p>Aqui vai a agenda</p>
          </TabPane>
        </TabbedArea>
      </div>
    );
  }
});

module.exports = Admin;