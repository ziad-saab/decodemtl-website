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

// /^\.\/wework(.*)\.jpg$/i will match all files starting with wework and ending with .jpg
var req = require.context('APP/assets/images', true, /^\.\/wework(.*)\.jpg$/i);

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
                    title="Learn Web Development - Montreal Coding Bootcamp"
                    meta={[
                        {
                          property: 'description',
                          content: 'Browse Full-Time & Part-Time Web Development courses offered by DecodeMTL. Become a Web Developer through hands-on learning with our Web Development Training.'
                        },
                    ]}/>
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
                <HomeUpcomingCourses upcomingCourses={upcomingCourses}/>
                <CourseTestimonial testimonial={testimonials[Math.floor(Math.random() * testimonials.length)]}/>
                <FormOptin title="Join our growing community"
                           text="Enter your email to receive info about new courses, workshops and events."
                           submitButton="Submit"/>
                <LocationSlider req={req}/>
                <UpcomingEvents showAllEventsLink events={events} title='Upcoming Events' limit={5} text='' filterOld={true}/>
                <PartnersLogos isEmployersPage={false} />
            </div>
        );
    }
});

export default HomePage;
