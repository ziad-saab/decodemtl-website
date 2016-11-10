import React from 'react';
import Helmet from 'react-helmet';

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

const AllCourses = (props) => {

    return (
        <div>
            <Helmet
                title="Web Development Courses"
                meta={[
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
                ]}
                link={[
                    {"rel": "alternate", "hreflang": "fr","href":"https://www.decodemtl.com/fr/cours"},
                ]}
            />
            <CourseHero moduleTitle={"web development"} jumboTitle={"courses"} text={"Browse our upcoming Full-Time and Part-Time courses."}/>
            <CourseItem courses={courses}/>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: courseListJson}}/>
        </div>
    );

};

AllCourses.propTypes = {
    children: React.PropTypes.element
};

export default AllCourses;