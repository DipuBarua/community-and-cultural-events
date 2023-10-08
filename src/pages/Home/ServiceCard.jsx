import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { id, name, image, price, short_description } = service;

    return (
        <div className="card card-compact bg-base-100 border shadow-xl">
            <figure><img className=" bg-contain" src={image} alt="event" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                {
                    (short_description.length > 200) ?
                        <p>{short_description.slice(0, 200)} read more...</p>
                        :
                        <p>{short_description}</p>
                }
                <div className="card-actions flex flex-row-reverse justify-between items-center  bg-gradient-to-l from-blue-300 rounded-lg">
                    <Link to={`/eventDetails/${id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>
                    <div className=" text-2xl mr-8 ">${price}</div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;