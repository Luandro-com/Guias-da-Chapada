import React from 'react';

export default class extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      some: "thing"
    }
  }

  render() {
    return (
      <h1>CONTENT</h1>
    );
  }

}
