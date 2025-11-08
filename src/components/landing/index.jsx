import React, { Suspense, useState, useEffect } from 'react';
import '../../styles/landing.scss';
import { Link } from 'react-scroll';
import Loading from '../loading';
const Face = React.lazy(() => import('./face/Face'));

const Landing = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const changeWidth = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', changeWidth);

        if (window.innerWidth <= 700) {
            setIsLoading(false);
        }

        return () => {
            window.removeEventListener('resize', changeWidth);
        };
    }, [width]);

    const handleFaceLoad = () => {
        setIsLoading(false);
    };

    return (
        <div id='landing'>
            {isLoading && width > 700 && <Loading />}
            <div className='container' style={{ visibility: isLoading && width > 700 ? 'hidden' : 'visible' }}>
                {width > 700 && (
                    <Suspense fallback={null}>
                        <Face onLoad={handleFaceLoad} />
                    </Suspense>
                )}
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
                    <p className='long-desc'>I am a Manila-based Platform Engineer building and delivering technology towards sustainable economic impact. Currently, I automate and streamline tech ops in Fintech.</p>
                </div>
            </div>
        </div>
    );
};

export default Landing;
