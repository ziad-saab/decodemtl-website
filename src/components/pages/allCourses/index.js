import React from 'react';
import Helmet from 'react-helmet';
import { injectIntl } from 'react-intl';

import CourseHero from '../../modules/Hero';
import courses from '../../../config/courses';
import CourseItem from '../../modules/CourseItem';

const courseListJson = JSON.stringify(
    {
        "@context":"http://schema.org",
        "@type":"ItemList",
        "itemListElement":[
            {
                "@type":"ListItem",
                "position":1,
                "url":"https://www.decodemtl.com/courses/web-development-immersive"
            },
            {
                "@type":"ListItem",
                "position":2,
                "url":"https://www.decodemtl.com/courses/html-css"
            },
            {
                "@type":"ListItem",
                "position":3,
                "url":"https://www.decodemtl.com/javascript"
            }
        ]
    }
);

const meta = {
    en: [
        {name: 'description', content: 'Web Development Courses in HTML & CSS, JavaScript, and Full-Stack Web Development. Become a Web Developer with Montreal\'s leading Web Development programs.'},
        {property: 'og:url', content: 'https://www.decodemtl.com/courses'},
        {property: 'og:title', content: 'Top Web Development Courses in Montreal'},
        {property: 'og:description', content: 'Web Development Courses in HTML & CSS, JavaScript, and Full-Stack Web Development. Become a Web Developer at Montreal\'s leading Web Development school.'},
        {property: 'og:image', content: 'https://www.decodemtl.com/downloads/decode_main.png'},
        {property: 'og:image:width', content: '1200'},
        {property: 'og:image:height', content: '630'},
        {property: 'fb:app_id', content: '215509578883196'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:site', content: '@decodemtl'},
        {name: 'twitter:title', content: 'Top Web Development Courses in Montreal'},
        {name: 'twitter:description', content: 'Web Development Courses in HTML & CSS, JavaScript, and Full-Stack Web Development. Become a Web Developer at Montreal\'s leading Web Development school.'},
        {name: 'twitter:image', content: 'https://www.decodemtl.com/downloads/decode_main.png'},
        {name: 'twitter:image:alt', content: 'DecodeMTL Students in Action'}
    ],
    fr: [
        {name: 'description', content: 'Cours de Développement Web en HTML et CSS, JavaScript, et le Développement Web Full-Stack. Devenez un développeur Web avec notre cours de développement Web de Montréal.'},
        {property: 'og:url', content: 'https://www.decodemtl.com/fr/cours'},
        {property: 'og:title', content: 'Le meilleur cours de développement Web à Montréal'},
        {property: 'og:description', content: 'Cours de Développement Web en HTML et CSS, JavaScript, et le Développement Web Full-Stack. Devenez un développeur Web avec notre cours de développement Web de Montréal.'},
        {property: 'og:image', content: 'https://www.decodemtl.com/downloads/decode_main.png'},
        {property: 'og:image:width', content: '1200'},
        {property: 'og:image:height', content: '630'},
        {property: 'fb:app_id', content: '215509578883196'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:site', content: '@decodemtl'},
        {name: 'twitter:title', content: 'Le meilleur cours de développement Web à Montréal'},
        {name: 'twitter:description', content: 'Cours de Développement Web en HTML et CSS, JavaScript, et le Développement Web Full-Stack. Devenez un développeur Web avec notre cours de développement Web de Montréal.'},
        {name: 'twitter:image', content: 'https://www.decodemtl.com/downloads/decode_main.png'},
        {name: 'twitter:image:alt', content: 'Les étudiants de DecodeMTL en action'}
    ]
}

const link = {
    en: [
        {"rel": "alternate", "hreflang": "fr","href":"https://www.decodemtl.com/fr/cours"},
    ],
    fr: [
        {"rel": "alternate", "hreflang": "en","href":"https://www.decodemtl.com/courses"},
    ]
}

const AllCourses = (props) => {

    return (
        <div>
            <Helmet
                title={props.intl.formatMessage({id: "pages.courses.webDevelopment", defaultMessage: "Web Development Courses"})}
                meta={meta[props.intl.locale]}
                link={meta[props.intl.locale]}
            />
            <CourseHero moduleTitle={props.intl.formatMessage({id: "pages.allCourses.WebDevelopment", defaultMessage: "Web Development"})} jumboTitle={props.intl.formatMessage({id: "pages.allCourses.courses", defaultMessage: "Courses"})} text={props.intl.formatMessage({id: "pages.allCourses.browseOur", defaultMessage: "Browse our upcoming Full-Time and Part-Time courses."})}/>
            <CourseItem courses={courses[props.intl.locale]}/>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: courseListJson}}/>
        </div>
    );

};

AllCourses.propTypes = {
    children: React.PropTypes.element
};

export default injectIntl(AllCourses);