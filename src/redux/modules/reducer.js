import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-connect';

import i18nReducer from './i18n';
/*
  This is our main app reducer.
  In addition to importing our own reducers, it adds reduxAsyncConnect and the routing reducer.
  Together, these reducers create the global state of our application.
*/
export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  i18n: i18nReducer
});
