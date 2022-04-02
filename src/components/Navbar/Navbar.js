import React from 'react'
import { MenuItems } from "./MenuItems"
import "./Navbar.css"
import cssocietyLogo from '../../resources/img/cssocietyLogo.png';

function Navbar() {
    const [isClicked, setIsClicked] = React.useState(false)

    function handleClick () {
        setIsClicked(!isClicked)
    }

    const [isAboutClicked, setIsAboutClicked] = React.useState(false)

    function handleAboutClick () {
        setIsAboutClicked(!isAboutClicked)
    }

    return(
        <nav className="navbar-container">
            <a href={window.location.origin}><img src={cssocietyLogo} height="80px"/></a>
            <ul className={isClicked? "nav-menu active":"nav-menu"}>
                {MenuItems.map((item, index) => {
                    if (item.title === "Who we are") {
                        return(
                            <div className="dropdown">
                                <button className="dropbtn">Who we are</button>
                                <div className={isAboutClicked ? "" : "dropdown-content"} >
                                    <div className='flex column font-l'>
                                        <a className='' href="/about">About us</a>
                                        <a className='' href="/members">Meet the team</a>
                                    </div>

                                </div>
                            </div>
                        )
                    } else {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    }
                })}
            </ul>
        </nav>
    )
}

export default Navbar