import * as React from 'react'
import { Link } from 'react-router-dom';
import './notFound.scss'


const NotFound = () => {

    return (
        <section className='notFound'>
            <div className='container'>
                <div class="container__item">
                    <h1>404!</h1>
                    <p>Sorry! The Page Not Found</p>
                    <span>Oops! The page you are looking for does not exit. it might been moved or deleted.</span>
                    <Link to="/"
                    onClick={() => {
                      localStorage.setItem('menu', 1)
                    }}>Return to Home</Link>
                </div>
            </div>
        </section>
    )
}

export default NotFound;