import { TransactionContext } from "../context/TransactionContext";
import React , { useContext } from "react";

const Connect= ()=>{
    
    const{ connectWallet, currentAccount } = useContext(TransactionContext);

    return(
        <div className="w-full">
            <div>
                <div className="relative m-10 text-2xl bg-honey-brown text-white h-[72px] font-semibold  rounded-xl  p-5 pr-8">
                    
                    {!currentAccount&&(<h1 className="absolute text-honey-gold">Wallet: 0x00000...</h1>)}
                    {currentAccount&&(<h1 className="absolute text-honey-gold">Wallet: {currentAccount}</h1>)}

                    <div className="flex justify-end">
                        
                        {!currentAccount&&(<button type="button" onClick={connectWallet} className="flex flex-row items-center bg-honey-gold p-1 pr-4 pl-4 rounded-xl cursor-pointer hover:bg-opacity-80 transition duration-100">Connect</button>)}

                        {currentAccount&&(<button type="button" onClick={connectWallet} className="flex flex-row items-center bg-honey-gold p-1 pr-4 pl-4 rounded-xl cursor-pointer hover:bg-opacity-80 transition duration-100">Connected</button>)}

                    </div>
                </div>
            </div>
        </div>
            
    )
}
export default Connect;