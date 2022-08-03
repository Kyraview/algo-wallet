import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import '../docs.css';

export function Quickstart() {
    return (
    <div className='docpage'>
        <h1>Quickstart</h1>

        <p>SnapAlgo currently requires an install of <a href='https://metamask.io/flask/'>MetaMask Flask</a>. You must uninstall MetaMask first but that will require you to make sure you have your current wallet secret keys to reimport the desired wallets onto MetaMask Flask if needed.</p>

        <p>A simple way to start using the wallet is by connecting and then logging the accounts that are associated with the connected wallet to the console.</p>
        <div style={{padding:'40px'}}>
        <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await window.ethereum.request({
        method: 'wallet_enable',
        params: [{
        wallet_snap: { ["npm:algorand"]: {} },
        }]
    });
    let accounts = await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: ["npm:algorand",{
            method: 'getAccounts'
        }]
    });
    console.log(accounts);
} catch (err) {console.log(err)}`}</SyntaxHighlighter>
        </div>

        <p>Installing the algosdk library is only required for transaction integration into your webapp.</p>
        <div style={{padding:'40px'}}>
            <SyntaxHighlighter language="javascript" style={docco}>{
`npm i algosdk\n
or\n
yarn add algosdk`}</SyntaxHighlighter>
        </div>
        <p>Using NodeJS, import the algosdk library.</p>
        <div style={{padding:'40px'}}>
            <SyntaxHighlighter language="javascript" style={docco}>{
`const algosdk = require('algosdk');`}</SyntaxHighlighter>
        </div>
    </div>
    );
}

export function Algod() {
    return(
        <div className='docpage'>
            <h1>getAlgodv2Client()</h1>

            <p>accesses the Algod client through the users preferred connection. returns a promised BaseHTTPClient that is used to build an Algodv2Client</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await snapalgo.enable();
    let algodClientParams = await snapalgo.getAlgodv2Client();
    const algodClient = new algosdk.Algodv2(algodClientParams);
} catch (err) {console.log(err)}`}</SyntaxHighlighter>
            </div>
        </div>
    );
}

export function Base64Decode() {
    return(
        <div className='docpage'>
            <h1>base64Decode(arraybuffer)</h1>

            <h5>arraybuffer: the target base64 encoded Buffer array to decode</h5>
            <p>returns a decoded Buffer array</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    let encodedArray = await snapalgo.base64Decode(arraybuffer);
} catch (err) {console.log(err)}`}</SyntaxHighlighter>
            </div>
        </div>
    );
}

export function Base64Encode() {
    return(
        <div className='docpage'>
            <h1>base64Encode(arraybuffer)</h1>

            <h5>arraybuffer: the target Buffer array to encode into base64</h5>
            <p>returns a base64 encoded Buffer array</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    let encodedArray = await snapalgo.base64Encode(arraybuffer);
} catch (err) {console.log(err)}`}</SyntaxHighlighter>
            </div>
        </div>
    );
}

export function Enable() {
    return(
        <div className='docpage'>
            <h1>enable(opts)</h1>

            <h5>opts: an object which can take two properties, genisisId and/or genesisHash. the genesisId is an ascii string representing the target network. the genesisHash is a base64 string representing a 32-byte genesis hash in which is the hash of the same target network</h5>
            <p>allows for the discovery of accounts. will return either an error or an object with the target network genesisid and corresponding genesisHash</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await snapalgo.enable();
} catch (err) {console.log(err)}`}</SyntaxHighlighter>
            </div>
        </div>
    );
}

export function EncodeTxn() {
    return(
        <div className='docpage'>
            <h1>encodeTxn(txn)</h1>

            <h5>txn: the target transaction object to encoded into  base64</h5>
            <p>returns the base64 encoding of the canonical msgpack encoding of the target transaction object</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    let encodedTxn = await snapalgo.encodeTxn(txn);
} catch (err) {console.log(err)}`}</SyntaxHighlighter>
            </div>
        </div>
    );
}

export function EZsign() {
    return(
        <div className='docpage'>
            <h1>EZsign(txn)</h1>

            <h5>txn: the target transaction object to encoded into  base64 and signed</h5>
            <p>returns the signed base64 encoding of the canonical msgpack encoding of the target transaction object to allow for signing ease</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await snapalgo.enable();
    let signedTxn = await snapalgo.EZsign(txn);
} catch (err) {console.log(err)}`}</SyntaxHighlighter>
            </div>
        </div>
    );
}

export function EZsignAndPost() {
    return(
        <div className='docpage'>
            <h1>EZsignAndPost(txn)</h1>

            <h5>txn: the target transaction object to encoded into  base64 to be signed and posted</h5>
            <p>returns the posted base64 encoding of the canonical msgpack encoding of the target transaction object to allow for posting ease</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await snapalgo.enable();
    let signedTxn = await snapalgo.EZsignAndPost(txn);
} catch (err) {console.log(err)}`}</SyntaxHighlighter>
            </div>
        </div>
    );
}

