import React from 'react'
import './HomePage.css'
import HomeEventsCard from '../components/HomePage/HomeEventsCard'
import { EventItems } from'../components/EventItems'
import HomeOpportunityCard from '../components/HomePage/HomeOpportunityCard'
import { OpportunityItems } from'../components/OpportunityItems'

function HomePage() {

    return (
        <>
            <div className='home-container' style={{paddingLeft:'100px',paddingRight:'100px'}}>
               
                <div style={{paddingTop: '48px', display: 'flex', flexDirection:'row', justifyContent: 'space-between'}}>
                    <div style={{backgroundColor: 'pink', width: '700px',}}>
                        <p style={{fontWeight:600,}}>About Computer Science Society</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <button>Read More</button>
                    </div>
                    <div style={{backgroundColor: 'red', width: '500px', color: 'pink',}}>
                        Pictures
                    </div>
                </div>

                <div style={{paddingTop: '48px', display: 'flex', flexDirection:'column',}}>
                    <p style={{display: 'flex', justifyContent: 'center', fontWeight:600,}}>Upcoming Events</p>
                    <p style={{display: 'flex', justifyContent: 'center',}}>various cs related events conducted by computer science society</p>
                    <div style={{display: 'flex', }}>
                        {EventItems.map((card) => 
                            <HomeEventsCard style={{width: '200px',}} key={card.id} title={card.title} url={card.url} thumbnail={card.thumbnail} location={card.location} date={card.date} startTime={card.startTime} duration={card.duration}/>
                        )}
                    </div>
                </div>

                <div style={{paddingTop: '48px', }}>
                    <p style={{display: 'flex', justifyContent: 'center', fontWeight:600,}}>Opportunities</p>
                    <p style={{display: 'flex', justifyContent: 'center',}}>various cs related opportunities</p>
                    <div>
                        {OpportunityItems.map((card) => 
                            <HomeOpportunityCard key={card.id} title={card.title} url={card.url} deadline={card.deadline}/>
                        )}
                    </div>
                </div>

            </div>

        </>
    )
}

export default HomePage;