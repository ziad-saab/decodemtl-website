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

    let link;
    if (currentLanguage === 'en') {
      link = <Link to={i18n.frLink}>fr</Link>;
    }
    else {
      link = <Link to={i18n.enLink}>en</Link>;
    }


    return (
      link
    );
  }
}

export default connect(
  ({i18n}) => ({i18n})
)(LanguageSwitcher);
