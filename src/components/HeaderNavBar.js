import React from 'react';
import {Link} from 'react-router';

export default class extends React.Component {

  render() {
    return (
      <nav>
        <div id="navigation" className="grid_100">
          <div>
            <ul className="word-rotate">
              <Link to="About"><li>Mapa Interativo</li></Link>
              <Link to="About"><li>Quem Somos</li></Link>
              <Link to="About"><li>A Chapada</li></Link>
              <Link to="About"><li>Roteiros e Atrativos</li></Link>
              <Link to="About"><li id="menu-item-32">Onde Fica e Comer</li></Link>
            </ul>
          </div>
          <div className="clear"></div>
        </div>
      </nav>
    );
  }

}
