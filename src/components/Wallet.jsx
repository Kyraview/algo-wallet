import logo from '../imgs/logo.png';
import copyIcon from '../imgs/copyIcon.png';
import receiveIcon from '../imgs/receive.png';
import sendIcon from '../imgs/send.png';
import settingsIcon from '../imgs/settings.png';
import Card from 'react-bootstrap/Card';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {useState } from 'react';
import AddressCard from './AddressCard';
import SendCard from './SendCard';
import Switch from './Switch';
import useInterval from './useInterval';
import './wallet.css';
import './animation.css';


export default function Wallet() {
    const [connected, set_connected] = useState(false);
    const [address, set_address] = useState('');
    const [balance, set_balance] = useState('');
    const [receive, set_receive] = useState('');
    const [send, set_send] = useState('');
    const [testnet, set_testnet] = useState(false);
    const [settings, set_settings] = useState(false);
    const [transactionScreen, setTransactionScreen] = useState(true);
    useInterval(async()=> await getBalance(), 2000);
    const displayKey = async () => {
      console.log("here")
        try {
          await window.ethereum.request({
            method: 'wallet_invokeSnap',
            params: ['npm:algorand', {
              method: 'displayMnemonic'
            }]
          })
        } catch (err) {
          console.error(err)
          alert('Problem happened: ' + err.message || err)
        }
    }
    const connect_func = async () => {
        console.log("here");
        try{
        await window.ethereum.request({
            method: 'wallet_enable',
            params: [{
              wallet_snap: { ["npm:algorand"]: {} },
            }]
          })
        }
        catch (e){
          alert('SnapAlgo currently requires a desktop installation of MetaMask Flask.');
          return null;
        }
        await getAddress();
        

        set_connected(true);
        slideup();
    }

    const slideup = () => {
      
      document.getElementById('connectCover').style.animation = 'slideUp 0.3s, bggradient 20s ease-in-out infinite';
      document.getElementById('connectCover').style.animationFillMode  = 'forwards';
      
    }

    const toggleTestnet = async () => {
      set_testnet(testnet?false:true);
      await getBalance();
    }
    
    const getBalance = async () => {
      
        let bal = await window.ethereum.request({
            method: 'wallet_invokeSnap',
            params: ["npm:algorand", {
              method: 'getBalance',
              testnet: testnet,
            }]
          })
        console.log(bal);
        set_balance(bal/1000000);
    }
    const getAddress = async () => {
        let address = await window.ethereum.request({
            method: 'wallet_invokeSnap',
            params: ["npm:algorand", {
              method: 'getAddress',
              testnet: testnet
            }]
          })
        set_address(address);
      }
    const toggleReceive = () => {
        if(send){
          set_send(false);
        }
        if(settings){
          set_settings(false);
        }
        set_receive(!receive);
    }

    const toggleSend = () => {
      if(receive){
        set_receive(false);
      }
      if(settings){
        set_settings(false);
      }
      set_send(!send);
    }
    const toggleSettings = () => {
      if(receive){
        set_receive(false);
      }
      if(send){
        set_send(false);
      }
      set_settings(!settings);
    }
    const blink = () => {
      document.getElementById('blinkable').style.color='#76F935';
      setTimeout(function(){
        document.getElementById('blinkable').style.color='white';
      }, 100);
    }
    
    return(
        <div style={{width:'400px', height:'600px', border:'1px solid white', borderRadius:'10px', backgroundColor:'black'}}>
          <div id="connectCover">
              <div align='center'>
                  <br/>
                  <img style={{width:'200px'}} src={logo} alt='' />
                  {connected ?
                    <div style={{display:'flex', justifyContent: 'center', paddingBottom:'20px'}}>
                      <p style={{fontSize: '9px', marginRight:'5px'}} id='blinkable'>{address}</p>
                      <CopyToClipboard text={address}>
                        <img alt='' onClick={blink} style={{width: '10px', height: '10px', cursor:'pointer'}} src={copyIcon}/>
                      </CopyToClipboard>
                    </div>
                    :
                    null
                  }
                <div style={{height:"200px", display:connected?'none':'block'}}></div>
                <button onClick={connect_func} style={{backgroundColor:'transparent', border:'1px solid white', width:'150px', padding:'10px', borderRadius:'10px', color:'white',display:connected?'none':'block'}}>
                Connect</button>

              </div>
          </div>
          <div align='center' style={{marginTop:'30%'}}>
                
                <h5 style={{paddingTop:'40px'}}>{balance} ALGO</h5>
                
                <div style={{paddingTop:'20px', maxWidth:'350px', display:'flex', justifyContent:'center'}}>
                    
                    
                    <Card style={{backgroundColor:'transparent', margin:'0 10px'}}>
                        <Card.Img onClick={toggleReceive} variant='top' src={receiveIcon} />
                        <Card.Text onClick={toggleReceive}>Receive</Card.Text>
                    </Card>

                    <Card style={{backgroundColor:'transparent', margin:'0 10px'}}>
                        <Card.Img variant='top' onClick={toggleSend} src={sendIcon} />
                        <Card.Text onClick={toggleSend}>Send</Card.Text>
                    </Card>

                    <Card style={{backgroundColor:'transparent', margin:'0 10px'}}>
                        <Card.Img style={{fontSize:'10%'}}variant='top' onClick={toggleSettings} src={settingsIcon} />
                        <Card.Text onClick={toggleSettings}>Settings</Card.Text>
                    </Card>
                </div>
                <br/>
                {receive?
                  <div>
                    {connected?<AddressCard address={address}/>:<p>Connect wallet first</p>}
                  </div>
                        :
                        null
                        }
                {send?connected?<SendCard testnet={testnet}/>:<p>Connect wallet first</p>:null}
                {settings?
                  <>
                  <br/>
                  <br/>
                  <div style={{display:'flex', justifyContent:'center'}}>
                  <Card style={{backgroundColor:'transparent', margin:'0 10px'}}>
                      
                      <Switch onClick={toggleTestnet}/>
                        
                      <Card.Text>{testnet?<p>testnet</p>:<p>mainnet</p>}</Card.Text>
                        
                   </Card>
                    <button style={{color:'white',backgroundColor:'transparent', fontSize:'75%', height:'50%', border:'1px solid white', borderRadius:'10px', padding:'10px'}} onClick={displayKey}>Display Mnemonic</button> 
                  </div>
                  </>
                  :null 
                  }
            </div>
        </div>
    );
}
