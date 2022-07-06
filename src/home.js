import './App.css';
import Wallet from './components/Wallet';
import InfoDoc from './components/infoDoc';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
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
        <br/><br/><br/><br/><br/>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
