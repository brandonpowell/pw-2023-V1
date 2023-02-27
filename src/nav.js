import './App.css';
import Logo from '../src/images/PW-logo.svg';
import Form from './form.js';
import Clutch from '../src/clutch';
import ShowAndHide from './hide&show';
//import Mnifesto from './manifesto';

export default function App() {
  return (
    <div className="App">
        <nav>
            <ul className='nav-list'>
                <li className='nav-item inline'>
                    <a href='/'>
                        <img 
                            className='Logo'
                            alt="Logo" 
                            src={Logo}
                        /> 
                    </a>
                    <Form />
                </li>     
                    
                <li className='nav-item'>
                    <ShowAndHide />
                </li>

                <li className='nav-item'>
                    <Clutch />
                </li>
            </ul>
        </nav>
    </div>
  );
}