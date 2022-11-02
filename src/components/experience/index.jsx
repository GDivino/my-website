import { useState } from 'react'
import Dashlabs from './Dashlabs'
import Abakada from './Abakada'
import GDSC from './GDSC'
import Xendit from './Xendit'
import '../../styles/experience.scss'

const Experience = () => {
    const [org, setOrg] = useState('xendit')

    const chooseDashlabs = () => {
        setOrg('dashlabs')
    }

    const chooseAbakada = () => {
        setOrg('abakada')
    }

    const chooseGdsc = () => {
        setOrg('gdsc')
    }

    const chooseXendit = () => {
        setOrg('xendit')
    }

    return (
        <div id='experience'>
            <div className='container'>
                <div data-aos='fade-right' className='title'><h2>Experience</h2></div>
                <div className='experience-info'>
                    <div data-aos='fade-right' className='selection'>
                    <ul>
                        {
                            (org == 'xendit') ?
                                <li onClicl={chooseXendit} className='chosen'>Xendit (YC W15)</li>
                                :
                                <li onClick={chooseXendit}>Xendit (YC W15)</li>
                        }
                        {
                            (org == 'dashlabs') ? 
                                <li onClick={chooseDashlabs} className='chosen'>Dashlabs.ai (YC W21)</li> 
                                : 
                                <li onClick={chooseDashlabs}>Dashlabs.ai (YC W21)</li>
                        }
                        {
                            (org == 'abakada') ? 
                                <li onClick={chooseAbakada} className='chosen'>Abakada Studios</li> 
                                : 
                                <li onClick={chooseAbakada}>Abakada Studios</li>
                        }
                        {
                            (org == 'gdsc') ? 
                                <li onClick={chooseGdsc} className='chosen'>Google Developer Student Clubs Loyola</li> 
                                : 
                                <li onClick={chooseGdsc}>Google Developer Student Clubs Loyola</li>
                        }
                    </ul>
                    </div>
                    {(org == 'xendit') && <Xendit />}
                    {(org == 'dashlabs') && <Dashlabs />}
                    {(org == 'abakada') && <Abakada />}
                    {(org == 'gdsc') && <GDSC />}
                </div>
            </div>
        </div>
    )
}

export default Experience