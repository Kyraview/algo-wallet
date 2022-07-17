import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import '../docs.css';

export function Quickstart() {
    return (
    <div>
        <h1>Quickstart</h1>

        <p>Installing the algosdk library is required for integration into your webapp.</p>
        <div style={{padding:'40px'}}>
            <SyntaxHighlighter language="javascript" style={docco}>{`
            npm i algosdk\n
            or\n
            yarn add algosdk`}</SyntaxHighlighter>
        </div>
        <p>Using NodeJS, import the algosdk library.</p>
        <div style={{padding:'40px'}}>
            <SyntaxHighlighter language="javascript" style={docco}>{`
            const algosdk = require('algosdk');`}</SyntaxHighlighter>
        </div>
    </div>
    );
}

export function Algod() {
    return(
        <div>
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
        <div>
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
        <div>
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
        <div>
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
        <div>
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
        <div>
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
        <div>
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
        <div>
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

export function Indexer() {
    return(
        <div>
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
        <div>
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
        <div>
            <h1>signAndPostTxns(txns)</h1>

            <h5>txns: the WalletTransaction object to sign and post. the required element of the object is txn, a string that is a base64 encoding of the canonical msgpack encoding of a transaction</h5>
            <p>used to sign transaction and then post them to an Algorand netowrk. will take the inputs of the signTxns() function and return the outputs of the postTxns() function</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await snapalgo.enable();
    let response = await snapalgo.signAndPostTxn(txn);
} catch (err) {console.log(err)}`}</SyntaxHighlighter>
            </div>
        </div>
    );
}

export function Sign() {
    return(
        <div>
            <h1>signTxns(txns)</h1>

            <h5>txns: the WalletTransaction object to sign. the required element of the object is txn, a string that is a base64 encoding of the canonical msgpack encoding of a transaction</h5>
            <p>signs a list of transactions on the Algorand blockchain. will return either an error or an array 'ret' that is the same length as the txns parameter array, containing the signed transaction(s)</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await snapalgo.enable();
    let signedTxn = await snapalgo.signTxn(txn);
} catch (err) {console.log(err)}`}</SyntaxHighlighter>
            </div>
        </div>
    );
}