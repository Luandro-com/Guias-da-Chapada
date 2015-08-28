'use strict';

var React = require('react');
var AdminPontosAtracoes = require('./adminPontosAtracoes.jsx');

var AdminPontos = React.createClass({
	render: function () {
		return (
			<div className="admin-area row">
				<div className="col-md-12">
				<h1>Pontos</h1>
				<hr/>
				<h2>Atrativos</h2>
					<AdminPontosAtracoes url={this.props.url} atrativos={this.props.atrativos} />
				<h2>Roteiros</h2>
				<h2>Alimentação</h2>
				<h2>Hospedagem</h2>
				</div>
			</div>	
				);
		}
	});

module.exports = AdminPontos;