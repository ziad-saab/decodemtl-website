//TODO CHECK IF NEEDS A GLOBAL CONFIG FOR FAQ
import React from 'react';
import Helmet from 'react-helmet';

import Hero from '../../../components/modules/Hero';
import FAQ from '../../../components/modules/FAQ';
import GenericTextModule from '../../../components/modules/GenericTextModule';


import {generalFAQ, financialsFAQ, immersiveFAQ, partTimeFAQ} from '../../../config/globalFAQ';

const Faq = (props) => {
    const paragraphs = [
        (
            <p className="text-measure">No problem! If you have additional questions <span className="read-more"><a itemProp="email" href="mailto:hello@decodemtl.com">shoot us an email</a></span>
                <br/>
                or give us a toll-free call at  <span className="read-more"><a itemProp="telephone" href="tel:1-888-511-9155">1-888-511-9155</a></span>.
            </p>
        )
    ];
    return (
        <div>
            <Helmet
                title="Everything you need to know about DecodeMTL"
                meta={[
                    {name: 'description', content: 'Everything you need to know about DecodeMTL! View DecodeMTL\'s frequently asked questions here.'},
                ]}/>
            <Hero moduleTitle="Frequently Asked" jumboTitle="Questions"/>
            <FAQ isFaqPage title='general' faq={generalFAQ} />
            <FAQ isFaqPage title='financials' faq={financialsFAQ} />
            <FAQ isFaqPage title='immersive' faq={immersiveFAQ} />
            <FAQ isFaqPage title='part time' faq={partTimeFAQ} />
            <GenericTextModule title="wait i still have questions!" paragraphs={paragraphs}/>
        </div>
    );
};

Faq.propTypes = {};

export default Faq;
