import { useState, useEffect } from 'react'
import '../../styles/navigation.scss'
import Logo from '../../static/logo.svg'
import { NavLink } from "react-router-dom"

const Burger = () => {
    return (
        <div className='burger'>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

const Exit = () => {
    return (
        <div className='exit'>
            <div id='mdiv'>
                <div className='mdiv'>
                    <div className='md'></div>
                </div>
            </div>
        </div>
    )
}

const Navigation = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    return (
        <div id='navigation'>
            {(screenWidth > 700) && <NavLink className='logo' to='/' onClick={toggleNav}><img src={Logo} /></NavLink>}
            {(screenWidth > 700 || toggleMenu) && 
                <nav className='navbar'>
                    {screenWidth < 700 &&
                    <ul>
                        <li className='nav-item'>
                            <NavLink className='logo' to='/' onClick={toggleNav}><img src={Logo} /></NavLink>
                        </li>
                    </ul>}
                    <ul>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/about' onClick={toggleNav}>
                                About
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/experience' onClick={toggleNav}>
                                Experience
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/projects' onClick={toggleNav}>
                                Projects
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/contact' onClick={toggleNav}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            }
            {!toggleMenu && (<a onClick={toggleNav}><Burger className='burger' /></a>)}
            {toggleMenu && (<a onClick={toggleNav}><Exit className='exit'/></a>)}
        </div>
    )
}

export default Navigation