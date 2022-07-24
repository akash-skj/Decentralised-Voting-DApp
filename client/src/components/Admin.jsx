import { TransactionContext } from "../context/TransactionContext";
import React , { useContext } from "react";
import { useState } from "react";

const Admin= ()=>{

    var count=1;
    var candidateNames=[];

    const { candidateData, voterName, address , voterData, candidateName, handleChangeCandidate, handleChangeVoter, sendTransactionVoter, sendTransactionCandidate } = useContext(TransactionContext);

    const handleSubmitCandidate = (e)=> {
        const{ candidateName } = candidateData;
        console.log(candidateData);
        e.preventDefault();
        candidateData.candidateName="akash";
        console.log(candidateData);

        if(!candidateName) return;
        sendTransactionCandidate();
    }
    const handleSubmitVoter = (e)=> {
        console.log("Voter handle");
        
        const { address, voterName } = voterData;
        console.log(voterData);
        e.preventDefault();

        if(!voterName||!address) return;
        sendTransactionVoter();
    }

    const startVote=()=>{
        console.log(" Vote started! ")
    }

    return(
        <div>
            <div className="flex flex-row justify-center items-center h-full m-10 mb-5 text-2xl bg-honey-brown text-honey-gold font-semibold rounded-xl">
                <div className="flex py-[133px] flex-col flex-wrap justify-content items-center">
                    <input className="appearance-none bg-opacity-5 border-b-honey-gold border-b-2 w-[500px] text-white mr-3 py-1 px-2 text-xl leading-tight m-2 bg-white focus:outline-none rounded-lg" type="text" placeholder="Wallet Address(0x......)" name="address" onChange={handleChangeVoter}/>
                    <input className="appearance-none bg-opacity-5 border-b-honey-gold border-b-2 w-[500px] text-white mr-3 py-1 px-2 text-xl leading-tight m-2 bg-white focus:outline-none rounded-lg" type="text" placeholder="voter Name" name="voterName" onChange={handleChangeVoter}/>
                    <button className="bg-honey-gold text-white p-1 px-2 w-[500px] rounded-lg mb-5 hover:bg-opacity-80 transition duration-100" onClick={handleSubmitVoter}>Add Voter</button>

                    <input className="appearance-none bg-opacity-5 border-b-honey-gold border-b-2 w-[500px] text-white mr-3 py-1 px-2 text-xl leading-tight m-2 bg-white focus:outline-none rounded-lg" type="text" placeholder="Candidate Name" name="candidateName" onChange={handleChangeCandidate}/>
                    <button className="bg-honey-gold text-white p-1 px-2 w-[500px] rounded-lg mb-5 hover:bg-opacity-80 transition duration-100" onClick={handleSubmitCandidate}>Add Candidate</button>
                    
                    <div className="flex flex-row">
                        <button className="bg-honey-gold text-white p-1 px-2 w-[230px] mx-5 rounded-lg mb-5 hover:bg-opacity-80 transition duration-100" onClick={startVote}>Start Vote</button>
                        <button className="bg-honey-gold text-white p-1 px-2 w-[230px] mx-5 rounded-lg mb-5 hover:bg-opacity-80 transition duration-100">End Vote</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Admin;