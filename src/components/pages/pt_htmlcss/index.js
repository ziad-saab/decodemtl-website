//TODO UNCOMMENT PROJECT SLIDER ONCE PROJECTS ARE AVAILABLE
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
//PROJECT SLIDER
// import CourseProjectsSlider from '../../modules/CourseProjectsSlider';
import CourseFAQ from '../../modules/FAQ';

import tuitionDates from './tuitionDates';
import subjects from './subjects';
import instructors from './instructors';
import testimonials from './testimonials';
//PROJECT SLIDER
// import projects from './projects';
import faq from './FAQ';
import overview from './courseOverview';

// /^\.\/img(.*)\.jpg$/i will match all files starting with img and ending with .jpg
//PROJECT SLIDER
// const req = require.context("../../../assets/images/", true, /^\.\/project-htmlcss(.*)\.jpg$/i); //project-course-num //testimonial-firstlast
import {CTAPrimaryLarge, CTASecondaryLarge} from '../../buttons/buttons';

const courseJson = JSON.stringify({
    "@context": "http://schema.org",
    "@type": "Course",
    "name": "Part-Time HTML & CSS",
    "description": "Learn to write clean, standards-complient code, and become aquainted with the fundamentals of web design.",
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
        window.removeEventListener('scroll', this._handleScroll);
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
                to: 'instructor', name: `Instructor${instructors.length > 1 ? 's' : ''}`
            }, {
                to: 'faq', name: 'FAQ'
            }
        ];

        const formTitle = 'Convince your employer to sponsor your tuition!',
            formText = 'Enter your email to download our free PDF guide and share it with your employer.';

        return (
            <div>
                <Helmet
                    title="Learn CSS - HTML Courses"
                    meta={[
                        {name: 'description', content: 'Learn how to build a website from scratch with our HTML and CSS course. Learn HTML and CSS, learn web design, and build websites with our HTML course.'},
                        {property: 'og:url', content: 'https://www.decodemtl.com/courses/html-css'},
                        {property: 'og:title', content: 'HTML & CSS Course at DecodeMTL'},
                        {property: 'og:description', content: 'Learn how to build a website from scratch with our HTML and CSS course. Learn HTML, CSS, basic web design, and build your own websites.'},
                        {property: 'og:image', content: 'https://www.decodemtl.com/downloads/decode_main.png'},
                        {property: 'og:image:width', content: '1200'},
                        {property: 'og:image:height', content: '630'},
                        {property: 'fb:app_id', content: '215509578883196'},
                        {name: 'twitter:card', content: 'summary_large_image'},
                        {name: 'twitter:site', content: '@decodemtl'},
                        {name: 'twitter:title', content: 'HTML & CSS Course at DecodeMTL'},
                        {name: 'twitter:description', content: 'Learn how to build a website from scratch with our HTML and CSS course. Learn HTML, CSS, basic web design, and build your own websites.'},
                        {name: 'twitter:image', content: 'https://www.decodemtl.com/downloads/decode_main.png'},
                        {name: 'twitter:image:alt', content: 'DecodeMTL Students in Action'}
                    ]}
                    link={[
                        {"rel": "alternate", "hreflang": "fr","href":"https://www.decodemtl.com/fr/cours/html-css"},
                    ]}
                />
                <SecondaryNav display={this.state.secondaryNav} links={secondaryLinks}
                              syllabus='/downloads/htmlcss_syllabus.pdf'/>
                <CourseHero
                    CTAPText={this.props.intl.formatMessage({id: "pages.wdbootcamp.applyNow", defaultMessage: "Apply Now"})}
                    CTASText="Syllabus"
                    CTAPLink="/apply"
                    CTASLink="/downloads/htmlcss_syllabus.pdf"
                    CTAP={CTAPrimaryLarge}
                    CTAS={CTASecondaryLarge}
                    ref={hero => {
                        this._hero = hero
                    }}
                    moduleTitle={this.props.intl.formatMessage({id: "pages.pthtmlcss.parttime", defaultMessage: "Part-Time"})}
                    jumboTitle={this.props.intl.formatMessage({id: "pages.pthtmlcss.htmlcss", defaultMessage: "HTML & CSS"})}
                    text={this.props.intl.formatMessage({id: "pages.pthtmlcss.learnTo", defaultMessage: "Learn to write clean, standards-complient code, and become aquainted with the fundamentals of web design."})}
                    subText={""}/>
                <Element name="overview">
                    <CourseOverview overview={overview}/>
                </Element>
                <Element name="tuition-dates">
                    <CourseTuitionDates tuitionDates={tuitionDates}/>
                </Element>
                <Element name="curriculum">
                    <CourseCurriculum subjects={subjects}/>
                </Element>
                <FormOptin submitButton='Submit' title={formTitle} text={formText} interests={{'3782834739': true}}/>
                <CourseTestimonial testimonial={testimonials[Math.floor(Math.random() * testimonials.length)]}/>
                {/*<CourseProjectsSlider projects={projects} req={req}/>*/}
                <Element name="instructor">
                    <CourseInstructor instructors={instructors}/>
                </Element>
                <Element name="faq">
                    <CourseFAQ title={this.props.intl.formatMessage({id: "pages.wdbootcamp.courseFAQ", defaultMessage: "Course FAQ"})} faq={faq}/>
                </Element>
                <script type="application/ld+json" dangerouslySetInnerHTML={{__html: courseJson}}/>
            </div>
        );
    }
});


export default injectIntl(Courses);
