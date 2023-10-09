
const ClientSay = () => {
    return (
        <div className=" text-center mt-16">
            <p className=" text-5xl font-bold p-16 bg-blue-100">What People Say</p>
            <div className="carousel w-1/2">
                <div id="item1" className="carousel-item w-full flex flex-col">
                    <img src="https://i.ibb.co/my5ckSb/pexels-rdne-stock-project-8052238.jpg" />
                    <p className=" mt-6">"I had an incredible time at the art gallery exhibition last night. The diverse range of artworks on display was awe-inspiring, and the curator did a fantastic job explaining the significance behind each piece. It was a truly enriching cultural experience."  - James</p>
                </div>
                <div id="item2" className="carousel-item w-full flex flex-col">
                    <img src="https://i.ibb.co/hys03RZ/pexels-andrea-piacquadio-3824771.jpg" />
                    <p className=" mt-6">"Attending the classical music concert was a dream come true. The orchestra performance was absolutely breathtaking. The musicians displayed such talent and precision, and the atmosphere was filled with magic. I will cherish this cultural evening forever."  - Alexander</p>
                </div>
                <div id="item3" className="carousel-item w-full flex flex-col">
                    <img src="https://i.ibb.co/HPgzGgk/pexels-daniel-xavier-1239291.jpg" />
                    <p className=" mt-6">"Last night theater play was an absolute gem. The actors delivered their lines with such passion and conviction, drawing the audience into the story. The set design and costumes were top-notch, making it an unforgettable cultural event. Bravo to the entire cast and crew!"  - Jenifar</p>
                </div>
                <div id="item4" className="carousel-item w-full flex flex-col">
                    <img src="https://i.ibb.co/56jj1WL/pexels-kaysha-1093926.jpg" />
                    <p className=" mt-6">"I had the pleasure of witnessing a mesmerizing folk dance performance over the weekend. The colorful costumes, energetic choreography, and the rich storytelling through dance left me spellbound. It was a beautiful celebration of our cultural heritage."  - Benjamin</p>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default ClientSay;