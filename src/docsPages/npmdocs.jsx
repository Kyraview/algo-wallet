import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import '../docs.css';

export function NpmAppOptIn() {
    return(
        <div className='docpage'>
            <h1>AppOptIn</h1>

            <h5>appIndex: a Uint64 that is the index of the target application to opt into to</h5>
            <p>returns either an error or an object depending on if the application was opted into</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await window.ethereum.request({
        method: 'wallet_enable',
        params: [{
        wallet_snap: { ["npm:algorand"]: {} },
        }]
    });
    let appIndex = /*appIndex*/;
    let optIn = await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: ["npm:algorand",{
            method: 'AppOptIn',
            appIndex: appIndex
        }]
    });
} catch (err) {console.log(err)}`}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}

export function NpmAssetOptIn() {
    return(
        <div className='docpage'>
            <h1>AssetOptIn</h1>

            <h5>assetIndex: a Uint64 that is the index of the target asset to opt into to</h5>
            <p>returns either an error or true depending on if the asset was opted into</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await window.ethereum.request({
        method: 'wallet_enable',
        params: [{
        wallet_snap: { ["npm:algorand"]: {} },
        }]
    });
    let assetIndex = /*assetIndex*/;
    let optIn = await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: ["npm:algorand",{
            method: 'AssetOptIn',
            assetIndex: assetIndex
        }]
    });
} catch (err) {console.log(err)}`}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}

export function NpmAssetOptOut() {
    return(
        <div className='docpage'>
            <h1>AssetOptOut</h1>

            <h5>assetIndex: a Uint64 that is the index of the target asset to opt out of</h5>
            <p>returns either an error or true depending on if the asset was opted out of</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await window.ethereum.request({
        method: 'wallet_enable',
        params: [{
        wallet_snap: { ["npm:algorand"]: {} },
        }]
    });
    let assetIndex = /*assetIndex*/;
    let optOut = await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: ["npm:algorand",{
            method: 'AssetOptOut',
            assetIndex: assetIndex
        }]
    });
} catch (err) {console.log(err)}`}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}

export function NpmclearAccounts() {
    return(
        <div className='docpage'>
            <h1>clearAccounts</h1>

            <p>returns boolean depending on if the imported accounts have been cleared or not</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await window.ethereum.request({
        method: 'wallet_enable',
        params: [{
        wallet_snap: { ["npm:algorand"]: {} },
        }]
    });
    let balance = await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: ["npm:algorand",{
            method: 'clearAccounts'
        }]
    });
} catch (err) {console.log(err)}`
                }</SyntaxHighlighter>
            </div>
        </div>
    );
}

export function NpmcreateAcct() {
    return(
        <div className='docpage'>
            <h1>createAccount</h1>

            <h5>name: a string that is the desired name of the new account</h5>
            <p>returns true if an account was successfully created</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await window.ethereum.request({
        method: 'wallet_enable',
        params: [{
        wallet_snap: { ["npm:algorand"]: {} },
        }]
    });
    let name = 'My Account';
    let currentAccount = await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: ["npm:algorand",{
            method: 'createAccount',
            name: name
        }]
    });
} catch (err) {console.log(err)}`}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}

export function NpmdisplayBalance() {
    return(
        <div className='docpage'>
            <h1>displayBalance</h1>

            <p>displays the current account's balance in the Metamask window and returns true if approved</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await window.ethereum.request({
        method: 'wallet_enable',
        params: [{
        wallet_snap: { ["npm:algorand"]: {} },
        }]
    });
    await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: ["npm:algorand",{
            method: 'displayBalance'
        }]
    });
} catch (err) {console.log(err)}`}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}

export function NpmdisplayMnemonic() {
    return(
        <div className='docpage'>
            <h1>displayMnemonic</h1>

            <p>returns a boolean depending on if the mnemonic phrase of the current account is approved to display in the Metamask window</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await window.ethereum.request({
        method: 'wallet_enable',
        params: [{
        wallet_snap: { ["npm:algorand"]: {} },
        }]
    });
    await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: ["npm:algorand",{
            method: 'displayMnemonic'
        }]
    });
} catch (err) {console.log(err)}`}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}

export function NpmEnable() {
    return(
        <div className='docpage'>
            <h1>enable</h1>

            <h5>opts: an optional object parameter which can take two properties, genisisId and/or genesisHash. the genesisId is an ascii string representing the target network. the genesisHash is a base64 string representing a 32-byte genesis hash in which is the hash of the same target network</h5>
            <p>allows for the discovery of accounts. will return either an error or an object with the target network genesisid and corresponding genesisHash</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{`
                try{
                await window.ethereum.request({
                    method: 'wallet_enable',
                    params: [{
                    wallet_snap: { ["npm:algorand"]: {opts} },
                    }]
                })
                }
                catch (e){
                alert('SnapAlgo currently requires a desktop installation of MetaMask Flask.');
                return null;
                }`}</SyntaxHighlighter>
            </div>
        </div>
    );
}

export function NpmencodeTransaction() {
    return(
        <div className='docpage'>
            <h1>encodeTransaction</h1>

            <h5>txn: the target transaction object to encoded into  base64</h5>
            <p>returns the base64 encoding of the canonical msgpack encoding of the target transaction object</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await window.ethereum.request({
        method: 'wallet_enable',
        params: [{
        wallet_snap: { ["npm:algorand"]: {} },
        }]
    });
    let encodedTxn = await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: ["npm:algorand",{
            method: 'encodeTransaction',
            txn: /*txn object*/
        }]
    });
} catch (err) {console.log(err)}`}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}

