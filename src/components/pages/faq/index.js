import React from 'react';
import Helmet from 'react-helmet';
import {FormattedMessage} from 'react-intl';
import { injectIntl } from 'react-intl';

import Hero from '../../../components/modules/Hero';
import FAQ from '../../../components/modules/FAQ';
import GenericTextModule from '../../../components/modules/GenericTextModule';


import {generalFAQ, financialsFAQ, immersiveFAQ} from '../../../config/globalFAQ';

const meta = {
    en: [
        {name: 'description', content: 'Everything you need to know about DecodeMTL! View DecodeMTL\'s frequently asked questions here.'},
        {property: 'og:url', content: 'https://www.decodemtl.com/faq'},
        {property: 'og:title', content: 'Learn Web Development - Montreal Coding Bootcamp'},
        {property: 'og:description', content: 'DecodeMTL offer\'s Montreal\'s most dynamic courses in tech. Learn to code through project based teaching from industry experts in a stimulating environment.'},
        {property: 'og:image', content: 'https://www.decodemtl.com/downloads/decode_main.png'},
        {property: 'og:image:width', content: '1200'},
        {property: 'og:image:height', content: '630'},
        {property: 'fb:app_id', content: '215509578883196'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:site', content: '@decodemtl'},
        {name: 'twitter:title', content: 'Learn Web Development - Montreal Coding Bootcamp'},
        {name: 'twitter:description', content: 'DecodeMTL offer\'s Montreal\'s most dynamic courses in tech. Learn to code through project based teaching from industry experts in a stimulating environment.'},
        {name: 'twitter:image', content: 'https://www.decodemtl.com/downloads/decode_main.png'},
        {name: 'twitter:image:alt', content: 'DecodeMTL Students in Action'}
    ],
    fr: [
        {name: 'description', content: 'Tout ce que vous devez savoir sur DecodeMTL! Consultez les questions fréquentes de DecodeMTL ici.'},
        {property: 'og:url', content: 'https://www.decodemtl.com/fr/faq'},
        {property: 'og:title', content: 'Apprennez le développement Web - Bootcamp de programmation à Montréal'},
        {property: 'og:description', content: 'DecodeMTL offre les cours de technologies les plus dynamiques à Montréal. Apprenez à programmer dans un environnement stimulant à travers une formation à base de projets mené par leurs experts de l’industrie.'},
        {property: 'og:image', content: 'https://www.decodemtl.com/downloads/decode_main.png'},
        {property: 'og:image:width', content: '1200'},
        {property: 'og:image:height', content: '630'},
        {property: 'fb:app_id', content: '215509578883196'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:site', content: '@decodemtl'},
        {name: 'twitter:title', content: 'Apprennez le développement Web - Bootcamp de programmation à Montréal'},
        {name: 'twitter:description', content: 'DecodeMTL offre les cours de technologies les plus dynamiques à Montréal. Apprenez à programmer dans un environnement stimulant à travers une formation à base de projets mené par leurs experts de l’industrie.'},
        {name: 'twitter:image', content: 'https://www.decodemtl.com/downloads/decode_main.png'},
        {name: 'twitter:image:alt', content: 'Les étudiants de DecodeMTL en action'}
    ]
}

const link = {
    en: [
        {"rel": "alternate", "hreflang": "fr","href":"https://www.decodemtl.com/fr/faq"},
    ],
    fr: [
        {"rel": "alternate", "hreflang": "en","href":"https://www.decodemtl.com/faq"},
    ]
}

const Faq = (props) => {
    const paragraphs = [
        (
            <p className="text-measure">
                <FormattedMessage
                    id="pages.faq.noProblem"
                    defaultMessage="No problem! If you have additional questions "
                />
                <span className="read-more"><a itemProp="email" href="mailto:hello@decodemtl.com">
                    <FormattedMessage
                        id="pages.faq.shootUs"
                        defaultMessage="shoot us an email"
                    /></a>
                </span>
                <br/>
                <FormattedMessage
                    id="pages.faq.orGive"
                    defaultMessage="or give us a toll-free call at  "
                />
                <span className="read-more"><a itemProp="telephone" href="tel:1-888-511-9155">1-888-511-9155</a></span>.
            </p>
        )
    ];
    return (
        <div>
            <Helmet
                title={props.intl.formatMessage({id: "pages.faq.everythingYou", defaultMessage: "Everything you need to know about DecodeMTL"})}
                meta={meta[props.intl.locale]}
                link={link[props.intl.locale]}
            />
            <Hero moduleTitle={props.intl.formatMessage({id: "pages.faq.frequentlyAsked", defaultMessage: "Frequently Asked"})} jumboTitle={props.intl.formatMessage({id: "pages.faq.questions", defaultMessage: "Questions"})}/>
            <FAQ isFaqPage title={props.intl.formatMessage({id: "pages.faq.general", defaultMessage: "General"})} faq={generalFAQ[props.intl.locale]} />
            <FAQ isFaqPage title={props.intl.formatMessage({id: "pages.faq.financials", defaultMessage: "Financials"})} faq={financialsFAQ[props.intl.locale]} />
            <FAQ isFaqPage title={props.intl.formatMessage({id: "pages.faq.immersive", defaultMessage: "Bootcamp"})} faq={immersiveFAQ[props.intl.locale]} />
            <GenericTextModule title={props.intl.formatMessage({id: "pages.faq.waitI", defaultMessage: "Wait I still have questions!"})} paragraphs={paragraphs}/>
        </div>
    );
};

Faq.propTypes = {};

export default injectIntl(Faq);
