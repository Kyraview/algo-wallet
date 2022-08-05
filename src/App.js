import './App.css';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
const snapalgosdk = require('snapalgo-sdk');
var snapalgo;

export default function App() {
  document.body.style = 'background: white;'

  useEffect(() => {
    enable();
  });

  const enable = async () => {
    try {
      snapalgo = new snapalgosdk.Wallet;
    } catch (err) {
      console.error(err)
      alert('Problem happened: ' + err.message || err)
    }
  }
  
  return(
  <div className='App'>
    <Outlet />
  </div>
  );
}