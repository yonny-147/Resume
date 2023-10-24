import '../styles/barraNav.css'
import '../styles/index.css'
export const ModNigth = () => {   
    const btnSwitch =  document.querySelector('#switch')
    const Movie = document.querySelector('.miVideo')
        document.body.classList.toggle('day')
        Movie.classList.toggle('none')
        btnSwitch.classList.toggle('modActive')
}  