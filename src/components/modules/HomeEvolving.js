import React from 'react';
import {Link} from 'react-router';
import {FormattedMessage} from 'react-intl';

const HomeEvolving = (props) => {
    return (
        <section className="module evolving-module">
            <div className="wrapper">
                <div className="module-boxed">
                    <h2 className="module-title">
                        <FormattedMessage
                            id="modules.HomeEvolving.header"
                            defaultMessage="Modern Education"
                        />
                    </h2>
                    <div className="row-container one-half-container">
                        <div className="one-half-content">
                            <p>
                                <FormattedMessage
                                    id="modules.HomeEvolving.subText"
                                    defaultMessage="We believe education should evolve with the times. Unlike traditional educational institutions, we are in close contact with employers, ensuring the subjects we teach are the most in-demand skills of today."
                                />
                            </p>
                            <div className="link-more text-body-small">
                                <Link to="/about">
                                    <FormattedMessage
                                        id="modules.HomeEvolving.link"
                                        defaultMessage="Read more about us here"
                                    /><span className="fa fa-caret-right" aria-hidden="true" /></Link>
                            </div>
                        </div>
                        <div className="one-half-content">
                            <div className="cta-widget module-boxed">
                                <div className="text-body-small">
                                    <FormattedMessage
                                        id="modules.HomeEvolving.contact"
                                        defaultMessage="Want to learn more about life as a DecodeMTL student?"
                                    />
                                </div>
                                <div className="cta cta-single">
                                    <a onClick={props.handleClick} href="#" className="btn-primary btn-small">
                                        <FormattedMessage
                                            id="modules.HomeEvolving.visit"
                                            defaultMessage="Schedule a visit"
                                        />
                                    </a>
                                </div>
                                <div className="text-body-small"><a className="phone-link" itemProp="telephone" href="tel:1-888-511-9155">
                                    <FormattedMessage
                                        id="modules.HomeEvolving.phone"
                                        defaultMessage="Or Give us a call: "
                                    /></a></div>
                            </div>
                        </div>
                    </div>
                    {/*!-- /.row-container --*/}
                </div>
                {/*!-- /.module-boxed --*/}
            </div>
            {/*!-- /.wrapper --*/}
        </section>
    );
};

HomeEvolving.propTypes = {
    handleClick: React.PropTypes.func.isRequired
};

export default HomeEvolving;