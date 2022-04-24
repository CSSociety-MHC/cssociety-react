import React from 'react'
import "./HomeEventsCard.css"

function HomeEventsCard({title, url, thumbnail, location, date, startTime, duration}) {

    return(
        <div onClick={() => window.location.href={url}}>
            <div className='flex justify-center'>
                <img src={thumbnail} alt='event-thumbnail' width="100%" />
            </div>
            <div>
                <h3>{title}</h3>
                <h6>{location} | {date.toDateString()} {('0' + date.getHours()).slice(-2)}:{('0' + date.getMinutes()).slice(-2)}</h6>
            </div>
        </div>
    )
}

export default HomeEventsCard