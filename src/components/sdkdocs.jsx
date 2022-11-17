import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
export function Quickstart() {
    return (
    <div className='docpage'>
        <h1>Quickstart Snapalgo-SDK</h1>
        the snapalgo sdk provides a simple way to develop in the algorand ecosystem with the ability to reach all metamask users a feature that
        is new to algorand. The SDK also provides users with a wallet interface directly on your DAPP.
        <h3>Install</h3>
        <p>SnapAlgo currently requires an install of <a href='https://metamask.io/flask/'>MetaMask Flask</a>. You must uninstall MetaMask first but that will require you to make sure you have your current wallet secret keys to reimport the desired wallets onto MetaMask Flask if needed.</p>
        <h3>SnapAlgoSDK - Node</h3>
        <div className='code-contain'>
            <SyntaxHighlighter language="javascript" style={docco}>{
`yarn add snapalgo-sdk`}</SyntaxHighlighter>
        </div>

        <h3>SnapAlgoSDK - HTML</h3>
        <p>This is the way to access the floating wallet web application using HTML and raw Javascript. You have to import the SDK with CDN before using.</p>
        <div className='code-contain'>
        <SyntaxHighlighter language="javascript" style={docco}>{
`<script src="https://cdn.jsdelivr.net/npm/snapalgo-sdk@1.0.19"></script>`}</SyntaxHighlighter>
        </div>
        <h3>The enable function</h3>
        before you can use the sdk you must enable the sdk to do this you must first initialize the sdk
        <SyntaxHighlighter language="javascript" style={docco}>{`
        const snapalgo = new SnapAlgo.Wallet();
        `}</SyntaxHighlighter>
        after the snapalgo class is initalized you can simply call <Link to="../enable">window.algorand.enable() </Link>
        this creates a popup window and allows the user to select an account or network
        <SyntaxHighlighter language="javascript" style={docco}>{`
        window.algorand.enable()
        // or
        snapalgo.enable()
        `}</SyntaxHighlighter>

        or you could copy this enable function into your code
        <SyntaxHighlighter language="javascript" style={docco}>{
`async function enable(){
    try {
        const snapalgo = new SnapAlgo.Wallet();
        return await window.algorand.enable();
    } catch (err) {
      console.error(err);
    }
}`}</SyntaxHighlighter>
    <div className='code-contain'>
        <Button onClick={async ()=>console.log(await window.algorand.enable())}>call enable</Button>
    </div>
        <br/>
        after enable is called all sdk functions can be accessesed from the gloabal window.algorand object.
        or directly off the snapalgo object.
        The enable function returns a promise that resolves to an <Link to="../EnableWalletObject">EnabledWalletObject</Link> containing 
        the selected address, genisisId, and genisisHash.
        <br/>
        <h3>SnapAlgoSDK - React</h3>
        <p>The snap algosdk can also be set up for react though it requires a few more steps</p>
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
let snapalgo;

export default function App() {
    useEffect(() => {
    enable();
    });

    const enable = async () => {
        try {
            snapalgo = new snapalgosdk.Wallet();
            snapalgo.enable();
        } catch (err) {
            console.error(err)
            alert('Problem happened: ' + err.message || err)
        }
    }
}`}</SyntaxHighlighter>
        </div>
        <h3>npm:algorand</h3>
        snapalgo can also be used without the SDK. This allows SNAPALGO to be used with no dependencys other than the end user having metamask.
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

            accesses the Algod client through the users preferred connection. returns a promised BaseHTTPClient that is used to build an Algodv2Client
            this function behaves in accordance with arc 9
            <Link to="https://arc.algorand.foundation/ARCs/arc-0009#specification">Arc-9</Link>
            <div className='code-contain'>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await snapalgo.enable();
    const algodClientParams = await window.algorand.getAlgodv2Client();
    const algodClient = new algosdk.Algodv2(algodClientParams);
} catch (err) {console.log(err)}`}</SyntaxHighlighter>
            </div>
            <h6>returns</h6>
            <Link to="https://algorand.github.io/js-algorand-sdk/interfaces/BaseHTTPClient.html">BaseHTTPClient</Link>
            
        </div>
    );
}

export function Base64Decode() {
    return(
        <div className='docpage'>
            <h1>base64Decode(data: string)</h1>

            <h5>arraybuffer: the target base64 encoded Buffer array to decode</h5>
            <p>returns a decoded Buffer array</p>
            <div className='code-contain'>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    let encodedArray = await snapalgo.base64Decode(base64dataObj: string);
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
            returns
            <Link to="EnabledWalletObject">EnabledWalletObject</Link>
        </div>
    );
}

