import '../../styles/navigation.scss'
import { NavLink } from "react-router-dom"

const index = () => {
    return (
        <div id='navigation'>
            <nav className='navbar'>
                <ul>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/about'>
                            About
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/experience'>
                            Experience
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/projects'>
                            Projects
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/contact'>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default index