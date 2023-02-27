import './App.css';
import Nav from './nav.js';
//import Alert from './alert';
import Instagram from '../src/images/instagram.png';
//import DOBELogo from '../src/images/DOBELogo.png';
//import DOLogo from '../src/images/DOLogo.svg';
import Typewriter from 'typewriter-effect';
//import Post from '../src/post';

function App() {
  return (
    <div>
      <div className="App">
      <div className="container">
      <div className='row'>
        {/* <Alert /> */}
        <Nav />
        <header className="App-header">
            <small>soft launch</small>
            <h2>workfocus of the future.</h2>
            <div className="line"></div>
            <h1>creators come from our heavenly father; the future of work within the creators.</h1>
            <h2>people who are creators <span> 
            <Typewriter
                options={{
                    strings: [
                      'entreprenurs.',
                      'cheffery.',
                      'musicans.',
                      'actors.',
                      'techie.',
                      'designers.',
                      'coders.',
                      'gamers.',
                      'famers.',
                      'pastors.',
                      'leaders.',
                      'speakers.',
                      'visonaries.',
                      'teachers.',
                      'artists.',
                      'dreamers.',
                      'go getters.',
                      'risk takers.',
                      'believers.',
                      'mentors.',
                      'coaches.', 
                      'advisors.',
                      'builders.'
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>   
            </h2>
                <div className="line"></div>
            <p>
              The workforce is the Creator within us; we are here to <span>create,</span> <span>grow,</span> <span>build</span> and <span>dream</span> the next generations of workers. God created everyone in his own image. - Genesis 2:27
            </p>
          <div 
            className="inline"
          >
            {/* <a
              className="App-link"
              href="https://app.wonderverse.xyz/organization/perceptionworks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                className='wonderverse-icon'
                alt="wonderverse" 
                src={Instagram}
              /> 
            </a> */}
            <a
              className="App-link"
              href="https://instagram.com/perception.works"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                className='instagram-icon'
                alt="instagram" 
                src={Instagram}
              /> 
            </a>
          </div>

          {/* <div className="partner-list">
              <div className="title">
                  <h3>our partners</h3>
              </div>

              <div className="PartnerItems">
                <a
                  className="App-link"
                  href="https://www.districtoneservices.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img 
                    className='District-One'
                    alt="District One" 
                    src={DOLogo}
                  /> 
                </a>
              </div>
          </div> */}
        </header>
      </div>
      {/* <Post /> */}
      </div>
      </div>
     </div>
  );
}

export default App;

