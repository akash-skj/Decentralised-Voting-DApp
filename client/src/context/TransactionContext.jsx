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

    console.log({provider,signer,TransactionContract})
}

export const TransactionProvider =({ children })=>{
    
    const [currentAccount, setCurrentAccount] = useState("");

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

    const sendTransaction= ()=>{
        
    }

    useEffect(()=>{
        checkIfWalletIsConnected();
        listenAccount();
    },[]);

    return(
            <TransactionContext.Provider value={{ connectWallet, currentAccount }}>
                {children}
            </TransactionContext.Provider>
        )
}