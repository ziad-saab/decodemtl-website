import React from 'react';
import Helmet from 'react-helmet';
import {FormattedMessage} from 'react-intl';
import { injectIntl } from 'react-intl';

import Hero from '../../../components/modules/Hero';
import EmployerCTA from '../../../components/modules/EmployerCTA';
import TwoThirdColumns from '../../../components/modules/TwoThirdColumns';
import FormOptin from '../../../components/modules/FormOptin';
import PartnersLogos from '../../../components/modules/PartnersLogos';

import p1 from '../../../assets/images/employers-1.jpg'
import p2 from '../../../assets/images/employers-2.jpg'
import p3 from '../../../assets/images/employers-3.jpg'

const meta = {
    en: [
        {name: 'description', content: 'Are you looking to hire a web developer? DecodeMTL graduates can be hired as contract or full-time employees. Best of all, their are no hiring fees!'},
        {property: 'og:url', content: 'https://www.decodemtl.com/employers'},
        {property: 'og:title', content: 'Web Developers for Hire - Find Your Next Web Developer at DecodeMTL'},
        {property: 'og:description', content: 'Are you looking to add Web Developers to your team? DecodeMTL graduates have skills in Full-Stack Web Development and make amazing team members. Contact us to find out how you can hire a DecodeMTL grad!'},
        {property: 'og:image', content: 'https://www.decodemtl.com/downloads/decode_main.png'},
        {property: 'og:image:width', content: '1200'},
        {property: 'og:image:height', content: '630'},
        {property: 'fb:app_id', content: '215509578883196'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:site', content: '@decodemtl'},
        {name: 'twitter:title', content: 'Web Developers for Hire - Find Your Next Web Developer at DecodeMTL'},
        {name: 'twitter:description', content: 'Are you looking to add Web Developers to your team? DecodeMTL graduates have skills in Full-Stack Web Development and make amazing team members. Contact us to find out how you can hire a DecodeMTL grad!'},
        {name: 'twitter:image', content: 'https://www.decodemtl.com/downloads/decode_main.png'},
        {name: 'twitter:image:alt', content: 'DecodeMTL Students in Action'}
    ],
    fr: [
        {name: 'description', content: 'Vous cherchez à embaucher un développeur web? Les diplômés de DecodeMTL peuvent être embauchés comme employés contractuels ou à plein temps. Le meilleur de tous, il n\'y a aucun frais d\'embauche!'},
        {property: 'og:url', content: 'https://www.decodemtl.com/fr/partenaires-embauche'},
        {property: 'og:title', content: 'Trouvez votre prochain développeur Web chez DecodeMTL'},
        {property: 'og:description', content: 'Vous cherchez à embaucher un développeur web? Les diplômés de DecodeMTL peuvent être embauchés comme employés contractuels ou à plein temps. Le meilleur de tous, il n\'y a aucun frais d\'embauche!'},
        {property: 'og:image', content: 'https://www.decodemtl.com/downloads/decode_main.png'},
        {property: 'og:image:width', content: '1200'},
        {property: 'og:image:height', content: '630'},
        {property: 'fb:app_id', content: '215509578883196'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:site', content: '@decodemtl'},
        {name: 'twitter:title', content: 'Trouvez votre prochain développeur Web chez DecodeMTL'},
        {name: 'twitter:description', content: 'Vous cherchez à embaucher un développeur web? Les diplômés de DecodeMTL peuvent être embauchés comme employés contractuels ou à plein temps. Le meilleur de tous, il n\'y a aucun frais d\'embauche!'},
        {name: 'twitter:image', content: 'https://www.decodemtl.com/downloads/decode_main.png'},
        {name: 'twitter:image:alt', content: 'Les étudiants de DecodeMTL en action'}
    ]
}

const link = {
    en: [
        {"rel": "alternate", "hreflang": "fr","href":"https://www.decodemtl.com/fr/partenaires-embauche"},
    ],
    fr: [
        {"rel": "alternate", "hreflang": "en","href":"https://www.decodemtl.com/employers"},
    ]
}

const Employers = (props) => {

    //FormOptin data
    const heroSubText = props.intl.formatMessage({id: "pages.employers.DecodeMTLis", defaultMessage: "DecodeMTL is growing the next group of diverse and gifted developers. Let us find the perfect candidate for your team!"})
    const formTitle = props.intl.formatMessage({id: "pages.employers.doYou", defaultMessage: "Do you want to meet our graduates?"})
    const formText = props.intl.formatMessage({id: "pages.employers.enterYour", defaultMessage: "Enter your email below and get notified about our next hiring event."})

    //TwoThirdColumn data
    //USE className="row-container row-two-third-container alternating" FOR TOP LEVEL DIV
    const columns = [
        (<div className="row-container row-two-third-container alternating">
            <div className="two-third-content">
                <h4>
                    <FormattedMessage
                        id="pages.employers.aptitude"
                        defaultMessage="Aptitude"
                    />
                </h4>
                <p>
                    <FormattedMessage
                        id="pages.employers.onceAccepted"
                        defaultMessage="Once accepted into our competitive program, our students are expected to push their limits by coding 10+ hours per day, 7 days a week. Their intelligence, mixed with a strong passion for technology and persistence enable them to thrive in our course. After graduating, they are eager to bring these skills to your company."
                    />
                </p>
            </div>
            <div className="one-third-content">
                <img src={p2} alt="DecodeMTL Alumni Panel"/>
            </div>
        </div>),
        (<div className="row-container row-two-third-container alternating">
            <div className="two-third-content">
                <h4>
                    <FormattedMessage
                        id="pages.employers.passion"
                        defaultMessage="Passion"
                    />
                </h4>
                <p>
                    <FormattedMessage
                        id="pages.employers.ourGrads"
                        defaultMessage="Our grads have been taught to think and learn like developers. New languages are not a barrier but rather an opportunity to grow their knowledge-base. In fact, many of our graduates go on to tackle new languages in their first weeks on the job."
                    />
                </p>
            </div>
            <div className="one-third-content">
                <img src={p3} alt="DecodeMTL Teacher Helping Student"/>
            </div>
        </div>),
        (<div className="row-container row-two-third-container alternating">
            <div className="two-third-content">
                <h4>
                    <FormattedMessage
                        id="pages.employers.teamPlayers"
                        defaultMessage="Team Players"
                    />
                </h4>
                <p>
                    <FormattedMessage
                        id="pages.employers.codingSkills"
                        defaultMessage="Coding skills are not enough. All of our students are selected as much for their personality and communications skills as their ability to learn and execute. We know that fit is the key to a successful team."
                    />
                </p>
            </div>
            <div className="one-third-content">
                <img src={p1} alt="DecodeMTL Students Working"/>
            </div>
        </div>)

    ];

    return (
        <div>
            <Helmet
                title={props.intl.formatMessage({id: "pages.employers.hireA", defaultMessage: "Hire a Web Developer"})}
                meta={meta[props.intl.locale]}
                link={link[props.intl.locale]}
            />
            <Hero moduleTitle={props.intl.formatMessage({id: "pages.employers.findYour", defaultMessage: "Find Your Next"})} jumboTitle={props.intl.formatMessage({id: "pages.employers.webDeveloper", defaultMessage: "Web Developer"})} subText={heroSubText}/>
            <EmployerCTA/>
            <TwoThirdColumns columns={columns} title={props.intl.formatMessage({id: "pages.employers.whatMakes", defaultMessage: "What makes our grads special"})}/>
            <FormOptin submitButton={props.intl.formatMessage({id: "modules.ScheduleVisit.submit", defaultMessage: "Submit"})} title={formTitle} text={formText} interests={{'367df3e84b': true}}/>
            <PartnersLogos/>
        </div>
    );
};


Employers.propTypes = {};

export default injectIntl(Employers);