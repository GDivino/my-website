import '../../styles/projects.scss'
import PavImg from '../../static/projects/pavilion-img.svg'
import DeanImg from '../../static/projects/dean-img.svg'
import SusImg from '../../static/projects/sus-img.svg'
import LinkImg from '../../static/projects/link-img.svg'

const Projects = () => {
    return (
        <div id='projects'>
            <h2 data-aos='fade-right' className='title'>Projects</h2>
            <div className='container'>
                <div data-aos='fade-right' className='project-details'>
                    <h3>Pavilion</h3>
                    <p>Pavilion is an events management platform for University Organizations. It is the place to go to experience the University's org culture. <a href='https://staging.gpavilion.org/' target='_blank'>Website coming soon!</a></p>
                    <a href='https://github.com/gdsc-loyola/pavilion' className='link' target='_blank'>
                        <p>Github</p>
                        <img src={LinkImg}/>
                    </a>
                    <a href='https://www.ceejatienza.com/project/pavilion' className='link' target='_blank'>
                        <p>Case Study</p>
                        <img src={LinkImg}/>
                    </a>
                </div>
                <div data-aos='fade-left' className='project-img'><img src={PavImg} /></div>
            </div>
            <div className='container'>
                <div data-aos='fade-right' className='project-details'>
                    <h3>DEAN</h3>
                    <p>DEAN is a Facebook chatbot that can scrape articles online. It was created in order to help students without wifi connection adapt to the online setting.</p>
                    <a href='https://github.com/gdsc-loyola/DEAN-the-google-chatbot' className='link' target='_blank'>
                        <p>Github</p>
                        <img src={LinkImg}/>
                    </a>
                    <a href='https://www.facebook.com/dean.gdscloyola' className='link' target='_blank'>
                        <p>Facebook Page</p>
                        <img src={LinkImg}/>
                    </a>
                </div>
                <div data-aos='fade-left' className='project-img'><img src={DeanImg} className='dean-img' /></div>
            </div>
            <div className='container'>
                <div data-aos='fade-right' className='project-details'>
                    <h3>Startup Summit</h3>
                    <p>Startup Summit is a 3-day online tech conference held last April, 2021. The event connects students and startups together to help build the future and become catalysts for impactful change.</p>
                    <a href='https://github.com/BYTE-ADMU/startup-summit' className='link' target='_blank'>
                        <p>Github</p>
                        <img src={LinkImg}/>
                    </a>
                    <a href='https://startup-summit-83da6.firebaseapp.com/' className='link' target='_blank'>
                        <p>Website</p>
                        <img src={LinkImg}/>
                    </a>
                </div>
                <div data-aos='fade-left' className='project-img'><img src={SusImg} /></div>
            </div>
            <p data-aos='fade-right' className='view-more'>
                To see more projects I've worked on, check out my github.
            </p>
            <a href='https://github.com/GDivino' target='_blank' className='a-view'><button data-aos='fade-right' className='view-button'>View Github</button></a>
        </div>
    )
}

export default Projects