export function NpmencodeTransactions() {
    return(
        <div className='docpage'>
            <h1>encodeTransactions</h1>

            <h5>txns: an array of the target transaction objects to encode into base64</h5>
            <p>returns an array of the base64 encodings of each target transaction object</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await window.ethereum.request({
        method: 'wallet_enable',
        params: [{
        wallet_snap: { ["npm:algorand"]: {} },
        }]
    });
    let txns = [/*txn object*/]
    let encodedTxns = await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: ["npm:algorand",{
            method: 'encodeTransactions',
            txns: txns
        }]
    });
} catch (err) {console.log(err)}`}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}

export function NpmgetAccount() {
    return(
        <div className='docpage'>
            <h1>getAccount</h1>

            <p>returns an object of the current account</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await window.ethereum.request({
        method: 'wallet_enable',
        params: [{
        wallet_snap: { ["npm:algorand"]: {} },
        }]
    });
    await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: ["npm:algorand",{
            method: 'getAccount'
        }]
    });
} catch (err) {console.log(err)}`}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}

export function NpmgetAccounts() {
    return(
        <div className='docpage'>
            <h1>getAccounts</h1>

            <p>returns an object of the accounts in the generated keytree with their properties being: addr (String), name (String), path (Uint64), and type (String)</p>
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
} catch (err) {console.log(err)}`
                }</SyntaxHighlighter>
            </div>
        </div>
    );
}

export function NpmgetAddress() {
    return(
        <div className='docpage'>
            <h1>getAddress</h1>

            <p>returns a string of the current account address</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await window.ethereum.request({
        method: 'wallet_enable',
        params: [{
        wallet_snap: { ["npm:algorand"]: {} },
        }]
    });
    let address = await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: ["npm:algorand",{
            method: 'getAddress'
        }]
    });
} catch (err) {console.log(err)}`}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}

export function NpmgetAssetById() {
    return(
        <div className='docpage'>
            <h1>getAssetById</h1>

            <h5>assetIndex: a Uint64 that is the index of the target asset to get</h5>
            <p>returns the object of the target asset</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await window.ethereum.request({
        method: 'wallet_enable',
        params: [{
        wallet_snap: { ["npm:algorand"]: {} },
        }]
    });
    let assetIndex = /*assetIndex*/;
    let asset = await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: ["npm:algorand",{
            method: 'getAssetById',
            assetIndex: assetIndex
        }]
    });
} catch (err) {console.log(err)}`}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}

export function NpmgetAssets() {
    return(
        <div className='docpage'>
            <h1>getAssets</h1>

            <p>returns an array of all opted in assets in the current account</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await window.ethereum.request({
        method: 'wallet_enable',
        params: [{
        wallet_snap: { ["npm:algorand"]: {} },
        }]
    });
    let assets = await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: ["npm:algorand",{
            method: 'getAssets'
        }]
    });
} catch (err) {console.log(err)}`
                }</SyntaxHighlighter>
            </div>
        </div>
    );
}

export function NpmgetBalance() {
    return(
        <div className='docpage'>
            <h1>getBalance</h1>

            <p>returns the amount of Algos that the current account has</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await window.ethereum.request({
        method: 'wallet_enable',
        params: [{
        wallet_snap: { ["npm:algorand"]: {} },
        }]
    });
    let balance = await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: ["npm:algorand",{
            method: 'getBalance'
        }]
    });
} catch (err) {console.log(err)}`
                }</SyntaxHighlighter>
            </div>
        </div>
    );
}

export function NpmgetCurrentAccount() {
    return(
        <div className='docpage'>
            <h1>getCurrentAccount</h1>

            <p>returns an object of the current account with its properties being: addr (String) and sk (Uint8Array)</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await window.ethereum.request({
        method: 'wallet_enable',
        params: [{
        wallet_snap: { ["npm:algorand"]: {} },
        }]
    });
    let currentAccount = await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: ["npm:algorand",{
            method: 'getCurrentAccount'
        }]
    });
} catch (err) {console.log(err)}`}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}

