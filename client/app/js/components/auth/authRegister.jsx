var React = require('react');
var firebaseUtils = require('./utils/firebaseUtils.jsx');
var Authenticated = require('./utils/authenticated.jsx');
var Router = require('react-router');

var Register = React.createClass({
  mixins: [ Router.Navigation, Authenticated ],
  handleSubmit: function(e){
    e.preventDefault();
    var email = this.refs.email.getDOMNode().value;
    var pw = this.refs.pw.getDOMNode().value;
    firebaseUtils.createUser({email: email, password: pw}, function(result){
      if(result){
        this.replaceWith('admin');
      }
    }.bind(this));
  },
  render: function(){
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label> Email </label>
            <input className="form-control" ref="email" placeholder="Email"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input ref="pw" type="password" className="form-control" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    )
  }
});

module.exports = Register;