import React from 'react';
import Helmet from 'react-helmet';
import {FormattedMessage} from 'react-intl';
import { injectIntl } from 'react-intl';

import Hero from '../../../components/modules/Hero';
import OneHalfColumn from '../../../components/modules/OneHalfColumn';
import GenericTextModule from '../../../components/modules/GenericTextModule';

import img1 from '../../../assets/images/about_wework1.jpg';
import img2 from '../../../assets/images/about_wework2.jpg';


const WeWork = (props) => {

    const firstRowContentLeft = (
        <div>
            <p>
                <FormattedMessage
                    id="pages.wework.beA"
                    defaultMessage="Be a part of the largest co-working space in Montreal. The space is buzzing with entrepreneurs, startups, and tech companies. Take part in weekly lunch and learns or network at one of the many nightly events. You may just end up meeting your future employer or business partner."
                />
            </p>
            <p>
                <FormattedMessage
                    id="pages.wework.decodeIs"
                    defaultMessage="DecodeMTL is strategically located inside of WeWork for these reasons. We want you to be a part of the Montreal startup and technology ecosystem, and build as many connections in the community as possible."
                />
            </p>
        </div>
    );
    const firstRowContentRight = (
        <img src={img2} alt="DecodeMTL at WeWork"/>
    );

    const secondRowParagraphs = [
        (<p>
            <FormattedMessage
                id="pages.wework.weworksPrime"
                defaultMessage="WeWork's prime location in Place Ville Marie makes it extremely accessible. By metro, we are connected to both the McGill and Bonaventure stations. By train, we are connected to central station. Private bike storage and indoor parking are also available for a fee."
            />
        </p>),
        (<p>
            <FormattedMessage
                id="pages.wework.beingIn"
                defaultMessage="Being in the heart of downtown, you will be within walking distance from an abundance of restaurants, shopping and entertainment. We are also connected to the underground city, so you can avoid stepping outside in the middle of winter!"
            />
        </p>)
    ];

    const thirdRowContentRight = (
        <div>
            <p>
                <FormattedMessage
                    id="pages.wework.youWill"
                    defaultMessage="You will have access to two kitchens which include unlimited free micro roasted coffee, tea, fruit water, and beer on tap. There are phone booths to make private calls, spacious common areas and lounges, and a shuffle-board table for when you need a break."
                />
            </p>
            <p>
                <FormattedMessage
                    id="pages.wework.asAstudent"
                    defaultMessage="As a student, you will be given 24/7 access to the space. If you like to come in on weekends, or stay late in the evenings, we encourage you to do so!"
                />
            </p>
            <p>
                <FormattedMessage
                    id="pages.wework.toLearn"
                    defaultMessage="To learn more about WeWork you can check out their website at "
                /><a href="https://www.wework.com/" target="_blank"> WeWork.com</a>.</p>
        </div>
    );
    const thirdRowContentLeft = (
        <img src={img1} alt="DecodeMTL at WeWork"/>
    );

    return (
        <div>
            <Helmet
                title="DecodeMTL at WeWork Place Ville Marie"
                meta={[
                    {name: 'description', content: 'DecodeMTL is located in the awesome WeWork Place Ville Marie co-working space. Learn to code in Montreal\'s coolest workplace.'},
                    {property: 'og:url', content: 'https://www.decodemtl.com/wework'},
                    {property: 'og:title', content: 'DecodeMTL + WeWork'},
                    {property: 'og:description', content: 'DecodeMTL is located in the awesome WeWork Place Ville Marie co-working space. Learn to code in Montreal\'s coolest workplace.'},
                    {property: 'og:image', content: 'https://www.decodemtl.com/downloads/wework_main.png'},
                    {property: 'og:image:width', content: '1200'},
                    {property: 'og:image:height', content: '630'},
                    {property: 'fb:app_id', content: '215509578883196'},
                    {name: 'twitter:card', content: 'summary_large_image'},
                    {name: 'twitter:site', content: '@decodemtl'},
                    {name: 'twitter:title', content: 'DecodeMTL + WeWork'},
                    {name: 'twitter:description', content: 'DecodeMTL is located in the awesome WeWork Place Ville Marie co-working space. Learn to code in Montreal\'s coolest workplace.'},
                    {name: 'twitter:image', content: 'https://www.decodemtl.com/downloads/decode_main.png'},
                    {name: 'twitter:image:alt', content: 'DecodeMTL Students in Action'}
                ]}
                link={[
                    {"rel": "alternate", "hreflang": "fr","href":"https://www.decodemtl.com/fr/wework"},
                ]}
            />
            <Hero moduleTitle="WeWork" jumboTitle={props.intl.formatMessage({id: "pages.wework.montreal", defaultMessage: "Montreal"})}/>
            <OneHalfColumn mainTitle={props.intl.formatMessage({id: "pages.wework.community", defaultMessage: "Community"})} contentLeft={firstRowContentLeft} contentRight={firstRowContentRight}/>
            <GenericTextModule title={props.intl.formatMessage({id: "pages.wework.location", defaultMessage: "Location"})} paragraphs={secondRowParagraphs}/>
            <OneHalfColumn mainTitle={props.intl.formatMessage({id: "pages.wework.amenities", defaultMessage: "Amenities"})} contentLeft={thirdRowContentLeft} contentRight={thirdRowContentRight}/>
        </div>
    );
};

WeWork.propTypes = {};

export default injectIntl(WeWork);