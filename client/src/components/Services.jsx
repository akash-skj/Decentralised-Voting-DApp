import {Candidate} from "./" ;
const Services = () => {
  
    const connectWallet= ()=>{
        
    }
    const candidates = ["Noel","Akash",];
    return(
        
        <div className="w-full">
            <div>
                <div className="relative m-10 text-2xl bg-honey-brown text-white h-[72px] font-semibold  rounded-xl  p-5 pr-8">
                    <h1 className="absolute text-honey-gold">Wallet: 0xfC38CA0814417C0Cf0c4D4595462A3E784594eC8</h1>
                    <div className="flex justify-end">
                        <button type="button" onClick={connectWallet} className="flex flex-row items-center bg-honey-gold p-1 pr-4 pl-4 rounded-xl  hover:bg-opacity-80 transition duration-100">Connect</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center h-3/4 m-10 mb-5 text-2xl bg-honey-brown text-honey-gold font-semibold rounded-xl">
                <div className="flex flex-wrap justify-content items-center">
                    {candidates.map((candidate)=>(<Candidate candidate={candidate}/>))}

                </div>
            </div>
            
        </div>
    )
}

export default Services;

//voters.map((voter,index)=><Voter voter={voter}/>)