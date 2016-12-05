import React from 'react';

import {Route, IndexRoute, Redirect} from 'react-router';

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
import ApplicationExercise from 'APP/components/pages/applicationExercise/index';
import PrepCourse from 'APP/components/pages/prepCourse/index';
import NotFound from 'APP/components/pages/notFound/index';

const halfMap = {
  '/': '/fr',
  '/courses': '/fr/cours',
  '/courses/web-development-immersive': '/fr/cours/developpement-web-intensif',
  '/courses/javascript': '/fr/cours/javascript',
  '/courses/html-css': '/fr/cours/html-css',
  '/about': '/fr/a-propos',
  '/employers': '/fr/partenaires-embauche',
  '/events': '/fr/evenements',
  '/faq': '/fr/faq',
  '/contact': '/fr/nous-joindre',
  '/wework': '/fr/wework',
  '/housing': '/fr/logement',
  '/privacy': '/fr/confidentialite',
  '/terms': '/fr/termes',
  '/apply': '/fr/postuler',
  '/confirmation': '/fr/confirmation',
  '/success': '/fr/succes'
};

export const routesMap = Object.keys(halfMap).reduce(
  (map, key) => ({...map, [halfMap[key]]: key}),
  halfMap
);

/*
  Instead of directly defining our app routes, we have to export a function that receives the store.
  When creating routes, as we do in the app.js on the client and server.js on the server, we need
  access to the store in order to dispatch a switchLanguage action. At the moment, the router seems
  like the best place to do it, specifically in the onEnter hook.
*/
export default function createRoutes(store) {
  return (
    <Route path="/" component={App}>
      <Redirect from="/web-development-full-time" to="/courses/web-development-immersive"/>
      <Redirect from="/web-development-part-time" to="/courses/html-css"/>
      <Redirect from="/javascript-part-time" to="/courses/javascript"/>
      <Redirect from="/privacy-policy" to="/privacy"/>
      <Redirect from="/fr/web-development-full-time" to="/fr/cours/developpement-web-intensif"/>
      <Redirect from="/fr/web-development-part-time" to="/fr/cours/html-css"/>
      <Redirect from="/fr/about" to="/fr/a-propos"/>
      <Redirect from="/fr/events" to="/fr/evenements"/>
      <Redirect from="/fr/privacy-policy" to="/fr/confidentialite"/>
      <Redirect from="/fr/terms" to="/fr/termes"/>
      <Redirect from="/on-demand" to="/prep-course"/>
      <Redirect from="/talent.pdf" to="/downloads/talent.pdf"/>

      <Route path="fr">
        <IndexRoute component={Home}/>
        <Route path='cours'>
          <IndexRoute component={AllCourses}/>
          <Route path='developpement-web-intensif' component={BootcampCourse}/>
          <Route path='javascript' component={JavascriptCourse}/>
          <Route path='html-css' component={HtmlCssCourse}/>
        </Route>
        <Route path='a-propos' component={About}/>
        <Route path='partenaires-embauche' component={Employers}/>
        <Route path='evenements' component={Events}/>
        <Route path='faq' component={Faq}/>
        <Route path='nous-joindre' component={Contact}/>
        <Route path='wework' component={WeWork}/>
        <Route path='logement' component={Housing}/>
        <Route path='confidentialite' component={Privacy}/>
        <Route path='termes' component={Terms}/>
        <Route path='postuler' component={Apply}/>
        <Route path='confirmation' component={Confirmation}/>
        <Route path='succes' component={Success}/>
      </Route>
      <Route>
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
        <Route path='application-exercise' component={ApplicationExercise}/>
        <Route path='prep-course' component={PrepCourse}/>
      </Route>

      <Route path="*" notFound={true} component={NotFound}/>
    </Route>
  );
}
