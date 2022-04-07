import './App.css';
import Wallet from './components/Wallet';
import InfoDoc from './components/infoDoc';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import ben from './imgs/ben.gif';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  document.body.style = 'background: white;'

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <br/>
    <h1 style={{color:'black', padding:'40px', fontSize:'400%', fontFamily: 'Open Sans, sans-serif'}}>Algorand on MetaMask</h1>
    <br/>
    <div align='center' className="App">
      <div className='row'>
        <div className='col'>
        <InfoDoc />
        </div>
        <div className='col'>
        <Wallet />
        <br/><br/><br/>
        </div>
      </div>
    </div>
    <footer className='footer' style={{padding:'10px', zIndex:'2'}}>
      <div className='row'>
      <div className='col' style={{margin:'auto'}}>
        <p style={{margin:'auto'}}>Contact: <a href='mailto:howardandgoldstein@gmail.com'>howardandgoldstein@gmail.com</a></p>
      </div>
      <div className='col'>
        <Button variant="secondary" style={{float:'right'}} onClick={handleShow}>Donate</Button>
      </div>
      </div>
    </footer>
    <div style={{display:'flex', justifyContent:'center'}}>
    <Modal show={show} onHide={handleClose} contentClassName='donateAlert' center>
        <Modal.Header>
          <Modal.Title>Thank you for feeding our Code Monkeys</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col'>
              <img src={ben} alt='' style={{width:'200px'}} />
            </div>
            <div className='col' style={{margin:'auto', paddingTop:'30px'}}>
              <p>ALGO: IAVDVAZQMTB3QL7WO24VJJNYMLBXCKNR6U6MEUUBKYRTCLZZVJWXX2OIOQ</p>
              <p>BTC: bc1qt29uz3upwxedanwzqxce3mx43wfnwkmvgzyndh</p>
              <p>CASHAPP: $BigTyHarden</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
    </Modal>
    </div>
    </>
  );
}

export default App;
