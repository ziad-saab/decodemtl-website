import React from 'react';
import {Link} from 'react-router';

const eventsListJson = JSON.stringify(
    {
        "@context": "http://schema.org",
        "@type": "BusinessEvent",
        "name": "DecodeMTL Demo Day - Web Developers for Hire",
        "startDate": "2016-11-25T13:00",
        "endDate": "2016-11-25T16:00",
        "description": "Looking for smart, hungry web developers to join your team? Come meet the graduates from our Web Development Immersive program!",
        "image":"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F24308952%2F137894962856%2F1%2Foriginal.jpg?w=1000&rect=0%2C128%2C1024%2C512&s=2da049f01bafa7cee33575234dd4f67a",
        "location": {
            "@type": "Place",
            "name": "WeWork Place Ville Marie",
            "address": "4-3 Place Ville Marie, Montreal QC H3B 2E3"
        },
        "offers": {
            "@type": "Offer",
            "url": "https://www.eventbrite.com/e/demo-day-web-developers-for-hire-tickets-27852866674"
        }
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
                <script type="application/ld+json" dangerouslySetInnerHTML={{__html: eventsListJson}}/>
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
