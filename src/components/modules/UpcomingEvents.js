import React from 'react';
import {Link} from 'react-router';

const eventsJson = JSON.stringify({
    "@context": "http://schema.org",
    "@type": "BusinessEvent",
    "organizer": "DecodeMTL",
    "url": "http://www.decodemtl.com",
    "event": "http://www.eventbrite.com/o/decodemtl-8462090876"
});

const UpcomingEvents = (props) => {
    const filterDates = ({startDate}) => {
        return props.filterOld ? new Date(startDate).getTime() >= new Date().getTime() : startDate;
    };

    const showAllLink = !!props.showAllEventsLink;

    return (
        <section className="module module-events">
            <div className="wrapper">
                <h2 className="module-title">{props.title}</h2>
                <p>{props.text}</p>
                <ul className="events-list">
                    {props.events.filter(filterDates).slice(0, props.limit ? props.limit : props.events.length).map((event, i) => (
                        <li key={i} className="text-body-small">
                            <a className="event-url" href={event.url} target="_blank">
                                <div className="event-date">{event.startDate}</div>
                                <div className="event-name">{event.eventName}</div>
                                <div className="event-description">{event.description}
                                    <span className="event-arrow fa fa-chevron-circle-right text-body-large"
                                          aria-hidden="true"/>
                                    <span className="visually-hidden">Event URL</span>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
                {/*<!-- /.events-list -->*/}
                <div className="link-more text-body-small">
                    {showAllLink
                        ? <Link to="/events">View all events
                        <span className="fa fa-caret-right" aria-hidden="true"/>
                    </Link>
                        : null}
                </div>
                <script type="application/ld+json" dangerouslySetInnerHTML={{__html: eventsJson}}/>
            </div>
            {/*<!-- /.wrapper -->*/}
        </section>
    );
};

UpcomingEvents.defaultProps = {
    filterOld: false,
    showAllEventsLink: false
};

UpcomingEvents.propTypes = {
    events: React.PropTypes.array.isRequired,
    title: React.PropTypes.string,
    text: React.PropTypes.string,
    limit: React.PropTypes.number,
    filterOld: React.PropTypes.bool,
    showAllEventsLink: React.PropTypes.bool
};

export default UpcomingEvents;
