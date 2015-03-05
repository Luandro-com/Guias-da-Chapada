var React = require('react');
var Router = require('react-router');
var Main = React.createClass({
  mixins: [ Router.State ],
    loadData: function () {
      var myFirebaseRef = new Firebase("https://guias.firebaseio.com/");
       myFirebaseRef.child("conteudo").on("value", function(snapshot) {
        var quemsomos = snapshot.val().quemsomos,
            achapadaIntro = snapshot.val().achapada.intro,
            achapadaCerrado = snapshot.val().achapada.cerrado,
            achapadaHistoria = snapshot.val().achapada.historia,
            achapadaCultura = snapshot.val().achapada.cultura,
            homeSlide1 = snapshot.val().Slides.slide1,
            homeSlide2 = snapshot.val().Slides.slide2,
            homeSlide3 = snapshot.val().Slides.slide3,
            chamadas = snapshot.val().chamadas;

        this.setState({
        homeSlide1 : homeSlide1,
        homeSlide2 : homeSlide2,
        homeSlide3 : homeSlide3,
        quemsomos : quemsomos,
        achapadaIntro : achapadaIntro,
        achapadaCerrado : achapadaCerrado,
        achapadaHistoria : achapadaHistoria,
        achapadaCultura : achapadaCultura,
        chamadas : chamadas
      });
      }.bind(this));
    },
    getInitialState: function() {
      this.loadData();
      return {
        quemsomos : "...",
        achapadaIntro : "...",
        homeSlide1 : {"img":"https://unsplash.imgix.net/photo-1415226481302-c40f24f4d45e?fit=crop&fm=jpg&h=800&q=75&w=1050", "nome":"Guias da Chapada"},
        homeSlide2 : {"img":"https://unsplash.imgix.net/photo-1415226481302-c40f24f4d45e?fit=crop&fm=jpg&h=800&q=75&w=1050", "nome":"Guias da Chapada"},
        homeSlide3 : {"img":"https://unsplash.imgix.net/photo-1415226481302-c40f24f4d45e?fit=crop&fm=jpg&h=800&q=75&w=1050", "nome":"Guias da Chapada"},
        chamadas : {"img":"https://unsplash.imgix.net/photo-1415226481302-c40f24f4d45e?fit=crop&fm=jpg&h=800&q=75&w=1050", "titulo":"...", "texto": "..."}
      };
    },

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
                homeSlide1={this.state.homeSlide1}  
                homeSlide2={this.state.homeSlide2}
                homeSlide3={this.state.homeSlide3}
                achapadaIntro={this.state.achapadaIntro} 
                achapadaCerrado={this.state.achapadaCerrado}
                achapadaHistoria={this.state.achapadaHistoria}
                achapadaCultura={this.state.achapadaCultura}
                quemsomos={this.state.quemsomos}
                chamadas={this.state.chamadas} />
              <Footer />
            </div>
            <div className="luandro-footer"><a href="http://luandro.com">desenvolvido por Luandro</a></div>
          </div>  
        );
    }
});

module.exports = Main;