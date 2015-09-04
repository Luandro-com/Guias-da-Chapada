import React from 'react';
import HomeHeader from 'components/HomeHeader';
import HomeMain from 'components/HomeMain';
import HomeFooter from 'components/HomeFooter';

export default class extends React.Component {

  render() {
    const base = this.props.base
    return (
      <div className="outer_wrap">
        <div className="inner_wrap">
          <div id="container">
            <HomeHeader {...base} />
          </div>
          <div className="content">
            <HomeMain {...base} />
            <HomeFooter {...base} />
            <div className="clear"></div>
          </div>
        </div>
      </div>
    );
  }

}
