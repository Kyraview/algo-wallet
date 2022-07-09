import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import '../docs.css';

export function Quickstart() {
    return (
    <div>
        <h1>Quickstart</h1>

        <p>Installing the SnapAlgo library is required for integration into your webapp.</p>
        <div style={{padding:'40px'}}>
            <SyntaxHighlighter language="javascript" style={docco}>{'npm i algorand\nyarn add algorand'}</SyntaxHighlighter>
        </div>
        <p>Using Javascript, import the SnapAlgo library.</p>
        <div style={{padding:'40px'}}>
            <SyntaxHighlighter language="javascript" style={docco}>{'const snapalgo = require(\'algorand\');//NodeJS\nimport \'algorand\' as \'snapalgo\';//raw JS'}</SyntaxHighlighter>
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
        </div>
    );
}

export function Algod() {
    return(
        <div>
            <h1>getAlgorandV2Client()</h1>

            <p>accesses the Algod client through the users preferred connection. returns a promised BaseHTTPClient that is used to build an Algodv2Client</p>
        </div>
    );
}

export function Indexer() {
    return(
        <div>
            <h1>getIndexerClient()</h1>

            <p>accesses the Indexer client through the users preferred connection. returns a promised BaseHTTPClient that is used to build an Indexer</p>
        </div>
    );
}

export function Post() {
    return(
        <div>
            <h1>postTxns(stxns)</h1>

            <h5>stxns: an array that contains the base64 encoding of the canonical msgpack encoding of signed txn(s)</h5>
            <p>used to post transactions to an Algorand network. will return either an error or a 'ret' object that has the property txId, a 52-character base 32 string (without padding) corresponding to a 32-byte string</p>
        </div>
    );
}

export function SignAndPost() {
    return(
        <div>
            <h1>signAndPostTxns(txns)</h1>

            <h5>txns: a non-empty array that contains all of the WalletTransaction object(s) to sign. the required element of the object is txn, a string that is a base64 encoding of the canonical msgpack encoding of a transaction</h5>
            <p>used to sign transaction and then post them to an Algorand netowrk. will take the inputs of the signTxns() function and return the outputs of the postTxns() function</p>
        </div>
    );
}

export function Sign() {
    return(
        <div>
            <h1>signTxns(txns)</h1>

            <h5>txns: a non-empty array that contains all of the WalletTransaction object(s) to sign. the required element of the object is txn, a string that is a base64 encoding of the canonical msgpack encoding of a transaction</h5>
            <p>signs a list of transactions on the Algorand blockchain. will return either an error or an array 'ret' that is the same length as the txns parameter array, containing the signed transaction(s)</p>
        </div>
    );
}