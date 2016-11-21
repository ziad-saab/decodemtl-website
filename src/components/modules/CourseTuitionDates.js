//TODO add proper id's to child elements once database is connected, usage of i is NOT recommended for keys
import React from 'react';
import TuitionDates from '../tables/TuitionDates';
import {FormattedMessage} from 'react-intl';

const CourseTuitionDates = (props) => {
    return (
        <section className="module module-course tuition-dates">
            <div className="wrapper">
                <div style={props.background ? {backgroundImage: 'url(' + props.background + ')'} : null}
                     className="module-bg-img">
                    <h2 className="module-title">
                        <FormattedMessage
                            id="modules.CourseTuitionDates.header"
                            defaultMessage="Tuition & Dates"
                        />
                    </h2>
                    <div className="multi-column-table">
                        {props.tuitionDates.map((info, i) => <TuitionDates key={i} {...info} />)}
                        <div className="row">
                            <div className="table-footnote text-subtle">
                                <span className="fa fa-bolt" aria-hidden="true" title="Early bird pricing"/>
                                <span className="sr-only">Early bird pricing</span>
                                &nbsp;=
                                    <FormattedMessage
                                        id="modules.CourseTuitionDates.earlyBird"
                                        defaultMessage="Early bird pricing available up to 30 days before start date. Regular price: "
                                    />{'$' + props.tuitionDates[0].price.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1,")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

CourseTuitionDates.propTypes = {
    tuitionDates: React.PropTypes.array.isRequired,
    background: React.PropTypes.string
};

export default CourseTuitionDates;