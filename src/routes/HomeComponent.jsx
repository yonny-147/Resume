import '../styles/home.css'
export const HomeComponent = () => {
  return (
    <>
    <div id='welcome' className='welcomeGene welcome'>
      <h1 className='textDecoration'>Front-end developer</h1>
    </div>
    <div id='curriculum' className='curriculumGene curriculum'>  
      <div className='curri'>
        <div className='animationImage bgAnimation'> 
          <img className='image' src="/public/img.png" alt="profile" />  
        </div>
        <h4 className='curriDownload textDecoration'>Download resume or view resume ↓</h4>
        <p>
          <a className='downCurri' href="https://drive.google.com/file/d/1EXzJvhaMt2G4010Sttg_7-2BB4OuQDaq/view?usp=sharing">click here</a>
        </p>
      </div>
      <div className='about'>
        <h3 className="textDecoration">My name is Yonny, I'm versatile, I'm capable of developing web development both on the client side and on the server side. I'm in the process of training and I'm acquiring experience in the work field.
        </h3>
      </div>
    </div>
    </>
  );
};
