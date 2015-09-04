import React from 'react';

export default class extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      text: "Carregando..."
    }
  }

  componentWillMount() {
      if(__CLIENT__){
        this.props.base.fetch('conteudo/quemsomos', {
          context: this,
          asArray: true,
          then(data){
            this.setState({
              text: data
            })
          }
        });
      }

  }

  render() {
    return (
      <div className="quem">
        <div className="outer_wrap">
          <div className="inner_wrap">
            <div className="quem-img">
              <img src="https://unsplash.imgix.net/photo-1413977886085-3bbbf9a7cf6e?fit=crop&fm=jpg&h=700&q=75&w=1050" />
            </div>
            <div className="grid_100">
              <div className="hp_first_row">
                <div className="grid_50_h br">
                  <a href="">
                    <h2 className="hp_dest">Quem somos</h2>
                  </a>
                  <div className="upcoming_txt">
                    <p>{this.state.text}</p>
                  </div>
                </div>
                <div className="grid_50_h">
                  <div className="grid_100">
                    <div className="grid_33 quem-pic">
                      <img src="dist/imgs/slide.jpg" />
                    </div>
                    <div className="grid_33 quem-pic">
                      <img src="dist/imgs/slide.jpg" />
                    </div>
                    <div className="grid_33 quem-pic-right">
                      <img src="dist/imgs/slide.jpg" />
                    </div>
                  </div>
                  <div className="grid_100">
                    <div className="grid_33 quem-pic">
                      <img src="dist/imgs/slide.jpg" />
                    </div>
                    <div className="grid_33 quem-pic">
                      <img src="dist/imgs/slide.jpg" />
                    </div>
                    <div className="grid_33 quem-pic-right">
                      <img src="dist/imgs/slide.jpg" />
                    </div>
                  </div>
                  <div className="grid_100">
                    <div className="grid_33 quem-pic">
                      <img src="dist/imgs/slide.jpg" />
                    </div>
                    <div className="grid_33 quem-pic">
                      <img src="dist/imgs/slide.jpg" />
                    </div>
                    <div className="grid_33 quem-pic-right">
                      <img src="dist/imgs/slide.jpg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
