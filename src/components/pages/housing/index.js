import React from 'react';
import Helmet from 'react-helmet';
import Hero from '../../../components/modules/Hero';
import OneHalfColumn from '../../../components/modules/OneHalfColumn';
import GenericTextModule from '../../../components/modules/GenericTextModule';
import {FormattedMessage} from 'react-intl';
import { injectIntl } from 'react-intl';

import img1 from '../../../assets/images/student-housing-1.jpg';
import img2 from '../../../assets/images/student-housing-2.jpg';


const Housing = (props) => {

    const firstRowContentLeft = (
        <div>
            <p>
                <FormattedMessage
                    id="pages.housing.wevePartnered"
                    defaultMessage="We've partnered with Evo, Montreal's leader in student housing to offer our students a place to stay while in Montreal. Evo offers fully furnished and move in ready rooms at very affordable rates. If you wish to learn more about Evo, you can visit their website at "
                />
               <a href="http://www.evomontreal.com" target="_blank">EvoMontreal.com</a>.
            </p>
            <p>
                <FormattedMessage
                    id="pages.housing.decodeStudent"
                    defaultMessage="As a DecodeMTL student, you will receive a special discounted rate on both double and single occupancy rooms. Simply mention you are a DecodeMTL student when booking."
                />
            </p>
        </div>
    );
    const firstRowContentRight = (
        <img src={img1} alt=""/>
    );

    const secondRowParagraphs = [
        (<p>
            <FormattedMessage
                id="pages.housing.evosOld"
                defaultMessage="Evo's Old Montreal location on Robert Bourassa boulevard is located just a block away from us. In the winter months, it's even accessible from the underground city so you don't need to walk outside."
            />
        </p>),
    ];

    const thirdRowContentRight = (
        <p>
            <FormattedMessage
                id="pages.housing.stayingWith"
                defaultMessage="Staying with Evo gives you access to a handful of extras. They have a gym, a pool, a theater room, library, and shared kitchens on every floor. The building also has security, laundry, and wifi included."
            />
        </p>
    );
    const thirdRowContentLeft = (
        <img src={img2} alt=""/>
    );

    return (
        <div>
            <Helmet
                title="Student Housing at EVO"
                meta={[
                    {name: 'description', content: 'Need a place to live during your time at DecodeMTL? We\'ve partnered with EVO to provide full-service, furnished, beautiful housing nearby.'},
                    {property: 'og:url', content: 'https://www.decodemtl.com/housing'},
                    {property: 'og:title', content: 'DecodeMTL Student Housing Available at EVO'},
                    {property: 'og:description', content: 'DecodeMTL has partnered with EVO to give international students a comfortable, convenient, place to live during their time at DecodeMTL.'},
                    {property: 'og:image', content: 'https://www.decodemtl.com/downloads/evo_main.png'},
                    {property: 'og:image:width', content: '1200'},
                    {property: 'og:image:height', content: '630'},
                    {property: 'fb:app_id', content: '215509578883196'},
                    {name: 'twitter:card', content: 'summary_large_image'},
                    {name: 'twitter:site', content: '@decodemtl'},
                    {name: 'twitter:title', content: 'DecodeMTL Student Housing Available at EVO'},
                    {name: 'twitter:description', content: 'DecodeMTL has partnered with EVO to give international students a comfortable, convenient, place to live during their time at DecodeMTL.'},
                    {name: 'twitter:image', content: 'https://www.decodemtl.com/downloads/evo_main.png'},
                    {name: 'twitter:image:alt', content: 'EVO Montreal 1 Bedroom Unit'}
                ]}
                link={[
                    {"rel": "alternate", "hreflang": "fr","href":"https://www.decodemtl.com/fr/logement"},
                ]}
            />
            <Hero styles={{marginBottom: '3rem'}} moduleTitle={props.intl.formatMessage({id: "pages.housing.student", defaultMessage: "Student"})} jumboTitle={props.intl.formatMessage({id: "pages.housing.housing", defaultMessage: "Housing"})}/>
            <OneHalfColumn mainTitle={props.intl.formatMessage({id: "pages.housing.moveIn", defaultMessage: "Move In Ready Housing"})} contentLeft={firstRowContentLeft} contentRight={firstRowContentRight}/>
            <GenericTextModule title={props.intl.formatMessage({id: "pages.housing.walkingDistance", defaultMessage: "Walking Distance from WeWork"})} paragraphs={secondRowParagraphs}/>
            <OneHalfColumn mainTitle={props.intl.formatMessage({id: "pages.housing.tonsOf", defaultMessage: "Tons of Amenities"})} contentLeft={thirdRowContentLeft} contentRight={thirdRowContentRight}/>
        </div>
    );
};

Housing.propTypes = {};

export default injectIntl(Housing);