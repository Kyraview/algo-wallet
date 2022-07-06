import DocSidebar from './components/docsidebar';
import { Routes, Route } from 'react-router-dom';
import {Quickstart,Enable,Algod,Indexer,Post,SignAndPost,Sign} from './docsPages/sdkdocs';

export default function Docs() {
  return (
    <div>
    <h1 style={{color:'black', padding:'40px 40px 0px 40px', fontSize:'300%', fontFamily: 'Open Sans, sans-serif'}}>SnapAlgo Docs</h1>
    <br/>
    
    <div className='row' style={{height:'100%'}}>
        <div className='col-3'><DocSidebar /></div>

        <div className='col-9'>
        <div style={{maxWidth:'800px', width:'90%'}}>
            <Routes>
                <Route index element={<Quickstart />} />
                <Route path="enable" element={<Enable />} />
                <Route path="algod" element={<Algod />} />
                <Route path="indexer" element={<Indexer />} />
                <Route path="post" element={<Post />} />
                <Route path="signandpost" element={<SignAndPost />} />
                <Route path="sign" element={<Sign />} />
            </Routes>
        </div>
        </div>
    </div>
    </div>
  );
}