import React from "react"
import {Route, DefaultRoute} from "react-router"
import App from "containers/App"
import Main from "containers/Main"
import Home from "views/Home";
import About from "views/About";

/**
 * The React Routes for both the server and the client.
 *
 * @class Routes
 */
export default (
  <Route handler={App}>
    <Route handler={Main}>
      <Route name="Home" handler={Home} path="/" />
      <Route name="About" handler={About} path="/quem" />
      {/*<Route name="chapada" handler={Chapada} path="/chapada" />
      <Route name="roteiros" handler={Roteiros} path="/roteiros" />
      <Route name="onde" handler={Onde} path="/onde" />
      <Route name="galeria" handler={Galeria} path="/galeria" /> */}
    </Route>
    {/*<Route name="login" handler={Login} path="/login" />
    <Route name="register" handler={Register} path="/register" />
    <Route name="logout" handler={Logout} path="/logout" />
    <Route name="admin" handler={Admin} path="/admin">
      <Route name="conteudo" handler={AdminConteudo} path="/admin/conteudo" />
      <Route name="pontos" handler={AdminPontos} path="/admin/pontos" />
      <Route name="agenda" handler={AdminAgenda} path="/admin/agenda" />
      <DefaultRoute handler={AdminConteudo} />
    </Route>
    <Route handler={Mapa} name="mapa" path="/mapa" />
    <DefaultRoute handler={Home} />*/}
  </Route>
);
