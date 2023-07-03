import { FaMapMarkerAlt, FaSearch, FaUserAlt, FaStar, } from "react-icons/fa";
import { BsFillHddStackFill } from "react-icons/bs";
import CountUp from 'react-countup';
const Banner = () => {
    return (
        <div>
            <div className="flex justify-center lg:mt-[145px]">
                <div className="lg:w-[745px] text-center">
                    <h2 className="text-6xl font-bold">Your Personal <br /> Assistant</h2>
                    <p className="my-4">One-stop solution for your services. Order any service, anytime.</p>
                    <div className="searchSection mt-10">
                        <form className="flex items-center">
                            <div><p className="flex items-center locationBtn me-3"><FaMapMarkerAlt />  Dhaka</p></div>
                            <div className="flex justify-center items-center relative">
                                <input className="searchBar" type="text" placeholder="Find your service here e.g. AC, Car, Facial....." />
                                <button className="searchBtn absolute right-0"><FaSearch className="text-xl" /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="lg:mt-[100px]">
                <div className="flex justify-between bg-[#3B6F82] py-10 px-28 border border-2 rounded-full">
                    <div className="text-center flex items-center">
                        <p className="p-4 bg-white rounded-full mr-8"><FaUserAlt className="" />
                        </p>
                        <div>
                            <p className="text-2xl font-bold">
                                <CountUp delay={1} start={0} end={90} />+
                            </p>
                            <p>Clients</p>
                        </div>
                    </div>
                    <div className="border border-l-2 h-20"></div>
                    <div className="text-center flex items-center">
                        <p className="p-4 bg-white rounded-full mr-8"><FaUserAlt className="" />
                        </p>
                        <div>
                            <p className="text-2xl font-bold">
                                <CountUp delay={1} start={0} end={40} />+
                            </p>
                            <p>Reviews</p>
                        </div>
                    </div>
                    <div className="border border-l-2 h-20"></div>
                    <div className="text-center flex items-center">
                        <p className="p-4 bg-white rounded-full mr-8"><FaUserAlt className="" />
                        </p>
                        <div>
                            <p className="text-2xl font-bold">
                                <CountUp delay={1} start={0} end={50} />+
                            </p>
                            <p>Projects</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;