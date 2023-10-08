import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
    }

    return (
        <div className="bg-base-200">
            <Navbar></Navbar>
            <div className=" max-w-2xl mx-auto min-h-screen">
                <div className="hero-content flex-col ">
                    <p className=" text-5xl font-bold">Please Login</p>
                    <div className="card flex-shrink-0 w-full bg-base-100 shadow-2xl ">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Please set a password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div>
                                <p>Have not account? please <Link className=" btn-link" to={'/register'}>Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;