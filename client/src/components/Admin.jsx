import { TransactionContext } from "../context/TransactionContext";
import React , { useContext } from "react";

const Admin= ()=>{

    const { candidateName, candidateNames, voterName, voterAddress, handleChangeCandidateName, handleChangeVoterName, handleChangeVoterAddress, sendTransactionCandidate ,sendTransactionVoter, setCandidateNames, startVote, endVote} = useContext(TransactionContext);

    const handleSubmitCandidate = (e)=> {

        setCandidateNames(current => [...current,candidateName]);

        console.log(candidateName);
        console.log(candidateNames);
        console.log("2nd name"+candidateNames[1]);
        
        e.preventDefault();

        if(!candidateName) return;
        sendTransactionCandidate();
    }
    
    const handleSubmitVoter = (e)=> {
        console.log("Voter handle");
        
        console.log(voterName,voterAddress);
        e.preventDefault();

        if(!voterName||!voterAddress) return;
        sendTransactionVoter();
    }

    const handleSubmitStartVote = () =>{
        startVote();
    }

    const handleSubmitEndVote = () =>{
        endVote();
    }

    return(
        <div>
            <div className="flex flex-row justify-center items-center h-full m-10 mb-5 text-2xl bg-honey-brown text-honey-gold font-semibold rounded-xl">
                <div className="flex py-[133px] flex-col flex-wrap justify-content items-center">
                    
                    <input className="appearance-none bg-opacity-5 border-b-honey-gold border-b-2 w-[500px] text-white mr-3 py-1 px-2 text-xl leading-tight m-2 bg-white focus:outline-none rounded-lg" type="text" placeholder="Wallet Address(0x......)" name="address" onChange={handleChangeVoterAddress}/>
                    
                    <input className="appearance-none bg-opacity-5 border-b-honey-gold border-b-2 w-[500px] text-white mr-3 py-1 px-2 text-xl leading-tight m-2 bg-white focus:outline-none rounded-lg" type="text" placeholder="voter Name" name="voterName" onChange={handleChangeVoterName}/>
                    <button className="bg-honey-gold text-white p-1 px-2 w-[500px] rounded-lg mb-5 hover:bg-opacity-80 transition duration-100" onClick={handleSubmitVoter}>Add Voter</button>

                    <input className="appearance-none bg-opacity-5 border-b-honey-gold border-b-2 w-[500px] text-white mr-3 py-1 px-2 text-xl leading-tight m-2 bg-white focus:outline-none rounded-lg" type="text" placeholder="Candidate Name" name="candidateName" onChange={handleChangeCandidateName}/>
                    
                    <button className="bg-honey-gold text-white p-1 px-2 w-[500px] rounded-lg mb-5 hover:bg-opacity-80 transition duration-100" onClick={handleSubmitCandidate}>Add Candidate</button>
                    
                    <div className="flex flex-row">
                        <button className="bg-honey-gold text-white p-1 px-2 w-[230px] mx-5 rounded-lg mb-5 hover:bg-opacity-80 transition duration-100" onClick={handleSubmitStartVote}>Start Vote</button>
                        <button className="bg-honey-gold text-white p-1 px-2 w-[230px] mx-5 rounded-lg mb-5 hover:bg-opacity-80 transition duration-100" onClick={handleSubmitEndVote}>End Vote</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Admin;