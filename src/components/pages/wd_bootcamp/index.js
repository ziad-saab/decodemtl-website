import React from 'react';
import Helmet from 'react-helmet';
import {Element, scrollSpy} from 'react-scroll';
import { injectIntl } from 'react-intl';

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

// /^\.\/img(.*)\.jpg$/i will match all files starting with img and ending with .jpg
const req = require.context("../../../assets/images/", true, /^\.\/project-wd-bootcamp(.*)\.jpg$/i);
import {CTAPrimaryLarge, CTASecondaryLarge} from '../../buttons/buttons';

const courseJson = JSON.stringify({
    "@context": "http://schema.org",
    "@type": "Course",
    "name": "Web Development Immersive",
    "description": "8 weeks of intensive learning. Gain enough practical experience to launch your new career or startup.",
    "provider": {
        "@type": "Organization",
        "name": "DecodeMTL",
        "sameAs": "http://www.decodemtl.com/"
    }
});

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
                to: 'overview', name: this.props.intl.formatMessage({id: "modules.secondarynav.overview", defaultMessage: "Overview"})
            }, {
                to: 'tuition-dates', name: this.props.intl.formatMessage({id: "modules.secondarynav.tuitionDates", defaultMessage: "Tuition & Dates"})
            }, {
                to: 'curriculum', name: this.props.intl.formatMessage({id: "modules.secondarynav.curriculum", defaultMessage: "Curriculum"})
            }, {
                to: 'schedule', name: this.props.intl.formatMessage({id: "modules.secondarynav.typicalDay", defaultMessage: "Typical Day"})
            }, {
                to: 'instructor', name: this.props.intl.formatMessage({id: "modules.secondarynav.instructor", defaultMessage: "Instructor"})
            }, {
                to: 'careers', name: this.props.intl.formatMessage({id: "modules.secondarynav.careers", defaultMessage: "Careers"})
            }, {
                to: 'faq', name: this.props.intl.formatMessage({id: "modules.secondarynav.faq", defaultMessage: "FAQ"})
            }
        ];

        const formTitle = this.props.intl.formatMessage({defaultMessage: 'New to JavaScript? Get instant access to free JavaScript resources!', id: 'pages.wdbootcamp.newTo'});
        const formText = this.props.intl.formatMessage({defaultMessage: 'Enter your email below and get instant access to our curated list of free JavaScript resources.', id: 'pages.wdbootcamp.enterYour'});
        return (
            <div>
                <Helmet
                    title="Software Engineering Course - Coding Bootcamp"
                    meta={[
                        {name: 'description', content: 'With DecodeMTL\'s Software Engineering and Web Development Course, you will learn how to become a Web Developer. Learn Web Development in MTL\'s top code school.'},
                        {property: 'og:url', content: 'https://www.decodemtl.com/courses/web-development-immersive'},
                        {property: 'og:title', content: 'Web Development Bootcamp - Become a Web Developer'},
                        {property: 'og:description', content: 'Looking to launch a new career as a Web Developer? With DecodeMTL\'s immersive 8-week program, you will learn the skills it takes to get a job in tech!'},
                        {property: 'og:image', content: 'https://www.decodemtl.com/downloads/decode_main.png'},
                        {property: 'og:image:width', content: '1200'},
                        {property: 'og:image:height', content: '630'},
                        {property: 'fb:app_id', content: '215509578883196'},
                        {name: 'twitter:card', content: 'summary_large_image'},
                        {name: 'twitter:site', content: '@decodemtl'},
                        {name: 'twitter:title', content: 'Web Development Bootcamp - Become a Web Developer'},
                        {name: 'twitter:description', content: 'Looking to launch a new career as a Web Developer? With DecodeMTL\'s immersive 8-week program, you will learn the skills it takes to get a job in tech!'},
                        {name: 'twitter:image', content: 'https://www.decodemtl.com/downloads/decode_main.png'},
                        {name: 'twitter:image:alt', content: 'DecodeMTL Students in Action'}
                    ]}
                    link={[
                        {"rel": "alternate", "hreflang": "fr","href":"https://www.decodemtl.com/fr/cours/developpement-web-intensif"},
                    ]}
                />
                <SecondaryNav display={this.state.secondaryNav} links={secondaryLinks}
                              syllabus='/downloads/immersive_syllabus.pdf'/>
                <CourseHero CTAPText={this.props.intl.formatMessage({id: "pages.wdbootcamp.applyNow", defaultMessage: "Apply Now"})}
                            CTASText="Syllabus"
                            CTAPLink="/apply"
                            CTASLink="/downloads/immersive_syllabus.pdf"
                            CTAP={CTAPrimaryLarge}
                            CTAS={CTASecondaryLarge}
                            ref={hero => {
                                this._hero = hero
                            }}
                            moduleTitle={this.props.intl.formatMessage({id: "pages.wdbootcamp.WebDevelopment", defaultMessage: "Web Development"})}
                            jumboTitle={this.props.intl.formatMessage({id: "pages.wdbootcamp.immersive", defaultMessage: "Immersive"})}
                            text={this.props.intl.formatMessage({id: "pages.wdbootcamp.8Weeks", defaultMessage: "8 weeks of intensive learning. Gain enough practical experience to launch your new career or startup."})}
                            subText={""}/>
                <Element name="overview" className="element">
                    <CourseOverview overview={overview}/>
                </Element>
                <Element name="tuition-dates">
                    <CourseTuitionDates tuitionDates={tuitionDates[this.props.intl.locale]}/>
                </Element>
                <Element name="curriculum">
                    <CourseCurriculum subjects={subjects[this.props.intl.locale]}/>
                </Element>
                <Element name="schedule">
                    <CourseSchedule background={scheduleBackground}/>
                </Element>
                <CourseTestimonial testimonial={testimonials[this.props.intl.locale][Math.floor(Math.random() * testimonials[this.props.intl.locale].length)]}/>
                <FormOptin submitButton={this.props.intl.formatMessage({id: "modules.ScheduleVisit.submit", defaultMessage: "Submit"})} title={formTitle} text={formText} interests={{"7561ee16e5": true}}/>
                <Element name="instructor">
                    <CourseInstructor instructors={instructors[this.props.intl.locale]}/>
                </Element>
                <CourseProjectsSlider projects={projects[this.props.intl.locale]} req={req}/>
                <Element name="careers">
                    <CourseCareerSupport/>
                </Element>
                <Element name="faq">
                    <CourseFAQ title={this.props.intl.formatMessage({id: "pages.wdbootcamp.courseFAQ", defaultMessage: "Course FAQ"})} faq={faq[this.props.intl.locale]}/>
                </Element>
                <PartnersLogos/>
                <script type="application/ld+json" dangerouslySetInnerHTML={{__html: courseJson}}/>
            </div>
        );
    }
});


export default injectIntl(Courses);