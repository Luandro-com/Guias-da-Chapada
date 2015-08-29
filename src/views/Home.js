import React from 'react';
import HomeHeader from 'components/HomeHeader';
import HomeMain from 'components/HomeMain';
// import HomeFooter from 'components/HomeFooter';

export default class extends React.Component {

  render() {
    return (
      <div className="outer_wrap">
        <div className="inner_wrap">
          <div id="container">
            <HomeHeader />
          </div>
          <div className="content">
            <HomeMain />
            {/* <HomeFooter /> */}
            <div className="clear"></div>
          </div>
        </div>
      </div>
    );
  }

}
