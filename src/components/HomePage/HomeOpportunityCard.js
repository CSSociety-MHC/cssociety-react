import React from 'react'
import "./HomeOpportunityCard.css"

function HomeOpportunityCard({title, url, deadline}) {

    return(
        <div className='opportunity-card-container flex column wrap justify-center' onClick={() => window.location.href=url}>
            <p className='flex justify-center font-m bold'>{title}</p>
            <p className='padding-top-8 flex justify-center'>~ {deadline.toDateString()}</p>
        </div>
    )
}

export default HomeOpportunityCard