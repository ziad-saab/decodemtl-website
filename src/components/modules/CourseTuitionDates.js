//TODO add proper id's to child elements once database is connected, usage of i is NOT recommended for keys
import React from 'react';
import Link from 'APP/components/navigation/Link';

import TuitionDates from '../tables/TuitionDates';
import {FormattedMessage} from 'react-intl';
import banqueNationaleLogo from '../../assets/images/banque-nationale-logo.svg'


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
                                    defaultMessage="Early bird pricing available up to {days} days before start date. Regular price: "
                                    values={{
                                          days: props.tuitionDates[0].price > 4000 ? 60 : 30
                                    }}
                                />{'$' + props.tuitionDates[0].price.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1,")}
                            </div>
                        </div>
                    </div>
                </div>

      			<div className="module-boxed module-boxed-medium">
      				<div className="row-container row-two-third-container">
      					<div className="one-third-content" aria-hidden="true">
      						<img src={banqueNationaleLogo} alt="" />
                        </div>
                        <div className="two-third-content">
                            <h3 className="module-title-medium">
                                <FormattedMessage
                                    id="modules.CourseTuitionDates.fundYour"
                                    defaultMessage="Fund your education for as little as $30/month"
                                />
                            </h3>
                            <p>
                                <FormattedMessage
                                    id="modules.CourseTuitionDates.weHave"
                                    defaultMessage="We have teamed up with the National Bank of Canada to provide you with a low-interest student loan applicable on any of our courses."
                                />
                            </p>
                            <p>
                                <span className="read-more">
                                    <Link to="/contact">
                                        <FormattedMessage
                                            id="modules.CourseTuitionDates.contactUs"
                                            defaultMessage="Contact us"
                                        />
                                    </Link>
                                </span>
                                <FormattedMessage
                                    id="modules.CourseTuitionDates.toFind"
                                    defaultMessage=" to find out how you can finance your education."
                                />
                            </p>
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
