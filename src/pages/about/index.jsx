import '../../styles/about.scss'

const About = () => {
    return (
        <div data-aos='fade-right' id='about'>
            <div className='container'>
                <div className='about-img' />
                <div className='about-details'>
                    <div className='p1'>
                        <h2>About Me</h2>
                        <p>Hey there, I'm Gio! I am a <a>Fullstack Software Engineer</a> that loves building things and learning new technologies. My tech journey started last August, 2020, just when the pandemic struck the world. I learned how to program, and built all sorts of things, and it was awesome!</p>
                        <br />
                        <p>As of today, I've grown my experience by working in <a>edtech and </a> <a>healthtech companies, a Y-Combinator Startup</a>, <a> a student-led developer organization, and maybe even for you</a> 😉!</p>
                        <br />
                        <p>I hope to continue making an impact through tech by building and learning!</p>
                        <br />
                        <p>Here are some technologies I've worked with recently:</p>
                        <br />
                    </div>
                    <div className='p2'>
                        <ul>
                            <li>ReactJS</li>
                            <li>NodeJS</li>
                            <li>MongoDB</li>
                            <li>Typescript</li>
                        </ul>
                        <ul>
                            <li>Jest</li>
                            <li>Django</li>
                            <li>MySQL</li>
                            <li>Docker</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About