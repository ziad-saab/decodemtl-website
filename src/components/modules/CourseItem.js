import React from 'react';
import Link from 'APP/components/navigation/Link';
import {FormattedMessage} from 'react-intl';

//NOTE: It's assumed that each course item will only have TWO sessions. As such code limited to two sessions.
const CourseItem = (props) => {
    return (
        <div>
            {props.courses.map((course, i) => {
                // Convert to <sup>
                const formatedDates = course.nextSessions.map((session, i) => {
                    const date = session.match(/([a-z]+.\d+)([a-z]+)(.+)/i);
                    // @TODO french dates using moment
                    return date ? <li itemProp="startDate">{date[1]}<sup>{date[2]}</sup>{date[3]}</li> : <li itemProp="startDate">{session}</li>;
                });
                return (
                    <article key={i} className="module course-item">
                        <div className="wrapper">
                            <div className="module-boxed course-item-container">
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
                                        <h4>
                                            <FormattedMessage
                                            id="modules.CourseItem.UpcomingCourses"
                                            defaultMessage="Upcoming Courses"
                                            />
                                        </h4>
                                        <ul className="course-sessions">
                                            {formatedDates[0]}
                                            {formatedDates[1]}
                                        </ul>
                                    </div>
                                    <Link to={`/courses/${encodeURI(course.link)}`}
                                          className="cta btn-primary btn-small" itemProp='url'>
                                        <FormattedMessage
                                            id="modules.CourseItem.ViewCourse"
                                            defaultMessage="View Course"
                                        />
                                    </Link>
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
