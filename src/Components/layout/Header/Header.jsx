import * as React from 'react'
import { Link } from 'react-router-dom';
import './Header.scss'
import { HeaderData } from '../../../Data/Data'
import Language from './Language/Language';
import { Context } from '../../../Context/Context';
import Img from '../../../Assets/Img/img.webp'

export default function Header() {

  const { lan, menu, setMenu } = React.useContext(Context)
  const [scrol, setScrol] = React.useState(false)
  const [nav, setNav] = React.useState(false)
  const offSet = 80;

  const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

  window.addEventListener('scroll', () => {
    if (getTop() > offSet) {
      setScrol(true)
    } else {
      setScrol(false)
    }
  })

  const [fil, setFil] = React.useState(HeaderData[menu - 1].id)

  return (
    <header className={scrol ? 'header' : 'header'}>
      <div className="container">
        <nav className='container__nav'>
          <Link to='/'>
            <img className='container__nav__logo' src={Img} alt="" />
          </Link>
          <ul className={nav ? 'container__nav__list active-nav' : 'container__nav__list'}>
            {
              HeaderData?.map((e) => (
                <Link key={e.id} to={e.link}>
                  <li className={`${fil === e.id ? 'container__nav__list__item active' : 'container__nav__list__item'}`}
                    onClick={() => {
                      setMenu(e.id)
                      setFil(e.id)
                      localStorage.setItem('menu', e.id)
                    }}>
                    {e[`nav_${lan}`]}
                  </li>
                </Link>
              ))
            }
            <Language />
          </ul>
          <button className={nav ? 'container__nav__btn active-nav' : 'container__nav__btn'}>
            <Link to='/log-in' className='container__nav__btn__a'>
              log-in
            </Link>
          </button>
          <div onClick={() => setNav(!nav)} className={nav ? 'container__nav__btnHam active-Ham' : 'container__nav__btnHam'}></div>
        </nav>
      </div>
    </header>
  )
}