'use strict';

var React = require('react');
var Authenticated = require('./utils/authenticated.jsx');
var Router = require('react-router'),
	Link = Router.Link,
	RouteHandler = Router.RouteHandler;
var Col = require('react-bootstrap').Col,
	Navbar = require('react-bootstrap').Navbar,
	Nav = require('react-bootstrap').Nav,
	NavItem = require('react-bootstrap').NavItem,
	TabbedArea = require('react-bootstrap').TabbedArea,
	TabPane = require('react-bootstrap').TabPane,
	Button = require('react-bootstrap').Button,
	Panel = require('react-bootstrap').Panel,
	PanelGroup = require('react-bootstrap').PanelGroup,
	Accordion = require('react-bootstrap').Accordion,
	Jumbotron = require('react-bootstrap').Jumbotron,
	Tables = require('react-bootstrap').Tables,
	Input= require('react-bootstrap').Input;
var NavItemLink = require('react-router-bootstrap').NavItemLink;	

var Admin = React.createClass({
  mixins: [Authenticated],
  render: function(){
    return (
    	<div className="wrapper" >
    		<Navbar brand="Administração" inverse toggleNavKey={0}>
    			<Nav right eventKey={0}>
                    <NavItemLink to="/"><span className="icono-eye"></span> ver página</NavItemLink>
    				<NavItemLink to="/admin/conteudo"><span className="icono-document"></span> Conteúdo</NavItemLink>
    				<NavItemLink to="/admin/pontos"><span className="icono-locationArrow"></span> Pontos</NavItemLink>
    				<NavItemLink to="/admin/agenda"><span className="icono-calendar"></span> Agenda</NavItemLink>
    				<NavItemLink to="/logout"><span className="icono-power"></span> Logout</NavItemLink>
    			</Nav>
    		</Navbar>
    		<RouteHandler
                slides={this.props.slides}
                quemsomos={this.props.quemsomos}
                achapada={this.props.achapada}
                chamadas={this.props.chamadas}
                atrativos={this.props.atrativos}
                roteiros={this.props.roteiros}
                hospedagem={this.props.hospedagem}
                alimentacao={this.props.alimentacao}
                url={this.props.url} />

    	</div>	

    	);
  }
});

module.exports = Admin;