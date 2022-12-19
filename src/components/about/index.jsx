import '../../styles/about.scss'

const About = () => {
    return (
        <div data-aos='fade-right' id='about'>
            <div className='container'>
                <div className='about-img' />
                <div className='about-details'>
                    <div className='p1'>
                        <h2>About Me</h2>
                        <p>Hey there, I'm Gio! I am a DevOps Engineer that loves building things and learning new technologies.</p>
                            
                        <p> My tech journey started last August, 2020, just when the pandemic struck the world. I learned how to program, and built all sorts of things, and it was awesome! </p>
                        
                        <p>As of today, I've grown my experience by working in <a href='https://abakadastudios.com' target='_blank'>edtech</a>, <a href='https://dashlabs.ai' target='_blank'>healthtech</a>, and <a href='https://xendit.co' target='_blank'>fintech</a> companies, 2 <a href='https://www.ycombinator.com/' target='_blank'>Y-Combinator Companies</a>, <a href='https://gdscloyola.org' target='_blank'> a student-led developer organization</a>, and maybe even for you 😉!</p>
                        
                        <p>I hope to continue making an impact through tech by building and learning!</p>

                        <p>Here are some technologies I've worked with recently:</p>
                    </div>
                    <div className='p2'>
                        <ul>
                            <li>Kubernetes</li>
                            <li>Terraform</li>
                            <li>AWS</li>
                            <li>GCP</li>
                        </ul>
                        <ul>
                            <li>Docker</li>
                            <li>NodeJS</li>
                            <li>ReactJS</li>
                            <li>Typescript</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About