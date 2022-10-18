import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import MainSwapScreen from './MainSwapScreen.jsx';
import web3 from 'web3';
import Utils from './utils/Utils.js';

export default function SwapComponent() {

    const [connected, setConnected] = useState(false);


    const connect = async () => {
        let error = false;
        try{
            let connection = await window.ethereum.request({
                method: 'wallet_enable',
                params: [{
                    wallet_snap: { 'npm:algorand': {} },
                }]
            })
        console.log(connection);
        }catch(e){
            error = true;
            console.log('error', e);
        }
        if(error){
            alert("this app requires metamask flask at the current time");
            return "failed";
        }
        window.web3 = new web3(window.ethereum);
        window.ethAddress = (await window.ethereum.request({ method: 'eth_requestAccounts' }))[0];
        
        setConnected(true);
        document.getElementById('connectButton').style.display = "none";
        document.getElementById('swapScreen').style.visibility = "visible";
        /*
        document.getElementById('screenBg').style.border = "#C6C6C6 1px solid";
        document.getElementById('screenBg').style.animation = "shrink 0.5s, bggradient 20s ease-in-out infinite";
        document.getElementById('screenBg').style.animationFillMode = "forwards";
        */

        /*document.getElementById('logo').style.filter = "invert(0)";*/
    }

    return (
    <div style={{"height":"100vh", "backgroundColor":"#222"}} >  
    <div align="center" style={{paddingTop:"15px"}}>
        {
        !connected?
        <Button onClick={connect} id="connectButton" className="swapButton" style={{padding:'10px', marginTop:'80px', width:'200px'}}>Connect</Button>    
        :
        <MainSwapScreen/>
        }
    </div>
    </div>
    );

}