export function NpmgetTxns() {
    return(
        <div className='docpage'>
            <h1>getTransactions</h1>

            <p>returns an array of previously signed and posted transactions of the current account</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await window.ethereum.request({
        method: 'wallet_enable',
        params: [{
        wallet_snap: { ["npm:algorand"]: {} },
        }]
    })
    let testnet = true; //change accordingly
    let transactions = await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: ["npm:algorand", {
        method: 'getTransactions',
        testnet: testnet
        }]
    })
} catch (err) {console.log(err)}`
                }</SyntaxHighlighter>
            </div>
        </div>
    );
}

export function NpmimportAcct() {
    return(
        <div className='docpage'>
            <h1>importAccount</h1>

            <h5>mnemonic: a string that is the 25-word mnemonic phrase of your desired account to import with each word separated by a space<br/>
            name: a string that names the account of which is imported</h5>
            <p>returns an object with properties being: Accounts, an Object that contains the current held accounts, and currentAccountId, a string of the imported account</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await window.ethereum.request({
        method: 'wallet_enable',
        params: [{
        wallet_snap: { ["npm:algorand"]: {} },
        }]
    });
    let phrase = '/*mnemonic phrase*/';
    let accountName = 'My Account';
    let currentAccount = await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: ["npm:algorand",{
            method: 'importAccount',
            mnemonic: phrase,
            name: accountName
        }]
    });
} catch (err) {console.log(err)}`
                }</SyntaxHighlighter>
            </div>
        </div>
    );
}

export function NpmisValidAddress() {
    return(
        <div className='docpage'>
            <h1>isValidAddress</h1>

            <h5>address: a string of the desired account to be checked</h5>
            <p>returns a boolean on whether or not the input address is valid</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await window.ethereum.request({
        method: 'wallet_enable',
        params: [{
        wallet_snap: { ["npm:algorand"]: {} },
        }]
    });
    let address = '/*address*/';
    let isValid = await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: ["npm:algorand",{
            method: 'isValidAddress',
            address: address
        }]
    });
} catch (err) {console.log(err)}`
                }</SyntaxHighlighter>
            </div>
        </div>
    );
}

export function NpmpostTxns() {
    return(
        <div className='docpage'>
            <h1>postTxns</h1>

            <h5>stxns: an array of signed transaction objects to post. the required element of the object is txn, a string that is a base64 encoding of the canonical msgpack encoding of a signed transaction</h5>
            <p>returns either an error or an array 'ret' that is the same length as the stxns parameter array, containing the posted transaction(s)</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await window.ethereum.request({
        method: 'wallet_enable',
        params: [{
        wallet_snap: { ["npm:algorand"]: {} },
        }]
    });
    let stxns = [/*signed txn object*/];
    let ret = await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: ["npm:algorand",{
            method: 'postTxns',
            stxns: stxns
        }]
    });
} catch (err) {console.log(err)}`}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}

export function NpmsecureReceive() {
    return(
        <div className='docpage'>
            <h1>secureReceive</h1>

            <p>returns a string of the current account address</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await window.ethereum.request({
        method: 'wallet_enable',
        params: [{
        wallet_snap: { ["npm:algorand"]: {} },
        }]
    });
    let address = await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: ["npm:algorand",{
            method: 'secureReceive'
        }]
    });
} catch (err) {console.log(err)}`}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}

export function NpmsetAcct() {
    return(
        <div className='docpage'>
            <h1>setAccount</h1>

            <h5>address: a string of the desired account to be set as the current account</h5>
            <p>returns an object with properties being: Accounts, an Object that contains the current held accounts, and currentAccountId, a string of the set account</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await window.ethereum.request({
        method: 'wallet_enable',
        params: [{
        wallet_snap: { ["npm:algorand"]: {} },
        }]
    });
    let targetAccount = '/*address*/';
    let setAccount = await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: ["npm:algorand",{
            method: 'setAccount',
            address: targetAccount
        }]
    });
} catch (err) {console.log(err)}`
                }</SyntaxHighlighter>
            </div>
        </div>
    );
}

