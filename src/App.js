import './App.css';
import Wallet from './components/Wallet';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  document.body.style = 'background: white;'
  return (
    <>
    <br/>
    <br/>
    <div style={{display:'flex', justifyContent:'center'}} className="App">
      <Wallet />
    </div>
    </>
  );
}

export default App;
