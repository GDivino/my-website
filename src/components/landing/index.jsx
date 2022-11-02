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
                    <h4 className='short-desc'>I build healthy infra and smooth ops</h4>
                    <p className='long-desc'>I am a Manila-based DevOps Engineer that creates smooth operations, and builds healthy IT infrastructure. Currently, I am looking for DevOps opportunities to grow into a complete engineer.</p>
                </div>
            </div>
        </div>
    )
}

export default Landing