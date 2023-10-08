import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../contextProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const { signUp } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState(null);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        console.log(form);

        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password);

        //reset error message
        setRegisterError("");

        //password criteria to register.
        if (password.length < 6) {
            setRegisterError('Error: Password should be at least 6 characters or more longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Error: Password should have at least 1 Upper Case character.');
            return;
        }
        else if (!/[@$!%*#?&]/.test(password)) {
            setRegisterError('Error: Password should have at least 1 Special character( @ $ ! % * # ? & )');
            return;
        }

        //sign up with email and password
        signUp(email, password)
            .then(result => {
                console.log(result.user);
                notify();
            })
            .catch(error => {
                console.log(error);
                setRegisterError(error.message);
            })
    }
    const notify = () => {
        toast("Registration Successful.")
    }
    return (
        <div className="bg-base-200">
            <Navbar></Navbar>
            <ToastContainer></ToastContainer>
            <div className="max-w-2xl mx-auto min-h-screen">
                <div className="hero-content flex-col ">
                    <p className=" text-5xl font-bold">Please Register</p>
                    <div className="card flex-shrink-0 w-full bg-blue-300 shadow-2xl ">
                        <form onSubmit={handleRegister} className="card-body">
                        <p className=" text-center text-red-600">{registerError}</p>
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
                                <p>If you have an account, please <Link className=" btn-link" to={'/login'}>Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;