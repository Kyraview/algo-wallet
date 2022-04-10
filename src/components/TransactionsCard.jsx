import openIcon from '../imgs/open.png';
import './scrollbar.css';
import upIcon from '../imgs/up.png';
import downIcon from '../imgs/down.png';


export default function TransactionsCard(props){
    if(props.transactions.length === 0){
        return (
            <>
            <br/><br/>
            <p>no transactions</p>
            </>
        )
    }

    return(
        <>
        <br/>
        <div id="tx-holder" style={{overflowY:'scroll', width:'80%', borderBottom:'0.5px solid white', borderTop:'0.5px solid white', height:'200px', position:'relative', borderRadius:'10px'}} className="transactions-card">
            {props.transactions.map((transaction) => {
                let InOut; 
                if(transaction['payment-transaction']['receiver'] === props.address){
                    InOut = 'In';
                }
                else{
                    InOut = 'Out';
                }
                return (
                    <div style={{display:'flex', padding:'10px', justifyContent:"space-around"}}>
                        {InOut==="In"?<img style={{width:'25px', height:'25px'}} src={downIcon}/>:<img style={{width:'25px', height:'25px'}} src={upIcon}/>}
                        <p>
                            {Number(transaction['payment-transaction']['amount'])/1000000} 
                            <b style={{fontWeight:'normal'}}> ALGO</b>
                        </p>
                        <a target="_blank" href={"https://algoexplorer.io/tx/"+transaction['id']}><img style={{height:'20px', width:'20px'}}src={openIcon}/></a>
                    </div>
                );
            })}
        </div>
        </>
        
    )
}