import '../styles/home.css'
export const HomeComponent = () => {
  return (
    <>
    <div className='welcome'>
      <h1 className='textDecoration'>Full Stack developer</h1>
    </div>
    <img className='image' src="/public/img.png" alt="profile" />  
    <div className='curriculum'>
      <h4 className='textDecoration'>Download resume or view resume ↓</h4>
      <p>
        <a className='downCurri textDecoration' href="https://drive.google.com/file/d/1EXzJvhaMt2G4010Sttg_7-2BB4OuQDaq/view?usp=sharing">click here</a>
      </p>
    </div>
    <div className='imgs'>
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img className='img html' src="/public/html.png" alt="html" /></a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img className='img css' src="/public/css.png" alt="css" /></a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img className='img js' src="/public/js.png" alt="js" /></a>
      <a href="https://es.legacy.reactjs.org/docs/getting-started.html"><img className='img react' src="/public/reactjs.png" alt="reactjs" /></a>
    </div>
    </>
  );
};
