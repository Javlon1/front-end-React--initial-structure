import * as React from 'react'
import About from '../../Components/Page/About/About/About'
import Expertise from '../../Components/Page/About/Expertise/Expertise'
import AllIntro from '../../Components/Ui/AllIntro/AllIntro'
import './AboutS.scss'


export default function AboutS() {
    return (
        <section className='aboutS'>
            <AllIntro text={'About Our Firm and History'} title={'About'} />
            <About />
            <Expertise />
        </section>
    )
}
