import { TransactionContext } from "../context/TransactionContext";
import React , { useContext } from "react";


const Candidate= ({candidate}) => {

    const { doVote, candidateNames } = useContext(TransactionContext);
    var index=0
    
    while(candidateNames[index]!=candidate){
        index+=1;
    }

    const handleSubmitVote=()=>{
        
        console.log(index+1);
        doVote(index+1);
    }

    return(
            <div className="p-5 m-5 mx-2 w-[300px] h-[400px] justify-around flex flex-col text-center rounded-lg bg-honey-gold">
                <div className="m-5">
                    <h1 className="text-black text-3xl justify-start">{candidate}</h1>
                </div>
                <button className="text-honey-gold text-center cursor-pointer bg-honey-brown rounded-lg p-2" onClick={handleSubmitVote} >Vote</button>    
            </div>
    )
}

export default Candidate;