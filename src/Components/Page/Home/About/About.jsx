import * as React from 'react'
import { Link } from 'react-router-dom';
import { Inner } from '../../../../Data/Data';
import './About.scss'
import Counter from './Counter/Counter';
import Img from '../../../../Assets/Img/img.webp'

export default function About() {
    
    return (
        <section className='about'>
            <div className='container'>
                <Counter />
 
                <div className="container__row">
                    <div className="container__row__left">
                        <img className='container__row__left__img' src={Img} alt="index-adout" />
                    </div>
                    <div className="container__row__right">
                        <h2 className='container__row__right__title'>We Are Happy To Help You</h2>
                        <p className='container__row__right__text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem porro, iusto saepe optio magnam explicabo voluptas blanditiis sit ut, unde nihil deserunt id. Recusandae distinctio magnam ad fugiat quibusdam veritatis!
                        </p>
                        <ul className='container__row__right__list'>
                            {
                                Inner?.map((e) => (
                                    <li className='container__row__right__list__item' key={e.id}>
                                        <i className={e.icon}></i>
                                        {e.text}
                                    </li>
                                ))
                            }
                        </ul>
                        <Link href='/' className='btn'>
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
