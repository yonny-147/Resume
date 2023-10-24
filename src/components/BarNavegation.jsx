import { NavLink } from 'react-router-dom'
import '../styles/barraNav.css'
import { ModNigth } from '../hooks/ModNigth'
export const BarNavegation = () => {


  return (
    <>
    <div className='header'>
        <button id='switch' className="switch" onClick={ModNigth}>
            <span className='spanOne'><img src="/public/dia.png" alt="dia" /></span>
            <span className='spanTwo'><img src="/public/noche.png" alt="noche" /></span>
        </button>
        <nav>
            <ul>
                <li>
                    <NavLink to={"/"}>About</NavLink>
                </li>
                <li>
                    <NavLink to={"/projects"}>Projects</NavLink>
                </li>
                <li>
                    <NavLink to={"/contact"}>contact</NavLink>
                </li>
            </ul>
        </nav>
    </div>
    </>
  )
}
