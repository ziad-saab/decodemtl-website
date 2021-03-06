import React from 'react';

import HomeHero from 'APP/components/modules/HomeHero';
import HomeUpcomingCourses from 'APP/components/modules/HomeUpcomingCourses';
import CourseTestimonial from 'APP/components/modules/CourseTestimonial';
import FormOptin from 'APP/components/modules/FormOptin';
import UpcomingEvents from 'APP/components/modules/UpcomingEvents';
import PartnersLogos from 'APP/components/modules/PartnersLogos';
import HomeEvolving from 'APP/components/modules/HomeEvolving';
import LocationSlider from 'APP/components/modules/LocationSlider';
import ConfirmModal from 'APP/components/modules/ConfirmModal';
import ScheduleVisit from 'APP/components/modules/ScheduleVisit';
import Helmet from 'react-helmet';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import upcomingCourses from 'APP/config/upcomingCourses';
import testimonials from 'APP/components/pages/wd_bootcamp/testimonials';
import events from 'APP/config/events';
import { injectIntl } from 'react-intl';

// /^\.\/wework(.*)\.jpg$/i will match all files starting with wework and ending with .jpg
var req = require.context('APP/assets/images', true, /^\.\/wework(.*)\.jpg$/i);

const meta = {
    en: [
        {name: 'description', content: 'Learn Web Development at Montreal\'s leading coding bootcamp. Become a Web Developer through hands-on learning with our Web Development Training.'},
        {property: 'og:url', content: 'https://www.decodemtl.com'},
        {property: 'og:title', content: 'Learn Web Development - Montreal Coding Bootcamp'},
        {property: 'og:description', content: 'DecodeMTL offer\'s Montreal\'s most dynamic courses in tech. Learn to code through project based teaching from industry experts in a stimulating environment.'},
        {property: 'og:image', content: 'https://www.decodemtl.com/downloads/decode_main.png'},
        {property: 'og:image:width', content: '1200'},
        {property: 'og:image:height', content: '630'},
        {property: 'fb:app_id', content: '215509578883196'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:site', content: '@decodemtl'},
        {name: 'twitter:title', content: 'Learn Web Development - Montreal Coding Bootcamp'},
        {name: 'twitter:description', content: 'DecodeMTL offer\'s Montreal\'s most dynamic courses in tech. Learn to code through project based teaching from industry experts in a stimulating environment.'},
        {name: 'twitter:image', content: 'https://www.decodemtl.com/downloads/decode_main.png'},
        {name: 'twitter:image:alt', content: 'DecodeMTL Students in Action'}
    ],
    fr: [
        {name: 'description', content: 'Apprenez le développement Web au cours les plus dynamiques à Montréal. Devenez un développeur Web grâce à une approche pédagogique basée sur des projets.'},
        {property: 'og:url', content: 'https://www.decodemtl.com/fr'},
        {property: 'og:title', content: 'Apprendre le développement Web - Bootcamp de programmation à Montréal'},
        {property: 'og:description', content: 'Apprenez le développement Web au cours les plus dynamiques à Montréal. Devenez un développeur Web grâce à une approche pédagogique basée sur des projets.'},
        {property: 'og:image', content: 'https://www.decodemtl.com/downloads/decode_main.png'},
        {property: 'og:image:width', content: '1200'},
        {property: 'og:image:height', content: '630'},
        {property: 'fb:app_id', content: '215509578883196'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:site', content: '@decodemtl'},
        {name: 'twitter:title', content: 'Apprendre le développement Web - Bootcamp de programmation à Montréal'},
        {name: 'twitter:description', content: 'Apprenez le développement Web au cours les plus dynamiques à Montréal. Devenez un développeur Web grâce à une approche pédagogique basée sur des projets.'},
        {name: 'twitter:image', content: 'https://www.decodemtl.com/downloads/decode_main.png'},
        {name: 'twitter:image:alt', content: 'Les étudiants de DecodeMTL en action'}
    ]
}

const link = {
    en: [
        {"rel": "alternate", "hreflang": "fr","href":"https://www.decodemtl.com/fr"},
    ],
    fr: [
        {"rel": "alternate", "hreflang": "en","href":"https://www.decodemtl.com/"},
    ]
}

const HomePage = React.createClass({
    propTypes: {},
    getInitialState(){
        return {
            modal: false
        };
    },
    _toggleModal(e) {
        e.preventDefault();
        this.setState({
            modal: !this.state.modal
        })
    },
    render() {
        return (
            <div>
                <Helmet
                    title={this.props.intl.formatMessage({id: "pages.home.learnWeb", defaultMessage: "Learn Web Development - Montreal Coding Bootcamp"})}
                    meta={meta[this.props.intl.locale]}
                    link={link[this.props.intl.locale]}
                />
                <HomeHero/>
                <HomeEvolving handleClick={this._toggleModal}/>
                <ReactCSSTransitionGroup
                    transitionName="video"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {this.state.modal
                        ? <ConfirmModal
                        modalType='visit'
                        form={ScheduleVisit}
                        toggleModal={this._toggleModal}/>
                        : null}
                </ReactCSSTransitionGroup>
                <HomeUpcomingCourses upcomingCourses={upcomingCourses[this.props.intl.locale]}/>
                <CourseTestimonial testimonial={testimonials[this.props.intl.locale][Math.floor(Math.random() * testimonials[this.props.intl.locale].length)]}/>
                <FormOptin title={this.props.intl.formatMessage({id: "pages.home.joinOur", defaultMessage: "Join our growing community"})}
                           text={this.props.intl.formatMessage({id: "pages.home.enterYour", defaultMessage: "Enter your email to receive info about new courses, workshops and events."})}
                           submitButton={this.props.intl.formatMessage({id: "pages.home.submit", defaultMessage: "Submit"})}/>
                <LocationSlider req={req}/>
                <UpcomingEvents showAllEventsLink events={events[this.props.intl.locale]} title={this.props.intl.formatMessage({id: "pages.home.upcomingEvents", defaultMessage: "Upcoming Events"})} limit={5} text='' filterOld={true}/>
                <PartnersLogos isEmployersPage={false} />
            </div>
        );
    }
});

export default injectIntl(HomePage);