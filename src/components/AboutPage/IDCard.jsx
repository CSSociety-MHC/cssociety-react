import React from 'react'
import "./IDCard.css"


/**
 * 
 * @param: {*} props (team, image, name, pronouns, description, chair[a boolean value])
 * @returns: IDCard
 */
function IDCard({team, image, name, pronouns, description, chair}){

    if (chair){
        return (
                <div className="column">
                    <div className="card">
                        <img className='image' src={image} alt={name} style={{width:"70%;", class:"image-holder"}}/>
                        <div className="team-container">
                        <h2>{name} <span className="accented" style={{color: "#FF9A50;", fontsize: "30px;"}}> Chair </span></h2> <h5> {pronouns} </h5>
                        <p>{description} </p>
                        </div>
                    </div>	
                </div>)
    }
    return(
            <div className="column">
                <div className="card">
                    <img src={image} alt={name} style={{width:"70%;", class:"image-holder"}}/>
                    <div className="team-container">
                    <h2>{name}</h2> <h5> {pronouns} </h5>
                    <p>{description}</p>
                    </div>
                </div>	
            </div>
        )
}


export default IDCard