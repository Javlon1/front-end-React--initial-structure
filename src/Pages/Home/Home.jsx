import * as React from 'react'
import About from '../../Components/screens/Home/About/About';
import Intro from '../../Components';
import './Home.scss'
'изменено'

const Home = () => {
    return (
        <section className='home'>
            <Intro />
            <About />
        </section>
    )
}

export default Home;