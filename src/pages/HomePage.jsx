import React from 'react'
import './HomePage.css'
import HomeEventsCard from '../components/HomePage/HomeEventsCard'
import { EventItems } from'../components/EventItems'
import HomeOpportunityCard from '../components/HomePage/HomeOpportunityCard'
import { OpportunityItems } from'../components/OpportunityItems'

function HomePage() {

    const upcomingEvent = EventItems.filter(event => {
        return event.date >= new Date();
    })

    const upcomingOpportunity = OpportunityItems.filter(opportunity => {
        return opportunity.deadline >= new Date();
    })

    return (
        <>
            <div className='home-container'>
               
                <div className='padding-top-120 flex justify-spacebtw'>
                    <div className='width-40pc'>
                        <p className='font-ml bold'>About Computer Science Society</p>
                        <p className='padding-top-8 padding-bottom-16'>The Computer Science Society of Mount Holyoke College is a group of student leaders who cultivate a supportive community of critically-thinking, impact-driven, team-playing computer science students on our women’s college campus. Our organization has taken on the tasks detailed in the mission because we are people who are committed to the growth and development of our community and department. We will tackle this mission by holding multiple events and programs.</p>
                        <button className='read-more-btn' onClick={() => window.location.href='/about'}>Read More</button>
                    </div>
                    <div style={{border:'1px solid lightgrey', borderRadius:'8px', width: '500px', color: 'pink', fontSize: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        Pictures
                    </div>
                </div>

                <div className='padding-top-120 flex column'>
                    <p className='flex bold font-ml justify-center'>Upcoming Events</p>
                    <p className='padding-top-8 flex justify-center'>various cs related events conducted by computer science society</p>
                    <div className='padding-top-48 flex wrap justify-spacebtw'>
                        {upcomingEvent.sort((a,b) => a.date - b.date).slice(0, 3).map((card) => 
                            <HomeEventsCard key={card.id} title={card.title} url={card.url} thumbnail={card.thumbnail} location={card.location} date={card.date} startTime={card.startTime} duration={card.duration}/>
                        )}
                    </div>
                </div>

                <div className='padding-top-120'>
                    <p className='flex bold font-ml justify-center'>Opportunities</p>
                    <p className='padding-top-8 flex justify-center'>various cs related opportunities</p>
                    <div className='padding-top-48 flex justify-spacebtw wrap'>
                        {upcomingOpportunity.sort((a,b) => a.deadline - b.deadline).slice(0, 6).map((card) => 
                            <HomeOpportunityCard className='past-event-card' key={card.id} title={card.title} url={card.url} deadline={card.deadline}/>
                        )}
                    </div>
                </div>

            </div>

        </>
    )
}

export default HomePage;