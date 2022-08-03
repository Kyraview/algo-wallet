import logo from '../imgs/logo.png';
import { useState } from 'react';
import './animation.css';
const snapalgosdk =require('snapalgo-sdk');
var snapalgo;

export default function Wallet() {
    const [connected,setConnected] = useState(false);

    const enable = async () => {
      if(!connected){
      try {
        snapalgo = new snapalgosdk.Wallet;
        await snapalgo.enable();
        setConnected(true);
      } catch (err) {
        console.error(err)
        alert('Problem happened: ' + err.message || err)
      }}
    }
    
    return(
        <div style={{width:'400px', height:'600px', border:'1px solid white', borderRadius:'10px', backgroundColor:'black'}}>
          <div id="connectCover">
              <div align='center'>
                <br/>
                <img style={{width:'200px'}} src={logo} alt='' />
                <div style={{height:"200px"}}></div>
                <button onClick={enable} style={{backgroundColor:'transparent', border:'1px solid white', width:'150px', padding:'10px', borderRadius:'10px', color:'white'}}>
                {connected?'connected':'connect'}</button>
              </div>
          </div>
        </div>
    );
}
