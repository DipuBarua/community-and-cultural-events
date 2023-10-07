import Footer from "../Shared/Footer/Footer";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import Banner from "./Banner";
import ClientSay from "./ClientSay";
import Services from "./Services";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className=" grid md:grid-cols-4">
                <div className=" col-span-1">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className=" col-span-3 border border-black">
                    <p className=" text-3xl font-semibold">This is home page</p>
                    <Services></Services>
                </div>
            </div>
            <ClientSay></ClientSay>
            <Footer></Footer>
        </div>
    );
};

export default Home;