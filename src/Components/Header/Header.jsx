import * as React from 'react'
import './Header.scss'
// import Logo from '../../Assets/Img/logo.png'
// import { Btn, Nav } from '../../Data/Data'

export default function Header() {
//   const lang = ['uz', 'ru', 'en']
//   const [lan, setLan] = React.useState('');
  const [scrol, setScrol] = React.useState(false)
  const offSet = 80;

  const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

  window.addEventListener('scroll', () => {
    if (getTop() > offSet) {
      setScrol(true)
    } else {
      setScrol(false)
    }
  })

//   const handleChange = (event) => {
//     setLan(event.target.value);
//   };
//   console.log(lan);

  return (
    <header className={scrol ? 'header header__bc' : 'header'}>
      <div className="container">
        <h1>salom</h1>
      </div>
    </header>
  )
}