import React from 'react';
import Helmet from 'react-helmet';
import { injectIntl } from 'react-intl';

import Hero from '../../../components/modules/Hero';
import FormOptin from '../../../components/modules/FormOptin';
import UpcomingEvents from '../../../components/modules/UpcomingEvents';
// import GreenImageBanner from '../../../components/modules/GreenImageBanner';

// import bannerBackground from '../../../assets/images/module-bg-wework-common.jpg';
import events from '../../../config/events';

const meta = {
    en: [
        {name: 'description', content: 'Web developer events, coding workshops, and free web developer hiring events at DecodeMTL.'},
        {property: 'og:url', content: 'https://www.decodemtl.com/events'},
        {property: 'og:title', content: 'DecodeMTL Events'},
        {property: 'og:description', content: 'Check out DecodeMTL\'s web developer events, coding workshops, and free web developer hiring events.'},
        {property: 'og:image', content: 'https://www.decodemtl.com/downloads/decode_main.png'},
        {property: 'og:image:width', content: '1200'},
        {property: 'og:image:height', content: '630'},
        {property: 'fb:app_id', content: '215509578883196'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:site', content: '@decodemtl'},
        {name: 'twitter:title', content: 'DecodeMTL Events'},
        {name: 'twitter:description', content: 'Check out DecodeMTL\'s web developer events, coding workshops, and free web developer hiring events.'},
        {name: 'twitter:image', content: 'https://www.decodemtl.com/downloads/decode_main.png'},
        {name: 'twitter:image:alt', content: 'DecodeMTL Students in Action'}
    ],
    fr: [
        {name: 'description', content: 'Des événements de développement Web, des ateliers de codage et des événements d\'embauche de développeurs Web gratuits chez DecodeMTL.'},
        {property: 'og:url', content: 'https://www.decodemtl.com/fr/evenements'},
        {property: 'og:title', content: 'Événements DecodeMTL'},
        {property: 'og:description', content: 'Des événements de développement Web, des ateliers de codage et des événements d\'embauche de développeurs Web gratuits chez DecodeMTL.'},
        {property: 'og:image', content: 'https://www.decodemtl.com/downloads/decode_main.png'},
        {property: 'og:image:width', content: '1200'},
        {property: 'og:image:height', content: '630'},
        {property: 'fb:app_id', content: '215509578883196'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:site', content: '@decodemtl'},
        {name: 'twitter:title', content: 'Événements DecodeMTL'},
        {name: 'twitter:description', content: 'Des événements de développement Web, des ateliers de codage et des événements d\'embauche de développeurs Web gratuits chez DecodeMTL.'},
        {name: 'twitter:image', content: 'https://www.decodemtl.com/downloads/decode_main.png'},
        {name: 'twitter:image:alt', content: 'Les étudiants de DecodeMTL en action'}
    ]
}

const link = {
    en: [
        {"rel": "alternate", "hreflang": "fr","href":"https://www.decodemtl.com/fr/evenements"},
    ],
    fr: [
        {"rel": "alternate", "hreflang": "en","href":"https://www.decodemtl.com/events"},
    ]
}

const Events = (props) => {
    const formTitle = props.intl.formatMessage({id: "pages.events.dontMiss", defaultMessage: "Don't miss a single event."})
    const formText = props.intl.formatMessage({id: "pages.events.enterYour", defaultMessage: "Enter your email below to sign up for our newsletter."})

    return (
        <div>
            <Helmet
                title={props.intl.formatMessage({id: "pages.events.webDev", defaultMessage: "Événements de développement Web"})}
                meta={meta[props.intl.locale]}
                link={link[props.intl.locale]}
            />
            <Hero moduleTitle="decodemtl" jumboTitle={props.intl.formatMessage({id: "pages.employers.events", defaultMessage: "Events"})} text={props.intl.formatMessage({id: "pages.employers.browseOur", defaultMessage: "Browse our upcoming events"})}/>
            <UpcomingEvents events={events[props.intl.locale]} />
            <FormOptin submitButton={props.intl.formatMessage({id: "modules.ScheduleVisit.submit", defaultMessage: "Submit"})} title={formTitle} text={formText} />
            {/*<GreenImageBanner background={bannerBackground} title='looking to host an event?' text='Collaboration is within the nation!' />*/}
        </div>
    );
};

Events.propTypes = {};

export default injectIntl(Events);