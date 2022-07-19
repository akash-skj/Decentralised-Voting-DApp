const Result= () => {

    return(
        <div>
            <div className="flex flex-col justify-center items-center h-full m-10 mb-5 text-2xl bg-honey-brown text-honey-gold font-semibold rounded-xl">
                <div className="flex py-[80px] flex-wrap justify-content items-center">
                    
                <div className="p-5 m-5 mx-2 w-[300px] h-[400px] justify-around flex flex-col text-center rounded-lg bg-honey-gold">
                <div className="m-5">
                    <h1 className="text-black text-3xl justify-start">Winner: </h1>
                </div>
                <button className="text-honey-gold text-center bg-honey-brown rounded-lg p-2" >Result</button>    
            </div>

                </div>
            </div>
        </div>
    )
}

export default Result;