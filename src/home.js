import './App.css';
import logo from './imgs/logo.png';
import metamask from './imgs/metamask-fox.svg';
import install from './imgs/install.png';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';
import './components/animation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const snapalgosdk =require('snapalgo-sdk');
var snapalgo;

function Home() {
  useEffect(() => {
    enable();
  });

  const enable = async () => {
    try {
      snapalgo = new snapalgosdk.Wallet;
      await snapalgo.enable();
    } catch (err) {
      console.error(err)
      alert('Problem happened: ' + err.message || err)
    }
  }

  return (
    <div id='connectCover'>
    <div style={{display:'flex', justifyContent:'right'}}>
    <img style={{width:'35vh', marginRight:'10%', transform:'translateY(30%)'}} src={logo} alt='' />
    </div>
    
    <div style={{padding:'0px 0 0 50px'}} className='infoDoc'>
      <Tabs className="mb-3">
          <Tab eventKey="overview" title="Overview">
            <div style={{display:'flex'}}>
              <div className='infotab'>
              <h5 style={{fontSize:'48px'}}>Algorand on MetaMask</h5>
              <p>SnapAlgo is a set of methods callable on MetaMask Flask to access the Algorand blockchain, here is a wallet utilizing SnapAlgo. SnapAlgo is currently only on the developer version of MetaMask, MetaMask Flask. However, SnapAlgo will be available to the consumer version of MetaMask by the end of the year. You can download MetaMask Flask here:<br/><a href='https://metamask.io/flask/'>https://metamask.io/flask/</a></p>
              </div>
              <div className='infoimg' align='center'>
                <img src={metamask} style={{width:'30vh'}} alt=''></img>
              </div>
            </div>
          </Tab>
          <Tab eventKey="installation" title="Installation">
            <div style={{display:'flex'}}>
              <div className='infotab'>
              <h5 style={{fontSize:'48px'}}>Requires MetaMask Flask</h5>
              <p>1. Create a new Chrome account without MetaMask installed; or if MetaMask is currently installed, uninstall it and install MetaMask Flask. (This will remove all imported accounts from MetaMask!)</p>
              <p>2. Install MetaMask Flask at <a href='https://metamask.io/flask/'>https://metamask.io/flask/</a></p>
              <p>3. Press Connect and follow the prompts.</p>
              </div>
              <div className='infoimg' align='center'>
                <img src={install} style={{width:'80%'}} alt=''></img>
              </div>
            </div>
          </Tab>
          <Tab eventKey="apps" title="Apps">
            <div style={{display:'flex'}}>
              <div className='infotab'>
              <h5 style={{fontSize:'48px'}}>Applications</h5>
              <p>More exciting applications are to come using SnapAlgo wallet.</p>
              <p>Proof of Concept:<br/><a href='https://snapalgo02.paulfears.repl.co/'>Website</a><br/><a href='https://replit.com/@paulfears/snapalgo02#index.html'>Code</a></p>
              </div>
            </div>
          </Tab>
          <Tab eventKey="import" title="Import">
            <div style={{display:'flex'}}>
              <div className='infotab'>
              <h5 style={{fontSize:'48px'}}>Import Account</h5>
              <p>You have the ability to <Link to="/importaccount">Import Accounts</Link> securely with SnapAlgo.</p>
              </div>
            </div>
          </Tab>
          <Tab eventKey="Docs" title="Docs">
            <div style={{display:'flex'}}>
              <div className='infotab'>
              <h5 style={{fontSize:'48px'}}>Documentation</h5>
              <p>We strive to make development with SnapAlgo as seamless as possible, you can see our documentation at <Link to="/docs">SnapAlgo Docs</Link>, or you can find our code at <a href='https://www.npmjs.com/package/algorand'>npm:algorand</a> or <a href='https://github.com/paulfears/snapalgo'>GitHub</a>.</p>
              </div>
            </div>
          </Tab>
      </Tabs>
    </div>
    <div>

    </div>
    </div>
  );
}

export default Home;
