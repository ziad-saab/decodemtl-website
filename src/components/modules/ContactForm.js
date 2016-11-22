import React from 'react';
import formSerialize from 'form-serialize';
import {withRouter} from 'react-router';
import {FormattedMessage} from 'react-intl';
import { injectIntl } from 'react-intl';

import {contact} from 'APP/api';

const ContactForm = React.createClass({
    propTypes: {
        router: React.PropTypes.object
    },
    getInitialState(){
        return {
            confirm: false,
            status: false
        };
    },
    _handleSubmit(e) {
        e.preventDefault();
        const userData = formSerialize(e.target, {hash: true});
        contact(userData)
            .then(() => {
                this.props.router.push({pathname: '/success', query: {status: 'success'}})
            })
            .catch(() => {
                this.props.router.push({pathname: '/success', query: {status: 'failed'}})
            });
    },
    render() {
        return (
            <section className="module">
                <div className="wrapper">
                    <div className="module-boxed">
                        <form className="contact-form" onSubmit={this._handleSubmit}>
                            <h3 className="module-title-medium">
                                <FormattedMessage
                                    id="modules.ContactForm.formTitle"
                                    defaultMessage="What can we do for you?"
                                />
                            </h3>
                            <section className="contact-details-section">
                                <div className="required">
                                    <label htmlFor="first-name" className="visually-hidden">First Name</label>
                                    <input type="text" name="first-name" id="first-name"
                                           placeholder={this.props.intl.formatMessage({id: "pages.apply.firstName", defaultMessage: "First Name"})}
                                           aria-required required/>
                                </div>
                                <div className="required">
                                    <label htmlFor="last-name" className="visually-hidden">Last Name</label>
                                    <input type="text" name="last-name" id="last-name" placeholder={this.props.intl.formatMessage({id: "pages.apply.lastName", defaultMessage: "Last Name"})}
                                           aria-required required/>
                                </div>

                                <div className="required">
                                    <label htmlFor="tel" className="visually-hidden">Your Phone</label>
                                    <input type="tel" name="tel" id="tel" placeholder={this.props.intl.formatMessage({id: "pages.apply.yourPhone", defaultMessage: "Your Phone"})}
                                           aria-required required/>
                                </div>

                                <div className="required">
                                    <label htmlFor="email" className="visually-hidden">Email</label>
                                    <input type="email" name="email" placeholder={this.props.intl.formatMessage({id: "pages.apply.yourEmail", defaultMessage: "Your Email"})} aria-required
                                           required/>
                                </div>
                            </section>
                            <section className="message-section">
                                <label htmlFor="message" className="visually-hidden">Your message</label>
                                <textarea name="message" id="message" placeholder={this.props.intl.formatMessage({id: "modules.ContactForm.yourMessage", defaultMessage: "Your Message"})}/>
                            </section>
                            <section className="submit-section">
                                <div className="optin-checkbox">
                                    <input type="checkbox" name="list-optin" id="list-optin" value="yes"/>
                                    <label htmlFor="list-optin">
                                        <FormattedMessage
                                            id="modules.ContactForm.newsletter"
                                            defaultMessage="I want to receive info about new courses, workshops and events."
                                        />
                                    </label>
                                </div>
                                <input className="btn-large" type="submit" name="submit" value={this.props.intl.formatMessage({id: "pages.apply.submit", defaultMessage: "Submit"})}/>
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
                            </section>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
});

export default withRouter(injectIntl(ContactForm));