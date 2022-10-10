import './App.css';
import logo from './imgs/logo.png';
import metamask from './imgs/metamask-fox.svg';
import install from './imgs/install.png';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {Link} from 'react-router-dom';
import './components/animation.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div>
    <div id='connectCover'></div>

    <div id='homePage'>
    <div style={{display:'flex', justifyContent:'right'}}>
      <img style={{width:'35vh', marginRight:'8vw', transform:'translateY(30%)'}} src={logo} alt='' />
    </div>
    
    <div style={{padding:'30px 20px 20px 20px', zIndex:'20'}} className='infoDoc'>
      <Tabs className="mb-3">
          <Tab eventKey="overview" title="Overview">
            <div className='d-flex flex-wrap'>
              <div className='infotab'>
              <h5>Algorand on MetaMask</h5>
              <p>SnapAlgo is a set of methods callable on MetaMask Flask to access the Algorand blockchain, here is a wallet utilizing SnapAlgo. SnapAlgo is currently only on the developer version of MetaMask, MetaMask Flask. However, SnapAlgo will be available to the consumer version of MetaMask by the end of the year. You can download MetaMask Flask here:<br/><a href='https://metamask.io/flask/'>https://metamask.io/flask/</a></p>
              </div>
              <div className='infoimg'>
                <img src={metamask} alt='' style={{width:'30vh'}}></img>
              </div>
            </div>
          </Tab>
          <Tab eventKey="installation" title="Installation">
            <div className='d-flex flex-wrap'>
              <div className='infotab'>
              <h5>Requires MetaMask Flask</h5>
              <p>1. Create a new Chrome account without MetaMask installed; or if MetaMask is currently installed, uninstall it and install MetaMask Flask. (This will remove all imported accounts from MetaMask!)</p>
              <p>2. Install MetaMask Flask at <a href='https://metamask.io/flask/'>https://metamask.io/flask/</a></p>
              <p>3. Press Connect and follow the prompts.</p>
              </div>
              <div className='infoimg'>
                <img src={install} alt='' style={{width:'35vh'}}></img>
              </div>
            </div>
          </Tab>
          <Tab eventKey="apps" title="Apps">
            <div className='d-flex flex-wrap'>
              <div className='infotab'>
              <h5>Applications</h5>
              <p>More exciting applications are to come using SnapAlgo wallet.</p>
              <p>Proof of Concept:<br/><a href='https://snapalgo02.paulfears.repl.co/'>Website</a><br/><a href='https://replit.com/@paulfears/snapalgo02#index.html'>Code</a></p>
              <p>TEAL Compiler:<br/><a href='https://dewdrops-studio.deatheye.repl.co/'>Website</a></p>
              </div>
              <div className='infoimg'></div>
            </div>
          </Tab>
          <Tab eventKey="import" title="Import">
            <div className='d-flex flex-wrap'>
              <div className='infotab'>
              <Link to="/importaccount"><button className='receiveButton alt' style={{margin:'10px 10px 2px 0'}}>Import Account</button></Link>
              <p>You have the ability to import accounts securely with SnapAlgo.</p>
              </div>
              <div className='infoimg'></div>
            </div>
          </Tab>
          <Tab eventKey="Docs" title="Docs">
            <div className='d-flex flex-wrap'>
              <div className='infotab'>
              <h5 style={{marginBottom:'20px'}}>Documentation</h5>
              <Link to="/docs"><button className='receiveButton alt' style={{margin:'10px 10px 2px 0'}}>SnapAlgo Docs</button></Link>
              <a href="https://www.npmjs.com/package/algorand"><button className='receiveButton alt' style={{margin:'10px 10px 2px 0'}}>npm:algorand</button></a>
              <a href="https://github.com/paulfears/snapalgo"><button className='receiveButton alt' style={{margin:'10px 10px 2px 0'}}>Github</button></a>
              </div>
              <div className='infoimg'></div>
            </div>
          </Tab>
      </Tabs>
    </div></div>
    </div>
  );
}

export default Home;
