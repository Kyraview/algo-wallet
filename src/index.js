import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Algod,Base64Decode,Base64Encode,Enable,EncodeTxn,EZsign,EZsignAndPost,EZsignSmartSig,Indexer,Post,SignAndPost,Sign,TxnTutorial} from './components/sdkdocs';
import {NpmAppOptIn,NpmAssetOptIn,NpmAssetOptOut,NpmclearAccounts,NpmcreateAcct,NpmdisplayBalance,NpmdisplayMnemonic,NpmEnable,NpmencodeTransaction,NpmencodeTransactions,NpmgetAccount,NpmgetAccounts,NpmgetAddress,NpmgetAssetById,NpmgetAssets,NpmgetBalance,NpmgetCurrentAccount,NpmgetTxns,NpmimportAcct,NpmisValidAddress,NpmpostTxns,NpmsecureReceive,NpmsetAcct,NpmsignAndPostTxns,NpmsignData,NpmsignLogicSig,NpmsignTxns,Npmtransfer,NpmtransferAsset,Npmuint8ArraytoBase64} from './components/npmdocs';
import './index.css';
import App from './App';
import Home from './home';
import Docs from './docs';
import Importaccount from './importaccount';
import Receive from './receive';
import reportWebVitals from './reportWebVitals';
import SwapComponent from './components/swap/SwapComponent';
import {AccountObj, SwapHistory, AlgoAddress, EthAddress, SwapStatus, Ticker, AlgosdkTransaction, WalletTransaction, SignedTxn, EnabledWalletObject, PreSwapData} from './components/docs/npm/Types';
import Demo from './demo';
ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />}>  
      <Route path='/' element={<Home />} />
      
      <Route path="docs" element={<Docs />}>
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
        {/*Types */}
        <Route path="AccountObj" element={<AccountObj/>} />
        <Route path="AlgoAddress" element={<AlgoAddress/>} />
        <Route path="SwapHistory" element={<SwapHistory/>} />
        <Route path="EthAddress" element={<EthAddress/>} />
        <Route path="SwapStatus" element={<SwapStatus/>} />
        <Route path="Ticker" element={<Ticker/>} />
        <Route path="algosdkTransaction" element={<AlgosdkTransaction/>} />
        <Route path="EncodedTxn" element={<EncodeTxn/>}/>
        <Route path="WalletTransaction" element={<WalletTransaction/>} />
        <Route path="SignedTxn" element={<SignedTxn/>} />
        <Route path="EnabledWalletObject" element={<EnabledWalletObject/>}/>
        <Route path="PreswapData" element={<PreSwapData/>}/>


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
      </Route>
    </Route>
    <Route path='receive' element={<Receive />} />
    <Route path="swap" element={<SwapComponent/>}/>
    <Route path='importaccount' element={<Importaccount />} />
    <Route path='demo' element={<Demo/>} />
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
