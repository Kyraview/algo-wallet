import { Clipboard } from 'react-bootstrap-icons';
import { useState} from 'react';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../index.css';


export default function SendCard(props){
    const [address, set_address] = useState('');
    const [amount, set_amount] = useState('');
    const pasteValue = async () =>{
      const text = await navigator.clipboard.readText();
      document.getElementById('address').value = text;
      set_address(text);
    }
    const sendTransaction = async () => {
          const tx = await window.ethereum.request({
            method: 'wallet_invokeSnap',
            params: ["npm:algorand", {
              method: 'transfer',
              testnet: props.testnet,
              to: address,
              amount: amount*1000000
            }]
          })
    }
    return(
        <div style={{width: '100%'}}>
        
        <p>Address</p>
        <div style={{display:'flex', justifyContent:'center'}}>
            <textArea onChange={e=>set_address(e.target.value)} 
            style={{color:'white', backgroundColor:'#0000', border:'1px solid white', borderRadius:'10px', width:'80%', height:'40px', textAlign:'right', fontSize:"60%"}} 
            id="address"/>
            <Clipboard onClick={pasteValue} style={{fontSize:'150%', marginLeft:'15px', cursor:'pointer'}} color="white"/>
        </div>
        <br/>
        <p>Amount</p>
        <div style={{display:'flex', justifyContent:'center'}}>    
            <input spellcheck="false" onChange={e=>set_amount(e.target.value)} style={{color:'white', width:'60%', borderRadius:'10px', backgroundColor:'#0000',  border:'1px solid white', textAlign:'center'}} min="0" step="0.1" type="number" id="amount"/>
          

        </div>
        <br/>
        <br/>
        <button style={{border:'1px solid white',backgroundColor:'#0000', borderRadius:'10px', padding:'5px', color:'white', width:'120px'}} onClick={sendTransaction}>send</button>
        </div>
        
    );
}