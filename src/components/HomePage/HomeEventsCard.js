import React from 'react'
import "./HomeEventsCard.css"

function HomeEventsCard({title, url, thumbnail, location, date, startTime, duration}) {

    return(
        <div className='event-card-container flex justify-center column' onClick={() => window.location.href=url}>
            <div className='padding-top-8 flex justify-center '>
                <img className='event-thumbnail' src={thumbnail} alt='event thumbnail'/>
            </div>
            <div>
                <p className='padding-top-8 font-m bold'>{title}</p>
                <p className='padding-top-4 padding-bottom-16 font-s'>{location} | {date.toDateString()} {('0' + date.getHours()).slice(-2)}:{('0' + date.getMinutes()).slice(-2)}</p>
            </div>
        </div>  
    )
}

export default HomeEventsCard