import { useEffect, useState } from 'react'
import '../../styles/landing.scss'
import Face from './face/Face'
import { Link } from 'react-scroll'

const Landing = () => {   
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const changeWidth = () => {
            setWidth(width.innerWidth)
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])
    
    return (
        <div id='landing'>
            <div className='container'>
                {width > 700 && <Face />}
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
                    <h4 className='short-desc'>I build things with web technologies.</h4>
                    <p className='long-desc'>I am a Manila-based Software Engineer that specializes in building web-based applications. Currently, I am learning Devops to empower other Developers and create quality products.</p>
                </div>
            </div>
        </div>
    )
}

export default Landing