import SyntaxHighlighter from 'react-syntax-highlighter';
import './App.css';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const algosdk =  require('algosdk');
const SnapAlgo = require('snapalgo-sdk');

export default function Demo(){

    const initfunc = ()=>{
       new SnapAlgo.Wallet();
    }

    const enablefunc = async () =>{
        console.log("here");
        const accounts = await window.algorand.enable();
        console.log(accounts);
        const string = `returns\n enabledAccount: [${accounts.enabledAccounts[0]}]
         genisisId: ${accounts.genisisId}
         genisisHash: ${accounts.genisisHash}`
        alert(string);
    }

    const createAndSendTransaction = async () => {
        const addr = await window.algorand.getAddress()
        console.log(addr)
        let algodClient = new algosdk.Algodv2(window.algorand.getAlgodv2Client());
        console.log("algodClient")
        let params = await algodClient.getTransactionParams().do();
        console.log("yup");
        // comment out the next two lines to use suggested fee
        params.fee = 1000;
        params.flatFee = true;
        const receiver = "GD64YIY3TWGDMCNPP553DZPPR6LDUSFQOIJVFDPPXWEG3FVOJCCDBBHU5A";
        const enc = new TextEncoder();
        let note = enc.encode("Hello World");
        let txn = algosdk.makePaymentTxnWithSuggestedParams(addr, receiver, 10000, undefined, note, params); 
        window.algorand.EZsignAndPost(txn)
    }

    return(
    <>
    <div className='code-contain'>
        <h1>SnapAlgo Demo</h1>
        <h3>Installation</h3>
        This installs the sdk for easier use of snapalgo
        <h6>Vanilla Javascript</h6>
        <SyntaxHighlighter language="html" style={docco}>{
            `
            <script src="https://cdn.jsdelivr.net/npm/snapalgo-sdk@1.0.19"></script>
            `
        }</SyntaxHighlighter>
        <h6>node</h6>
        <SyntaxHighlighter language="shell" style={docco}>{
            `
            npm install snapalgo-sdk
            or
            yarn add snapalgo-sdk
            `
        }</SyntaxHighlighter>
    </div>

    <div className='code-contain'>
        <SyntaxHighlighter language="javascript" style={docco}>{
            `
            function init(){
                const snapalgo = new SnapAlgo.Wallet();
            }
            `
        }</SyntaxHighlighter>
        <Button onClick={initfunc}>Call Init</Button>
    </div>
    <div className='code-contain'>
        <SyntaxHighlighter language="javascript" style={docco}>{
            `
            async function enable(){
                await window.algorand.enable()
            }
            `
        }</SyntaxHighlighter>
        <Button onClick={enablefunc}>Call enable</Button>
    </div>
    <div className='code-contain'>
        <SyntaxHighlighter language="javascript" style={docco}>{
            `
            async function createAndSendTransaction(){
                const addr = await window.algorand.getAddress()
                let algodClient = new algosdk.Algodv2(window.algorand.getAlgodv2Client());
                let params = await algodClient.getTransactionParams().do();
                // comment out the next two lines to use suggested fee
                params.fee = 1000;
                params.flatFee = true;
                const receiver = "GD64YIY3TWGDMCNPP553DZPPR6LDUSFQOIJVFDPPXWEG3FVOJCCDBBHU5A";
                const enc = new TextEncoder();
                let note = enc.encode("Hello World");
                let txn = algosdk.makePaymentTxnWithSuggestedParams(addr, receiver, 10000, undefined, note, params); 
                window.algorand.EZsignAndPost(txn)
            }
            `
        }</SyntaxHighlighter>
        <Button onClick={createAndSendTransaction}>call createAndSendTransaction</Button>
        <br/>
        <h3>Example Apps</h3>
        <br/>
        <br/>
        <a href="https://dewdrops-studio.paulfears.repl.co/"><Button>DewDrops (sdk)</Button></a>
        <a href="https://algoswap.netlify.app/"><Button>Swap (npm only)</Button></a>
    </div>
    </>
    )
}