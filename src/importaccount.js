import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import MnemonicCheck from './components/mnemonicCheck';
import { useState, useEffect } from 'react';

function Importaccount() {
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth < 720);
    const leftInput = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    const rightInput = [14,15,16,17,18,19,20,21,22,23,24,25];

    const listGen = (arr) => arr.map((num) =>
        <input type="text" placeholder={num} style={{margin:'5px', width:'90vw', maxWidth:'250px'}} id={num} key={num} />
    );

    async function importHandle() {
        let phrase = [];
        setError('');
        setSuccess('');

        for(let i=0; i<leftInput.length; i++){
            if(!MnemonicCheck(document.getElementById(leftInput[i]).value)){
                return setError('All fields must be filled with valid mnemonic words.');
            }
            phrase.push(document.getElementById(leftInput[i]).value);
        }
        for(let i=0; i<rightInput.length; i++){
            if(!MnemonicCheck(document.getElementById(rightInput[i]).value)){
                return setError('All fields must be filled with valid mnemonic words.');
            }
            phrase.push(document.getElementById(rightInput[i]).value);
        }
        phrase = phrase.join(' ');
        const name = document.getElementById("accountName").value;

        try{
            await window.ethereum.request({
                method: 'wallet_enable',
                params: [
                    {
                        wallet_snap: {
                            ['npm:algorand']:{}
                        }
                    }
                ]
            });
            await window.ethereum.request({
                method: "wallet_invokeSnap",
                params: ["npm:algorand", {
                    method: 'importAccount',
                    mnemonic: phrase,
                    name:name
                }]
            });

            phrase = '';
            setSuccess('Import complete!');
            clearForm();
            document.getElementById("accountName").value='';
        } catch (err) {
            return setError('Failed to import account');
        }
    }

    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

    const clearForm = () => {
        for(var i=1;i<=25;i++){
            document.getElementById(i.toString()).value = '';
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        //autopopulation of form
        window.addEventListener('paste', async (event) => {
            event.preventDefault();
            
            clearForm();
            let data = event.clipboardData.getData('text');
            data = data.split(' ');
            
            for(let i=1;i<=data.length;i++){
                if(i<=25){
                    document.getElementById(i.toString()).value = data[i-1];
                }
            }
        });
    });
    
    return (
      <>
      <br/>
      <h1 style={{color:'black', padding:'40px', fontSize:'250%', fontFamily: 'Open Sans, sans-serif'}}>Import Account</h1>
      <br/>
      <div align='center'>
        <h5 style={{fontSize:'20px'}}>Enter your 25-word mnemonic phrase:</h5>
        <br/>
        {error && <Alert variant='danger'>{error}</Alert>}
        {success && <Alert variant='success'>{success}</Alert>}
        <div style={{maxWidth:'800px'}} className='row'>
            <div className='col' style={{display:isMobile?'none':'block', padding:'0'}} />
            <div className='col'>{listGen(leftInput)}</div>
            <div className='col'>{listGen(rightInput)}</div>
            <div className='col' style={{display:isMobile?'none':'block', padding:'0'}} />
        </div>
        <br/>
        <br/>
        <center><input id="accountName" style={{margin:'5px', width:'90vw', maxWidth:'300px'}} placeholder="Account Name"></input></center>
        <br/>
        <Button style={{padding:'5px', width:'120px', color:'black', boxShadow:'white'}} variant="outline-secondary" onClick={importHandle}>Import</Button>
      </div>
      <div style={{height:'150px'}} />
      </>
    );
  }
  
  export default Importaccount;