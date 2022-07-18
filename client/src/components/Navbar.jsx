const Navbar = () => {
    return(
        <div className="relative border-solid border-r-[1px] w-[320px] border-opacity-80 border-r-honey-gold bg-honey-brown p-5 h-screen text-honey-gold">
            <div className="justify-center text-center">
                <h1 className="text-4xl font-semibold border-solid border-b-[1px] p-10 border-b-honey-gold  ">ethVote</h1>
            </div>
            <div className="justify-center items-center">
                <div className="text-xl p-1 pt-[80px]">
                    <button className="p-1 pr-3 w-full font-semibold pl-3 hover:bg-white hover:bg-opacity-5 rounded-lg transition duration-100">Home</button>
                </div>
                <div className="text-lg p-1 pt-[80px]">
                    <button className="p-1 pr-3 w-full font-semibold pl-3 hover:bg-white hover:bg-opacity-5 rounded-lg transition duration-100">Admin</button>
                </div>
            </div>

        </div>
    )
}

export default Navbar;






/*<div className="sidebar fixed inset-y-0 lg-left-0 p-2 w-[300px] overflow-y-auto text-center bg-honey-brown ">
            <div>
                <h1 className='text-4xl pt-10 text-honey-gold'>Voting</h1>
            </div>
        </div>
*/