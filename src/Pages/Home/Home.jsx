import * as React from 'react'
import Intro from '../../Components/screens/Home/Intro/Intro';
import About from '../../Components/screens/Home/About/About';
import'./Home.scss'


const Home = () => {
    return (
        <section className='home'>
            <Intro/>
            <About />
        </section>
    )
}

export default Home;