import React from 'react'
import { useEffect, useState } from 'react'
import '../../styles/landing.scss'
import { Link } from 'react-scroll'
import Face from './face/Face'

const Landing = () => {   
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const changeWidth = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
        
    }, [width])
    
    return (
        <div id='landing'>
            <div className='container'>
                {width > 700 && 
                    <Face />
                }
                <Link 
                    to='contact'
                    smooth={true}
                    duration={1000}
                    offset={-70}
                >
                    <button className='button'>Get In Touch</button>
                </Link>
                <div className='landing-info'>
                    <p className='greeting'>Hi my name is</p>
                    <h1 className='name'>Gio Divino.</h1>
                    <h4 className='short-desc'>I make Software Delivery a breeze</h4>
                    <p className='long-desc'>I am a Manila-based Infrastructure Engineer building and delivering technology towards sustainable economic impact. Currently, I automate and streamline tech ops in Fintech.</p>
                </div>
            </div>
        </div>
    )
}

export default Landing
