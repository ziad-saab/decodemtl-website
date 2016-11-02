import React from 'react';
import Helmet from 'react-helmet';

import Hero from '../../../components/modules/Hero';
import FormOptin from '../../../components/modules/FormOptin';
import UpcomingEvents from '../../../components/modules/UpcomingEvents';
// import GreenImageBanner from '../../../components/modules/GreenImageBanner';

// import bannerBackground from '../../../assets/images/module-bg-wework-common.jpg';
import events from '../../../config/events';

const Events = (props) => {
    const formTitle = 'Don\'t miss a single event.',
        formText = 'Enter your email below to sign up for our newsletter.';

    return (
        <div>
            <Helmet
                title="Web Development and Coding Events"
                meta={[
                    {name: 'description', content: 'Web developer events, coding workshops, and free web developer hiring events at DecodeMTL.'},
                ]}/>
            <Hero moduleTitle="decodemtl" jumboTitle="events" text="Browse our upcoming events."/>
            <UpcomingEvents events={events} />
            <FormOptin submitButton="Submit" title={formTitle} text={formText} />
            {/*<GreenImageBanner background={bannerBackground} title='looking to host an event?' text='Collaboration is within the nation!' />*/}
        </div>
    );
};

Events.propTypes = {};

export default Events;