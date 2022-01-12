import { useState, useEffect } from 'react'
import '../../styles/navigation.scss'
import Logo from '../../static/logo.svg'

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
            {(screenWidth > 700) && <a className='logo' href='#landing' onClick={toggleNav}><img src={Logo} /></a>}
            {(screenWidth > 700 || toggleMenu) && 
                <nav className='navbar'>
                    {screenWidth < 700 &&
                    <ul className='logo-container'>
                        <li className='nav-item'>
                            <a className='logo' href='#landing' onClick={toggleNav}><img src={Logo} /></a>
                        </li>
                    </ul>}
                    <ul>
                        <li className='nav-item'>
                            <a className='nav-link' href='#about' onClick={toggleNav}>
                                About
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li className='nav-item'>
                            <a className='nav-link' href='#experience' onClick={toggleNav}>
                                Experience
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li className='nav-item'>
                            <a className='nav-link' href='#projects' onClick={toggleNav}>
                                Projects
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li className='nav-item'>
                            <a className='nav-link' href='#contact' onClick={toggleNav}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            }
            {!toggleMenu && (<a onClick={toggleNav}><Burger /></a>)}
            {toggleMenu && (<a onClick={toggleNav}><Exit /></a>)}
        </div>
    )
}

export default Navigation