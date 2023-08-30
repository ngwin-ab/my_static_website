import img from './assets/working.png';
import './App.css';

function App() {
  return (
    <div>
      <div id="page-container">
        <header>
          <nav>
            <a href="index.html" className="logo">ABN</a>
            <ul>
              <li><a href="index.html" className="active">HOME</a></li>
              <li><a href="numberGuessingGame.html">GAME</a></li>
            </ul>
            {/* <div className="logBtn">Login</div> */}
          </nav>
        </header>

        <div className="left-div">
          <h1>This is a static website</h1>
          <h2>Hosted on AWS S3</h2>
          <br />
          <p>All feedbacks and suggestions are welcomed!</p>
          {/* <div className="fb_Btn">Contact</div> */}
        </div>

        <div className="right-div"><img src={img} alt="Girl working on laptop" width={600} height={600}/></div>

        <footer>
          <div className="social-icons">
            <ul>
              <li><a className="facebook" href="https://www.facebook.com/CuteOverrated/" target="_blank" rel='noreferrer'><i
                className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="https://twitter.com/ANIMALPlCTURES" target="_blank" rel='noreferrer'><i
                className="fa fa-twitter"></i></a></li>
              <li><a className="instagram" href="https://www.instagram.com/rescuepetsofinstagram/?hl=en"
                target="_blank" rel='noreferrer'><i className="fa fa-instagram"></i></a></li>
            </ul>
          </div>

          <div className="links">
            <ul>
              <li><a href="index.html">HOME</a></li>
              <li><a href="index.html" target="_blank" rel='noreferrer'>SITEMAP</a></li>
              <li><a href="index.html">ABOUT</a></li>
              <li><a href="index.html">CONTACT</a></li>
            </ul>
          </div>
          <hr />
          <div id="copyright-text">
            <p>Copyright &copy; 2023 All Rights Reserved by ABN</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
