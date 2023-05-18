import * as React from 'react'
import './Counter.scss'
import { counter } from '../../../../../Data/Data'

const Counter = () => {
    return (
        <section className='counter'>
            <div className='container'>
                <div className='container__div'>
                    <ul className='container__div__list'>
                        {
                            counter?.map((e) => (
                                <li key={e.id} className='container__div__list__item'>
                                    <i className={`bi bi-${e.icon}`}></i>
                                    <div className='container__div__list__item__div'>
                                        <h3 data-count={e.count}>{e.count}</h3>
                                        <p>{e.name}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Counter;