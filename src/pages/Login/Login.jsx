import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../contextProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [errorMessage, setErrorMessage] = useState(null);

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        //reset error message
        setErrorMessage("");

        //sign in with email and password
        signIn(email, password)
            .then(result => {
                console.log('login success', result.user);
                navigate((location?.state) ? location.state : notify());
            })
            .catch(error => {
                console.log(error.message);
                setErrorMessage(error.message);
            })
    }

    //signIn With Google
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                navigate((location?.state) ? location.state : notify());
                console.log("google login successful", result.user);
            })
            .catch(error => {
                console.log('error:', error.message);
            })
    }

    //toast
    const notify = () => {
        toast("LogIn Successful");
    }

    return (
        <div className="bg-base-200">
            <Navbar></Navbar>
            <ToastContainer></ToastContainer>
            <div className=" max-w-2xl mx-auto min-h-screen">
                <div className="hero-content flex-col ">
                    <p className=" text-5xl font-bold">Please Login</p>
                    <div className="card flex-shrink-0 w-full bg-base-100 shadow-2xl ">
                        <form onSubmit={handleLogin} className="card-body">
                            <p className=" text-red-600 font-medium text-center">{errorMessage}</p>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div>
                                <p className=" border border-black p-2 ml-1">Do not have an account? please<Link className=" btn-link ml-1" to={'/register'}>Sign up</Link></p>

                                <p className=" text-center">OR</p>

                                <p className=" border border-black p-2 ml-1">Continue with
                                    <button className=" btn-link ml-1" onClick={handleGoogleSignIn}>Google</button>
                                </p>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;