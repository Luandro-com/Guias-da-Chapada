'use strict';

//React
var React = require('react');
window.React = React;
//Superagent
var request = require('superagent');
//Material UI
// var mui = require('material-ui-sass');
//Router
var Router = require('react-router')
  , RouteHandler = Router.RouteHandler
  , Route = Router.Route;
//ReactBootstrap
var ReactBootstrap = require('react-bootstrap')
  , Nav = ReactBootstrap.Nav
  , Carousel = require('react-bootstrap').Carousel
  , CarouselItem = require('react-bootstrap').CarouselItem; 
//ReactBoostrapRouter
var ReactRouterBootstrap = require('react-router-bootstrap')
  , NavItemLink = ReactRouterBootstrap.NavItemLink
  , ButtonLink = ReactRouterBootstrap.ButtonLink;
//Meus componentes
var Header = require('./components/header.jsx');
var Home = require('./components/home.jsx');
var Footer = require('./components/footer.jsx');



React.render(<Header />, document.getElementById('header'));
React.render(<Home />, document.getElementById('home'));
React.render(<Footer />, document.getElementById('footer'));

/*
- NavBar
-- Agenda
-- Langs
-- Menu Itens
- Home
-- Slider
-- Slider atrações
-- Slider galeria
- Footer
-- Picture List
--- Picture
- Tabs a Chapada
- Roteiros
-- Info boxes c/ tooltips
*/