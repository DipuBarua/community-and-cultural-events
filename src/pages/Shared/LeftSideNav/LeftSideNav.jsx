
import { useEffect, useState } from "react";
import UpcomingService from "./UpcomingService";

const LeftSideNav = () => {
    const [comingServices, setComingServices] = useState([]);

    useEffect(() => {
        fetch('upcoming.json')
            .then(res => res.json())
            .then(data => setComingServices(data))
    }, [])

    return (
        <div className="">
            <h1 className=" text-4xl font-bold mb-5 text-center">Upcoming Services</h1>
            <div className=" flex flex-col gap-5 mb-2">
                {
                    comingServices.map(comingService => <UpcomingService key={comingService.id} comingService={comingService}></UpcomingService>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;