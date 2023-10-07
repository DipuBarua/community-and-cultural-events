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
                <a className="link link-hover">Artisan and Craft Vendors</a>
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
                    <a href=""><FaFacebookF className=' text-xl'></FaFacebookF></a>
                    <a href=""><FaYoutube className=' text-xl'></FaYoutube></a>
                    <a href=""><FaTwitter className=' text-xl'></FaTwitter></a>

                </div>
            </nav>
        </footer>
    );
};

export default Footer;