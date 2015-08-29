import React from 'react';

export default class extends React.Component {

  render() {
    return (
      <div className="home-content">
        <div className="grid_100">
          <div className="hp_first_row">
            <div className="grid_50_h br">
              <Link to='/quem'>
                <h2 className="hp_dest">Quem somos</h2>
              </Link>
              <div className="upcoming_txt">
                <p>{this.props.quemsomos}</p>
                <Link className="more" to='/quem'>Veja mais &gt;</Link>
              </div>
            </div>
            <div className="grid_50_h">
              <Link to='/chapada'>
                <h2 className="hp_dest">Chapada dos Veadeiros</h2>
              </Link>
              <div className="upcoming_txt">
                <p>{this.props.achapada.intro}</p>
                <Link className="more" to='/chapada'>Veja mais &gt;</Link>
              </div>
            </div>
          </div>
        </div>

        <Link to='/mapa'>
          <div className="grid_100 travel">
            <div className="grid_49 br">
              <h2 className="home-mapa-h2">Mapa Interativo</h2>
            </div>
            <div className="grid_49">
              <ul className="travel_guide_hp">
                <li className="bb"><img className="" src="" title="" alt=""></img>Encontre onde comer e dormir</li>
                <li className="bb"><img className="" src="" title="" alt=""></img>Vote nos melhores</li>
                <li className="bb"><img className="" src="" title="" alt=""></img>Descubra as maravilhas da Chapada</li>
                <li><img className="" src="" title="" alt=""></img>Vejas nossas dicas de roteiros</li>
              </ul>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
