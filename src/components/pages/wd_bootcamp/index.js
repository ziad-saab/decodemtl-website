import React from 'react';
import Helmet from 'react-helmet';
import {Element, scrollSpy} from 'react-scroll';

import CourseHero from '../../modules/Hero';
import CourseOverview from '../../modules/Overview';
import CourseTuitionDates from'../../modules/CourseTuitionDates';
import CourseCurriculum from '../../modules/CourseCurriculum';
import FormOptin from '../../modules/FormOptin';
import CourseInstructor from '../../modules/CourseInstructor';
import SecondaryNav from '../../navigation/SecondaryNav';
import CourseTestimonial from '../../modules/CourseTestimonial';
import CourseSchedule from '../../modules/CourseSchedule';
import CourseProjectsSlider from '../../modules/CourseProjectsSlider';
import CourseCareerSupport from '../../modules/CourseCareerSupport';
import CourseFAQ from '../../modules/FAQ';

import PartnersLogos from '../../modules/PartnersLogos';
import scheduleBackground from '../../../assets/images/module-bg-wework-common.jpg'

import tuitionDates from './tuitionDates';
import subjects from './subjects';
import instructors from './instructors';
import testimonials from './testimonials';
import projects from './projects';
import faq from './FAQ';
import overview from './courseOverview';

//TODO REPLACE PLACEHOLDER IMAGES
// /^\.\/img(.*)\.jpg$/i will match all files starting with img and ending with .jpg
const req = require.context("../../../assets/images/", true, /^\.\/project-wd-bootcamp(.*)\.jpg$/i);
import {CTAPrimaryLarge, CTASecondaryLarge} from '../../buttons/buttons';

const Courses = React.createClass({
    getInitialState() {
        return {
            secondaryNav: false
        };
    },
    componentWillMount() {
        //Necessary for smooth fade transitions when routing from parent component.
        typeof window !== 'undefined' && window.scrollTo(0, 0);
    },
    componentDidMount() {
        scrollSpy.update();
        window.addEventListener('scroll', this._handleScroll);
    },
    componentWillUnmount() {
        typeof window !== 'undefined' && window.removeEventListener('scroll', this._handleScroll);
    },
    _handleScroll(e) {
        const headerWrapper = this._hero._headerWrapper;
        const scrollPosition = headerWrapper.offsetTop + headerWrapper.offsetHeight;

        if (window.scrollY > scrollPosition && !this.state.secondaryNav) {
            this.setState({
                secondaryNav: true
            })
        } else if (window.scrollY < scrollPosition && this.state.secondaryNav) {
            this.setState({
                secondaryNav: false
            });
        }
    },
    render() {
        const secondaryLinks = [
            {
                to: 'overview', name: 'Overview'
            }, {
                to: 'tuition-dates', name: 'Tuition & Dates'
            }, {
                to: 'curriculum', name: "Curriculum"
            }, {
                to: 'schedule', name: 'Typical Day'
            }, {
                to: 'instructor', name: `Instructor${instructors.length > 1 ? 's' : ''}`
            }, {
                to: 'careers', name: 'Careers'
            }, {
                to: 'faq', name: 'FAQ'
            }
        ];

        const formTitle = 'New to JavaScript? Get instant access to free JavaScript resources!',
            formText = 'Enter your email below and get instant access to our curated list of free JavaScript resources.';
        return (
            <div>
                <Helmet
                    title="Software Engineering Course - Coding Bootcamp"
                    meta={[
                        {name: 'description', content: 'With DecodeMTL\'s Software Engineering and Web Development Course, you will learn how to become a Web Developer. Learn Web Development in MTL\'s top code school.'},
                    ]}/>
                <SecondaryNav display={this.state.secondaryNav} links={secondaryLinks}
                              syllabus='/downloads/immersive_syllabus.pdf'/>
                <CourseHero CTAPText="Apply Now"
                            CTASText="Syllabus"
                            CTAPLink="/apply"
                            CTASLink="/downloads/immersive_syllabus.pdf"
                            CTAP={CTAPrimaryLarge}
                            CTAS={CTASecondaryLarge}
                            ref={hero => {
                                this._hero = hero
                            }}
                            moduleTitle={"web development"}
                            jumboTitle={"immersive"}
                            text={"8 weeks of intensive learning. Gain enough practical experience to launch your new career or startup."}
                            subText={""}/>
                <Element name="overview" className="element">
                    <CourseOverview overview={overview}/>
                </Element>
                <Element name="tuition-dates">
                    <CourseTuitionDates tuitionDates={tuitionDates}/>
                </Element>
                <Element name="curriculum">
                    <CourseCurriculum subjects={subjects}/>
                </Element>
                <Element name="schedule">
                    <CourseSchedule background={scheduleBackground}/>
                </Element>
                <CourseTestimonial testimonial={testimonials[Math.floor(Math.random() * testimonials.length)]}/>
                <FormOptin submitButton='Submit' title={formTitle} text={formText} interests={{"7561ee16e5": true}}/>
                <Element name="instructor">
                    <CourseInstructor instructors={instructors}/>
                </Element>
                <CourseProjectsSlider projects={projects} req={req}/>
                <Element name="careers">
                    <CourseCareerSupport/>
                </Element>
                <Element name="faq">
                    <CourseFAQ title='Course FAQ' faq={faq}/>
                </Element>
                <PartnersLogos/>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "http://schema.org",
                        "@type": "Course",
                        "name": "",
                        "description": "Introductory CS course laying out the basics.",
                        "provider": {
                            "@type": "Organization",
                            "name": "University of Technology - Eureka",
                            "sameAs": "http://www.ut-eureka.edu"
                        }
                    })
                    }
                </script>
            </div>
        );
    }
});


export default Courses;