export function EZsignSmartSig() {
    return(
        <div className='docpage'>
            <h1>EZsignSmartSig(logicSigAccount)</h1>

            <h5>logicSigAccount: the target logic sig account</h5>
            <p>returns the base64 encoding of the canonical msgpack encoding of the signed target logic sig account</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await snapalgo.enable();
    let signedTxn = await snapalgo.EZsignSmartSig(logicSigAccount);
} catch (err) {console.log(err)}`}</SyntaxHighlighter>
            </div>
        </div>
    );
}

export function GettingStarted() {
    return(
        <div className='docpage'>
            <h1>Getting Started</h1>

            <p>The sdk needs to be installed to begin usage.</p>
            <div style={{padding:'40px'}}>
            <SyntaxHighlighter language="javascript" style={docco}>{
`npm i snapalgo-sdk\n
or\n
yarn add snapalgo-sdk`}</SyntaxHighlighter>
            </div>
            <p>The sdk does not only need to be imported, it needs to be initialized.</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`const snapalgosdk = require('snapalgo-sdk);
var snapalgo;

async function connect(){
    try{
        snapalgo = new snapalgosdk.Wallet;
        await snapalgo.enable();
    } catch (err){
        console.log(err);
    }
}`}</SyntaxHighlighter>
            </div>
        </div>
    );
}

export function Indexer() {
    return(
        <div className='docpage'>
            <h1>getIndexerClient()</h1>

            <p>accesses the Indexer client through the users preferred connection. returns a promised BaseHTTPClient that is used to build an Indexer</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await snapalgo.enable();
    let indexerClientParams = await snapalgo.getIndexerClient();
    const indexerClient = new algosdk.Indexer(indexerClientParams);
} catch (err) {console.log(err)}`}</SyntaxHighlighter>
            </div>
        </div>
    );
}

export function Post() {
    return(
        <div className='docpage'>
            <h1>postTxns(stxns)</h1>

            <h5>stxns: an array that contains the base64 encoding of the canonical msgpack encoding of signed txn(s)</h5>
            <p>used to post transactions to an Algorand network. will return either an error or a 'ret' object that has the property txId, a 52-character base 32 string (without padding) corresponding to a 32-byte string</p>

            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await snapalgo.enable();
    let response = await snapalgo.postTxns([stxns]);
} catch (err) {console.log(err)}`}</SyntaxHighlighter>
            </div>
        </div>
    );
}

export function SignAndPost() {
    return(
        <div className='docpage'>
            <h1>signAndPostTxns(txns)</h1>

            <h5>txns: an array of the WalletTransaction objects to sign and post. the required element of the object is txn, a string that is a base64 encoding of the canonical msgpack encoding of a transaction</h5>
            <p>used to sign transaction and then post them to an Algorand netowrk. will take the inputs of the signTxns() function and return the outputs of the postTxns() function</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await snapalgo.enable();
    let response = await snapalgo.signAndPostTxn([txns]);
} catch (err) {console.log(err)}`}</SyntaxHighlighter>
            </div>
        </div>
    );
}

export function Sign() {
    return(
        <div className='docpage'>
            <h1>signTxns(txns)</h1>

            <h5>txns: an array of the WalletTransaction objects to sign. the required element of the object is txn, a string that is a base64 encoding of the canonical msgpack encoding of a transaction</h5>
            <p>signs a list of transactions on the Algorand blockchain. will return either an error or an array 'ret' that is the same length as the txns parameter array, containing the signed transaction(s)</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await snapalgo.enable();
    let signedTxn = await snapalgo.signTxn([txns]);
} catch (err) {console.log(err)}`}</SyntaxHighlighter>
            </div>
        </div>
    );
}

export function TxnTutorial() {
    return(
        <div className='docpage'>
            <h1>Signing a Transaction</h1>

            <p>being able to sign a transaction requires the snapalgo-sdk and algosdk libraries. any Algorand transaction can be signed using the SnapAlgo wallet except for KeyRegistration transactions</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`//import libraries
const snapalgosdk = require('snapalgo-sdk');
const algosdk = require('algosdk');
var snapalgo;
var algodClient;

//connects the wallet and initializes the Algodv2Client
async function connect(){
    try{
    snapalgo = new snapalgosdk.Wallet;
    await snapalgo.enable();
    let algodClientParams = await snapalgo.getAlgodv2Client();
    algodClient = new algosdk.Algodv2(algodClientParams);
    } catch (err) {
        console.log(err);
    }
}

//makes a payment txn with the entered params
async function signAndPost(){
  let suggestedParams =  await algodClient.getTransactionParams().do();
  let params = {
    amount:/*amount of microalgos*/,
    from:/*algorand sender address*/,
    suggestedParams:suggestedParams,
    to:/*algorand receiver address*/
  }
  let txn = algosdk.makeApplicationCallTxnFromObject(params);

  //the transaction will then be signed and posted to the algorand blockchain
  //either a txnId or error will be returned upon request
  const response = await snapalgo.EZsignAndPost(txn);
}`}</SyntaxHighlighter>
            </div>
        </div>
    );
}