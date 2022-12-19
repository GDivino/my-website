import React, { lazy, Suspense } from 'react'
import { useEffect, useState } from 'react'
import '../../styles/landing.scss'
import { Link } from 'react-scroll'

const Face = lazy(() => import('./face/Face'))

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
                    <Suspense fallback={<div>Loading...</div>}>
                        <Face />
                    </Suspense>
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
                    <p className='long-desc'>I am a Manila-based DevOps Engineer that creates smooth operations, and builds healthy IT infrastructure. Currently, I am looking for DevOps opportunities to grow as a complete engineer.</p>
                </div>
            </div>
        </div>
    )
}

export default Landing