'use strict';

var React = require('react'),
	_ = require('lodash'),
	Table = require('react-bootstrap').Table,
	Input= require('react-bootstrap').Input,
	Button= require('react-bootstrap').Button;
var AdminPontos = React.createClass({
	mixins: [React.addons.LinkedStateMixin],
	getInitialState: function() {
		return {
			atrativoImg: '',
			atrativoTitulo: '',
			atrativoLat: '',
			atrativoLng: '',
			atrativoInfoDificuldade: '',
			atrativoInfoCusto: '',
			atrativoInfoAcesso: '',
			atrativoInfoEstrutura: '',
			atrativoDescricao: ''
		};
	},
	handleChange: function(name, e) {
      var change = {};
      change[name] = e.target.value;
      this.setState(change);
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
			descricao: this.state.atrativoDescricao
		});
	},	
	deleteAtrativos: function (itemKey) {
		var keyId = {};
		var myFirebaseRef = new Firebase(this.props.url).child("mapa").child("atrativos");
		myFirebaseRef.child(itemKey).remove();
		console.log('item '+itemKey+' removed');
	},

  render: function () {
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
				<th>{item.descricao}</th>
			</tr>
  			);
  	}.bind(this));
  	
    return (
    	<div className="admin-area row">
    		<div className="col-md-12">
    		<h1>Pontos</h1>
    		<hr/>
    		<h2>Atrativos</h2>
    			<h3>Adicionar novo atrativo</h3>
    				<Table>
    					<tbody>
    						<tr>
    							<th><Input valueLink={this.linkState('atrativoImg')} type="text" placeholder="url da imagem" /></th>
    							<th><Input ref="atrativoTitulo" onChange={this.handleChange.bind(this, 'atrativoTitulo')} type="text" placeholder="titulo" /></th>
    							<th><Input ref="atrativoLat" onChange={this.handleChange.bind(this, 'atrativoLat')} type="text" placeholder="latitude" /></th>
    							<th><Input ref="atrativoLng" onChange={this.handleChange.bind(this, 'atrativoLng')} type="text" placeholder="longitude" /></th>
    						</tr>
    						<tr>
    							<th>
    								<Input ref="atrativoInfoDificuldade" onChange={this.handleChange.bind(this, 'atrativoInfoDificuldade')} type="select" label="dificuldade">
    									<option value="facil">fácil</option>
        								<option value="medio">médio</option>
        								<option value="dificil">difícil</option>
        							</Input>			
    							</th>
    							<th>
    								<Input ref="atrativoInfoCusto" onChange={this.handleChange.bind(this, 'atrativoInfoCusto')} type="select" label="custo">
    									<option value="gratis">grátis</option>
        								<option value="$">R$5,00 a R$10,00</option>
        								<option value="$$">R$11,00 a R$20,00</option>
        								<option value="$$$">R$25,00 ou mais</option>
        							</Input>			
    							</th>
    							<th>
    								<Input ref="atrativoInfoAcesso" onChange={this.handleChange.bind(this, 'atrativoInfoAcesso')} type="select" label="acesso">
    									<option value="caminhada">caminhada</option>
        								<option value="carro">carro</option>
        								<option value="4x4">4x4</option>
        							</Input>			
    							</th>
    							<th>
    								<Input ref="atrativoInfoEstrutura" onChange={this.handleChange.bind(this, 'atrativoInfoEstrutura')} type="select" label="estrutura">
    									<option value="nada">nada</option>
    									<option value="restaurante">restaurante</option>
        								<option value="camping">camping</option>
        								<option value="pousada">pousada</option>
        							</Input>			
    							</th>
    						</tr>
    					</tbody>
    				</Table>
    				<hr/>
    				<Input ref="atrativoDescricao" onChange={this.handleChange.bind(this, 'atrativoDescricao')} type="textarea" placeholder="descrição"/>
    				<Button bsSize="small" bsStyle="success" onClick={this.addAtrativos} ><i className="icono-check"></i> Salvar</Button>
    				<br/>
    			<Table responsive>
    				<thead>
    					<tr>
    						<th></th>
    						<th>Imagem</th>
    						<th>Titulo</th>
    						<th>Informações</th>
    						<th>Latitude, Longitude</th>
    						<th>Descrição</th>
    					</tr>
    				</thead>
    				<tbody>
    					{atrativos}
    				</tbody>
    			</Table>
    		<h2>Roteiros</h2>
    		<h2>Alimentação</h2>
    		<h2>Hospedagem</h2>
    		</div>
    	</div>	
    		);
  }
});

module.exports = AdminPontos;