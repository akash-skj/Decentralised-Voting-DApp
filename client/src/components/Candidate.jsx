const Candidate= ({candidate}) => {



    return(
            <div className="p-5 m-5 mx-2 justify-around flex flex-col rounded-lg bg-honey-gold">
                <div className="m-5">
                    <h1 className="text-black text-3xl justify-start">Name : {candidate}</h1>
                </div>
                <button className="text-honey-gold text-center bg-honey-brown rounded-lg p-2" >Vote</button>
                
            </div>
    )
}

export default Candidate;