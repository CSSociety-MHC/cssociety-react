import React from 'react'
import './AboutPage.css'
import { BoardInfo } from "../components/WhoWeArePage/BoardInfo"
import IDCard from "../components/WhoWeArePage/IDCard"


function WhoWeArePage(){
    return(
        <>
            <div className='board-container'>
                {/* id card */}

                {BoardInfo.map((item) => {
                                return(
                                    <IDCard team={item.team} image={item.image} name={item.name} pronouns={item.pronouns} description={item.description} chair={item.chair} />
                                )
                            })}
                    
            </div>
        </>
    )
}

