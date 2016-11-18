import React from 'react';
import {Link} from 'react-router';
import {FormattedMessage} from 'react-intl';

const CourseSchedule = (props) => {
    return (
        <section className="module module-course course-schedule">
            <div className="wrapper">
                <div style={props.background ? {backgroundImage: 'url(' + props.background + ')'} : null} className="module-bg-img">
                    <h2 className="module-title">
                        <FormattedMessage
                            id="modules.CourseSchedule.typicalDay"
                            defaultMessage="Typical Day"
                        />
                    </h2>
                    <p>
                        <FormattedMessage
                            id="modules.CourseSchedule.onAny"
                            defaultMessage="On any given day, you can expect a mix of lectures, hands-on coding, teamwork, and events."
                        />
                    </p>
                    {/*!-- .two-col-table --*/}
                    <div className="two-col-table">
                        <div className="row">
                            <h4 className="cell cell-header">
                                <FormattedMessage
                                    id="modules.CourseSchedule.class"
                                    defaultMessage="Class — 10AM"
                                />
                            </h4>
                            <div className="cell cell-content">
                                <FormattedMessage
                                    id="modules.CourseSchedule.grab"
                                    defaultMessage="Grab a coffee and take a seat. Our mornings ussually kick-off with a lecture where we introduce the day's topics."
                                />
                            </div>
                        </div>
                        <div className="row">
                            <h4 className="cell cell-header">
                                <FormattedMessage
                                    id="modules.CourseSchedule.lunch"
                                    defaultMessage="Lunch — 12PM"
                                />
                            </h4>
                            <div className="cell cell-content">
                                <FormattedMessage
                                    id="modules.CourseSchedule.eatLunch"
                                    defaultMessage="Eat your lunch in one of our kitchens while catching a lunch n' learn or dine in one of many downtown Montreal restaurants."
                                />
                            </div>
                        </div>
                        <div className="row">
                            <h4 className="cell cell-header">
                                <FormattedMessage
                                    id="modules.CourseSchedule.labs"
                                    defaultMessage="Labs — 1PM"
                                />
                            </h4>
                            <div className="cell cell-content">
                                <FormattedMessage
                                    id="modules.CourseSchedule.grabYour"
                                    defaultMessage="Grab your laptop and a coding partner and get working. Afternoons are spent problem solving and building projects."
                                />
                            </div>
                        </div>
                        <div className="row">
                            <h4 className="cell cell-header">
                                <FormattedMessage
                                    id="modules.CourseSchedule.study"
                                    defaultMessage="Study — 6PM"
                                />
                            </h4>
                            <div className="cell cell-content">
                                <FormattedMessage
                                    id="modules.CourseSchedule.takeAdinner"
                                    defaultMessage="Take a dinner break and get right back to coding. We have staff around until 9PM. Most students will stick around and continue working."
                                />
                            </div>
                        </div>
                    </div>
                    {/*!-- /.two-col-table --*/}
                </div>
                <div className="info-block info-block-blue info-block-centered">
                    <FormattedMessage
                        id="modules.CourseSchedule.readMore"
                        defaultMessage="Read more about our "
                    />
                    <Link to="/wework">
                        <FormattedMessage
                            id="modules.CourseSchedule.workspace"
                            defaultMessage="workspace"
                        />
                    </Link>
                    <FormattedMessage
                        id="modules.CourseSchedule.and"
                        defaultMessage=" and "
                    />
                    <Link to="/housing">
                        <FormattedMessage
                            id="modules.CourseSchedule.housing"
                            defaultMessage="student housing options."
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
};

CourseSchedule.propTypes = {
    background: React.PropTypes.string
};

export default CourseSchedule;