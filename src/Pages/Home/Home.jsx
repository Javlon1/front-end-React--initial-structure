import * as React from 'react'
import About from '../../Components/Page/Home/About/About'
import Blog from '../../Components/Page/Home/Blog/Blog'
import Contact from '../../Components/Page/Home/Contact/Contact'
import Intro from '../../Components/Page/Home/Intro/Intro'
import Owner from '../../Components/Page/Home/Owner/Owner'
import Team from '../../Components/Page/Home/Team/Team'
import './Home.scss'

const Home = () => {
    return (
        <section className='home'>
            <Intro />
            <About />
            <Owner />
            <Team />
            <Contact /> 
            <Blog />
        </section>
    )
}

export default Home;