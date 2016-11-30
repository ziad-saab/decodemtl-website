import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

/*
  This component displays an EN/FR language switcher.
*/
class LanguageSwitcher extends React.Component {
  render() {

    const {i18n} = this.props;
    const currentLanguage = i18n.language;
    const oppLanguage = currentLanguage === 'fr' ? 'en' : 'fr';

    return <Link to={i18n.otherLink}>{oppLanguage}</Link>;
  }
}

export default connect(
  ({i18n}) => ({i18n})
)(LanguageSwitcher);
