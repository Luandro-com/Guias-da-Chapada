'use strict';

var React = require('react'),
	_ = require('lodash'),
	Table = require('react-bootstrap').Table,
	Input= require('react-bootstrap').Input,
	Button= require('react-bootstrap').Button;
var AdminPontosAtracoes = React.createClass({
	mixins: [React.addons.LinkedStateMixin],
	getInitialState: function() {
		return {
			atrativoImg: '',
			atrativoTitulo: '',
			atrativoLat: '',
			atrativoLng: '',
			atrativoInfoDificuldade: 'facil',
			atrativoInfoCusto: 'livre',
			atrativoInfoAcesso: 'caminhada',
			atrativoInfoEstrutura: 'seminfra',
			atrativoInfoDuracao: '1/3',
			atrativoDescricao: ''
		};
	},
	addAtrativos: function () {
    	console.log(this.state.atrativoTitulo+" adicionado");
		var myFirebaseRef = new Firebase(this.props.url);
		var slideRef = myFirebaseRef.child("mapa").child("atrativos");
		slideRef.push({
			img: this.state.atrativoImg,
			titulo: this.state.atrativoTitulo,
			lat: this.state.atrativoLat,
			lng: this.state.atrativoLng,
			info: {
				dificuldade: this.state.atrativoInfoDificuldade,
				custo: this.state.atrativoInfoCusto,
				acesso: this.state.atrativoInfoAcesso,
				estrutura: this.state.atrativoInfoEstrutura
			},
			duracao: this.state.atrativoInfoDuracao,
			descricao: this.state.atrativoDescricao
		});
	},	
	deleteAtrativos: function (itemKey) {
		var keyId = {};
		var myFirebaseRef = new Firebase(this.props.url).child("mapa").child("atrativos");
		var r = confirm("Tem certeza que quer deletar esse item?");
		if (r == true) {
		    myFirebaseRef.child(itemKey).remove();
			console.log('item '+itemKey+' removed');
		}
	},
	render: function() {
		var atrativos = _.map(this.props.atrativos, function (item, key) {
	  		var deleteClick = this.deleteAtrativos.bind(this, key);
	  		var infos = _.map(item.info, function(info, key) {
	  			return <span key={key}>{info}, </span> 
	  		});
	  		return (
	  			<tr key={key}>
	  				<th><Button bsSize="xsmall" bsStyle="danger" onClick={deleteClick} ><i className="icono-cross"></i></Button></th>
					<th><img height="auto" width="200" src={item.img} /></th>
					<th><h4>{item.titulo}</h4></th>
					<th>{infos}</th>
					<th><pre>{item.lat}, {item.lng}</pre></th>
					<th>{item.duracao}</th>
					<th className="admin-descricao">{item.descricao}</th>
				</tr>
	  			);
	  	}.bind(this));
		return (
		<div className="AdminPontosAtracoes">
			<h3>Adicionar novo atrativo</h3>
				<Table>
					<tbody>
						<tr>
							<th><Input valueLink={this.linkState('atrativoImg')} type="text" placeholder="url da imagem" /></th>
							<th><Input valueLink={this.linkState('atrativoTitulo')} type="text" placeholder="titulo" /></th>
							<th><Input valueLink={this.linkState('atrativoLat')} type="text" placeholder="latitude" /></th>
							<th><Input valueLink={this.linkState('atrativoLng')} type="text" placeholder="longitude" /></th>
						</tr>
						<tr>
							<th>
								<Input valueLink={this.linkState('atrativoInfoDificuldade')} type="select" label="dificuldade">
									<option value="facil">fácil</option>
									<option value="medio">médio</option>
									<option value="dificil">difícil</option>
								</Input>			
							</th>
							<th>
								<Input valueLink={this.linkState('atrativoInfoCusto')} type="select" label="custo">
									<option value="livre">grátis</option>
									<option value="custo1">R$5,00 a R$10,00</option>
									<option value="custo2">R$11,00 a R$20,00</option>
									<option value="custo3">R$25,00 ou mais</option>
								</Input>			
							</th>
							<th>
								<Input valueLink={this.linkState('atrativoInfoAcesso')} type="select" label="acesso">
									<option value="caminhada">caminhada</option>
									<option value="carro">carro</option>
									<option value="4x4">4x4</option>
								</Input>			
							</th>
							<th>
								<Input valueLink={this.linkState('atrativoInfoEstrutura')} type="select" label="estrutura">
									<option value="seminfra">nada</option>
									<option value="restaurante">restaurante</option>
									<option value="camping">camping</option>
									<option value="camping-restaurante">camping e restaurante</option>
									<option value="pousada">pousada</option>
								</Input>			
							</th>
						</tr>
					</tbody>
				</Table>
				<hr/>
				<Input valueLink={this.linkState('atrativoInfoDuracao')} type="select" label="Duração média do passeio">
					<option value="1/3">1/3 de dia</option>
					<option value="1/2">meio dia</option>
					<option value="1">1 dia</option>
					<option value="2">2 dias</option>
					<option value="3">3 dias</option>
					<option value="4">4 dias</option>
					<option value="5">5 dias</option>
					<option value="6">6 dias</option>
					<option value="7">1 semana</option>
				</Input>
				<Input valueLink={this.linkState('atrativoDescricao')} type="textarea" label="Descrição" placeholder="Localizado a 3Km de Alto Paraíso..."/>
				<Button bsSize="small" bsStyle="success" onClick={this.addAtrativos} ><i className="icono-check"></i> Salvar</Button>
				<br/>
			<h3>Lista de atrativos</h3>	
			<Table responsive>
				<thead>
					<tr>
						<th></th>
						<th>Imagem</th>
						<th>Titulo</th>
						<th>Informações</th>
						<th>Latitude, Longitude</th>
						<th>Duração</th>
						<th>Descrição</th>
					</tr>
				</thead>
				<tbody>
					{atrativos}
				</tbody>
			</Table>
		</div>
		);
	}
});

module.exports = AdminPontosAtracoes;