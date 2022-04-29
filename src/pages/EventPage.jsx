import React from 'react'
import './EventPage.css'
import HomeEventsCard from '../components/HomePage/HomeEventsCard'
import { EventItems } from'../components/EventItems'

function EventPage() {

    const upcomingEvent = EventItems.filter(event => {
        return event.date >= new Date();
    })

    const pastEvent = EventItems.filter(event => {
        return event.date < new Date();
    })

    return (
        <>
            <div className='home-container'>
                <div style={{paddingLeft: '5%'}}>
                    <p className='padding-top-32 font-ml bold'>Upcoming Events</p>
                    <div className='padding-top-16 flex wrap'>
                        {upcomingEvent.sort((a,b) => a.date - b.date).map((card) => 
                            <HomeEventsCard key={card.id} title={card.title} url={card.url} thumbnail={card.thumbnail} location={card.location} date={card.date} startTime={card.startTime} duration={card.duration}/>
                        )}
                    </div>
                </div>
                <div style={{paddingLeft: '5%'}}>
                    <p className='padding-top-64 font-ml bold'>Past Events</p>
                    <div className='padding-top-16 flex wrap'>
                        {pastEvent.sort((a,b) => b.date - a.date).map((card) => 
                            <HomeEventsCard key={card.id} title={card.title} url={card.url} thumbnail={card.thumbnail} location={card.location} date={card.date} startTime={card.startTime} duration={card.duration}/>
                        )}
                    </div>
                </div>
            </div>

        </>
    )
}

export default EventPage;