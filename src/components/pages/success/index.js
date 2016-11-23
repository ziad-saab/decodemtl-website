import React from 'react';
import Helmet from 'react-helmet';
import {FormattedMessage} from 'react-intl';
import { injectIntl } from 'react-intl';

const link = {
    en: [
        {"rel": "alternate", "hreflang": "fr","href":"https://www.decodemtl.com/fr/succes"},
    ],
    fr: [
        {"rel": "alternate", "hreflang": "en","href":"https://www.decodemtl.com/success"},
    ]
}

const Success = (props) => {
    const status = props.location.query.status;

    if (status === 'success') {
        return (
            <section className="module">
                <div className="wrapper">
                    <h2 className="module-title">
                        <FormattedMessage
                            id="page.success.success"
                            defaultMessage="Success!"
                        />
                    </h2>
                    <p>
                        <FormattedMessage
                            id="page.success.yourRequest"
                            defaultMessage="Your request has been received. Our team is currently reviewing it and will get back to you within 48 hours (not including weekends or holidays)."
                        />
                    </p>
                </div>
            </section>
        );
    }
    return (
        <section className="module">
            <Helmet
                title={props.intl.formatMessage({id: "pages.success.confirmation", defaultMessage: "Contact Submission Confirmation"})}
                link={link[props.intl.locale]}
            />
            <div className="wrapper">
                <h2 className="module-title">
                    <FormattedMessage
                        id="page.success.somethingWent"
                        defaultMessage="Something went wrong!"
                    />
                </h2>
                <p>
                    <FormattedMessage
                        id="page.success.pleaseTry"
                        defaultMessage="Please try again! If the problem persists, please contact "
                    /><a href="mailto:hello@decodemtl.com">hello@decodemtl.com</a>.</p>
            </div>
        </section>
    );

};

Success.propTypes = {};

export default injectIntl(Success);