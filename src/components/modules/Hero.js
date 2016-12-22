import React from 'react';
import {FormattedMessage} from 'react-intl';

import upcomingCourses from '../../config/upcomingCourses';


const nextStartDate = upcomingCourses.en[0].startDate;
const nextStartDateFR = upcomingCourses.fr[0].startDate;

//DO NOT CONVERT TO PRESENTATIONAL COMPONENT
//to attach "ref" to component the component must have state
const Hero = React.createClass({
    propTypes: {
        CTAP: React.PropTypes.func,
        CTAS: React.PropTypes.func,
        CTAPText: React.PropTypes.string,
        CTASText: React.PropTypes.string,
        CTAPLink: React.PropTypes.string,
        CTASLink: React.PropTypes.string,
        moduleTitle: React.PropTypes.string.isRequired,
        jumboTitle: React.PropTypes.string.isRequired,
        text: React.PropTypes.string,
        subText: React.PropTypes.string,
        tuitionDates: React.PropTypes.array
    },
    render() {
        const {CTAP, CTAPText, CTAS, CTASText,  moduleTitle, jumboTitle, text, subText, CTAPLink, CTASLink, tuitionDates} = this.props;
        function renderButtons() {
            return (
                <div className="cta-double">
                    {CTAP ? <CTAP text={CTAPText} path={CTAPLink}/> : null} {CTAS ? <CTAS path={CTASLink} text={CTASText}/> : null}
                </div>
            );
        }
        return (
            <header style={this.props.styles || null} className="module module-course hero-course">
                <div ref={wrapper => {
                    this._headerWrapper = wrapper
                }} className="wrapper">
                    <h1 className="module-title">{moduleTitle}<span className="module-title-jumbo">{jumboTitle}</span>
                    </h1>
                    {text ? <p className="text-body-large text-subtle text-measure">{text}</p> : null}
                    {subText ? <p className="text-body-small text-subtle text-measure">{subText}</p> : null}
                    <p className="text-body-small text-subtle">
                        <FormattedMessage
                            id="modules.Hero.nextBootcamp"
                            defaultMessage="Next bootcamp starts: {date}"
                            values={{ date: tuitionDates[0].startDate + " 2017"}}
                        />
                    </p>
                    {CTAS || CTAP ? renderButtons() : null}
                </div>
            </header>
        );
    }
});

export default Hero;
