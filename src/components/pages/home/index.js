import React from 'react';

import HomeHero from 'APP/modules/HomeHero';
import HomeUpcomingCourses from 'APP/modules/HomeUpcomingCourses';
import CourseTestimonial from 'APP/modules/CourseTestimonial';
import FormOptin from 'APP/modules/FormOptin';
import UpcomingEvents from 'APP/modules/UpcomingEvents';
import PartnersLogos from 'APP/modules/PartnersLogos';
import HomeEvolving from 'APP/modules/HomeEvolving';
import LocationSlider from 'APP/modules/LocationSlider';
import ConfirmModal from 'APP/modules/ConfirmModal';
import ScheduleVisit from 'APP/modules/ScheduleVisit';
import Helmet from 'react-helmet';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import upcomingCourses from 'APP/config/upcomingCourses';
import testimonials from 'APP/components/pages/wd_bootcamp/testimonials';
import events from 'APP/config/events';

//TODO CHANGE PLACEHOLDER IMAGES
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
                    title="Learn to Code in Montreal"
                    meta={[
                        {
                          property: 'description',
                          content: 'Become a web developer, launch a start-up, or add a new skill to your resume with DecodeMTL’s coding courses. Click to learn more.'
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
                <UpcomingEvents events={events} title='Upcoming Events' limit={5} text='' filterOld={true}/>
                <PartnersLogos/>
            </div>
        );
    }
});

export default HomePage;
