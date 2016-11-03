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
                "url":"https://www.decodemtl.com/courses/javascript"
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
                ]}/>
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