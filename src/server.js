import {Server} from 'hapi';
import Router from 'react-router';
import Transmit from 'react-transmit';
import routes from 'views/Routes';
import url from 'url';
import * as reducers from 'reducers';
import { createStore, combineReducers } from 'redux';
const reducer = combineReducers(reducers);
const store = createStore(reducer);

/**
 * Start Hapi server on port 8000.
 */
const server = new Server();
server.connection({port: process.env.PORT || 8000});
server.start(() => {
  console.info('==> ✅  Server is listening');
  console.info('==> 🌎  Go to ' + server.info.uri.toLowerCase());
});

/**
 * Attempt to serve static requests from the public folder.
 */
server.route({
  method: '*',
  path: '/{params*}',
  handler: (request, reply) => {
    reply.file('static' + request.path);
  },
});

/**
 * Endpoint that proxies all GitHub API requests to https://api.github.com.
 */
server.route({
  method: '*',
  path: '/api/github/{path*}',
  handler: {
    proxy: {
      passThrough: true,
      mapUri(request, callback) {
        callback(null, url.format({
          protocol: 'https',
          host: 'api.github.com',
          pathname: request.params.path,
          query: request.query,
        }));
      },
    },
  },
});

/**
 * Catch dynamic requests here to fire-up React Router.
 */
server.ext('onPreResponse', (request, reply) => {
  if (typeof request.response.statusCode !== 'undefined') {
    return reply.continue();
  }

  Router.run(routes, request.path, (Root) => {
    Transmit.renderToString(Root, { initialState: store.getState() })
    .then(({reactString, reactData}) => {
      let output = (
        `<!doctype html>
        <html lang='pt-br'>
          <head>
            <meta charset='utf-8'>
            <title>Guias da Chapada | Time Rupestre</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
            <link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
            <link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">
            <link rel='shortcut icon' href='/favicon.ico'>
            <link rel='stylesheet' type='text/css' href='/dist/main.css'>
          </head>
          <body>
            <div class="loader-container-main">
              <div class="switchbox">
                <div class="switch"></div>
                <div class="switch" id="switch2"></div>
              </div>
            </div>
            <div id='react-root'>${reactString}</div>
          </body>
        </html>`
      );

      const webserver = process.env.NODE_ENV === 'production' ? '' : '//localhost:8080';
      output = Transmit.injectIntoMarkup(output, reactData, [`${webserver}/dist/client.js`]);

      reply(output);
    }).catch((error) => {
      reply(error.stack).type('text/plain').code(500);
    });
  });
});
