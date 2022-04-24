import React from 'react'
import './OpportunityPage.css'
import HomeOpportunityCard from '../components/HomePage/HomeOpportunityCard'
import { OpportunityItems } from'../components/OpportunityItems'

function OpportunityPage() {

    const upcomingOpportunity = OpportunityItems.filter(opportunity => {
        return opportunity.deadline >= new Date();
    })

    return (
        <>
            <div className='opportunity-container'>
                <p className='flex bold font-ml justify-center'>Opportunities</p>
                <p className='padding-top-8 flex justify-center'>various cs related opportunities</p>
                <div className='padding-top-48 flex justify-spacebtw wrap'>
                    {upcomingOpportunity.sort((a,b) => a.deadline - b.deadline).map((card) => 
                        <HomeOpportunityCard key={card.id} title={card.title} url={card.url} deadline={card.deadline}/>
                    )}
                </div>
            </div>

        </>
    )
}

export default OpportunityPage;