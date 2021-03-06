import React from 'react';
import {FormattedMessage} from 'react-intl';
import Link from 'APP/components/navigation/Link';

//req.keys() is an array with all the relative paths of the images
// req.keys().map(key => req(key)) --> require("../../assets/images/partner-logos/" + key);
const req = require.context("../../assets/images/partner-logos", true, /^.*\.png$/i);

const PartnersLogos = (props) => {
    let employerLink = '/employers';
    if (props.isEmployersPage) {
        employerLink = 'mailto:hello@decodemtl.com?subject=Tell me more about your students!&body=Hello Decode! Please let me know more about your awesome students!'
    }
    return (
        <section className="module partner-logos-module module-boxed-medium">
            <div className="wrapper">
                <h4>
                    <FormattedMessage
                        id="modules.PartnersLogos.ourGrads"
                        defaultMessage="Our grads work with these fine folks"
                    />
                </h4>
                <div className="partner-logos-container">
                    {req.keys().map((img, i) => (
                        <div key={i} className="partner-logo">
                            <img src={req(img)} alt=""/>
                        </div>
                    ))}
                </div>
                {/*<!-- /.partner-logo-container -->*/}
                <div className="link-more text-body-small">
                    <Link to={employerLink}>
                        <FormattedMessage
                            id="modules.PartnersLogos.joinOur"
                            defaultMessage="Looking to hire our grads? Click here"
                        /><span className="fa fa-caret-right" aria-hidden="true"/>
                    </Link>
                </div>
            </div>
            {/* <!-- /.wrapper -->*/}
        </section>
    );
};

PartnersLogos.propTypes = {
  isEmployersPage: React.PropTypes.bool
};

PartnersLogos.defaultProps = {
  isEmployersPage: true
};

export default PartnersLogos;
