import * as React from 'react'
import { dataExpertise } from '../../../../Data/Data'
import './Expertise.scss'


export default function Expertise() {
    return (
        <section className='expertise'>
            <div className='container'>
                <p className='container__title'>OUR EXPERTISE</p>
                <h2 className='container__text'>Law Firm Devoted To Our Clients</h2>
                <ul className='container__list'>
                    {
                        dataExpertise?.map((e) => (
                            <li className='container__list__item' key={e.id}>
                                <img className='container__list__item__img' src="" alt="EXPERTISE" />
                                <span className='container__list__item__span'>
                                    <h3 className='container__list__item__span__title'>{e.title}</h3>
                                    <p className='container__list__item__span__text'>{e.text}</p>
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}
