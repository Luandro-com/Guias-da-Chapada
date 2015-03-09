'use strict';
var React = require('react'),
	Table = require('react-bootstrap').Table,
	Input= require('react-bootstrap').Input,
	Button= require('react-bootstrap').Button,
	TabbedArea = require('react-bootstrap').TabbedArea,
	TabPane = require('react-bootstrap').TabPane,
	_ = require('lodash');
var AdminConteudo = React.createClass({
	 getInitialState: function() {
      return {
      	slideImg: '',
      	slideNome: '',
      	conteudoQuem: '',
      	conteudoChapadaIntro: '',
      	conteudoChapadaCerrado: '',
      	conteudoChapadaCultura: '',
      	conteudoChapadaHistoria: '',
      	conteudoChamadaBlocoAImg: '',
      	conteudoChamadaBlocoATitulo: '',
      	conteudoChamadaBlocoATexto: '',
      	conteudoChamadaBlocoBImg: '',
      	conteudoChamadaBlocoBTitulo: '',
      	conteudoChamadaBlocoBTexto: ''
      };
    },
    handleChange: function(name, e) {
      var change = {};
      change[name] = e.target.value;
      this.setState(change);
    },
	addSlide: function () {
		var myFirebaseRef = new Firebase(this.props.url);
		var slideRef = myFirebaseRef.child("conteudo").child("slides");
		slideRef.push({
			img: this.state.slideImg,
		    nome: this.state.slideNome
		});

	},
	deleteSlides: function (itemKey) {
		var keyId = {};
		var myFirebaseRef = new Firebase(this.props.url).child("conteudo").child("slides");
		myFirebaseRef.child(itemKey).remove();
		console.log('item '+itemKey+' removed');
		
	},
	updateQuem: function () {
		var myFirebaseRef = new Firebase(this.props.url).child("conteudo").child("quemsomos");
		console.log('State: '+this.state.conteudoQuem);
		myFirebaseRef.set(this.state.conteudoQuem);
	},
	updateChapadaIntro: function () {
		var myFirebaseRef = new Firebase(this.props.url).child("conteudo").child("achapada").child("intro");
		console.log('State: '+this.state.conteudoChapadaIntro);
		myFirebaseRef.set(this.state.conteudoChapadaIntro);
	},
	updateChapadaCerrado: function () {
		var myFirebaseRef = new Firebase(this.props.url).child("conteudo").child("achapada").child("cerrado");
		console.log('State: '+this.state.conteudoChapadaCerrado);
		myFirebaseRef.set(this.state.conteudoChapadaCerrado);
	},
	updateChapadaCultura: function () {
		var myFirebaseRef = new Firebase(this.props.url).child("conteudo").child("achapada").child("cultura");
		console.log('State: '+this.state.conteudoChapadaCultura);
		myFirebaseRef.set(this.state.conteudoChapadaCultura);
	},
	updateChapadaHistoria: function () {
		var myFirebaseRef = new Firebase(this.props.url).child("conteudo").child("achapada").child("Historia");
		console.log('State: '+this.state.conteudoChapadaHistoria);
		myFirebaseRef.set(this.state.conteudoChapadaHistoria);
	},
	addChamada: function () {
		var myFirebaseRef = new Firebase(this.props.url);
		var slideRef = myFirebaseRef.child("conteudo").child("chamadas");
		slideRef.push({
			chamada1: {
				img: this.state.conteudoChamadaBlocoAImg,
				titulo: this.state.conteudoChamadaBlocoATitulo, 
				texto: this.state.conteudoChamadaBlocoATexto
			},
			chamada2: {
				img: this.state.conteudoChamadaBlocoBImg, 
				titulo: this.state.conteudoChamadaBlocoBTitulo, 
				texto: this.state.conteudoChamadaBlocoBTexto
			}
		});

	},
	deleteChamadas: function (itemKey) {
		var keyId = {};
		var myFirebaseRef = new Firebase(this.props.url).child("conteudo").child("chamadas");
		myFirebaseRef.child(itemKey).remove();
		console.log('item '+itemKey+' removed');
		
	},
  render: function () {

  	var slideItems = _.map(this.props.slides, function (slide, key) {
  		//get item key
  		var deleteClick = this.deleteSlides.bind(this, key);
  		//pass key on click
  		return (
  			<tbody key={slide.nome}>
	        	<tr>
		          <td><Button bsSize="small" bsStyle="danger" onClick={deleteClick} ><i className="icono-cross"></i></Button></td>
		          <td><img src={slide.img}  height="100px" /></td>
		          <td><h3>{slide.nome}</h3></td>
	        	</tr>
	        </tbody>
  			);
  	}.bind(this));

  	var chamadaBlocos = _.map(this.props.chamadas, function (bloco, key) {
  		var deleteClick = this.deleteChamadas.bind(this, key);
  		var blocoItem = _.map(bloco, function (item, key) {
  			return (
  			<tbody key={key}>
	        	<tr>
		          <td><img src={item.img}  height="100px" /></td>
		          <td><h4>{item.titulo}</h4></td>
		          <td><p>{item.texto}</p></td>
	        	</tr>
	        </tbody>
  			);
  		});
  		return (
  			<div key={key}>
  				<h3><Button bsSize="xsmall" bsStyle="danger" onClick={deleteClick} ><i className="icono-cross"></i></Button> Bloco</h3>
  				<Table responsive>
			    	<thead>
			        	<tr>
				          <th>Imagem</th>
				          <th>Titulo</th>
				          <th>Texto</th>
			        	</tr>
			      	</thead>
			      	<tbody>
  						{blocoItem}
  					</tbody>
  				</Table>		
  			</div>
  			);

  	}.bind(this));
    return (
    	<div className="admin-area row">
    		<div className="col-md-12">
    			<h1>Conteudo</h1>
    			<hr/>
    			<h2>Slider inicial</h2>
    			<Table responsive>
			    	<thead>
			        	<tr>
				          <th></th>
				          <th>Imagem</th>
				          <th>Nome</th>
			        	</tr>
			      	</thead>
			      	<tbody>
			        	<tr>
				          <td>
				          	<Button bsSize="small" bsStyle="success" onClick={this.addSlide} ><i className="icono-check"></i></Button>
				          </td>
				          <td><Input 
				          		placeholder="url da imagem"
				          		type="text" 
				          		ref="slideImg"
				          		value={this.state.slideImg}
            					onChange={this.handleChange.bind(this, 'slideImg')} />
				          	</td>
				          <td><Input 
				          		placeholder="título do slide"
				          		type="text" 
				          		ref="slideNome"
				          		value={this.state.slideNome}
            					onChange={this.handleChange.bind(this, 'slideNome')}/>
				          	</td>
			        	</tr>
			        </tbody>
			      	{slideItems}
			    </Table>
			    <h2>Textos</h2>
			    <div className="row">
			    	<div className="col-md-6 col-sm-12">
			    		<h3>Quem Somos</h3>
			    		<Input 
			    			className="quem-text-area"
			          		type="textarea" 
			          		ref="conteudoQuem"
			          		placeholder={this.props.quemsomos}
	    					onChange={this.handleChange.bind(this, 'conteudoQuem')} />
	    					<Button bsStyle="success" bsSize="small" onClick={this.updateQuem}><i className="icono-check"></i> Salvar</Button>
			    	</div>
			    	<div className="col-md-6 col-sm-12">
			    		<h3>A Chapada</h3>
			    		<TabbedArea defaultActiveKey={1}>
					    	<TabPane eventKey={1} tab="Introdução">
						    	<Input 
					    			className="chapada-text-area"
					          		type="textarea" 
					          		ref="conteudoChapadaIntro"
					          		placeholder={this.props.achapada.intro}
					          		onChange={this.handleChange.bind(this, 'conteudoChapadaIntro')}/>
			    				<Button bsStyle="success" bsSize="small" onClick={this.updateChapadaIntro}><i className="icono-check"></i> Salvar</Button>
					    	</TabPane>
					    	<TabPane eventKey={2} tab="Cerrado">
						    	<Input 
					    			className="chapada-text-area"
					          		type="textarea" 
					          		ref="conteudoChapadaCerrado"
					          		placeholder={this.props.achapada.cerrado}
			    					onChange={this.handleChange.bind(this, 'conteudoChapadaCerrado')}/>
			    				<Button bsStyle="success" bsSize="small" onClick={this.updateChapadaCerrado}><i className="icono-check"></i> Salvar</Button>
					    	</TabPane>
					    	<TabPane eventKey={3} tab="Cultura">
						    	<Input 
					    			className="chapada-text-area"
					          		type="textarea" 
					          		ref="conteudoChapadaCultura"
					          		placeholder={this.props.achapada.cultura}
			    					onChange={this.handleChange.bind(this, 'conteudoChapadaCultura')}/>
			    				<Button bsStyle="success" bsSize="small" onClick={this.updateChapadaCultura}><i className="icono-check"></i> Salvar</Button>
					    	</TabPane>
					    	<TabPane eventKey={4} tab="História">
						    	<Input 
					    			className="chapada-text-area"
					          		type="textarea" 
					          		ref="conteudoChapadaHistoria"
					          		placeholder={this.props.achapada.historia}
			    					onChange={this.handleChange.bind(this, 'conteudoChapadaHistoria')}/>
			    				<Button bsStyle="success" bsSize="small" onClick={this.updateChapadaHistoria}><i className="icono-check"></i> Salvar</Button>
					    	</TabPane>
					    </TabbedArea>
			    	</div>
			    </div>
			    <h2>Chamadas</h2>
		    		<div className="row chamada-wrapper">
		    			<h3><Button bsStyle="success" bsSize="xsmall" onClick={this.addChamada}><i className="icono-check"></i></Button> Adicionar novo bloco</h3>
		    			<Table responsive>
		    				<thead>
					        	<tr>
						          <th>Imagem</th>
						          <th>Titulo</th>
						          <th>Texto</th>
					        	</tr>
					      	</thead>
					      	<tbody>
					        	<tr>
						          <td><Input 
						          	placeholder="url da imagem"
					          		type="text" 
					          		ref="conteudoChamadaBlocoAImg"
			    					onChange={this.handleChange.bind(this, 'conteudoChamadaBlocoAImg')}/></td>
						          <td><Input
						          		placeholder="titulo" 
						          		type="text" 
						          		ref="conteudoChamadaBlocoATitulo"
				    					onChange={this.handleChange.bind(this, 'conteudoChamadaBlocoATitulo')}/></td>
						          <td><Input 
						          		placeholder="texto da chamada"
						          		type="textarea" 
						          		ref="conteudoChamadaBlocoATexto"
				    					onChange={this.handleChange.bind(this, 'conteudoChamadaBlocoATexto')}/></td>
					        	</tr>
					        	<tr>
						          <td><Input
						          	placeholder="url da imagem" 
					          		type="text" 
					          		ref="conteudoChamadaBlocoBImg"
			    					onChange={this.handleChange.bind(this, 'conteudoChamadaBlocoBImg')}/></td>
						          <td><Input 
						          		placeholder="titulo"
						          		type="text" 
						          		ref="conteudoChamadaBlocoBTitulo"
				    					onChange={this.handleChange.bind(this, 'conteudoChamadaBlocoBTitulo')}/></td>
						          <td><Input 
						          		placeholder="texto da chamada"
						          		type="textarea" 
						          		ref="conteudoChamadaBlocoBTexto"
				    					onChange={this.handleChange.bind(this, 'conteudoChamadaBlocoBTexto')}/></td>
					        	</tr>
					        </tbody>
		    			</Table>
		    		</div>
			    {chamadaBlocos}
    		</div>	
    	</div>);
  }
});

module.exports = AdminConteudo;