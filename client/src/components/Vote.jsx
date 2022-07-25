import {Candidate} from "./" ;
import { TransactionContext } from "../context/TransactionContext";
import React , { useContext } from "react";


const Vote = () => {

    const { candidateName, candidateNames, voterName, voterAddress, handleChangeCandidateName, handleChangeVoterName, handleChangeVoterAddress, sendTransactionCandidate ,sendTransactionVoter, setCandidateNames} = useContext(TransactionContext);



    const candidates = ["Name","Name"];
    return(
        
        <div className="">
            <div className="flex flex-col justify-center items-center p-[80px] m-10 mb-5 text-2xl bg-honey-brown text-honey-gold font-semibold rounded-xl">
                <div className="flex py-[70p] flex-wrap justify-content items-center">
                    {candidateNames.map((candidate)=>(<Candidate candidate={candidate}/>))}
                </div>
            </div>
        </div>
            
    )
}

export default Vote;