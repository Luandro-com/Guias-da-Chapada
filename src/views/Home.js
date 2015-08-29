import React from 'react';
import {createClass} from 're-base';
const base = createClass('https://guias.firebaseio.com/');

export default class extends React.Component {
  componentDidMount(){
    base.fetch('conteudo', {
    context: this,
    asArray: true,
    then(data){
      console.log(data);
    }
  });
  }

  render() {
    console.log("state:", this.state)
    return (
      <h1>Home</h1>
    );
  }

}
