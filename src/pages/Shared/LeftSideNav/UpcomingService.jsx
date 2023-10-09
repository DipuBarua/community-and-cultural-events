import PropTypes from 'prop-types';

const UpcomingService = ({ comingService }) => {
    const { name, image, short_description } = comingService;

    return (
        <div className="card bg-base-100 shadow-xl image-full mx-4">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title underline">{name}</h2>
                <p>{short_description.slice(0, 200)}</p>
            </div>
        </div>
    );
};

UpcomingService.propTypes = {
    comingService: PropTypes.object,
}
export default UpcomingService;