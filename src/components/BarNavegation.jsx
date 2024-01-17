import { Link } from 'react-scroll';
import '../styles/index.css'
import { useState } from 'react';

export const BarNavegation = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const fMenuOpen = () => {
        setMenuOpen(true)
    }

    const fMenuClose = () => {
        setMenuOpen(false)
    }

  return (
    <>
    <div className={`header ${menuOpen ? "open" : ""}`}>
        <img className='cancel' src="./imgs/cancelar.png" alt="cancelar" onClick={fMenuClose}/>
        <nav>
            <ul>
                <li>
                    <Link to='home' smooth={true} duration={500} className='firsText' onClick={fMenuClose} >About</Link>
                </li>
                <li>
                    <Link to='projects' smooth={true} duration={500} className='firsText' onClick={fMenuClose}>Projects</Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500} className='firsText' onClick={fMenuClose}>Contact</Link>
                </li>
            </ul>
        </nav>
    </div>
    <div>
        <img className='menu' src="./imgs/menu.png" alt="menu" onClick={fMenuOpen}/>
    </div>
    </>
  )
}
