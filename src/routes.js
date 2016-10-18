import React from 'react';

import {Route, IndexRoute, Router, Redirect, browserHistory, applyRouterMiddleware} from 'react-router';
import {useScroll} from 'react-router-scroll'

import App from 'APP/components/App';
import BootcampCourse from 'APP/components/pages/wd_bootcamp/index';
import HtmlCssCourse from 'APP/components/pages/pt_htmlcss/index';
import JavascriptCourse from 'APP/components/pages/pt_javascript/index';
import Home from 'APP/components/pages/home/index';
import About from 'APP/components/pages/about/index';
import AllCourses from 'APP/components/pages/allCourses/index';
import Employers from 'APP/components/pages/employers/index';
import Events from 'APP/components/pages/events/index';
import Faq from 'APP/components/pages/faq/index';
import Contact from 'APP/components/pages/contact/index';
import WeWork from 'APP/components/pages/wework/index';
import Housing from 'APP/components/pages/housing/index';
import Privacy from 'APP/components/pages/privacy_terms/Privacy';
import Terms from 'APP/components/pages/privacy_terms/Terms';
import Apply from 'APP/components/pages/apply/index';
import Confirmation from 'APP/components/pages/confirmation/index';
import Success from 'APP/components/pages/success/index';

import {switchLanguage} from 'APP/redux/modules/i18n';

/*
  Instead of directly defining our app routes, we have to export a function that receives the store.
  When creating routes, as we do in the app.js on the client and server.js on the server, we need
  access to the store in order to dispatch a switchLanguage action. At the moment, the router seems
  like the best place to do it, specifically in the onEnter hook.
*/
export default function createRoutes(store) {
  return (
    <Route path="/" component={App}>
      <Route path="fr" onEnter={() => store.dispatch(switchLanguage('fr'))}>
        <IndexRoute component={Home}/>
        <Route path='cours'>
          <IndexRoute component={AllCourses}/>
          <Route path='developpement-web-immersif' component={BootcampCourse}/>
          <Route path='javascript' component={JavascriptCourse}/>
          <Route path='html-css' component={HtmlCssCourse}/>
        </Route>
        <Route path='a-propos' component={About}/>
        <Route path='employeurs' component={Employers}/>
        <Route path='evenements' component={Events}/>
        <Route path='faq' component={Faq}/>
        <Route path='contact' component={Contact}/>
        <Route path='wework' component={WeWork}/>
        <Route path='logement' component={Housing}/>
        <Route path='confidentialite' component={Privacy}/>
        <Route path='termes' component={Terms}/>
        <Route path='postuler' component={Apply}/>
        <Route path='confirmation' component={Confirmation}/>
        <Route path='succes' component={Success}/>
      </Route>
      <Route onEnter={() => store.dispatch(switchLanguage('en'))}>
        <IndexRoute component={Home}/>
        <Route path='courses'>
          <IndexRoute component={AllCourses}/>
          <Route path='web-development-immersive' component={BootcampCourse}/>
          <Route path='javascript' component={JavascriptCourse}/>
          <Route path='html-css' component={HtmlCssCourse}/>
        </Route>
        <Route path='about' component={About}/>
        <Route path='employers' component={Employers}/>
        <Route path='events' component={Events}/>
        <Route path='faq' component={Faq}/>
        <Route path='contact' component={Contact}/>
        <Route path='wework' component={WeWork}/>
        <Route path='housing' component={Housing}/>
        <Route path='privacy' component={Privacy}/>
        <Route path='terms' component={Terms}/>
        <Route path='apply' component={Apply}/>
        <Route path='confirmation' component={Confirmation}/>
        <Route path='success' component={Success}/>
      </Route>
    </Route>
  );
}
