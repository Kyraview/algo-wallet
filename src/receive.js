import QRCode from "react-qr-code";
import copyIcon from './imgs/copyIcon.png';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useState } from "react";

/*
<iframe width="375" height="200" src="http://localhost:3000/receive">
</body></iframe>
*/


export default function Receive() {
    const [enableAddress, setEnableAddress] = useState(false);
    const [address, setAddress] = useState(null);
    const blink = () => {
        document.getElementById('blinkAddress').style.color='#963beb';
        setTimeout(function(){
          document.getElementById('blinkAddress').style.color='white';
        }, 100);
    }
    const showAddress = async () => {
        
        await window.ethereum.request({
            method:  'wallet_enable',
            params: [{
                wallet_snap: { 'npm:algorand': {} },
            }]
        })
        const addr = await window.ethereum.request({
            method: 'wallet_invokeSnap',
            params:['npm:algorand',{
                method: 'secureReceive'
            }]
        })
        if(address === 4001){
            throw({code:4001})
        }
        setAddress(addr)
        setEnableAddress(true);
    }
    return(
        enableAddress?<div className='row' style={{height:'100vh', background:'#222'}}>
        <div style={{width: 'fit-content', textAlign:'center', padding:'4px', marginLeft:'12px'}} className='col-xs-1' align='center'>
        <div style={{padding:'5px', background:'white', borderRadius:'5px', transform:'translateY(10%)', marginLeft:'8px'}}>
        <QRCode size="100" value={address} style={{background:'white'}}/>
        </div>
        </div>
        <div className="col">
        <CopyToClipboard text={address}>
        <p id="blinkAddress" onClick={blink} style={{wordBreak:'break-all', width:'80%', fontSize:'12px', transform:'translateY(50%)', position:'absolute', padding:'0 10px 0 0', color:'white', textAlign:'center'}}>
            {address}
            <img alt='' onClick={blink} style={{width:'10%', marginLeft:'5px', cursor:'pointer'}} src={copyIcon}/>
        </p>
        </CopyToClipboard>
        </div></div>:
        <div style={{height:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', background:'#222'}}>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
            <button className='receiveButton alt' onClick={showAddress}>Show Address</button>
            </div>
        </div>
    );
}