var React = require('react'),
    Router = require('react-router'),
    , Location = Router.Location;
var routes = require('../client/app/js/routes.jsx');

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler url={'https://guias.firebaseio.com/'} />, document.getElementById('app'));
});