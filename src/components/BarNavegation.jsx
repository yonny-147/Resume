import { Link } from 'react-scroll';
import '../styles/index.css'
export const BarNavegation = () => {

  return (
    <>
    <div className='header'>

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
    </>
  )
}
