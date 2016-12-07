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

const meta = {
    en: [
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
    ],
    fr: [
        {name: 'description', content: 'Apprenez à créer un site Web à partir de zéro avec nos cours HTML et CSS. Apprenez le HTML et le CSS, apprenez la conception de sites Web et construisez des sites Web avec notre cours HTML.'},
        {property: 'og:url', content: 'https://www.decodemtl.com/fr/cours/html-css'},
        {property: 'og:title', content: 'Cours de HTML & CSS chez DecodeMTL'},
        {property: 'og:description', content: 'Apprenez à créer un site Web à partir de zéro avec nos cours HTML et CSS. Apprenez le HTML, le CSS, la conception basique de Web, et construisez vos propres sites Web'},
        {property: 'og:image', content: 'https://www.decodemtl.com/downloads/decode_main.png'},
        {property: 'og:image:width', content: '1200'},
        {property: 'og:image:height', content: '630'},
        {property: 'fb:app_id', content: '215509578883196'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:site', content: '@decodemtl'},
        {name: 'twitter:title', content: 'Cours de HTML & CSS chez DecodeMTL'},
        {name: 'twitter:description', content: 'Apprenez à créer un site Web à partir de zéro avec nos cours HTML et CSS. Apprenez le HTML, le CSS, la conception basique de Web, et construisez vos propres sites Web'},
        {name: 'twitter:image', content: 'https://www.decodemtl.com/downloads/decode_main.png'},
        {name: 'twitter:image:alt', content: 'Les étudiants de DecodeMTL en action'}
    ]
}

const link = {
    en: [
        {"rel": "alternate", "hreflang": "fr","href":"https://www.decodemtl.com/fr/cours/html-css"},
    ],
    fr: [
        {"rel": "alternate", "hreflang": "en","href":"https://www.decodemtl.com/courses/html-css"},
    ]
}

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
                to: 'overview', name: this.props.intl.formatMessage({id: "modules.secondarynav.overview", defaultMessage: "Overview"})
            }, {
                to: 'tuition-dates', name: this.props.intl.formatMessage({id: "modules.secondarynav.tuitionDates", defaultMessage: "Tuition & Dates"})
            }, {
                to: 'curriculum', name: this.props.intl.formatMessage({id: "modules.secondarynav.curriculum", defaultMessage: "Curriculum"})
            }, {
                to: 'instructor', name: this.props.intl.formatMessage({id: "modules.secondarynav.instructor", defaultMessage: "Instructor"})
            }, {
                to: 'faq', name: this.props.intl.formatMessage({id: "modules.secondarynav.faq", defaultMessage: "FAQ"})
            }
        ];

        const formTitle = this.props.intl.formatMessage({id: "pages.pthtmlcss.convinceYour", defaultMessage: "Convince your employer to sponsor your tuition!"})
        const formText = this.props.intl.formatMessage({id: "pages.pthtmlcss.enterYour", defaultMessage: "Enter your email to download our free PDF guide and share it with your employer."})

        return (
            <div>
                <Helmet
                    title={this.props.intl.formatMessage({id: "pages.pthtmlcss.learnCss", defaultMessage: "Learn CSS - HTML Courses"})}
                    meta={meta[this.props.intl.locale]}
                    link={link[this.props.intl.locale]}
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
                    text={this.props.intl.formatMessage({id: "pages.pthtmlcss.learnTo", defaultMessage: "Learn to write clean, standards-complient code, and become acquainted with the fundamentals of web design."})}
                    subText={""}/>
                <Element name="overview">
                    <CourseOverview overview={overview}/>
                </Element>
                <Element name="tuition-dates">
                    <CourseTuitionDates tuitionDates={tuitionDates[this.props.intl.locale]}/>
                </Element>
                <Element name="curriculum">
                    <CourseCurriculum subjects={subjects[this.props.intl.locale]}/>
                </Element>
                <FormOptin submitButton={this.props.intl.formatMessage({id: "modules.ScheduleVisit.submit", defaultMessage: "Submit"})} title={formTitle} text={formText} interests={{'3782834739': true}}/>
                <CourseTestimonial testimonial={testimonials[this.props.intl.locale][Math.floor(Math.random() * testimonials[this.props.intl.locale].length)]}/>
                {/*<CourseProjectsSlider projects={projects} req={req}/>*/}
                <Element name="instructor">
                    <CourseInstructor instructors={instructors[this.props.intl.locale]}/>
                </Element>
                <Element name="faq">
                    <CourseFAQ title={this.props.intl.formatMessage({id: "pages.wdbootcamp.courseFAQ", defaultMessage: "Course FAQ"})} faq={faq[this.props.intl.locale]}/>
                </Element>
                <script type="application/ld+json" dangerouslySetInnerHTML={{__html: courseJson}}/>
            </div>
        );
    }
});


export default injectIntl(Courses);
