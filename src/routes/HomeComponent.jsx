import '../styles/index.css'
export const HomeComponent = () => {
  return (
    <>
    <div className='animationImage bgAnimation'></div>
    <div className='animationImage bgAnimation position2'></div>
    <div className='animationImage bgAnimation position3'></div>
    <div className='animationImage bgAnimation position4'></div>
    <div className='marco'></div>
    <img className='image' src="imgs/image.png" alt="profile" />
      <div className='curriculumGene'>  
        <p>I'm <span className='name'>Yonny</span></p>
        <br />
        <p>I'm a frontend developer with skills in HTML, CSS and JavaScript. My job is to create attractive and functional user interfaces for web applications. I collaborate closely with designers and other developers to ensure a high-quality user experience. I am always up to date on the latest technologies to improve the performance of web applications.</p>
          <p className='curriDownload'>Download resume or view resume ↓</p>
          <br />
          <a className='downCurri' href="https://drive.google.com/file/d/1Fevi-2etWrqLWxwi0n69Idl5N8QeHCrQ/view?usp=sharing">click here</a>
      </div>

    </>
  );
};
