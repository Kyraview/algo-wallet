import Home from './home';
import Docs from './docs';
import Importaccount from './importaccount';
import Receive from './receive';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {Enable,Algod,Indexer,Post,SignAndPost,Sign} from './docsPages/sdkdocs';

export default function App() {
  document.body.style = 'background: white;'
  
  return(
  <div className='App'>
  <Routes>
    <Route index element={<Home />} />
    <Route path="docs" element={<Docs />}>
      <Route path="enable" element={<Enable />} />
      <Route path="algod" element={<Algod />} />
      <Route path="indexer" element={<Indexer />} />
      <Route path="post" element={<Post />} />
      <Route path="signandpost" element={<SignAndPost />} />
      <Route path="sign" element={<Sign />} />
    </Route>
    <Route path='importaccount' element={<Importaccount />} />
    <Route path='receive' element={<Receive />} />
  </Routes>
  </div>
  );
}