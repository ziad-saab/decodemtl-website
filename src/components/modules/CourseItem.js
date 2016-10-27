import React from 'react';
import {Link} from 'react-router';

//NOTE: It's assumed that each course item will only have TWO sessions. As such code limited to two sessions.
const CourseItem = (props) => {
    return (
        <div itemScope itemType ='http://schema.org/Event'>
            {props.courses.map((course, i) => {
                // Convert to <sup>
                const formatedDates = course.nextSessions.map((session, i) => {
                    const date = course.nextSessions[i].match(/([a-z]+.\d+)([a-z]+)(.+)/i);
                    return <li itemProp="startDate">{date[1]}<sup>{date[2]}</sup>{date[3]}</li>
                });
                return (
                    <article key={i} className="module course-item">
                        <div className="wrapper">
                            <div className="module-boxed course-item-container itemScope itemType ='http://schema.org/Event'">
                                <Link to={`/courses/${encodeURI(course.link)}`}>
                                    <div className="course-description">
                                        <h2 itemProp="name" className="module-title-medium">{course.title}<span
                                            className="module-title-jumbo">{course.jumboTitle}</span></h2>
                                        <p itemProp="description">{course.text}</p>
                                    </div>
                                </Link>
                                <aside className="course-details module-boxed-medium">
                                    <div className="course-details-block">
                                        <h4>{course.type}</h4>
                                        <ul className="course-length">
                                            <li>{course.duration}</li>
                                            <li>{course.hours}</li>
                                            <li>{course.days}</li>
                                        </ul>
                                    </div>
                                    <div className="course-details-block">
                                        <h4>Upcoming Courses</h4>
                                        <ul className="course-sessions">
                                            {formatedDates[0]}
                                            {formatedDates[1]}
                                        </ul>
                                    </div>
                                    <Link to={`/courses/${encodeURI(course.link)}`}
                                          className="cta btn-primary btn-small" itemProp='url'>View
                                        Course</Link>
                                </aside>
                                {/*<!-- /.course-details -->*/}
                            </div>
                            {/*<!-- /.module-boxed -->*/}
                        </div>
                        {/*<!-- /.wrapper -->*/}
                    </article>
                );
            })}
        </div>
    );
};

CourseItem.propTypes = {};

export default CourseItem;