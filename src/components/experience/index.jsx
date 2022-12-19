import { useState } from 'react'
import '../../styles/experience.scss'
import Companies from './ExperienceObjects.js'
import Cards from './Cards'

const Experience = () => {
    const [org, setOrg] = useState(0)

    const changeOrg = (key) => {
        setOrg(key)
    }

    return (
        <div id='experience'>
            <div className='container'>
                <div data-aos='fade-right' className='title'><h2>Experience</h2></div>
                <div className='experience-info'>
                    <div data-aos='fade-right' className='selection'>
                        <ul>
                            {
                                Companies.map((company, index) => {
                                    return (
                                        (org == index) ? 
                                            <li onClick={() => changeOrg(index)} key={index} className='chosen'>{company.company}</li>
                                            :
                                            <li onClick={() => changeOrg(index)} key={index} >{company.company}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    {
                        Companies.map((company, index) => {
                            return (org == index) && <Cards key={index} value={company} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience