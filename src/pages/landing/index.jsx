import '../../styles/landing.scss'
import Face from './face/Face'

const index = () => {
    return (
        <div id='landing'>
            <Face />
            <div className='landing-info'>
                <p className='greeting'>Hi my name is {window.screen.height} {window.screen.width}</p>
                <h1 className='name'>Gio Divino.</h1>
                <h4 className='short-desc'>I love building things with Tech.</h4>
                <p className='long-desc'>I am a Manila-based Software Engineer that specializes in building web-based applications. Currently, I am learning Devops to empower other Developers and create quality products.</p>
            </div>
        </div>
    )
}

export default index