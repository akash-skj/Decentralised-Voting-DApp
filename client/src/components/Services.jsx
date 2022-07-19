import {Candidate} from "./" ;

const Services = () => {

    const candidates = ["Noel","Akash",];
    return(
        
        <div>
            <div className="flex flex-col justify-center items-center h-full m-10 mb-5 text-2xl bg-honey-brown text-honey-gold font-semibold rounded-xl">
                <div className="flex py-[70px] flex-wrap justify-content items-center">
                    {candidates.map((candidate)=>(<Candidate candidate={candidate}/>))}

                </div>
            </div>
        </div>
            
    )
}

export default Services;

//voters.map((voter,index)=><Voter voter={voter}/>)