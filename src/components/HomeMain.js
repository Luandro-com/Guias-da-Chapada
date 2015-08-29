import React from 'react';
import {Link} from 'react-router';

export default class extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      header: [
        {
          title: "Quem somos",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis dolorum distinctio, assumenda fugit in magnam, nesciunt unde ducimus quae, dolore aspernatur quasi. Dolores aliquid, doloremque pariatur voluptate asperiores voluptatem similique.",
          path: "About"
        },
        {
          title: "Chapada dos Veadeiros",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis dolorum distinctio, assumenda fugit in magnam, nesciunt unde ducimus quae, dolore aspernatur quasi. Dolores aliquid, doloremque pariatur voluptate asperiores voluptatem similique.",
          path: "About"
        }
      ]
    }
  }

  render() {
    return (
      <div className="home-content">
        <div className="grid_100">
          <header className="hp_first_row">
            {this.state.header.map((info, key) => {
              return <Header {...info} key={key} index={key} />
            })}
          </header>
          <Nav />
        </div>
      </div>

    );
  }
}

class Header extends React.Component {

  render() {
    const {index, title, text, path} = this.props;
    const shortDescription = text.split(/\s+/).slice(0,20).join(" ")+"...";
    let containerStyle;
    (index === 0) ? containerStyle = "grid_50_h br" : containerStyle = "grid_50_h";

    return (
      <div className={containerStyle}>
        <Link to={path}>
          <h2 className="hp_dest">{title}</h2>
        </Link>
        <div className="upcoming_txt">
          <p>{shortDescription}</p>
          <Link className="more" to={path}>Veja mais &gt;</Link>
        </div>
      </div>
    )
  }

}
class Nav extends React.Component {

  render() {
    return (
      <Link to='/about'>
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
    )
  }

}
