

const UpcomingService = ({ comingService }) => {
    const { name, image, price, short_description } = comingService;

    return (
        <div className="card bg-base-100 shadow-xl image-full mr-5">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{short_description}</p>
            </div>
        </div>
    );
};

export default UpcomingService;