export function EncodeTxn() {
    return(
        <div className='docpage'>
            <h1>encodeTxn(txn)</h1>

            takes in a <Link to="../AlgosdkTransaction">algosdk transaction</Link> object and returns an <Link to="../EncodedTxn">encoded Transaction</Link> that 
            can be used in a <Link to="../WalletTransaction">WalletTransaction</Link>
            <br/>
            <br/>
            <h5>Useage</h5>
            <SyntaxHighlighter language="typescript" style={docco}>{`
            let encodedTxn = await snapalgo.encodeTxn(txn);
            `}</SyntaxHighlighter>
            <h5>Signature</h5>
            <SyntaxHighlighter language="typescript" style={docco}>{`
            encodeTxn(txn: algosdk.Transaction) : EncodedTxn
            `}</SyntaxHighlighter>

            <h6>Params</h6>
            <Link to="../AlgosdkTransaction">algosdk.Transaction</Link>
            <br/>
            <br/>
            <h6>returns</h6>
            <Link to="../EncodedTxn">EncodedTxn</Link>
        </div>
    );
}

export function EZsign() {
    return(
        <div className='docpage'>
            <h1>EZsign(txn)</h1>

            <h5>accepts an algosdk transaction and returns a signed transaction</h5>
            <SyntaxHighlighter language="javascript" style={docco}>{
            `
                await snapalgo.enable();
                let signedTxn = await snapalgo.EZsign(txn);
                let signedTxn = await algorand.EZsign(txn);
            `}</SyntaxHighlighter>
            <h6>params</h6>
            <Link to="../AlgosdkTransaction">algosdk.Transaction</Link>
            <br/>
            <h6>returns</h6>
            <Link to="../SignedTxn">SignedTxn</Link>
            
        </div>
    );
}

export function EZsignAndPost() {
    return(
        <div className='docpage'>
            <h1>EZsignAndPost(txn)</h1>

            takes in a standard transaction, then signs the transaction and submits it to the blockchain
            returns the transaction hash or an error.
            
                <SyntaxHighlighter language="javascript" style={docco}>{
    `
        await snapalgo.enable();
        let signedTxn = await snapalgo.EZsignAndPost(txn);
    `}
                </SyntaxHighlighter>
            <h6>params</h6>
            <br/>
            <Link to="../AlgosdkTransaction">algosdk.Transaction</Link>
            <h6>returns</h6>
            txnHash: string
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
            
            <SyntaxHighlighter language="javascript" style={docco}>{
`
    await snapalgo.enable();
    let indexerClientParams = await snapalgo.getIndexerClient();
    const indexerClient = new algosdk.Indexer(indexerClientParams);
`}
            </SyntaxHighlighter>
            
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
            this function takes in a <Link to="../WalletTransaction">WalletTransaction</Link> then signs the transaction and posts it to the blockchain
            it then returns a transaction hash as a string.
            this function is part of algorand ARCs and its documentation can be found at
            <Link to="https://arc.algorand.foundation/ARCs/arc-0008">arc-0008</Link>
            
            <SyntaxHighlighter language="javascript" style={docco}>{
            `
                const txHash = await snapalgo.signAndPostTxn(WalletTransaction);
            `}
            </SyntaxHighlighter>
            
        <h6>params</h6>
        <Link to="../WalletTransaction">Wallet Transaction</Link>
        <br/>
        <h6>returns</h6>
        Transaction hash : string
        </div>
    );
}

export function Sign() {
    return(
        <div className='docpage'>
            <h1>signTxns(txns)</h1>

            Takes an array of <Link to="../WalletTransaction">WalletTransaction</Link> objects to sign. 
            SnapAlgo then signs these transactions and returns an array of <Link to="SignedTxns">SignedTxns</Link>
            
                <SyntaxHighlighter language="javascript" style={docco}>{
                `
                await algorand.enable();
                let signedTxn = await snapalgo.signTxns([WalletTransaction]);
                `}
                </SyntaxHighlighter>
                params
                <SyntaxHighlighter language="typescript" style={docco}>{
                    `
                   algorand.signTxns(txns:Array<WalletTransactions>) : Array<SignedTxn>
                    `
                }
                </SyntaxHighlighter>
                <Link to="../WalletTransaction">WalletTransaction</Link>
                returns
                <SyntaxHighlighter language='typescript' style={docco}>{`
                Array<SignedTxn>
                `}</SyntaxHighlighter>
                <Link to="../SignedTxn">SignedTxn</Link>
                
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
        <hr/>
        get the minium input amount of currency for a given swap
        
            <SyntaxHighlighter language="typescript" style={docco}>{`
            algorand.getMin(from:Ticker, to:Ticker): MinData
            `}</SyntaxHighlighter>
        params
        <Link to="../Ticker">Ticker</Link>
        returns
        <Link to="../MinData">MinData</Link>
        </div>
    )
}

export function preSwap(){
    return(
        <div className='docpage'>
            <h1>preSwap(InputTicker:str, OutputTicker:str, inputCurrencyAmount:Number)</h1>
            get Infomation about a swap before its performed including the estimated output value and estimated swaping time
            <SyntaxHighlighter language="typescript" style={docco}>{`
            algorand.preSwap(from:Ticker, to:Ticker, amount: Number) : PreswapData
            `}</SyntaxHighlighter>
            params
            <Link to="../Ticker">Ticker</Link>
            returns
            <Link to="../PreSwapData">PreSwap Data</Link>
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