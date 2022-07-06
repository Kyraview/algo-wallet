import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import MnemonicCheck from './components/mnemonicCheck';
import { useState } from 'react';

function Importaccount() {
    const [error,setError] = useState(false);
    const leftInput = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    const rightInput = [14,15,16,17,18,19,20,21,22,23,24,25];

    const listGen = (arr) => arr.map((num) =>
        <input type="text" placeholder={num} style={{margin:'5px', width:'250px'}} id={num} key={num} />
    );
    function importHandle() {
        let phrase = [];
        for(let i=0; i<leftInput.length; i++){
            if(!MnemonicCheck(document.getElementById(leftInput[i]).value)){
                setError(true);
                return false;
            }
            phrase.push(document.getElementById(leftInput[i]).value);
        }
        for(let i=0; i<rightInput.length; i++){
            if(!MnemonicCheck(document.getElementById(rightInput[i]).value)){
                setError(true);
                return false;
            }
            phrase.push(document.getElementById(rightInput[i]).value);
        }
        phrase = phrase.join(' ');
        setError(false);
        console.log(phrase);
    }

    return (
      <>
      <br/>
      <h1 style={{color:'black', padding:'40px', fontSize:'250%', fontFamily: 'Open Sans, sans-serif'}}>Import Account</h1>
      <br/>
      <div align='center'>
        <h5 style={{fontSize:'20px'}}>Enter your 25-word mnemonic phrase:</h5>
        <br/>
        {error?<Alert variant='danger'>All fields must be filled with valid mnemonic words.</Alert>:null}
        <div style={{maxWidth:'800px'}} className='row'>
            <div className='col' style={{marginLeft:'70px'}}>{listGen(leftInput)}</div>
            <div className='col' style={{marginRight:'70px'}}>{listGen(rightInput)}</div>
        </div>
        <br/>
        <Button style={{padding:'5px', width:'120px', color:'black', boxShadow:'white'}} variant="outline-secondary" onClick={importHandle}>Import</Button>
      </div>
      <div style={{height:'150px'}} />
      </>
    );
  }
  
  export default Importaccount;