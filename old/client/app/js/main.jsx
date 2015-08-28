var React = require('react');
var Router = require('react-router');
var Router = require('react-router')
  , RouteHandler = Router.RouteHandler;
var Header = require('./components/header.jsx');
var Footer = require('./components/footer.jsx');

var Main = React.createClass({
  mixins: [ Router.State ],
    render: function () {
      var name = this.getRoutes().reverse()[0].name;
        return (
          <div>
            <div id="wrapper">
              <div className="right_grass"></div>
              <div className="left_grass"></div>
              <Header />
              <div className="clear"></div>
              <RouteHandler
                slides={this.props.slides}
                quemsomos={this.props.quemsomos}
                achapada={this.props.achapada}
                chamadas={this.props.chamadas} 
                atrativos={this.props.atrativos}
                roteiros={this.props.roteiros}
                hospedagem={this.props.hospedagem}
                alimentacao={this.props.alimentacao} />
              <Footer />
            </div>
            <div className="luandro-footer"><a href="http://luandro.com">desenvolvido por Luandro</a></div>
          </div>  
        );
    }
});

module.exports = Main;