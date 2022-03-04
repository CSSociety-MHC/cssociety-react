import React from 'react'
import { MenuItems } from "./MenuItems"
import "./Navbar.css"
import cssocietyLogo from '../../resources/img/cssocietyLogo.png';

function Navbar() {
    const [isClicked, setIsClicked] = React.useState(false)

    function handleClick () {
        setIsClicked(!isClicked)
    }

    return(
        <nav className="navbar-container">
            <a href={window.location.origin}><img src={cssocietyLogo} height="80px"/></a>
            <ul className={isClicked? "nav-menu active":"nav-menu"}>
                {MenuItems.map((item, index) => {
                    return(
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar