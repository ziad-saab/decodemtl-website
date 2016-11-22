import React from 'react';
import Helmet from 'react-helmet';
import {FormattedMessage} from 'react-intl';
import { injectIntl } from 'react-intl';

import Hero from '../../../components/modules/Hero';
import ContactForm from '../../../components/modules/ContactForm';
import OneHalfColumn from '../../../components/modules/OneHalfColumn';

import googleMap from '../../../assets/images/map.png'

const Contact = (props) => {

    const columnLeft = (
        <ul className="contact-details-list">
            <li>
                <h3 className="module-title-medium">
                    <FormattedMessage
                        id="pages.contact.operatingOut"
                        defaultMessage="OPERATING OUT OF WEWORK IN"
                    />
                    <br/>
                    <FormattedMessage
                        id="pages.contact.montrealIconic"
                        defaultMessage="MONTREAL'S ICONIC PLACE VILLE MARIE"
                    />
                </h3>
            </li>
            <li>
                <a href="https://goo.gl/maps/RmSE1PKEiXH2">
                    <span className="fa fa-map-marker fa-fw" aria-hidden="true"/>
                    <span>4-3 Place Ville Marie, </span>
                    <span>Montréal, </span>
                    <span>Québec </span>
                    <span>H3B 2E3</span>
                </a>
            </li>
            <li>
                <a href="tel:1-888-511-9155"><span
                    className="fa fa-phone fa-fw" aria-hidden="true"/> 1-888-511-9155</a>
            </li>
            <li>
                <a href="mailto:hello@decodemtl.com"><span
                    className="fa fa-envelope fa-fw" aria-hidden="true"/> hello@decodemtl.com</a>
            </li>
        </ul>);

    const columnRight = (
        <img src={googleMap} alt="DecodeMTL Google Map Location"/>
    );
    return (
        <div>
            <Helmet
                title="Contact DecodeMTL"
                meta={[
                    {name: 'description', content: 'DecodeMTL is located in downtown Montreal. Our primary location is in WeWork Place Ville Marie. Contact us here if you have any questions.'},
                    {property: 'og:url', content: 'https://www.decodemtl.com/contact'},
                    {property: 'og:title', content: 'Contact DecodeMTL'},
                    {property: 'og:description', content: 'DecodeMTL is located in downtown Montreal. Our primary location is in WeWork Place Ville Marie. If you\'re interested to learn more about our programs, follow this link to contact us.'},
                    {property: 'og:image', content: 'https://www.decodemtl.com/downloads/decode_main.png'},
                    {property: 'og:image:width', content: '1200'},
                    {property: 'og:image:height', content: '630'},
                    {property: 'fb:app_id', content: '215509578883196'},
                    {name: 'twitter:card', content: 'summary_large_image'},
                    {name: 'twitter:site', content: '@decodemtl'},
                    {name: 'twitter:title', content: 'Contact DecodeMTL'},
                    {name: 'twitter:description', content: 'DecodeMTL is located in downtown Montreal. Our primary location is in WeWork Place Ville Marie. If you\'re interested to learn more about our programs, follow this link to contact us.'},
                    {name: 'twitter:image', content: 'https://www.decodemtl.com/downloads/decode_main.png'},
                    {name: 'twitter:image:alt', content: 'DecodeMTL Students in Action'}
                ]}
                link={[
                    {"rel": "alternate", "hreflang": "fr","href":"https://www.decodemtl.com/fr/nous-joindre"},
                ]}
            />
            <Hero moduleTitle={props.intl.formatMessage({id: "pages.contact.questions", defaultMessage: "Questions?"})} jumboTitle={props.intl.formatMessage({id: "pages.contact.contactUs", defaultMessage: "Contact Us"})}/>
            <ContactForm/>
            <OneHalfColumn contentLeft={columnLeft} contentRight={columnRight}/>
        </div>
    );
};


Contact.propTypes = {};

export default injectIntl(Contact);