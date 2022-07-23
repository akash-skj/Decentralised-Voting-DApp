const Admin= ()=>{

    const startVote=()=>{
        console.log(" Vote started! ")
    }

    return(
        <div>
            <div className="flex flex-row justify-center items-center h-full m-10 mb-5 text-2xl bg-honey-brown text-honey-gold font-semibold rounded-xl">
                <div className="flex py-[133px] flex-col flex-wrap justify-content items-center">
                    <input className="appearance-none bg-opacity-5 border-b-honey-gold border-b-2 w-[500px] text-gray-700 mr-3 py-1 px-2 text-xl leading-tight m-2 bg-white focus:outline-none rounded-lg" type="text" placeholder="Wallet Address(0x......)" aria-label="Wallet Address"/>
                    <input className="appearance-none bg-opacity-5 border-b-honey-gold border-b-2 w-[500px] text-gray-700 mr-3 py-1 px-2 text-xl leading-tight m-2 bg-white focus:outline-none rounded-lg" type="text" placeholder="Name" aria-label="Name"/>
                    <button className="bg-honey-gold text-white p-1 px-2 w-[500px] rounded-lg mb-5 hover:bg-opacity-80 transition duration-100">Add Voter</button>

                    <input className="appearance-none bg-opacity-5 border-b-honey-gold border-b-2 w-[500px] text-gray-700 mr-3 py-1 px-2 text-xl leading-tight m-2 bg-white focus:outline-none rounded-lg" type="text" placeholder="Candidate Name" aria-label="Candidate Name"/>
                    <button className="bg-honey-gold text-white p-1 px-2 w-[500px] rounded-lg mb-5 hover:bg-opacity-80 transition duration-100">Add Candidate</button>
                    
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