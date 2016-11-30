import {LOCATION_CHANGE} from 'react-router-redux';

import frenchMessages from 'APP/language/fr';
import {routesMap} from 'APP/routes';

export const DEFAULT_LANGUAGE = 'en';
export const DEFAULT_EN_PATH = '/';
export const DEFAULT_FR_PATH = '/fr';

const initialState = {
  language: DEFAULT_LANGUAGE,
  messages: {},
  otherLink: DEFAULT_FR_PATH
};

/*
  This module takes care of the i18n logic.
  Since we only have two languages, we avoided using a dynamic array
  en is default, fr has translated messages

  We export an action called switchLanguage which is used by onEnter in the router
*/
export default function reducer(state=initialState, action={}) {
  switch (action.type) {
    case LOCATION_CHANGE:
      const language = action.payload.pathname.substring(0, 3) === '/fr' ? 'fr': 'en';
      const messages = language === 'en' ? {} : frenchMessages;
      return {
        ...state,
        language,
        messages,
        otherLink: routesMap[action.payload.pathname] || (language === 'en' ? DEFAULT_FR_PATH : DEFAULT_EN_PATH)
      }

    default:
      return state;
  }
}
