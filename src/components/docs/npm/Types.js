import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Link } from 'react-router-dom';


export function EncodedTxn(){
    return (
        <div className='docPage'>
            <h1>EncodedTxn</h1>
            <h6>type</h6>
            an encoded transaction is the base64 canonical encoding of an algorand Transaction
            <SyntaxHighlighter language="typescript" style={docco}>{`
            type EncodedTxn: string // b64 transaction string
            `}</SyntaxHighlighter>
        </div>
    )

}
export function EnabledWalletObject(){
    return (
        <div className='docPage'>
            <h1>EnabledWalletObject</h1>
            <h6>type</h6>
            <hr/>
            this is the ret object returned from <Link to="../enable">algorand.enable</Link> and is fully described in  
             <Link to="https://arc.algorand.foundation/ARCs/arc-0006#interface-enablefunction">arc-6</Link>
            <SyntaxHighlighter language="typescript" style={docco}>{`
            interface EnabledWalletObject{
                genisisHash: string,
                genesisID: string,
                accounts: Array<AlgoAddress>
            }
            `}</SyntaxHighlighter>
            sub types
            <br/>
            <Link to="../AlgoAddress">AlgoAddress</Link>
        </div>
    )
}
export function AlgosdkTransaction(){
    return(
        <div className='docPage'> 
        <h1>algosdk.Transaction</h1>
        <h6>class <Link to="https://algorand.github.io/js-algorand-sdk/classes/Transaction.html">official documentation</Link></h6>
        <hr/>
        this is the algosdk. Transaction class from <Link to="https://github.com/algorand/js-algorand-sdk">algosdk </Link>
         It is returned by all create transaction functions defined in algosdk
        e.g. algosdk.makePaymentTxnWithSuggestedParams
        these kind of transaction can be signed or <Link to="WalletTransaction">WalletTransaction</Link> objects
        by using the following methods in the <h6>snapalgo-sdk</h6>
        <hr/>
        <Link to="../ezsign">algorand.EZsign</Link> | signs the transaction
        <br/>
        <h6>returns the signature</h6>
        <hr/>
        <br/>
        <Link to="../ezsignandpost">algorand.EZsignAndPost</Link> | signs the transaction and posts it to the blockchain
        <br/>
        <h6>returns the txID</h6>
        <hr/>
        
        <Link to="../encodetxn">algorand.encodeTxn</Link> | <br/>converts the algosdkTransaction to an 
        <Link to="../EncodedTxn">EncodedTxn</Link> which can be easily converted to a <Link to="../WalletTransaction">WalletTransaction</Link> object
        <h6>returns <Link to="../EncodedTxn">EncodedTxn</Link></h6>
        </div>
    )
}
export function SignedTxn(){
    return (
        <div className='docPage'>
            <h1>SignedTxn</h1>
            <h6>type</h6>
            <hr/>
            a SignedTxn type is a base64 representation of a signed algorand transaction
            <SyntaxHighlighter language="typescript" style={docco}>{`
            type SignedTxn string;
            `}</SyntaxHighlighter>
        </div>
    )
}
export function WalletTransaction(){
    return(
        <div className='docpage'>
            <h1>WalletTransaction</h1>
            <h6>type</h6>
            <hr/>
            A WalletTransaction defines a custom transaction for the wallet to sign
            A detailed description is described in algorand ARC-1 found <Link to="https://arc.algorand.foundation/ARCs/arc-0001">here</Link>
            <SyntaxHighlighter language="typescript" style={docco}>{`
            interface WalletTransaction {
                /**
                    * Base64 encoding of the canonical msgpack encoding of a Transaction.
                    */
                txn: EncodedTxn;

                /**
                    * Optional authorized address used to sign the transaction when the account
                    * is rekeyed. Also called the signor/sgnr.
                    */
                authAddr?: AlgoAddress;

                /**
                    * Optional base64 encoding of the canonical msgpack encoding of a 
                    * SignedTxn corresponding to txn, when signers=[]
                    */
                stxn: SignedTxnStr;

                /**
                    * Optional message explaining the reason of the transaction
                    */
                message?: string;

                /**
                    * Optional message explaining the reason of this group of transaction
                    * Field only allowed in the first transaction of a group
                    */
                groupMessage?: string;
                }
                `}
            </SyntaxHighlighter>
            subtypes
            <br/>
            <Link to="../EncodedTxn">EncodedTxn</Link>
            <br/>
            <Link to="../AlgoAddress">AlgoAddress</Link>
        </div>
    )
}

export function Ticker(){
    return(
    <div className='docPage'>
    <h1>Ticker</h1>
    <h6>type</h6>
    <h6>a string representing a currency ticker</h6>
    <SyntaxHighlighter language="typescript" style={docco}>{`
    type Ticker: 'eth' | 'bsc' | 'algo'
    `}
    </SyntaxHighlighter>
    </div>
    )
}

