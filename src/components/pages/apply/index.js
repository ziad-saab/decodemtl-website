import React from 'react';
import formSerialize from 'form-serialize';
import axios from 'axios';
import {withRouter} from 'react-router';
import Helmet from 'react-helmet';
import {FormattedMessage} from 'react-intl';
import { injectIntl } from 'react-intl';

import Hero from '../../modules/Hero';
import courses from '../../../config/courses';

const Apply = React.createClass({
    propTypes: {
        router: React.PropTypes.object.isRequired
    },
    _handleSubmit(e) {
        e.preventDefault();
        const data = formSerialize(e.target, {hash: true});
        axios.post('/api/apply', data)
            .then(({data: response}) => {
                //Multiple response options available
                if (response.status === 'success') {
                    //success, no subscription
                    this.props.router.push({pathname: '/confirmation', query: {status: 'success'}})
                } else {
                    this.props.router.push({pathname: '/confirmation', query: {status: 'failed'}})
                }
            })
            .catch(err => {
                this.props.router.push({pathname: '/confirmation', query: {status: 'failed'}})
            })
    },
    render() {
        return (
            <div>
                <Helmet
                    title="Apply to DecodeMTL"
                    meta={[
                        {name: 'description', content: 'Interested in applying to DecodeMTL? Fill out this quick application form to register for any of our courses.'},
                        {property: 'og:url', content: 'https://www.decodemtl.com/apply'},
                        {property: 'og:title', content: 'Apply to DecodeMTL'},
                        {property: 'og:description', content: 'Looking to launch a new career in tech? DecodeMTL offer\'s Montreal\'s leading courses in Web Development. Apply today to start learning something new!'},
                        {property: 'og:image', content: 'https://www.decodemtl.com/downloads/decode_main.png'},
                        {property: 'og:image:width', content: '1200'},
                        {property: 'og:image:height', content: '630'},
                        {property: 'fb:app_id', content: '215509578883196'},
                        {name: 'twitter:card', content: 'summary_large_image'},
                        {name: 'twitter:site', content: '@decodemtl'},
                        {name: 'twitter:title', content: 'Apply to DecodeMTL'},
                        {name: 'twitter:description', content: 'Looking to launch a new career in tech? DecodeMTL offer\'s Montreal\'s leading courses in Web Development. Apply today to start learning something new!'},
                        {name: 'twitter:image', content: 'https://www.decodemtl.com/downloads/decode_main.png'},
                        {name: 'twitter:image:alt', content: 'DecodeMTL Students in Action'}
                    ]}
                    link={[
                        {"rel": "alternate", "hreflang": "fr","href":"https://www.decodemtl.com/fr/postuler"},
                    ]}
                />
                <Hero moduleTitle={this.props.intl.formatMessage({id: "pages.apply.submitYour", defaultMessage: "Submit Your"})} jumboTitle="Application"/>
                <section className="module">
                    <div className="wrapper">
                        <div className="module-boxed">
                            <form onSubmit={this._handleSubmit} className="application-form" action="" method="post">
                                {/* ======== contact details ======== */}
                                <section className="contact-details-section">
                                    <h3 className="module-title-medium">
                                        <FormattedMessage
                                            id="pages.apply.contactDetails"
                                            defaultMessage="Contact Details"
                                        />
                                    </h3>
                                    <div className="required">
                                        <label htmlFor="first-name" className="visually-hidden">First Name</label>
                                        <input type="text" name="first-name" id="first-name" placeholder={this.props.intl.formatMessage({id: "pages.apply.firstName", defaultMessage: "First Name"})}
                                               aria-required={true} required/>
                                    </div>
                                    {/* /first-name */}

                                    <div className="required">
                                        <label htmlFor="last-name" className="visually-hidden">Last Name</label>
                                        <input type="text" name="last-name" id="last-name" placeholder={this.props.intl.formatMessage({id: "pages.apply.lastName", defaultMessage: "Last Name"})}
                                               aria-required={true} required/>
                                    </div>
                                    {/* /last-name */}

                                    <div className="required">
                                        <label htmlFor="tel" className="visually-hidden">Your Phone</label>
                                        <input type="tel" name="tel" id="tel" placeholder={this.props.intl.formatMessage({id: "pages.apply.yourPhone", defaultMessage: "Your Phone"})}
                                               aria-required={true}
                                               required/>
                                    </div>
                                    {/* /phone */}

                                    <div className="required">
                                        <label htmlFor="email" className="visually-hidden">Email</label>
                                        <input type="email" name="email" placeholder={this.props.intl.formatMessage({id: "pages.apply.yourEmail", defaultMessage: "Your Email"})} aria-required={true}
                                               required/>
                                    </div>
                                    {/* /email */}
                                    <div>
                                      <label htmlFor="linkedin" className="visually-hidden">LinkedIn URL</label>
                                      <input type="text" name="linkedin" id="linkedin" placeholder={this.props.intl.formatMessage({id: "pages.apply.linkedin", defaultMessage: "Linkedin URL"})}/>
                                    </div>
                                    {/* /linkedin */}
                                </section>
                                {/* /.contact-details-section */}

                                {/* ======== course selection ======== */}
                                <section className="course-selection-section">
                                    <h3 className="module-title-medium">
                                        <FormattedMessage
                                            id="pages.apply.courseSelection"
                                            defaultMessage="Course Selection"
                                        />
                                    </h3>
                                    <label htmlFor="course-selection">
                                        <FormattedMessage
                                            id="pages.apply.whichCourse"
                                            defaultMessage="Which course are you applying to:"
                                        /><span
                                        className="required">*</span></label>
                                    <fieldset className="course-selection" aria-required={true}>
                                        {courses.map((course, i) => {
                                            return course.nextSessions.map(session => {
                                                return (
                                                    <div key={i + session}>
                                                        <input type="radio" name="course"
                                                               value={course.title + ' ' + course.jumboTitle + ' ' + session}
                                                               id={course.jumboTitle + session}
                                                               required/>
                                                        <label
                                                            htmlFor={course.jumboTitle + session}>{course.title} {course.jumboTitle}
                                                            ({session})</label>
                                                    </div>
                                                );
                                            });
                                        })}
                                    </fieldset>
                                    {/* /.course-selection */}
                                </section>
                                {/* /.course-selection-section */}

                                {/* ======== technical knowledge ======== */}
                                <section className="tech-background-section">
                                    <h3 className="module-title-medium">
                                        <FormattedMessage
                                            id="pages.apply.techKnowledge"
                                            defaultMessage="Technical Knowledge"
                                        />
                                    </h3>
                                    <label htmlFor="tech-background">
                                        <FormattedMessage
                                            id="pages.apply.whatIs"
                                            defaultMessage="What is your current level of technical knowledge:"
                                        /><span
                                            className="required">*</span></label>
                                    <select name="tech-background" id="tech-background" aria-required={true} required>
                                        <option value="">
                                            <FormattedMessage
                                                id="pages.apply.select"
                                                defaultMessage="-- select --"
                                            />
                                        </option>
                                        <option value="Just getting started">
                                            <FormattedMessage
                                                id="pages.apply.justGetting"
                                                defaultMessage="Just getting started"
                                            />
                                        </option>
                                        <option value="Dabbled with a few tutorials">
                                            <FormattedMessage
                                                id="pages.apply.dabbledWith"
                                                defaultMessage="Dabbled with a few tutorials"
                                            />
                                        </option>
                                        <option value="Built an app or website">
                                            <FormattedMessage
                                                id="pages.apply.builtAn"
                                                defaultMessage="Built an app or website"
                                            />
                                        </option>
                                        <option value="Understand OO programming">
                                            <FormattedMessage
                                                id="pages.apply.understand"
                                                defaultMessage="Understand OO programming"
                                            />
                                        </option>
                                        <option value="Professional Developer">
                                            <FormattedMessage
                                                id="pages.apply.proDev"
                                                defaultMessage="Professional Developer"
                                            />
                                        </option>
                                    </select>
                                    {/* /.technical dropdown */}
                                </section>
                                {/* /.tech-background-section */}

                                {/* ======== Goals ======== */}
                                <section className="goals-section">
                                    <h3 className="module-title-medium">
                                        <FormattedMessage
                                            id="pages.apply.goals"
                                            defaultMessage="Goals"
                                        />
                                    </h3>
                                    <label htmlFor="hopes">
                                        <FormattedMessage
                                            id="pages.apply.whatDo"
                                            defaultMessage="What do you hope to achieve after the program?"
                                        />
                                    </label>
                                    <fieldset className="hopes">
                                        <div>
                                            <input type="checkbox" name="hope" value="Get a job as a developer"
                                                   id="new-job"/>
                                            <label htmlFor="new-job">
                                                <FormattedMessage
                                                    id="pages.apply.getJob"
                                                    defaultMessage="Get a job as a developer"
                                                />
                                            </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="hope" value="Return to a previous job/company"
                                                   id="old-job"/>
                                            <label htmlFor="old-job">
                                                <FormattedMessage
                                                    id="pages.apply.returnTo"
                                                    defaultMessage="Return to a previous job/company"
                                                />
                                            </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="hope" value="Start a company"
                                                   id="start-company"/>
                                            <label htmlFor="start-company">
                                                <FormattedMessage
                                                    id="pages.apply.startA"
                                                    defaultMessage="Start a company"
                                                />
                                            </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="hope"
                                                   value="Go back to school / continue learning" id="learn"/>
                                            <label htmlFor="learn">
                                                <FormattedMessage
                                                    id="pages.apply.goBack"
                                                    defaultMessage="Go back to school / continue learning"
                                                />
                                            </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="hope" value="other" id="other"/>
                                            <label htmlFor="other">
                                                <FormattedMessage
                                                    id="pages.apply.other"
                                                    defaultMessage="Other"
                                                />
                                            </label>
                                        </div>
                                    </fieldset>
                                    {/* /.hopes */}
                                </section>
                                {/* /.goals-section */}

                                {/* ======== About yourself ======== */}
                                <section className="about-section">
                                    <h3 className="module-title-medium">
                                        <FormattedMessage
                                            id="pages.apply.aboutYourself"
                                            defaultMessage="About Yourself"
                                        />
                                    </h3>
                                    <label htmlFor="message">
                                        <FormattedMessage
                                            id="pages.apply.isThere"
                                            defaultMessage="Is there anything else you would like to share with us?"
                                        />
                                    </label>
                                    <textarea name="message" id="message" placeholder={this.props.intl.formatMessage({id: "pages.apply.anything", defaultMessage: "Anything Goes..."})}/>
                                </section>
                                {/* /.about-section */}

                                {/* ======== submit ======== */}
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
                                {/* /.submit-section */}
                            </form>
                            {/* /.contact-form */}
                        </div>
                        {/* /.module-boxed */}
                    </div>
                    {/* /.wrapper */}
                </section>
            </div>
        );
    }
});

export default withRouter(injectIntl(Apply));