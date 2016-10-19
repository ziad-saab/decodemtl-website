import frenchMessages from 'APP/language/fr';

const SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';

export const DEFAULT_LANGUAGE = 'en';
const DEFAULT_EN_PATH = '/';
const DEFAULT_FR_PATH = '/fr';

const initialState = {
  language: DEFAULT_LANGUAGE,
  messages: {},
  frLink: DEFAULT_FR_PATH,
  enLink: DEFAULT_EN_PATH
};

/*
  This module takes care of the i18n logic.
  Since we only have two languages, we avoided using a dynamic array
  en is default, fr has translated messages

  We export an action called switchLanguage which is used by onEnter in the router
*/
export default function reducer(state=initialState, action={}) {
  switch (action.type) {
    case SWITCH_LANGUAGE:
      const messages = action.language === 'en' ? {} : frenchMessages;
      return {
        ...state,
        language: action.language,
        messages: messages
      };
  }

  return state;
}

export function switchLanguage(language) {
  return {
    type: SWITCH_LANGUAGE,
    language
  }
}
