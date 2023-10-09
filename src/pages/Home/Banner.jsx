
const Banner = () => {
    return (
        <div className="carousel w-full max-h-screen mb-16">

            <div id="slide1" className="carousel-item relative w-full">
                <img src='https://i.ibb.co/rFB5np9/Cultural-Celebrations.jpg' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle bg-transparent">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-transparent">❯</a>
                </div>
                <p className=" text-5xl font-bold absolute top-1/2 right-1/4  text-white border border-red-500 p-5">Community and Cultural Events</p>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/XS5PYFw/Cultural-Festivals.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle bg-transparent">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-transparent">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/0BtLKHm/Cultural-Dance.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle bg-transparent">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-transparent">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/NZJTTYc/Cultural-Festivals2.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle bg-transparent">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-transparent">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;