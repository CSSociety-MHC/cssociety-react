import React from 'react'
import "./HomeOpportunityCard.css"

function HomeOpportunityCard({title, url, deadline}) {

    return(
        <div style={{border: '1px solid'}} onClick={() => window.location.href={url} }>
            <h5>{title}</h5>
            <p>{deadline.toDateString()}</p>
        </div>
    )
}

export default HomeOpportunityCard