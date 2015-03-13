'use strict';

var React = require('react'),
	_ = require('lodash'),
	OverlayTrigger = require('react-bootstrap').OverlayTrigger,
	Tooltip = require('react-bootstrap').Tooltip, 
	RoteirosItem = React.createClass({
	render: function() {
		var infoItems = _.map(this.props.info, function(info, key) {
			var tooltip = "Ajuda";
			switch (info) {
				case "facil": 
					tooltip = "caminhadas leves";
					break;
				case "medio": 
					tooltip = "caminhadas de nível médio";
					break;
				case "dificil": 
					tooltip = "caminhadas pesadas";
					break;
				case "caminhada": 
					tooltip = "distância pode ser percorrida a pé";
					break;
				case "carro": 
					tooltip = "acesso com veículos de passeio";
					break;	
				case "4x4": 
					tooltip = "acesso somente com veículos 4x4";
					break;
				case "livre": 
					tooltip = "acesso gratuíto";
					break;
				case "custo1": 
					tooltip = "custo de entrada até R$10,00";
					break;
				case "custo2": 
					tooltip = "custo de entrada até R$20,00";
					break;
				case "custo3": 
					tooltip = "custo de entrada mais de R$20,00";
					break;
				case "restaurante": 
					tooltip = "possui opção de alimentação";
					break;
				case "camping": 
					tooltip = "com área para camping";
					break;
				case "camping-restaurante": 
					tooltip = "área de camping e alimentação";
					break;
				case "pousada": 
					tooltip = "estrutura completa com hospedagem";
					break;							
			}
			var infoIco = "roteiros-item-icons i-"+info;
			
			return (
				<OverlayTrigger key={key} placement="top" overlay={<Tooltip>{tooltip}</Tooltip>}>
					<li><div className={infoIco} ></div></li>
				</OverlayTrigger>
				);
		});
		var fb = "http://guiasdachpada.com/"+this.props.titulo;
		return (
				<div className="roteiros-item-wrapper">
					<div className="roteiros-item">
						<h3>{this.props.titulo} </h3>
						<div className="roteiros-img">
							<img src={this.props.img} />
							<p><span className="roteiros-dia">{this.props.duracao}</span> DIA</p>
							<figcaption>
								<div className="roteiros-box">
									<p>{this.props.descricao}</p>
									<div className="roteiros-botao-mapa">ver no mapa</div>
								</div>
								<div className="roteiros-botao-duracao">{this.props.duracao} diarias</div>
								<div className="roteiros-botao-agendar">Agendar</div>								
							</figcaption>
						</div>
						<ul>
							{infoItems}	
							<li><div className="fb-like" data-href={fb} data-layout="button" data-action="like" data-show-faces="true" data-share="false"></div></li>
						</ul>
					</div>
				</div>
		);
	}
});

module.exports = RoteirosItem;