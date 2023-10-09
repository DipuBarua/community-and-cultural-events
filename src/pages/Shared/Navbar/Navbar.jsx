import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../contextProvider/AuthProvider";
import { FaCircleUser } from 'react-icons/fa6';

const Navbar = () => {
    const { logOut, user } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log('account signOut', result.user);
            })
            .catch(error => console.error(error));
    }

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/contact'}>Contact</NavLink></li>
        {
            user ? <>
                <li><NavLink to={'/applied'}>Applied</NavLink></li>
                <li><NavLink to={'/profile'}>Deshboard</NavLink></li>
            </>
                :
                <li><NavLink to={'/register'}>Register</NavLink></li>
        }
    </>
    return (
        <div className="navbar bg-yellow-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-1">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Community & Cultural Events</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <div className="flex flex-col items-center p-2 gap-1  rounded-xl bg-purple-300">
                            <FaCircleUser className=" text-2xl text-purple-700"></FaCircleUser>
                            <p>{user.email}</p>
                        </div>
                        <button onClick={handleSignOut} className="btn btn-ghost ml-2">Sing Out</button>
                    </>
                        :
                        <Link to={'/login'}><button className=" btn btn-secondary">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;