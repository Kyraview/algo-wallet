import React, { useState, useEffect } from 'react';
import downArrow from './imgs/downArrow.png';
import { ProgressBar } from 'react-loader-spinner'
export default function HistorySwapScreen(){
    useEffect( ()=>{
        console.log("useEffect called")
        window.ethereum.request({
            method: 'wallet_invokeSnap',
            params: ["npm:algorand", 
            {
                method: 'swapHistory',
            }
            ]
        })
        .then((history)=>{
            console.log("history is")
            console.log(history)
            setSwapHistory(history)
            let tiles = {}
            for(const swap of history){
                
                tiles[swap.id] = {display:'none', status:null, loading:false}
            }
            setTileProperties(tiles)
        })
    }, [])
    const [swapHistory, setSwapHistory] = useState([]);
    const [tileProperties, setTileProperties] = useState({});
    const [loading, setLoading] = useState(false)
    
    const getStatus = async (id)=>{
        let copyProperties =JSON.parse(JSON.stringify(tileProperties));
        if(copyProperties[id].display === "none"){
            copyProperties[id].display = "block"; 
        }
        else{
            copyProperties[id].display = "none";
            setTileProperties(copyProperties);
            return;
        }
        setLoading(true)
        const result = await window.ethereum.request({
            method: 'wallet_invokeSnap',
            params: ["npm:algorand", 
            {
                method: 'getStatus',
                params:{
                    id: id
                }
            }
            ]
        });
        setLoading(false)
        console.log(result)
        copyProperties[id].statis = result;
        console.log(copyProperties);
        setTileProperties(copyProperties)

    }
    
    return(
        <div className='row' style={{maxWidth:'330px', marginTop:'65px'}}>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <p>swap history</p>
                <span style={{transform:'translateY(-25%)', height:'55px'}}>
                <ProgressBar
                    visible={loading}
                    height="50"
                    width="140"
                    ariaLabel="progress-bar-loading"
                    wrapperStyle={{}}
                    wrapperClass="vortex-wrapper"
                    borderColor = 'white'
                    barColor = 'white'
                />
                </span>
            </div>
            <div style={{maxHeight:'420px', overflowY:'auto'}}>
            {
                swapHistory.map((item)=>{
                    return (
                    <div key={item.id} style={{borderBottom: '0.5px solid white', marginTop:'15px'}}>
                        <span style={{display:'flex', justifyContent:'space-between'}}>
                            <span style={{display:'flex'}}>
                                <p>{item.fromCurrency}</p>
                                <img height="25" width="25" style={{filter:'invert(1)', transform:'rotate(-90deg)'}} src={downArrow}/>
                                <p>{item.toCurrency}</p>
                            </span>
                            <button 
                            style={{
                                maxHeight:'25px', 
                                fontSize:'13px', 
                                display:'block',
                                borderRadius:'5px',
                                backgroundColor:'#963beb',
                                color:'white',
                                border:'none'
                            }}
                            onClick={()=>getStatus(item.id)}
                            >
                                status
                            </button>

                        </span>
                        <div style={{display:tileProperties[item.id]?(tileProperties[item.id].display):'block'}}>
                        
                        <>
                            {tileProperties[item.id]?
                                (tileProperties[item.id].statis?
                                    (tileProperties[item.id].statis.status?
                                    <>
                                    <br/>
                                <div style={{display:'flex', justifyContent:'end'}}>
                                    <div style={{
                                    height:'10px', 
                                    width:'10px', 
                                    borderRadius:'100%',
                                    transform:'translateY(75%)',
                                    marginRight:'5px',
                                    backgroundColor: ({
                                        'new':'orange',
                                        'waiting':'#FF6700',
                                        'confirming':'FEC601',
                                        'exchanging':'#FEC601',
                                        'sending': '#F0F757',
                                        'finished':"#64F58D",
                                        'failed':'red',
                                        'refunded':'#4D9DE0',
                                        'verifying':'purple'})[tileProperties[item.id].statis.status]
                                    }}></div>
                                    <p>{tileProperties[item.id].statis.status}</p>
                                 </div>
                                
                                    
                                    </>:null)
                                    :null)
                                :null}

                        </>
                        </div>
                    </div>
                    )
                })
            }
            </div>
        </div>
    )
}