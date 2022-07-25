import React, {useEffect, useState} from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';


export const TransactionContext= React.createContext();

const { ethereum }= window;

window.ethereum;

const getEthereumContract= ()=>{
    const provider= new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const TransactionContract= new ethers.Contract(contractAddress,contractABI,signer);

    return TransactionContract;
}

export const TransactionProvider =({ children })=>{
    
    const [currentAccount, setCurrentAccount] = useState("");
    const [candidateName, setCandidateName] = useState("");
    const [voterName, setVoterName] = useState("");
    const [voterAddress, setVoterAddress] = useState("");
    const [candidateNames, setCandidateNames] = useState([]);
    const [winnerName, setWinnerName] = useState("");
    const [winnerVoteCount, setWinnerVoteCount] = useState("");

    const handleChangeCandidateName=(e)=>{
        setCandidateName(e.target.value);
        console.log("handle");
    }

    const handleChangeVoterName=(e)=>{
        setVoterName(e.target.value);
        console.log("handle");
    }

    const handleChangeVoterAddress=(e)=>{
        setVoterAddress(e.target.value);
        console.log("handle");
    }
    

    const checkIfWalletIsConnected = async ()=> {
        try {
            if(!ethereum) return alert("Please install Metamask");

            const accounts= await ethereum.request({method: 'eth_accounts'});
            
            if(accounts.length){
                setCurrentAccount(accounts[0]);

                //getAllTransactions();
            }
            else{
                console.log("No accounts found");
            }
        } catch (error) {
            console.log(error);

            throw new Error("No Ethereum object");  
        }
    }

    async function listenAccount() {
        window.ethereum.on("accountsChanged", async function() {
          const accounts= await ethereum.request({method: 'eth_requestAccounts'});
          setCurrentAccount(accounts[0]);
        });
    }
    const connectWallet= async ()=>{
        try {
            if(!ethereum) return alert("Please install Metamask");
            
            const accounts= await ethereum.request({method: 'eth_requestAccounts'});
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);

            throw new Error("No Ethereum object");
        }
    }

    const sendTransactionCandidate= async ()=>{
        try {
            if(!ethereum) return alert("Please install Metamask");
            console.log("Context: "+candidateName);
            //const{ candidateName } = candidateData;
            const contract = getEthereumContract();

            const transact= await contract.addCandidate(candidateName);
            console.log("Result: "+transact);

        } catch (error) {
            console.log(error);

            throw new Error("No Ethereum object");
        }
    }

    const sendTransactionVoter= async ()=>{
        try {

            if(!ethereum) return alert("Please install Metamask");
            console.log("Context: "+voterName,voterAddress);
            //const{ candidateName } = candidateData;
            const contract= getEthereumContract();

            const transact = await contract.addVoter(voterAddress, voterName);
            console.log("Result: "+transact);

        } catch (error) {
            console.log(error);

            throw new Error("No Ethereum object");
        }
    }

    const startVote= async ()=>{
        try {

            if(!ethereum) return alert("Please install Metamask");
            
            const contract= getEthereumContract();

            const transact= await contract.startVote();

        } catch (error) {
            console.log(error);

            throw new Error("No Ethereum object");
        }
    }

    const endVote= async ()=>{
        try {

            if(!ethereum) return alert("Please install Metamask");
            
            const contract= getEthereumContract();

            const transact= await contract.endVote();

        } catch (error) {
            console.log(error);

            throw new Error("No Ethereum object");
        }
    }

    const doVote = async (index) => {

        try {

            if(!ethereum) return alert("Please install Metamask");
            
            const contract= getEthereumContract();

            const transact= await contract.doVote(index);

        } catch (error) {
            console.log(error);

            throw new Error("No Ethereum object");
        }

    }

    const publishResult = async () => {
        console.log("publish");
        await findWinner();
        await getWinner();
    }

    const findWinner= async () => {
        try {
            
            if(!ethereum) return alert("Please install Metamask");
            console.log("Find");
            const contract= getEthereumContract();

            const transact= await contract.findWinner();

        } catch (error) {
            console.log(error);

            throw new Error("No Ethereum object");
        }

    }

    const getWinner= async() => {
        
        const contract= getEthereumContract();
        const transact= await contract.publishResult();

        const winnerName= transact.nameOfWinner;
        const vote = transact.voteCount;
        console.log(winnerName,parseInt(vote,16));
        setWinnerName(winnerName);
        
    }

    useEffect(()=>{
        checkIfWalletIsConnected();
        listenAccount();
    },[]);

    return(
            <TransactionContext.Provider value={{ connectWallet, currentAccount,candidateName, setCandidateName, voterName, setVoterName, voterAddress, setVoterAddress, handleChangeCandidateName, handleChangeVoterName, handleChangeVoterAddress, sendTransactionVoter, sendTransactionCandidate, setCandidateNames, candidateNames, doVote, startVote, endVote, winnerName, winnerVoteCount, publishResult}}>
                {children}
            </TransactionContext.Provider>
        )
}