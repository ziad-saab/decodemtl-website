import React from 'react';
import {Link as RouterLink} from 'react-router';
import {connect} from 'react-redux';

import {routesMap} from 'APP/routes';

const Link = React.createClass({
  render() {
    const {i18n, to, dispatch, ...rest} = this.props;

    const link = i18n.language === 'en' ? to : routesMap[to];

    return <RouterLink {...rest} to={link}/>
  }
})

export default connect(({i18n}) => ({i18n}))(Link);
