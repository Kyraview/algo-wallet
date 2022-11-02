import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export function Quickstart() {
    return (
    <div className='docpage'>
        <h1>Quickstart</h1>

        <p>SnapAlgo currently requires an install of <a href='https://metamask.io/flask/'>MetaMask Flask</a>. You must uninstall MetaMask first but that will require you to make sure you have your current wallet secret keys to reimport the desired wallets onto MetaMask Flask if needed.</p>
        <p>Importing the algosdk library is only required for transaction integration into your webapp.</p>
        <div className='code-contain'>
            <SyntaxHighlighter language="javascript" style={docco}>{
`<script src="https://cdn.jsdelivr.net/npm/algosdk@1.16.0/dist/browser/algosdk.min.js">`}</SyntaxHighlighter>
        </div>

        <p>A simple way to start using the wallet is by enabling it. This can be done three different ways:</p>

        <h3>SnapAlgoSDK - HTML</h3>
        <p>This is the way to access the floating wallet web application using HTML and raw Javascript. You have to import the SDK with CDN before using.</p>
        <div className='code-contain'>
        <SyntaxHighlighter language="javascript" style={docco}>{
`<script src="https://cdn.jsdelivr.net/npm/snapalgo-sdk@1.0.19"></script>`}</SyntaxHighlighter>
        </div>
        <p>The wallet can now be enabled for usage.</p>
        <div className='code-contain'>
        <SyntaxHighlighter language="javascript" style={docco}>{
`async function enable(){
    try {
        window.snapalgo = new SnapAlgo.Wallet();
        await window.algorand.enable();
    } catch (err) {
      console.error(err);
    }
}`}</SyntaxHighlighter>
        </div>
        <h3>SnapAlgoSDK - ReactJS</h3>
        <p>This is the way to access the floating wallet web application using React. You have to import the SDK from the npm registry.</p>
        <div className='code-contain'>
        <SyntaxHighlighter language="javascript" style={docco}>{
`npm install snapalgo-sdk
or
yarn add snapalgo-sdk`}</SyntaxHighlighter>
        </div>
        <p>The wallet can now be enabled for usage.</p>
        <div className='code-contain'>
        <SyntaxHighlighter language="javascript" style={docco}>{
`import { useEffect } from 'react';
const snapalgosdk = require('snapalgo-sdk');
var snapalgo;

export default function App() {
    useEffect(() => {
    enable();
    });

    const enable = async () => {
        try {
            snapalgo = new snapalgosdk.Wallet;
            snapalgo.enable();
        } catch (err) {
            console.error(err)
            alert('Problem happened: ' + err.message || err)
        }
    }
}`}</SyntaxHighlighter>
        </div>
        <h3>npm:algorand</h3>
        <p>This is the way to access wallet functions without the floating wallet. The accounts will be logged to the console to show how to call SnapAlgo methods. All methods can accept the property, testnet, which will take a boolean and determine if the testnet is to be used.</p>
        <div className='code-contain'>
        <SyntaxHighlighter language="javascript" style={docco}>{
`async function enable(){
    try{
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
    } catch (err) {
        console.log(err)
    }
}`}</SyntaxHighlighter>
        </div>
    </div>
    );
}

export function Algod() {
    return(
        <div className='docpage'>
            <h1>getAlgodv2Client()</h1>

            <p>accesses the Algod client through the users preferred connection. returns a promised BaseHTTPClient that is used to build an Algodv2Client</p>
            <div className='code-contain'>
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
            <div className='code-contain'>
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
            <div className='code-contain'>
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

            <h5>opts: an optional object which can take two properties, genisisId and/or genesisHash. the genesisId is an ascii string representing the target network. the genesisHash is a base64 string representing a 32-byte genesis hash in which is the hash of the same target network</h5>
            <p>allows for the discovery of accounts. will return either an error or an object with the target network genesisid and corresponding genesisHash</p>
            <div className='code-contain'>
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
            <div className='code-contain'>
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
            <div className='code-contain'>
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
            <p>returns either an error or the txnId of the posted txn</p>
            <div className='code-contain'>
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
            <div className='code-contain'>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await snapalgo.enable();
    let signedTxn = await snapalgo.EZsignSmartSig(logicSigAccount);
} catch (err) {console.log(err)}`}</SyntaxHighlighter>
            </div>
        </div>
    );
}

export function Indexer() {
    return(
        <div className='docpage'>
            <h1>getIndexerClient()</h1>

            <p>accesses the Indexer client through the users preferred connection. returns a promised BaseHTTPClient that is used to build an Indexer</p>
            <div className='code-contain'>
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

            <div className='code-contain'>
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
            <p>used to sign encoded transaction(s) and then post them to an Algorand network. will take the inputs of the signTxns() function and return the outputs of the postTxns() function</p>
            <div className='code-contain'>
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
            <p>signs a list of encoded transactions on the Algorand blockchain. will return either an error or an array 'ret' that is the same length as the txns parameter array, containing the signed transaction(s)</p>
            <div className='code-contain'>
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
            <div className='code-contain'>
                <SyntaxHighlighter language="javascript" style={docco}>{
`//import libraries
const snapalgosdk = require('snapalgo-sdk');
const algosdk = require('algosdk');
var snapalgo;
var algodClient;

//connects the wallet and initializes the Algodv2Client
async function connect(){
    try{
    snapalgo = new snapalgosdk.Wallet();
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

//Swapping functions
export function getMin(){
    return(<div className='docpage'>
        <h1>getMin(InputTicker, OutputTicker2)</h1>
        <p>get the minium input amount of currency for a given swap</p>
        <div className='code-contain'>
            <SyntaxHighlighter language="javascript" style={docco}>{`
            await snapalgo
            `}</SyntaxHighlighter>
        </div>
    </div>
    )
}

export function preSwap(){
    return(
        <div className='docpage'>
            <h1>preSwap(InputTicker:str, OutputTicker:str, inputCurrencyAmount:Number)</h1>
            <p>get Infomation about a swap before its performed including the estimated output value and estimated swaping time</p>
            
        </div>
    )
}

export function swap(){
    return(
    <div className="docpage">
        <h1>swap(InputTicker:str, OutputTicker:str, inputCurrencyAmount:Number, email:str<span>optional</span>)</h1>
        <p>uses Chanagenow to swap one crypto currency for another. output cryptocurrency is stored in the users metamask wallet</p>

    </div>
    )
}

export function getSwapHistory(){
    return(
    <div className="docpage">
        <h1>returns a history of </h1>
    </div>
    )
}