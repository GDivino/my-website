import '../../styles/landing.scss'
import Face from './face/Face'

const index = () => {
    const breakpoint = 767
    const width = window.innerWidth
    
    return (
        <div id='landing'>
            {width > breakpoint ? <Face /> : <div style={{display: 'none'}} />}
            <a href='/contact'><button className='button'>Get In Touch</button></a>
            <div className='landing-info'>
                <p className='greeting'>Hi my name is</p>
                <h1 className='name'>Gio Divino.</h1>
                <h4 className='short-desc'>I love building things with Tech.</h4>
                <p className='long-desc'>I am a Manila-based Software Engineer that specializes in building web-based applications. Currently, I am learning Devops to empower other Developers and create quality products.</p>
            </div>
        </div>
    )
}

export default index