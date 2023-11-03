import '../styles/projects.css'
/*
<div className='imgs'>
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img className='img html' src="/public/html.png" alt="html" /></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img className='img css' src="/public/css.png" alt="css" /></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img className='img js' src="/public/js.png" alt="js" /></a>
<a href="https://es.legacy.reactjs.org/docs/getting-started.html"><img className='img react' src="/public/reactjs.png" alt="reactjs" /></a>
</div>
*/
export const ProjectsComponent = () => {
  return (
    <>
      <div >
        <div className='container'>
          <h1 className='tittleProject'>My projects</h1>
        </div>
        <div className='containerProjects'>
          <div className='cart'>
            <a href='https://rad-valkyrie-83953e.netlify.app/'><img className='imgProjects' src="imgs/cardform.png" alt="cardform" /></a>
            <div>
              <p className='nameProject'>bank card form</p>
              <p>
                <img className='img' src="/imgs/html.png" alt="html" />
                <img className='img' src="/imgs/css.png" alt="css" />
                <img className='img' src="/imgs/responsive.png" alt="responsive" />
                <img className='img' src="/imgs/js.png" alt="js" />
              </p>
            </div>
          </div>
          <div className='cart'>
            <a href='https://sensational-swan-3c88a7.netlify.app/'><img className='imgProjects' src="imgs/countdown.png" alt="countdown" /></a>
            <div>
            <p className='nameProject'>Countdown</p>
              <p>
                <img className='img' src="/imgs/html.png" alt="html" />
                <img className='img' src="/imgs/css.png" alt="css" />
                <img className='img' src="/imgs/responsive.png" alt="responsive" />
                <img className='img' src="/imgs/js.png" alt="js" />
              </p>
            </div>
          </div>
          <div className='cart'>
            <a href='https://incredible-sundae-b2e0ff.netlify.app/'><img className='imgProjects' src="imgs/grades.png" alt="grades" /></a>
            <div>
            <p className='nameProject'>Grades</p>
              <p>
                <img className='img' src="/imgs/html.png" alt="html" />
                <img className='img' src="/imgs/css.png" alt="css" />
                <img className='img' src="/imgs/js.png" alt="js" />
              </p>
            </div>
          </div>
          <div className='cart'>
            <a href='https://piedra-papel-tijera-game-v1.netlify.app/'><img className='imgProjects' src='imgs/piedra.jpg' alt="piedra" /></a>
            <div>
              <p className='nameProject'>rock paper scissors</p>
              <p>
                <img className='img' src="/imgs/html.png" alt="html" />
                <img className='img' src="/imgs/css.png" alt="css" />
                <img className='img' src="/imgs/js.png" alt="js" />
              </p>
            </div>
          </div>
          <div className='cart'>
            <a href='https://sensational-swan-3c88a7.netlify.app/'><img className='imgProjects' src="imgs/gallery.png" alt="gallery" /></a>
            <div>
            <p className='nameProject'>Gallery</p>
              <p>
                <img className='img' src="/imgs/html.png" alt="html" />
                <img className='img' src="/imgs/css.png" alt="css" />
                <img className='img' src="/imgs/responsive.png" alt="responsive" />
                <img className='img' src="/imgs/js.png" alt="js" />
                <img className='img' src="/imgs/reactJS.png" alt="React js" />
              </p>
            </div>
          </div>
          <div className='cart'>
            <a href='https://incredible-sundae-b2e0ff.netlify.app/'><img className='imgProjects' src="imgs/portafolio.jpg" alt="portafolio" /></a>
            <div>
            <p className='nameProject'>Briefcase</p>
              <p>
                <img className='img' src="/imgs/html.png" alt="html" />
                <img className='img' src="/imgs/css.png" alt="css" />
                <img className='img' src="/imgs/responsive.png" alt="responsive" />
                <img className='img' src="/imgs/js.png" alt="js" />
                <img className='img' src="/imgs/reactJS.png" alt="React js" />
              </p>
            </div>  
        </div>
      </div>
      </div>
    </>
  )
}
