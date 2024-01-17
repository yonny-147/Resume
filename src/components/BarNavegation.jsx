import { Link } from 'react-scroll';
import '../styles/index.css'
export const BarNavegation = () => {

  return (
    <>
    <div className='header'>
        <img className='cancel' src="../public/imgs/cancelar.png" alt="" />
        <nav>
            <ul>
                <li>
                    <Link to='home' smooth={true} duration={500} className='firsText' >About</Link>
                </li>
                <li>
                    <Link to='projects' smooth={true} duration={500} className='firsText' >Projects</Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500} className='firsText' >Contact</Link>
                </li>
            </ul>
        </nav>
    </div>
    <div>
        <img className='menu' src="../public/imgs/menu.png" alt="menu" />
    </div>
    </>
  )
}
