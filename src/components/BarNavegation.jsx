import { NavLink } from 'react-router-dom'
import '../styles/barraNav.css'
export const BarNavegation = () => {

  return (
    <>
    <div className='header'>

        <nav>
            <ul>
                <li>
                    <NavLink id='routasAbout' className='firsText' to={"/"}>About</NavLink>
                </li>
                <li>
                    <NavLink id='routasProjects' className='firsText' to={"/projects"}>Projects</NavLink>
                </li>
                <li>
                    <NavLink id='routasContact' className='firsText' to={"/contact"}>contact</NavLink>
                </li>
            </ul>
        </nav>
    </div>
    </>
  )
}
