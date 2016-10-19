//TODO implement custom schedule a visit form
//TODO bug fix --> Privacy policy & terms links should close modal upon click
import React from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import {IntlProvider} from 'react-intl';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import config from 'APP/app-config';
import Loading from 'APP/components/Loading';

import RouteTransition from 'APP/components/RouteTransition';

import SiteNav from 'APP/components/navigation/SiteNav';
import Footer from 'APP/components/navigation/MainFooter';
import ScheduleVisit from 'APP/components/modules/ScheduleVisit';
import ConfirmModal from 'APP/components/modules/ConfirmModal';


/*
  This component wraps the app in a react-intl provider
  It also reacts to changes in the current language and reconfigures the IntlProvider appropriately
  Finally, it displays the Loading bar, the base Helmet config for <head> and the router children
*/
class App extends React.Component {
  static propTypes = {
    i18n: React.PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {modal: false};

    this._toggleModal = this._toggleModal.bind(this);
  }

  _toggleModal(prevent, e) {
      //Fixes issue when toggling the modal from Links that redirect and the modal is not closing
      // Need to pass prevent (true||false) in order to prevent the redirect or to allow it
      if (!e) {
          e = prevent;
          e.preventDefault();
      }
      this.setState({
          modal: !this.state.modal
      })
  }

  render() {
    const {i18n} = this.props;
    return (
      <IntlProvider locale={i18n.language} messages={i18n.messages}>
        <div className="App">
          <Loading/>
          <Helmet {...config.app.head[i18n.language]}/>
          <ReactCSSTransitionGroup
            transitionName="video"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {this.state.modal
              ? <ConfirmModal
              modalType="visit"
              form={ScheduleVisit}
              toggleModal={this._toggleModal}/>
              : null}
          </ReactCSSTransitionGroup>
          <SiteNav handleScheduleVisit={this._toggleModal} ref={siteNav => {this._siteNav = siteNav}}/>
          <main className="main-content">
            <RouteTransition
              path={this.props.location.pathname}
              initialStyle={{opacity: 0}}
              transition="opacity 150ms ease-in"
              finalStyle={{opacity: 1}}
            >
              {this.props.children}
            </RouteTransition>
          </main>
          <Footer/>
        </div>
      </IntlProvider>
    );
  }
}

export default connect( ({i18n}) => ({i18n}) )(App);
