import '../../styles/projects.scss'
import PavImg from '../../static/projects/pavilion-img.svg'
import DeanImg from '../../static/projects/dean-img.svg'
import SusImg from '../../static/projects/sus-img.svg'
import LinkImg from '../../static/projects/link-img.svg'

const Projects = () => {
    return (
        <div id='projects'>
            <h2 className='title'>Projects</h2>
            <div className='container'>
                <div className='project-details'>
                    <h3>Pavilion</h3>
                    <p>Pavilion is a platform for University clubs and organizations. It allows student-led organizations to post information that people can interact with. <a href='https://dev.gpavilion.org/' target='_blank'>Website coming soon!</a></p>
                    <a href='https://github.com/gdsc-loyola/pavilion' className='link' target='_blank'>
                        <p>Github</p>
                        <img src={LinkImg}/>
                    </a>
                    <a href='https://www.ceejatienza.com/project/pavilion' className='link' target='_blank'>
                        <p>Case Study</p>
                        <img src={LinkImg}/>
                    </a>
                </div>
                <div className='project-img'><img src={PavImg} /></div>
            </div>
            <div className='container'>
                <div className='project-details'>
                    <h3>DEAN</h3>
                    <p>DEAN is a Facebook chatbot that can search Google. It was created in order to help students without wifi connection adapt to the online setting.</p>
                    <a href='https://github.com/gdsc-loyola/DEAN-the-google-chatbot' className='link' target='_blank'>
                        <p>Github</p>
                        <img src={LinkImg}/>
                    </a>
                    <a href='https://www.facebook.com/dean.dscloyola' className='link' target='_blank'>
                        <p>Facebook Page</p>
                        <img src={LinkImg}/>
                    </a>
                </div>
                <div className='project-img'><img src={DeanImg} className='dean-img' /></div>
            </div>
            <div className='container'>
                <div className='project-details'>
                    <h3>Startup Summit</h3>
                    <p>Startup Summit is a 3-day online tech conference held last April, 2021. The event connects students and startups together to help build each other's futures and become catalysts for impactful change.</p>
                    <a href='https://github.com/BYTE-ADMU/startup-summit' className='link' target='_blank'>
                        <p>Github</p>
                        <img src={LinkImg}/>
                    </a>
                    <a href='https://startup-summit.org/' className='link' target='_blank'>
                        <p>Website</p>
                        <img src={LinkImg}/>
                    </a>
                </div>
                <div className='project-img'><img src={SusImg} /></div>
            </div>
        </div>
    )
}

export default Projects