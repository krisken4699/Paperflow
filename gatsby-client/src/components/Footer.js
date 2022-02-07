import Logo from '../images/Logo.png';
import Facebook from '../images/Facebook.png';
import Line from '../images/Line.png';
import LinkedIn from '../images/LinkedIn.png';
import Twitter from '../images/Twitter.png';
import React from 'react';
import { Link } from 'gatsby';
import isActive from './isActive';

const Footer = ({ className, style }) => {
    return (
        <div style={style} className={`w-screen min-h-40 border-t ${className ? className : ""}`}>
            <div className="grid px-4 grid-cols-1 md:grid-cols-6 md:grid-rows-1 grid-flow-row pt-20 min-h-96">
                <div className="md:col-span-3 grid grid-cols-3">
                    <div className="col-start-2">
                        <img src={Logo} className="h-12 w-12 mr-4 object-contain align-middle inline-block" alt="" />
                        <h2 className="text-4xl font-Metric-SemiBold inline align-middle">PPSSHOP</h2>
                    </div>
                </div>
                <div className="text-xs text-center md:mt-0 mt-10">
                    <Link getProps={isActive} to="/" className="mb-8 font-Metric-Regular block w-full text-center md:text-left text-gray-350">Home</Link>
                    <Link getProps={isActive} to="/chat" className="mb-5 font-Metric-Regular block w-full text-center md:text-left text-gray-300">Chat</Link>
                    <Link getProps={isActive} to="#" className="mb-5 font-Metric-Regular block w-full text-center md:text-left text-gray-300">asefaes</Link>
                    <Link getProps={isActive} to="#" className="mb-5 font-Metric-Regular block w-full text-center md:text-left text-gray-300">aerrgaegrae</Link>
                    <Link getProps={isActive} to="#" className="mb-5 font-Metric-Regular block w-full text-center md:text-left text-gray-300">fawf</Link>
                </div>
                <div className="text-xs">
                    <Link getProps={isActive} to="#" className="mb-8 font-Metric-Regular block w-full text-center md:text-left text-gray-350">asdf</Link>
                    <Link getProps={isActive} to="#" className="mb-5 font-Metric-Regular block w-full text-center md:text-left text-gray-300">caegbaeijfawe</Link>
                    <Link getProps={isActive} to="#" className="mb-5 font-Metric-Regular block w-full text-center md:text-left text-gray-300">aeijgaeiugbaeiur</Link>
                </div>
                <div className=" text-xs">
                    <Link getProps={isActive} to="/admin" className="mb-8 font-Metric-Regular block w-full text-center md:text-left text-gray-350">Admin</Link>
                    <Link getProps={isActive} to="/admin#images" className="mb-5 font-Metric-Regular block w-full text-center md:text-left text-gray-300">Images</Link>
                    <Link getProps={isActive} to="#" className="mb-5 font-Metric-Regular block w-full text-center md:text-left text-gray-300">aekgjnaewi</Link>
                    <Link getProps={isActive} to="#" className="mb-5 font-Metric-Regular block w-full text-center md:text-left text-gray-300">aejfnaioegnoiaew</Link>
                    <Link getProps={isActive} to="#" className="mb-5 font-Metric-Regular block w-full text-center md:text-left text-gray-300">awfawofneiow</Link>
                </div>
            </div>
            <div className="w-screen h-20 bg-08246C text-A2ADCD grid md:grid-cols-3">
                <p className="hidden md:inline w-full text-center my-auto">Panyaprateep School. 2021</p>
                <div className="px-5 md:flex hidden my-auto text-sm justify-evenly text-A2ADCD">
                    <Link to="#"><p>Cookies</p></Link>
                    <Link to="#"><p>Privacy</p></Link>
                    <Link to="#"><p>Terms</p></Link>
                </div>
                <div className="flex my-auto justify-evenly px-20">
                    <Link to="#" className="h-8 w-8">
                        <img className="h-8 w-8 object-contain filter grayscale" src={Facebook} alt="" />
                    </Link>
                    <Link to="#" className="h-8 w-8">
                        <img className="h-8 w-8 object-contain filter grayscale" src={Twitter} alt="" />
                    </Link>
                    <Link to="#" className="h-8 w-8">
                        <img className="h-8 w-8 object-contain filter grayscale" src={Line} alt="" />
                    </Link>
                    <Link to="#" className="h-8 w-8">
                        <img className="h-8 w-8 object-contain filter grayscale" src={LinkedIn} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;
