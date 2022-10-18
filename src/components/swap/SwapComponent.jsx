import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import MainSwapScreen from './MainSwapScreen.jsx';
import web3 from 'web3';
import openUp from './imgs/openUp.svg';
import HistorySwapScreen from './HistorySwapScreen.jsx';
export default function SwapComponent() {

    const [connected, setConnected] = useState(false);
    const [screen, setScreen] = useState("swap");
    const [slideAnimation, setSlideAnimation] = useState('none');
    const [rotateAnimation, setRotateAnimation] = useState('none');
    const [connectDisplay, setConnectDisplay] = useState('block');
    const [clickTitle, setClickTitle] = useState('View Swaps');

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
        setConnectDisplay('none');
    }

    const toggleHistory = async ()=>{
        if(screen === "swap"){
            setSlideAnimation('slideUp 0.5s forwards');
            setRotateAnimation('rotateDown 0.5s forwards');
            setScreen('history');
            setClickTitle("Close History")
        }
        if(screen === "history"){
            setSlideAnimation('slideDown 0.5s forwards');
            setRotateAnimation('rotateUp 0.5s forwards');
            setScreen('swap')
            setClickTitle('View Swaps')
        }
    }

    return (
    <div style={{"height":"100vh", "backgroundColor":"#222"}} >  
    <div align="center" style={{paddingTop:"15px"}}>
        {
        !connected?
            <Button onClick={connect} id="connectButton" className="swapButton" style={{padding:'10px', marginTop:'80px', width:'200px', display: connectDisplay}}>Connect</Button>    
        :
        <>
            {screen==='swap'?
                <MainSwapScreen/>
            :
                null
            }
            {screen==='history'?
                <HistorySwapScreen/>
            :
                null
            }
        </>
        }
        <span style={{
            position: 'absolute',
            left:'50%', 
            transform:'translateX(-50%)',
            top:'95%', 
            textAlign:'center',
            width:"330px",
            backgroundColor: '#963beb',
            color:'white',
            borderRadius:'5px',
            cursor: 'pointer',
            animation: slideAnimation
            
        }} onClick={toggleHistory}>
            <span style={{ display:'block', textAlign:'center', position:'relative'}}>
                
                <span>{clickTitle}</span>
                <img height='30' width='30' style={{filter:'invert(1)', position:'absolute', right:'5px', top:'-3px', animation:rotateAnimation}} src={openUp}/>
            </span>
        </span>
    </div>
    </div>
    );

}