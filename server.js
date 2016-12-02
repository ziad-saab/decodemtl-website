/* global __DEV__, __PROD__ */
// Define some global constants. The client defines the opposite values
global.__CLIENT__ = false;
global.__SERVER__ = true;

import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {match} from 'react-router';
import {ReduxAsyncConnect, loadOnServer} from 'redux-connect';
import createHistory from 'react-router/lib/createMemoryHistory';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';
import Helmet from 'react-helmet';
import morgan from 'morgan';
import favicon from 'serve-favicon';

import makeStore from './src/redux/store';
import createRoutes from './src/routes';

// Le Français
import {addLocaleData} from 'react-intl';
import frLocaleData from 'react-intl/locale-data/fr';
addLocaleData(frLocaleData);

// API
import serverApi from './server-api';

// Cache
const PAGE_CACHE_TIME = 5 * 60 * 60; // 5 hours

export default function server(parameters) {
  const app = express();
  app.set('view engine', 'ejs');
  app.disable('x-powered-by');

  if (__PROD__) {
    app.use('/assets', express.static(global.__ROOT__ + '/build/assets'));
  }

  if (__DEV__) {
    require('longjohn');
  }

  app.locals.noIndex = !!process.env.NOINDEX;

  // Favicon!
  app.use(favicon(global.__ROOT__ + '/src/assets/images/favicons/favicon.ico'));

  // Logs
  app.use(morgan('combined'));

  // Tiny API, mostly for mailing
  app.use('/api', serverApi);

  // Static files
  app.use('/downloads', express.static(global.__ROOT__ + '/downloads'));

  /*
    This will be the most visited route of our application: it responds to all paths.
    For each request that comes to our web server, we will create a new store.
    Then, using the match function of react-router, we will receive the tree of components
    to render for the current request URL. <Redirect> routes will result in HTTP 302 responses.
    Regular routes will result in a call to the loadOnServer function from redux-connect. This
    call will return a Promise that is resolved when all the Promises specified in all the
    wrapped components are resolved. For an example of this, see how the <Home> component loads its data.
  */
  app.get('/*', (req, res) => {
    const memHistory = createHistory(req.originalUrl);
    const store = makeStore(memHistory);
    const history = syncHistoryWithStore(memHistory, store);
    const routes = createRoutes(store);

    match({ history, routes, location: req.originalUrl }, (err, redirectLocation, renderProps) => {
      if (redirectLocation) {
        res.redirect(301, redirectLocation.pathname + redirectLocation.search);
      } else if (err) {
        console.error('ROUTER ERROR:', err);
        res.status(500);
      } else if (renderProps) {
        loadOnServer({...renderProps, store})
        .then(() => {
          // Check if there's a 404 after loading data on server
          const state = store.getState();
          if (state.ssr && state.ssr.error404) {
            res.status(404);
          }

          var html;
          try {
            html = renderToString(
              <Provider store={store} key="provider">
                <ReduxAsyncConnect {...renderProps} />
              </Provider>
            );
          }
          catch(e) {
            console.error(e.stack);
            html = '';
          }

          const head = Helmet.rewind();
          const title = head.title.toString();
          const meta = head.meta.toString();
          const link = head.link.toString();

          const chunks = parameters.chunks();
          const appJs = chunks && chunks.javascript && chunks.javascript.main;
          const appCss = chunks && chunks.styles && chunks.styles.main;

          // Cache page for 5 hours in prod
          if (__PROD__) {
            res.set('cache-control', `public, max-age=${PAGE_CACHE_TIME}`);
          }

          res.render('index', {html, title, meta, link, store, appCss, appJs});
        })
        .catch(err => {
          console.error(err.stack);
          res.status(500);
          if (__DEV__) {
            res.send(err.stack);
          }
          else {
            res.send('Server Error');
          }
        });
      } else {
        res.status(404).send('Not Found');
      }
    });

  });

  const server = require('http').createServer(app);
  server.listen(process.env.PORT || 4200, process.env.IP || '0.0.0.0', function(err) {
    if (err) {
      console.error(err.stack);
    }
    else {
      console.log("Server listening on http://%s:%s", server.address().address, server.address().port);
    }
  });
}
