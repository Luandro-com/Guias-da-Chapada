import React from 'react';

export default class extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      text: [],
      currentTitle: 'Introdução'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {
    if(__CLIENT__){
      let text = [];
      this.props.base.fetch('conteudo/achapada', {
        context: this,
        asArray: true,
        then(data){
          data.map((item, key) => {
            text.push(item)
            this.setState({
              text: text
            })
          })
        }
      });
    }
  }

  handleClick(e) {
    console.log("e.target.value:", e.target.value)
  }

  render() {
    return (
      <div classNameName="chapada">
        <div className="chapada-img">
          <img src="https://ununsplash.imgix.net/photo-1416424500327-a57ace7358b8?fit=crop&fm=jpg&h=800&q=75&w=1050" />
        </div>
        <div className="grid_100">
          <div className="hp_first_row">
            <div className="grid_50_h br">
              <h2 className="hp_dest">{this.state.currentTitle}</h2>
              <div className="upcoming_txt" id="chapada-handler">
                {this.state.text[0]}
              </div>
            </div>
            <div className="grid_50_h">
              <a onClick={this.handleClick.bind(this)} value="O Cerrado"><div className="grid_100 chapada-cerrado">
                <h2 className="hp_dest">O Cerrado</h2>
              </div></a>
              <a onClick={this.handleClick.bind(this)} value="História"><div className="grid_100 chapada-historia">
                <h2 className="hp_dest">História</h2>
              </div></a>
              <a onClick={this.handleClick.bind(this)} value="Cultura"><div className="grid_100 chapada-cultura">
                <h2 className="hp_dest">Cultura</h2>
              </div></a>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
