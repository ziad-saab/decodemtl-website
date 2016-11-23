import React from 'react';

import Hero from '../../../components/modules/Hero';
import GenericTextModule from '../../../components/modules/GenericTextModule';
import OneHalfColumn from '../../../components/modules/OneHalfColumn';
import QuoteModule from '../../../components/modules/QuoteModule';
import Overview from '../../../components/modules/Overview';
import Helmet from 'react-helmet';
import {FormattedMessage} from 'react-intl';
import { injectIntl } from 'react-intl';

import quoteBackground from '../../../assets/images/module-bg-about-quote.jpg';
import founders from '../../../assets/images/founders.jpg';

const meta = {
    en: [
        {name: 'description', content: 'DecodeMTL is a computer programming bootcamp in Montreal. Learn to code with our web development programs and learn how to become a web developer.'},
        {property: 'og:url', content: 'https://www.decodemtl.com/about'},
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
        {name: 'description', content: 'DecodeMTL est un bootcamp de programmation web à Montréal. Apprenez à coder avec nos programmes de développement Web et apprenez comment devenir un développeur Web.'},
        {property: 'og:url', content: 'https://www.decodemtl.com/fr/a-propos'},
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
        {"rel": "alternate", "hreflang": "fr","href":"https://www.decodemtl.com/fr/a-propos"},
    ],
    fr: [
        {"rel": "alternate", "hreflang": "en","href":"https://www.decodemtl.com/about"},
    ]
}

const About = React.createClass({
    propTypes: {},
    getDefaultProps () {
        return {};
    },
    render() {

        const p1 = [
            <div>
                <p className="text-measure">
                    <FormattedMessage
                        id="page.about.traditionalSchools"
                        defaultMessage="Traditional schools teach in old ways, and we knew there was a better way. We want to inspire and motivate people to reach their potential, to step outside their comfort zone, and ultimately pursue work they love."
                    />
                </p>
                <p className="text-measure">
                    <FormattedMessage
                        id="page.about.weFeel"
                        defaultMessage="We feel that large institutions only see their students as numbers in a database, for us, our students are our friends. Nothing makes us happier than seeing our friends succeed."
                    />
                </p>
            </div>
        ];

        const p2 = [

            {text: 'Quality over quantity', id: 'pages.about.qualityOver'},
            {text: 'Passion (Both in our staff and our students)', id: 'pages.about.bothIn'},
            {text: 'Don’t take things to seriously (You can learn and have fun at the same time)', id: 'pages.about.dontTake'},
            {text: 'Outcomes (Your success is our priority)', id: 'pages.about.yourSuccess'},
            {text: 'Creativity, innovation, and hardwork', id: 'pages.about.creativity'},
        ];

        const p3 = [
            <ul className="petal-icon-list">
                <li><span className="petal-icon" aria-hidden="true" />
                    <FormattedMessage
                        id="page.about.projectBased"
                        defaultMessage="Project based teaching"
                    />
                </li>
                <li><span className="petal-icon" aria-hidden="true" />
                    <FormattedMessage
                        id="page.about.noGrades"
                        defaultMessage="No grades, tests, or exams"
                    />
                </li>
                <li><span className="petal-icon" aria-hidden="true" />
                    <FormattedMessage
                        id="page.about.learnFrom"
                        defaultMessage="Learn from your mistakes"
                    />
                </li>
                <li><span className="petal-icon" aria-hidden="true" />
                    <FormattedMessage
                        id="page.about.hardwork"
                        defaultMessage="Your hardwork will pay off"
                    />
                </li>
            </ul>
        ];

        const contentLeft = (
            <div>
                <p className="text-measure">
                    <FormattedMessage
                        id="page.about.backIn"
                        defaultMessage="Back in 2014, DecodeMTL co-founder Kevin was looking to solidify his programming skills. As an internet marketer, he needed to brush up on his web development for his professional development."
                    />
                </p>
                <p className="text-measure">
                    <FormattedMessage
                        id="page.about.frustrated"
                        defaultMessage="Frustrated with the out-dated offerings from current local institutions, Kevin emailed his old colleague Ziad about running a Part-Time Front-End Course."
                    />
                </p>
                <p className="text-measure">
                    <FormattedMessage
                        id="page.about.ziadHad"
                        defaultMessage="Ziad had a passion for teaching, having mentored many people in the past, and jumped at the opportunity to put a course together. A few months later, DecodeMTL was born."
                    />
                </p>
            </div>
        );

            const contentRight = (
                <img src={founders} alt="DecodeMTL Founders"/>
        );
        return (
            <div>
                <Helmet
                    title={this.props.intl.formatMessage({id: "pages.about.aboutDecode", defaultMessage: "About DecodeMTL - Montreal Coding Bootcamp"})}
                    meta={meta[this.props.intl.locale]}
                    link={link[this.props.intl.locale]}
                />
                <Hero moduleTitle={this.props.intl.formatMessage({id: "pages.about.madeIn", defaultMessage: "Made in"})} jumboTitle={this.props.intl.formatMessage({id: "pages.about.montreal", defaultMessage: "Montreal"})} text={""} subText={''}/>
                <OneHalfColumn mainTitle={this.props.intl.formatMessage({id: "pages.about.howWe", defaultMessage: "How we started"})} text={''} contentLeft={contentLeft} contentRight={contentRight}/>
                <GenericTextModule title={this.props.intl.formatMessage({id: "pages.about.whyWe", defaultMessage: "Why we do it"})} subTitle={''} paragraphs={p1}/>
                <Overview overview={p2} title={this.props.intl.formatMessage({id: "pages.about.ourValues", defaultMessage: "Our Values"})}/>
                <QuoteModule background={quoteBackground}/>
                <GenericTextModule title={this.props.intl.formatMessage({id: "pages.about.ourTeaching", defaultMessage: "Our Teaching Methodology"})} paragraphs={p3}/>
            </div>
        );
    }
});

export default injectIntl(About);
