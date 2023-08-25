import './App.css';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import {Wallet as metaWallet} from 'snapalgo-sdk';



export default function App() {
  document.body.style = 'background: white;'

  useEffect(() => {
    enable();
  }, []);

  const enable = async () => {
    try {
      
      
      const snapalgo = new metaWallet();
      //snapalgo = snapalgoSDK.Wallet();
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