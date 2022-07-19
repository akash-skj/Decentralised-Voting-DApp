const Candidate= ({candidate}) => {



    return(
            <div className="p-5 m-5 mx-2 w-[300px] h-[400px] justify-around flex flex-col text-center rounded-lg bg-honey-gold">
                <div className="m-5">
                    <h1 className="text-black text-3xl justify-start">{candidate}</h1>
                </div>
                <button className="text-honey-gold text-center bg-honey-brown rounded-lg p-2" >Vote</button>
                
            </div>
    )
}

export default Candidate;