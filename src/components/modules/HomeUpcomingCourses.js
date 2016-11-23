import React from 'react';
import UpcomingCourses from '../tables/UpcomingCourses';
import {FormattedMessage} from 'react-intl';

const HomeUpcomingCourses = (props) => {
    return (
        <section className="module module-course tuition-dates">
            <div className="wrapper module-bg-img">
                <h2 className="module-title">
                    <FormattedMessage
                        id="modules.HomeUpcomingCourses.heading"
                        defaultMessage="Upcoming Courses"
                    />
                </h2>
                <div className="multi-column-table">
                    {props.upcomingCourses.map((info, i) => <UpcomingCourses key={i} {...info} />)}
                </div>
            </div>
        </section>
    );
};

HomeUpcomingCourses.propTypes ={
    upcomingCourses: React.PropTypes.array.isRequired
};

export default HomeUpcomingCourses;