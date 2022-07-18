const Candidate= () => {



    return(
        <div className="">
            <div className="p-5 m-5 mx-2 justify-around flex flex-row rounded-lg bg-honey-gold">
                <div className="t">
                    <h1 className="text-black text-3xl justify-start">Akash</h1>
                </div>
                <div className="">
                    <button className="text-honey-gold text-center bg-honey-brown rounded-lg">Vote</button>
                </div>
                
            </div>
            <div className="p-5 m-5 mx-2 justify-around flex flex-row rounded-lg bg-honey-gold">
                <div className="t">
                    <h1 className="text-black text-3xl justify-start">Akash Suresh</h1>
                </div>
                <div className="">
                    <button className="text-honey-gold text-center bg-honey-brown rounded-lg">Vote</button>
                </div>
            </div>
            <div className="justify-center p-5 m-5 mx-2 flex flex-row rounded-lg bg-honey-gold">
                <h1 className="text-black text-3xl pr-[300px] py-1 ">Name</h1>
                <button className="text-honey-gold text-center ml-10 px-3 py-1  bg-honey-brown rounded-lg">Vote</button>
            </div>
        </div>
    )
}

export default Candidate;