import React from 'react';
import "./Footer.css"
import logo from "../../../../images/logo/saree_2.png"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const phoneFont=<FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
    const inboxFont=<FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
    const mapFont=<FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
    const facebookFont=<FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>
    const twitterFont=<FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon>
    const instaFont=<FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon>
    const linkedinFont=<FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
    return (
        <div className=" bg-img">
           <div className="text-white p-4">
           <div className="p-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 sm:grid-cols-1 text-left gap-4">
                <div className="">
                    <h3 className="text-white flex gap-2 text-4xl mb-2">
                        <img src={logo} alt="" />SareeAloy</h3>
                    <p className="text-gray-300 text-sm">
                        SareeAloy is equipped with everythig required for all  kinds of saree warehouse inventory website.
                      
                    </p>
<p className="text-4xl my-3 text-yellow-500">Follow Us</p>
                    <p className="flex gap-3">
                        <a href="https://www.facebook.com/rashedsabbir16" className="text-4xl text-blue-300 hover:text-yellow-500"><span>{facebookFont}</span></a>
                       <a href="https://twitter.com/rashedsabbir16" className="text-4xl text-blue-300 hover:text-yellow-500"> <span>{twitterFont}</span></a>
                        <a href="https://www.instagram.com/rashed_sabbir" className=" text-4xl text-blue-300 hover:text-yellow-500"><span>{instaFont}</span></a>
                        <a href="https://www.linkedin.com/in/rashedul-hassan-sabbir" className=" text-4xl text-blue-300 hover:text-yellow-500"><span>{linkedinFont}</span></a>
                    </p>
                    </div>
                <div className="">
                   <h5  className="text-indigo-400  text-2xl mb-4"> Quick Link</h5>
                   <ul className="space-y-2">
                   <li><Link className="hover:border-red-500 border-b-2" to="/">
                           Home
                       </Link></li>
                       <li><Link className="hover:border-red-500 border-b-2" to="/offers">
                           Inventories
                       </Link></li>
                       <li><Link className="hover:border-red-500 border-b-2"  to="/gallery">
                           Gallery
                       </Link></li>
                       <li> <Link className="hover:border-red-500 border-b-2" to="/blog">
                           Blogs
                       </Link></li>
                       <li> <Link className="hover:border-red-500 border-b-2" to="/contact-us">
                           Contact Us
                       </Link></li>
                   </ul>
                    </div>
                <div className="">
                   <h5 className="text-indigo-400 text-2xl mb-4">Saree Brands</h5>
                   <ul className="space-y-2">
                       <li>Tangail</li>
                       <li>Indian</li>
                       <li>Monipuri</li>
                       <li>Moslini</li>
                       <li>Gujrathi</li>
                   </ul>
                  
                    </div>
                <div className="">
                    <h5 className="text-indigo-400 text-2xl mb-4">Information</h5>
                    <ul className="space-y-2">
                    <li><span className="mr-2 text-yellow-500">{phoneFont}</span> <small className="text-sm"> +7 845 544 2255</small></li>
                    <li><span className="mr-2 text-yellow-500">{inboxFont}</span> <small className="text-sm">contact@sareealoy.com</small></li>
                    <li><span className="mr-2 text-yellow-500 ">{mapFont}</span> <small className="text-sm">1212 Rechard Lane,Rome,Italy</small></li>
                    </ul>
                    </div>


            </div>
            <div className=" border-top text-center pt-3">
<small>&copy; Copyright 2022 | All Right Reserved</small>
            </div>
           </div>
        </div>
    );
};

export default Footer;