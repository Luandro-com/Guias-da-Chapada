var AdminConteudoSlider = React.createClass({
	getInitialState: function() {
      return {
      	slideImg: '',
      	slideNome: '',
      	itemKey: ''

      };
    },
    handleChange: function(slideNome, e) {
      var change = {};
      change[slideNome] = e.target.value;
      this.setState(change);
    },
	addItem: function () {
		var myFirebaseRef = new Firebase(this.props.url);
		var slideRef = myFirebaseRef.child("conteudo").child("slides");
		slideRef.push({
			img: this.state.slideImg,
		    nome: this.state.slideNome
		});

	},
	deleteItem: function (itemKey) {
		var keyId = {};
		var myFirebaseRef = new Firebase(this.props.url).child("conteudo").child("slides");
		myFirebaseRef.child(itemKey).remove();
		console.log('item '+itemKey+' removed');
		
	},
	updateItem: function () {
		console.log('Update Clicked');
	},
	render: function() {
		var slideItems = _.map(this.props.slides, function (slide, key) {
	  		//get item key
	  		var itemKey = key;
	  		console.log('The key is: '+itemKey);
	  		var deleteClick = this.deleteItem.bind(this, key);
	  		//pass key on click
	  		return (
	  			<tbody key={slide.nome}>
		        	<tr>
			          <td><Button bsStyle="danger" onClick={deleteClick} ><i className="icono-cross"></i></Button></td>
			          <td>placeholder={slide.img}</td>
			          <td>{slide.nome}</td>
		        	</tr>
		        </tbody>
	  			);
	  	}.bind(this));
		return (
			<div className="AdminConteudoSlider">
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
					          	<Button bsStyle="success" onClick={this.addItem} ><i className="icono-check"></i></Button>
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
				</div>
		);
	}
});

module.exports = AdminConteudoSlider;