export function NpmsignAndPostTxns() {
    return(
        <div className='docpage'>
            <h1>signAndPostTxns</h1>

            <h5>txns: an array of WalletTransaction objects to sign and post. the required element of the object is txn, a string that is a base64 encoding of the canonical msgpack encoding of a transaction</h5>
            <p>returns either an error or an array 'ret' that is the same length as the stxns parameter array, containing the posted transaction(s)</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await window.ethereum.request({
        method: 'wallet_enable',
        params: [{
        wallet_snap: { ["npm:algorand"]: {} },
        }]
    });
    let txns = [/*txn object*/];
    let response = await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: ["npm:algorand",{
            method: 'signAndPostTxns',
            txns: txns
        }]
    });
} catch (err) {console.log(err)}`}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}

export function NpmsignData() {
    return(
        <div className='docpage'>
            <h1>signData</h1>

            <h5>data: a Uint8Array of the desired data to sign</h5>
            <p>returns a boolean of whether or not the data has been signed</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await window.ethereum.request({
        method: 'wallet_enable',
        params: [{
        wallet_snap: { ["npm:algorand"]: {} },
        }]
    });
    let signedData = await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: ["npm:algorand",{
            method: 'displayBalance',
            data: new Uint8Array()
        }]
    });
} catch (err) {console.log(err)}`}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}

export function NpmsignLogicSig() {
    return(
        <div className='docpage'>
            <h1>signLogicSig</h1>

            <h5>logicSigAccount: the base64 encoding of the canonical msgpack encoding of the target logic sig account</h5>
            <p>returns the base64 encoding of the canonical msgpack encoding of the signed target logic sig account</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await window.ethereum.request({
        method: 'wallet_enable',
        params: [{
        wallet_snap: { ["npm:algorand"]: {} },
        }]
    });
    let sig = [/*logic sig account*/];
    let response = await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: ["npm:algorand",{
            method: 'signLogicSig',
            logicSigAccount: sig
        }]
    });
} catch (err) {console.log(err)}`}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}

export function NpmsignTxns() {
    return(
        <div className='docpage'>
            <h1>signTxns</h1>

            <h5>txns: an array of WalletTransaction objects to sign. the required element of the object is txn, a string that is a base64 encoding of the canonical msgpack encoding of a transaction</h5>
            <p>returns either an error or an array 'ret' that is the same length as the txns parameter array, containing the signed transaction(s)</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await window.ethereum.request({
        method: 'wallet_enable',
        params: [{
        wallet_snap: { ["npm:algorand"]: {} },
        }]
    });
    let txns = [/*txn object*/];
    let ret = await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: ["npm:algorand",{
            method: 'signTxns',
            txns: txns
        }]
    });
} catch (err) {console.log(err)}`}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}

export function Npmtransfer() {
    return(
        <div className='docpage'>
            <h1>transfer</h1>

            <h5>to: a string of the target receiving address<br/>
            amount: a Uint64 that represents the amount of microAlgos to send</h5>
            <p>returns an empty object after the target amount is sent to the target address from the current account</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await window.ethereum.request({
        method: 'wallet_enable',
        params: [{
        wallet_snap: { ["npm:algorand"]: {} },
        }]
    });
    let address = /*address*/;
    let amount = 1000;
    await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: ["npm:algorand",{
            method: 'transfer',
            to: address,
            amount: amount
        }]
    });
} catch (err) {console.log(err)}`}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}

export function NpmtransferAsset() {
    return(
        <div className='docpage'>
            <h1>transferAsset</h1>

            <h5>assetIndex: a Uint64 that is the index of the target asset to transfer<br/>
            to: the string of the target address to transfer the target asset to</h5>
            <p>returns either an error or true depending on if the asset was transferred or not</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await window.ethereum.request({
        method: 'wallet_enable',
        params: [{
        wallet_snap: { ["npm:algorand"]: {} },
        }]
    });
    let assetIndex = /*assetIndex*/;
    let address = /*address*/;
    await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: ["npm:algorand",{
            method: 'transferAsset',
            assetIndex: assetIndex,
            to: address
        }]
    });
} catch (err) {console.log(err)}`}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}

export function Npmuint8ArraytoBase64() {
    return(
        <div className='docpage'>
            <h1>Uint8ArrayToBase64</h1>

            <h5>array: the target Uint8Array to be converted to base 64</h5>
            <p>returns the base64 encoding of a target Uint8Array</p>
            <div style={{padding:'40px'}}>
                <SyntaxHighlighter language="javascript" style={docco}>{
`try{
    await window.ethereum.request({
        method: 'wallet_enable',
        params: [{
        wallet_snap: { ["npm:algorand"]: {} },
        }]
    });
    await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: ["npm:algorand",{
            method: 'Uint8ArrayToBase64',
            array: /*Uint8Array*/
        }]
    });
} catch (err) {console.log(err)}`}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}