export function AccountObj(){
    return(
    <div className="docPage">
    <h1>Account Obj</h1>
    <h6>a Javascript Object represented a given algorand Account</h6>
    <SyntaxHighlighter language="typescript" style={docco}>{`
    interface AccountObj{
        name: string,
        address: AlgoAddress, 
        type: 'imported' | 'generated',
        swaps: Array<SwapHistory>,
        path?: number //int (only exist on generated accounts)
    }
    `}
    </SyntaxHighlighter>
    <h6> sub types</h6>
    <Link to="../SwapHistory">SwapHistory</Link>
    <br/>
    <Link to="../AlgoAddress">AlgoAddress</Link>
    </div>
    )
}

export function AlgoAddress(){
    return(
    <div className="docPage">
        <h2>AlgoAddress</h2>
        <h6>type</h6>
        <h6>a string representation of a base-58 algorand wallet address</h6>
        <SyntaxHighlighter language="typescript" style={docco}>{`
        type AlgoAddress: string
        `}</SyntaxHighlighter>

    </div>
    )
}

export function EthAddress(){
    return(
    <div className='docPage'>
        <h2>AlgoAddress</h2>
        <h6>type</h6>
        <h6>a string representation of an evm wallet address</h6>
        <h6>this includes bsc, eth, polygon, etc</h6>
        <SyntaxHighlighter language="typescript" style={docco}>{`
        type EthAddress: string
        `}</SyntaxHighlighter>
    </div>
    )
}

export function SwapHistory(){
    return(

    <div className="docPage">
        <h1>Swap History</h1>
        <h6>type</h6>
        <h6>A record of a swap stored in the wallet</h6>
        <h6>To get more infomation about a swap you can call the <Link to="../getSwapStatus">getSwapStatus Function</Link></h6>
        <SyntaxHighlighter language="typescript" style={docco}>{`
        interface SwapHistory{
            // amount is in base units i.e. eth algo not wei or micro-algo
            amount : Number 
            email : string | "none"
            fromCurrency : Ticker
            id : string // changenow Swap Id
            // link to changenow status page eg. https://changenow.io/exchange/txs/:id
            link : string  
            payinAddress : AlgoAddress | EthAddress
            payoutAddress : AlgoAddress | EthAddress
            // equivelent to String(new Date())
            timeStamp : string 
            toCurrency : Ticker
        }
        `}</SyntaxHighlighter>
        <h6>subTypes</h6>
        
        <Link to="../Ticker">Ticker</Link>
        <br/>
        <Link to="../AlgoAddress">AlgoAddress</Link>
        <br/>
        <Link to="../EthAddress">EthAddress</Link>
        
        
    </div>
    )
}

export function SwapStatus(){
    return(
        <div className='docPage'>
    <h1>Swap Status</h1>
    <h6>type</h6>
    <h6>gives detailed infomation about an already performed swap</h6>
    <SyntaxHighlighter language="typescript" style={docco}>{`
        amountSend : Number // in base Units
        createdAt : string //timestamp in the format "2022-11-06T22:00:49.487Z"
        depositReceivedAt : string //timestamp in the format "2022-11-06T22:06:19.712Z"
        expectedReceiveAmount : Number // in base Units
        expectedSendAmount : Number // in base Units
        fromCurrency : Ticker
        id : string // changenow swap id ex. "0035af3205755c"
        isPartner : boolean,
        payinAddress : AlgoAddress | EthAddress,
        payinHash : string //transaction hash of the input currency
        payoutAddress : AlgoAddress | EthAddress
        status : (
            'new' | 'waiting' | 'confirming' | 'exchanging' | 'sending' | 'finished' | 'failed' | 'refunded' | 'verifying'
        )
        toCurrency : Ticker
        updatedAt : string //timestamp in the format "2022-11-06T22:06:33.144Z"
        `}
    </SyntaxHighlighter>
    <h6>subtypes</h6>
    
    <Link to="../Ticker">Ticker</Link>
        
    <br/>
    <Link to="../AlgoAddress">AlgoAddress</Link>
    <br/>
    <Link to="../EthAddress">EthAddress</Link>
    
    </div>
    )
}


export function TransactionHistoryObj(){
    return(
        <div className='docPage'>
            <h1>TransactionHistoryObj</h1>
            <h6>type</h6>
            <hr/>
            <h6>this is an algorand transaction object defined</h6>
            <Link to="https://developer.algorand.org/docs/get-details/transactions/transactions/">here</Link>
        </div>
    )

}


export function PreSwapData(){
    return(
    <div className='docPage'>
        <h1>PreSwapData</h1>
    </div>  
    )
}

export function AssetObj(){
    <div className='docPage'>

    </div> 
}