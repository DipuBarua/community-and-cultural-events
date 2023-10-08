import { FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-300 text-base-content">
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Festivals</a>
                <a className="link link-hover">Parades</a>
                <a className="link link-hover">Fundraisers</a>
                <a className="link link-hover">Charity Galas</a>
                <a className="link link-hover">Carnivals and Fairs</a>
                <a className="link link-hover">Cultural Celebrations</a>
            </nav>
            <nav>
                <header className="footer-title">Upcoming Services</header>
                <a className="link link-hover">Artisan and Craft Vendors</a>
                <a className="link link-hover">Cultural Dance Show</a>
                <a className="link link-hover">Catering and Cuisine</a>
                <a className="link link-hover">Venue Decoration and Theming</a>
                <a className="link link-hover">Global Gather Services</a>
                <a className="link link-hover">Multilingual Hosting and Interpretation</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">About</a>
                <a className="link link-hover">Contact</a>

            </nav>
            <nav>
                <header className="footer-title">Social</header>
                <div className="grid grid-flow-col gap-4">
                    <a href=""><FaFacebookF className=' text-2xl text-blue-700 '></FaFacebookF></a>
                    <a href=""><FaYoutube className=' text-2xl text-red-600 '></FaYoutube></a>
                    <a href=""><FaTwitter className=' text-2xl text-blue-500 '></FaTwitter></a>

                </div>
            </nav>
        </footer>
    );
};

export default Footer;