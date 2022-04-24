import React from 'react'
import './AboutPage.css'
import cssocietyLogo from  "../components/AboutPage/cssocietyLogoFavicon.png"
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ImageItems } from'../components/ImageItems'


function AboutPage() {

    return (
        <>
            <div className='about-container'>
                <div className="about">
                    <img src={cssocietyLogo } alt = "cssLogo" style={{paddingTop: '1px', justifyContent: 'center', paddingLeft: "150px", paddingRight: "150px",}} /> 
                    <h1 className="heading" style={{display: 'flex', justifyContent: 'center', fontWeight:600,}}> About<span className="accented" style={{display: 'flex', justifyContent: 'center', fontWeight:600,}}>&nbsp;CSSociety</span></h1>
                        <p className="body-text" style={{display: 'flex', justifyContent: 'center', fontWeight:600, paddingLeft: "250px", paddingRight: "250px",}}>The Computer Science Society of Mount Holyoke College (CSSoc) is a group of student leaders who cultivate a supportive community of critically-thinking, impact-driven, team-playing computer science students on our women’s college campus.
                            Our organization has taken on the tasks detailed in the mission because we are people who are committed to the growth and development of our community and department. We will tackle this mission by holding multiple events and programs which aim to: 
                        </p> 
                        <br/>
                        <p className="body-text" style={{display: 'flex', justifyContent: 'center', fontWeight:600,}}>
                            <ul className = "body-text" style={{marginleft: "12%"}}>
                                <li> Unveil the many facets of computer science that appeal to liberal arts students </li>
                                <li> Empower students to recognize their own potential as leaders </li>
                                <li> Unite gender minorities to think productively about effective ways to confront discrimination in the field </li>
                                <li>Equip students with industry-standard technical skills, and </li>
                                <li> Demystify computer science and technology for others</li>
                            </ul>   
                        </p>
                </div>)
            </div>
            <div className="slide-container">
                <Fade>
                    {ImageItems.map((card) => 
                        <div className="each-fade">
                            <img  width="30%" height="20%" src={card.src} />
                        </div>
                    )}
                </Fade>
            </div>
            
        </>
    )
}

export default AboutPage;