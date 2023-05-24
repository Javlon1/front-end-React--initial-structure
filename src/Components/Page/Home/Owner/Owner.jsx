import * as React from 'react'
import { ownerdata } from '../../../../Data/Data'
import'./Owner.scss'
import BC from '../../../../Assets/Img/bc.png'
import Img from '../../../../Assets/Img/img.webp'

export default function Owner() {
    return (
        <section className='owner'>
            <div className='container'>
                <div className="container__left">
                    <div className="container__left__div">
                        <p className='container__left__div__title'>the owner of the company</p>
                        <h2 className='container__left__div__text'>Owner Law firm dedicated to our clients</h2>
                    </div>
                    <ul className='container__left__list'>
                        {
                            ownerdata?.map((e)=>(
                                <li className='container__left__list__item' key={e.id}>
                                    <div className='container__left__list__item__icon'>
                                        <i className={`bi ${e.icon}`}></i>
                                        <img className="container__left__list__item__icon__img" src={BC} alt="" />
                                    </div>
                                    <h3 className='container__left__list__item__title'>{e.title}</h3>
                                    <p className='container__left__list__item__text'>{e.text}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="container__right">
                    <div className="container__right__expertise">
                        <img className='container__right__expertise__img' src={Img} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}