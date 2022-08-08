import DocSidebar from './components/docsidebar';
import { Routes, Route } from 'react-router-dom';
import menuicon from './imgs/menu.svg';
import {Quickstart,Algod,Base64Decode,Base64Encode,Enable,EncodeTxn,EZsign,EZsignAndPost,EZsignSmartSig,Indexer,Post,SignAndPost,Sign,TxnTutorial} from './components/sdkdocs';
import {NpmAppOptIn,NpmAssetOptIn,NpmAssetOptOut,NpmclearAccounts,NpmcreateAcct,NpmdisplayBalance,NpmdisplayMnemonic,NpmEnable,NpmencodeTransaction,NpmencodeTransactions,NpmgetAccount,NpmgetAccounts,NpmgetAddress,NpmgetAssetById,NpmgetAssets,NpmgetBalance,NpmgetCurrentAccount,NpmgetTxns,NpmimportAcct,NpmisValidAddress,NpmpostTxns,NpmsecureReceive,NpmsetAcct,NpmsignAndPostTxns,NpmsignData,NpmsignLogicSig,NpmsignTxns,Npmtransfer,NpmtransferAsset,Npmuint8ArraytoBase64} from './components/npmdocs';
import { useState, useEffect } from 'react';

export default function Docs() {
  const [showMenu, setShowMenu] = useState(window.innerWidth >= 720);
  const [showMenuIcon, setShowMenuIcon] = useState(window.innerWidth < 720);
  
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  const handleResize = () => {
    if (window.innerWidth < 720) {
        setShowMenu(false)
        setShowMenuIcon(true)
    } else {
        setShowMenu(true)
        setShowMenuIcon(false)
    }
  }
  
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  })

  return (
    <div>
    <div style={{display:'flex', height:'12vh'}} id='docsheader'>
      <h1 style={{color:'black', padding:'4vh 2vh 4vh 4vh', fontSize:'5vh', fontFamily: 'Open Sans, sans-serif', margin:'0'}}>SnapAlgo Docs</h1>
      <img src={menuicon} style={{width:'10%', objectFit:'contain', margin:'auto', display:showMenuIcon?'block':'none'}} alt='' onClick={toggleMenu}/>
    </div>
    
    <div className='row' style={{height:'100%'}}>
        <div className='col-4' id='sidebar' style={{display:showMenu?'block':'none'}}><DocSidebar /></div>

        <div className='col-8' id='maindocs' style={{paddingBottom:'20px', margin:'auto'}}>
        <div style={{maxWidth:'900px', width:'100%', margin:'0', overflowY:'auto', position:'relative'}} id='maindocs'>
            <Routes id='maindocs'>
              <Route path='/' element={<Quickstart />} />
              <Route path="algod" element={<Algod />} />
              <Route path="base64decode" element={<Base64Decode />} />
              <Route path="base64encode" element={<Base64Encode />} />
              <Route path="enable" element={<Enable />} />
              <Route path="encodetxn" element={<EncodeTxn />} />
              <Route path="ezsign" element={<EZsign />} />
              <Route path="ezsignandpost" element={<EZsignAndPost />} />
              <Route path="ezsignsmartsig" element={<EZsignSmartSig />} />
              <Route path="indexer" element={<Indexer />} />
              <Route path="post" element={<Post />} />
              <Route path="signandpost" element={<SignAndPost />} />
              <Route path="sign" element={<Sign />} />
              <Route path="txntutorial" element={<TxnTutorial />} />

              <Route path="npmappoptin" element={<NpmAppOptIn />} />
              <Route path="npmassetoptin" element={<NpmAssetOptIn />} />
              <Route path="npmassetoptout" element={<NpmAssetOptOut />} />
              <Route path="npmclearaccounts" element={<NpmclearAccounts />} />
              <Route path="npmcreateaccount" element={<NpmcreateAcct />} />
              <Route path="npmdisplaybalance" element={<NpmdisplayBalance />} />
              <Route path="npmdisplaymnemonic" element={<NpmdisplayMnemonic />} />
              <Route path="npmenable" element={<NpmEnable />} />
              <Route path="npmencodetransaction" element={<NpmencodeTransaction />} />
              <Route path="npmencodetransactions" element={<NpmencodeTransactions />} />
              <Route path="npmgetaccount" element={<NpmgetAccount />} />
              <Route path="npmgetaccounts" element={<NpmgetAccounts />} />
              <Route path="npmgetaddress" element={<NpmgetAddress />} />
              <Route path="npmgetassetbyid" element={<NpmgetAssetById />} />
              <Route path="npmgetassets" element={<NpmgetAssets />} />
              <Route path="npmgetbalance" element={<NpmgetBalance />} />
              <Route path="npmgetcurrentaccount" element={<NpmgetCurrentAccount />} />
              <Route path="npmgettxns" element={<NpmgetTxns />} />
              <Route path="npmimportaccount" element={<NpmimportAcct />} />
              <Route path="npmisvalidaddress" element={<NpmisValidAddress />} />
              <Route path="npmposttransactions" element={<NpmpostTxns />} />
              <Route path="npmsecurereceive" element={<NpmsecureReceive />} />
              <Route path="npmsetaccount" element={<NpmsetAcct />} />
              <Route path="npmsignandposttransactions" element={<NpmsignAndPostTxns />} />
              <Route path="npmsigndata" element={<NpmsignData />} />
              <Route path="npmsignlogicsig" element={<NpmsignLogicSig />} />
              <Route path="npmsigntransactions" element={<NpmsignTxns />} />
              <Route path="npmtransfer" element={<Npmtransfer />} />
              <Route path="npmtransferasset" element={<NpmtransferAsset />} />
              <Route path="npmuint8arraytobase64" element={<Npmuint8ArraytoBase64 />} />            
            </Routes>
        </div>
        </div>
    </div>
    </div>
  );
}