import { useState, useEffect } from 'react'
import '../../styles/navigation.scss'
import Logo from '../../static/logo.svg'
import { Link } from 'react-scroll'

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
            {(screenWidth > 700) && 
                <Link 
                    className='logo' 
                    to='landing'
                    smooth={true}
                    duration={1000}
                    offset={-70}
                    onClick={toggleNav}
                >
                    <img src={Logo} />
                </Link>
            }
            {(screenWidth > 700 || toggleMenu) && 
                <nav className='navbar'>
                    {screenWidth < 700 &&
                    <ul className='logo-container'>
                        <li className='nav-item'>
                            <Link 
                                className='logo' 
                                to='landing' 
                                smooth={true}
                                duration={1000}
                                offset={-70}
                                onClick={toggleNav}
                            >
                                <img src={Logo} />
                            </Link>
                        </li>
                    </ul>}
                    <ul>
                        <li className='nav-item'>
                            <Link 
                                className='nav-link' 
                                to='about'
                                activeClass='active' 
                                smooth={true} 
                                duration={1000} 
                                offset={-50}
                                spy={true}
                                onClick={toggleNav}
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li className='nav-item'>
                            <Link 
                                className='nav-link' 
                                to='experience' 
                                onClick={toggleNav}
                                activeClass='active' 
                                smooth={true}
                                offset={-50}
                                spy={true}
                                duration={1000} 
                            >
                                Experience
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li className='nav-item'>
                            <Link 
                                className='nav-link' 
                                to='projects'
                                activeClass='active' 
                                smooth={true} 
                                duration={1000}
                                offset={-50}
                                spy={true}
                                onClick={toggleNav}
                            >
                                Projects
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li className='nav-item'>
                            <Link 
                                className='nav-link' 
                                to='contact'
                                activeClass='active' 
                                smooth={true} 
                                duration={1000}
                                spy={true}
                                offset={-90}
                                onClick={toggleNav}
                            >
                                Contact
                            </Link>
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