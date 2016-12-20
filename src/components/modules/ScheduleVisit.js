import React from 'react';
import {withRouter} from 'react-router';
import {FormattedMessage} from 'react-intl';
import { injectIntl } from 'react-intl';

import {visit} from 'APP/api';

const ScheduleVisit = React.createClass({
    propTypes: {
        handleClick: React.PropTypes.func.isRequired,
        toggleModal: React.PropTypes.func
    },
    _handleSubmit(e) {
        e.preventDefault();
        const email = this._email.value.trim().toLowerCase();
        const optin = this._optin.checked;
        visit(email, optin)
            .then(() => {
                this._email.value = '';
                this.props.handleClick({status: 'success'})
            })
            .catch(() => {
                this._email.value = '';
                this.props.handleClick({status: 'failed'})
            });
    },
    render() {
        return (
            <section className="module">
                <div className="wrapper">
                    <div className="module-boxed">
                        <p className="text-body-large">
                            <FormattedMessage
                                id="modules.ScheduleVisit.wantTo"
                                defaultMessage="Want to see if DecodeMTL is right for you?"
                            />
                        </p>
                        <p>
                            <FormattedMessage
                                id="modules.ScheduleVisit.enterYour"
                                defaultMessage="Enter your email and we will get back to you asap to schedule a visit."
                            />
                        </p>
                        <form className="optin-form schedule-visit" onSubmit={this._handleSubmit}>
                            <label htmlFor="email" className="visually-hidden">Email</label>
                            <input type="email" name="email" placeholder={this.props.intl.formatMessage({id: "pages.apply.yourEmail", defaultMessage: "Your Email"})} ref={email => {
                                this._email = email
                            }}/>
                            <input className="btn-large" type="submit" name="submit" value={this.props.intl.formatMessage({id: "modules.ScheduleVisit.submit", defaultMessage: "Submit"})}/>
                            <div className="optin-checkbox">
                                <input type="checkbox" name="list-optin" id="list-optin" value="yes" ref={optin => {
                                    this._optin = optin
                                }}/>
                                <label htmlFor="list-optin">
                                    <FormattedMessage
                                        id="modules.ContactForm.newsletter"
                                        defaultMessage="I want to receive info about new courses, workshops and events."
                                    />
                                </label>
                            </div>
                            <div className="foot-note text-body-small text-subtle">
                                <FormattedMessage
                                    id="modules.ContactForm.policy"
                                    defaultMessage="By providing us with your email, you agree to the terms of our "
                                />
                                <a href="/privacy">
                                    <FormattedMessage
                                        id="modules.ContactForm.privacy"
                                        defaultMessage="Privacy Policy"
                                    />
                                </a>
                                <FormattedMessage
                                    id="modules.ContactForm.and"
                                    defaultMessage=" and "
                                />
                                <a href="/terms">
                                    <FormattedMessage
                                        id="modules.ContactForm.terms"
                                        defaultMessage="Terms of Service."
                                    />
                                </a>
                            </div>
                        </form>
                        {/* /.optin-form */}
                    </div>
                    {/* /.module-boxed */}
                </div>
                {/* /.wrapper */}
            </section>
        );
    }
});

export default withRouter(injectIntl(ScheduleVisit));
