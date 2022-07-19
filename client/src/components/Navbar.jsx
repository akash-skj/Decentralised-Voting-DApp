//  import { Children } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return(
        <div className="relative border-solid border-r-[1px] w-[320px] border-opacity-80 border-r-honey-gold bg-honey-brown p-5 h-screen text-honey-gold">
            <div className="justify-center text-center">
                <Link to="/" className="text-5xl font-semibold border-solid border-b-[1px] p-5 border-b-honey-gold  ">ethVote</Link>
            </div>
            <div>
                <div className="justify-center text-center items-center">
                    <div className="text-xl p-1 pt-[80px]">
                        <Link to="/ " className="p-1 font-semibold px-[100px] hover:bg-white hover:bg-opacity-5 rounded-lg transition duration-100">Vote</Link>
                    </div>
                    <div className="text-xl p- pt-[80px]">
                        <Link to="/Result" className="p-1 px-[94px] w-full font-semibold hover:bg-white hover:bg-opacity-5 rounded-lg transition duration-100">Result</Link>
                    </div>
                    <div className="text-xl p-1 pt-[80px]">
                        <Link to="/Admin" className="p-1 px-[94px] w-full font-semibold hover:bg-white hover:bg-opacity-5 rounded-lg transition duration-100">Admin</Link>
                    </div>
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