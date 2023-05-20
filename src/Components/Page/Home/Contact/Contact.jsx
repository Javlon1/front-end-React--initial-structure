import * as React from 'react'
import { Link } from 'react-router-dom'
import { Location } from '../../../../Data/Data'
import './Contact.scss'


export default function Contact() {
    const formReg = (e) => {
        e.preventDefault()
        
        console.log('ok');
    }
    return (
        <section className='contact'>
            <div className='container'>
                <ul className='container__list'>
                    {
                        Location?.map((e) => (
                            <li className='container__list__item' key={e.id}>
                                <div className='container__list__item__icon'>
                                    <i className={`bi ${e.icon}`}></i>
                                </div>
                                <div className='container__list__item__things'>
                                    <h2>{e.name}</h2>
                                    <main>
                                        {
                                            e.text?.map((i) => (
                                                <Link
                                                    to={i.tel ? `tel:${i.tel}` : i.email ? `mailto:${i.email}` : i.link}
                                                    target="_blank"
                                                    key={i.id}
                                                >
                                                    {i.item}
                                                </Link>
                                            ))
                                        }
                                    </main>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                    <form onSubmit={formReg} className='container__form' action="#" >
                        <input className='container__form__inp' type="text" name='name' placeholder='Your Full Name' required/>
                        <input className='container__form__inp' type="email" name='email' placeholder='Your Email' required/>
                        <input className='container__form__inp' type="number" name='phone' placeholder='Your Phone' required/>
                        <input className='container__form__inp' type="text" name='subject' placeholder='Subject' required/>
                        <textarea className='container__form__inp1' type="text" name='description' placeholder='Case Description' required/>
                        <button className='container__form__btn' type='submit'>Submit</button>
                    </form>
            </div>
        </section>
    )
}
