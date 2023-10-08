
const ServiceCard = ({ service }) => {
    const { name, image, price, short_description } = service;
    return (
        <div className="card card-compact bg-base-100 border shadow-xl">
            <figure><img className=" bg-contain" src={image} alt="event" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{short_description}</p>
                <div className="card-actions flex justify-between items-center  bg-gradient-to-l from-blue-300 rounded-lg">
                    <button className="btn btn-primary">Buy Now</button>
                    <div className=" text-2xl mr-8 ">${price}</div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;