import React from "react";
import QRCode from "react-qr-code";
import copyIcon from '../imgs/copyIcon.png';
import {CopyToClipboard} from 'react-copy-to-clipboard';
export default function AddressCard(props){
    const blink = () => {
        document.getElementById('blinkAddress').style.color='#76F935';
        setTimeout(function(){
          document.getElementById('blinkAddress').style.color='white';
        }, 100);
      }
    return(
    <div style={{display:'flex', justifyContent:'center', marginTop:'20px'}}>
    <div style={{backgroundColor : "white", width: 'fit-content', height: 'fit-content', padding: "10px", borderRadius:'10px'}}>
    <QRCode size="140" value={props.address} />
    </div>
    <CopyToClipboard text={props.address}>
    <p id="blinkAddress" onClick={blink} style={{wordBreak:'break-all', width:'130px', margin:'10px'}}>
        {props.address}
        <img alt='' onClick={blink} style={{width: '20px', height: '20px', marginLeft:'5px', cursor:'pointer'}} src={copyIcon}/>
    </p>
    
    </CopyToClipboard>
    </div>
    )
}