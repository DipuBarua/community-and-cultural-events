import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className=" text-center my-10 space-y-5">
            <h1>Opps!</h1>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Error:404!  Not found page</h3>
                    <p>go back</p>
                </div>
            }
            <Link to={'/'}><button className="btn btn-outline">Home</button></Link>
        </div>
    );
};

export default ErrorPage;