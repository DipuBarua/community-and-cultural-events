import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        console.log(form);

        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password);
    }
    return (
        <div className="bg-base-200">
            <Navbar></Navbar>
            <div className="max-w-2xl mx-auto min-h-screen">
                <div className="hero-content flex-col ">
                    <p className=" text-5xl font-bold">Please Register</p>
                    <div className="card flex-shrink-0 w-full bg-blue-300 shadow-2xl ">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                            </div>
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
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div>
                                <p>Have an account? <Link className=" btn-link" to={'/login'}>Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;