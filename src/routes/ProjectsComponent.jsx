import "../styles/index.css";

export const ProjectsComponent = () => {
  return (
    <div className="container">
      <div className="containerTittle">
        <h1 className="tittleProject animation">Experiences</h1>
      </div>
      <div className="containerProjects">
        {/*proyecto #1*/}
        <div className="cart animation">
          <div className="contentCart"></div>
          <img
            className="imgProjects"
            src="imgs/chilling.png"
            alt="countdown"
          />
          <div className="dataCart">
            <p className="nameProject">Chilling Time</p>
            <div className="containerImgs">
              <img className="img" src="/imgs/js.png" alt="js" />
              <img className="img" src="/imgs/tailwind.svg" alt="tailwind" />
              <img className="img" src="/imgs/react.svg" alt="react" />
              <img
                className="img"
                src="/imgs/responsive.png"
                alt="responsive"
              />
            </div>
            <a
              className="btnLink"
              href="https://chillingtime.co/"
            >
              Link
            </a>
          </div>
        </div>

        {/*proyecto #2*/}
        <div className="cart animation">
          <div className="contentCart"></div>
          <img
            className="imgProjects"
            src="imgs/countdown.png"
            alt="countdown"
          />
          <div className="dataCart">
            <p className="nameProject">Countdown</p>
            <div className="containerImgs">
              <img className="img" src="/imgs/html.png" alt="html" />
              <img className="img" src="/imgs/css.png" alt="css" />
              <img
                className="img"
                src="/imgs/responsive.png"
                alt="responsive"
              />
              <img className="img" src="/imgs/js.png" alt="js" />
            </div>
            <a
              className="btnLink"
              href="https://countdownyonnydev.netlify.app/"
            >
              Link
            </a>
          </div>
        </div>

        {/*proyecto #3*/}
        <div className="cart animation">
          <div className="contentCart"></div>
          <img className="imgProjects" src="imgs/grades.png" alt="grades" />
          <div>
            <div className="dataCart">
              <p className="nameProject">Grades</p>
              <div className="containerImgs">
                <img className="img" src="/imgs/html.png" alt="html" />
                <img className="img" src="/imgs/css.png" alt="css" />
                <img className="img" src="/imgs/js.png" alt="js" />
                <img
                  className="img"
                  src="/imgs/responsive.png"
                  alt="responsive"
                />
              </div>
              <a className="btnLink" href="https://gradesyonnydev.netlify.app/">
                Link
              </a>
            </div>
          </div>
        </div>

        {/*proyecto #4*/}
        <div className="cart animation">
          <div className="contentCart"></div>
          <img className="imgProjects" src="imgs/piedra.jpg" alt="piedra" />
          <div className="dataCart">
            <p className="nameProject">rock paper scissors</p>
            <div className="containerImgs">
              <img className="img" src="/imgs/html.png" alt="html" />
              <img className="img" src="/imgs/css.png" alt="css" />
              <img className="img" src="/imgs/js.png" alt="js" />
            </div>
            <a
              className="btnLink"
              href="https://piedra-papel-tijera-game-v1.netlify.app/"
            >
              Link
            </a>
          </div>
        </div>

        {/*proyecto #5*/}
        <div className="cart animation">
          <div className="contentCart"></div>
          <img className="imgProjects" src="imgs/gallery.png" alt="gallery" />
          <div className="dataCart">
            <p className="nameProject">Gallery</p>
            <div className="containerImgs">
              <img className="img" src="/imgs/html.png" alt="html" />
              <img className="img" src="/imgs/css.png" alt="css" />
              <img
                className="img"
                src="/imgs/responsive.png"
                alt="responsive"
              />
              <img className="img" src="/imgs/js.png" alt="js" />
              <img className="img" src="/imgs/reactJS.png" alt="React js" />
            </div>
            <a className="btnLink" href="https://github.com/yonny-147/Gallery/">
              Link
            </a>
          </div>
        </div>

        {/*proyecto #6*/}
        <div className="cart animation">
          <div className="contentCart"></div>
          <img className="imgProjects" src="imgs/cardform.png" alt="cardform" />
          <div className="dataCart">
            <p className="nameProject">bank card form</p>
            <div className="containerImgs">
              <img className="img" src="/imgs/html.png" alt="html" />
              <img className="img" src="/imgs/css.png" alt="css" />
              <img
                className="img"
                src="/imgs/responsive.png"
                alt="responsive"
              />
              <img className="img" src="/imgs/js.png" alt="js" />
            </div>
            <a className="btnLink" href="https://cardformyonnydev.netlify.app/">
              Link
            </a>
          </div>
        </div>

        {/*proyecto #7*/}
        <div className="cart animation">
          <div className="contentCart"></div>
          <img className="imgProjects" src="imgs/crud.jpg" alt="cardform" />
          <div className="dataCart">
            <p className="nameProject">Crud university</p>
            <div className="containerImgs">
              <img className="img" src="/imgs/bootstrap.png" alt="bootstrap" />
              <img className="img" src="/imgs/vue.png" alt="vue" />
              <img className="img" src="/imgs/laravel.png" alt="laravel" />
            </div>
            <a
              className="btnLink"
              href="https://github.com/yonny-147/CRUD-universidad"
            >
              Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
