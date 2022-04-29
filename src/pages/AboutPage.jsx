import React from 'react'
import './AboutPage.css'
import cssocietyLogo from  "../components/AboutPage/cssocietyLogoFavicon.png"
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ImageItems } from'../components/ImageItems'

import { Slide } from 'react-slideshow-image';


function AboutPage() {

    return (
        <>
            <div className='about-container justify-center flex column'>
                <div className='padding-top-32 flex justify-center'>
                    <img width="20%" src={cssocietyLogo} alt = "cssLogo"/> 
                </div>

                <p className='padding-top-32 flex justify-center bold font-l'> About CSSociety</p>
                <p className='padding-top-16 flex justify-center font-m padding-left-240 padding-right-240 text-center'>The Computer Science Society of Mount Holyoke College (CSSoc) is a group of student leaders who cultivate a supportive community of critically-thinking, impact-driven, team-playing computer science students on our women’s college campus.
                    Our organization has taken on the tasks detailed in the mission because we are people who are committed to the growth and development of our community and department. We will tackle this mission by holding multiple events and programs which aim to: 
                </p> 
                
                <p className='padding-top-16 flex justify-center bold'>
                    <ul>
                        <li> Unveil the many facets of computer science that appeal to liberal arts students </li>
                        <li> Empower students to recognize their own potential as leaders </li>
                        <li> Unite gender minorities to think productively about effective ways to confront discrimination in the field </li>
                        <li>Equip students with industry-standard technical skills, and </li>
                        <li> Demystify computer science and technology for others</li>
                    </ul>   
                </p>
                
                <div className="padding-top-120 slide-container">
                    <Fade>
                        {ImageItems.map((card) => 
                            <div className="each-fade flex justify-center align-center">
                                <img width="50%" height="20%" src={card.src} />
                            </div>
                        )}
                    </Fade>
                </div>


                    
            </div>
            
        </>
    )
}

export default AboutPage;