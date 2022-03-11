import React from 'react'
import './AboutPage.css'
import { BoardInfo } from "../components/AboutPage/BoardInfo"
import IDCard from "../components/AboutPage/IDCard"


function AboutPage() {

    return (
        <>
            <div className='about-container'>
                {/* id card */}

                {BoardInfo.map((item) => {
                    return(
                        <IDCard team={item.team} image={item.image} name={item.name} pronouns={item.pronouns} description={item.description} chair={item.chair} />
                    )
                })}

                <div className="about">
                    <h1 className="heading">we are <span className="accented">CSSociety</span></h1>
                        
                        <p className="body-text">The Computer Science Society of Mount Holyoke College (CSSoc) is a group of student leaders who cultivate a supportive community of critically-thinking, impact-driven, team-playing computer science students on our women’s college campus.
                            Our organization has taken on the tasks detailed in the mission because we are people who are committed to the growth and development of our community and department. We will tackle this mission by holding multiple events and programs which aim to:
                            <ul className = "body-text" style={{marginleft: "12%"}}>
                                <li> Unveil the many facets of computer science that appeal to liberal arts students </li>
                                <li> Empower students to recognize their own potential as leaders </li>
                                <li> Unite gender minorities to think productively about effective ways to confront discrimination in the field </li>
                                <li>Equip students with industry-standard technical skills, and </li>
                                <li> Demystify computer science and technology for others</li>
                            </ul>   
                        </p>
                    <div className="socialmedia">
                        <h3>keep up with us on</h3>
                        <a href="https://www.facebook.com/wearecssociety">
                            <img id="socials" src={"https://img.icons8.com/ios/50/000000/facebook.png"}/>
                        </a>
                        <a href="https://www.linkedin.com/company/computer-science-society/">
                            <img id="socials" src={"https://img.icons8.com/ios/50/000000/linkedin.png"}/>
                            
                        </a>
                        <a href="https://www.instagram.com/mhc_cssociety/">
                            <img id="socials" src={"https://img.icons8.com/ios/50/000000/instagram-new--v1.png"}/>
                        </a>
                    </div>
                </div>)
            </div>

        </>
    )
}

export default AboutPage;