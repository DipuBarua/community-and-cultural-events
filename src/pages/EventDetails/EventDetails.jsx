import { Link, useLoaderData, useParams } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const EventDetails = () => {
    const services = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);

    const service = services.find(service => service.id === intId);
    // console.log(service);

    return (
        <div>
            <Navbar></Navbar>
            <div className="card card-compact bg-base-100 max-h-screen">
                <figure><img className=" bg-contain" src={service.image} alt="event" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{service.name}</h2>
                    <p>{service.short_description}</p>

                </div>
            </div>
            <div className="card-actions flex flex-row-reverse p-5   justify-between items-center  bg-gradient-to-l from-blue-300">
                <div className=" text-2xl mr-8 ">${service.price}</div>
                <Link><button className="btn btn-info btn-outline">Apply</button></Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default EventDetails;