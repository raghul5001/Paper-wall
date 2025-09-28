import React from 'react'
import './Footer.scss'; 
import { MdPhone, MdEmail } from 'react-icons/md';
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import img01 from "./img/image 54.png"
import img02 from "./img/image 55.png"

import fotterlogo from "./img/footer-wallpaper.png"
function Footer() {
    return (
    
            <div className="footer-container">
            
                <div className="footer-section1">
                    <div className="logo">
                    <img src={fotterlogo} alt='Wallanticslogo'/>
                    </div>
                <div className="description-1">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                        Sed do eiusmod tempor incididunt ut labore dolore<br/>
                        magna aliqua.
                    </p>
                    </div>
                    <div className="social-media">
                        <AiFillTwitterCircle /> 
                         <MdOutlineFacebook />
                         <FaInstagramSquare /> 
                         <FaLinkedin />
                    </div>
                    <div className="section">
                        <h4>Subscribe for our Newsletter</h4>
                    </div>
                        <div className="search-bar">
                            <input type="email" placeholder="Enter your email address" />
                            <button className="newsletter-button">Subscribe</button>
                        </div>
                </div>
                 <div className="footer-section2 ">
                     <div className="link-column">
                          <h4>Useful Links</h4>
                          </div>

                        <div className="link-column1">
                            <p>About Us</p>
                            <p>Blog</p>
                            <p>FAQ</p>
                            <p>Contact Us</p>
                            <p>Careers</p>
                        </div>
                        <div className="link-column2">
                            <p>Dealership</p>
                            <p>Installer Price Calculator</p>
                            <p>Refund Policies</p>
                            <p>E-Catalogue</p>
                            <p>Terms & Conditions</p>
                            <p>Privacy Policies</p>
                        </div>
                    </div>
                    <div className="footer-section3">
                    <div className="contact-item1">
                         <h4>Customer Support</h4>
                    </div>  
                    <div className='location'>   
                      <MdLocationOn />
                        <p>115/A, Pycroft Garden Road, Nungambakkam,<br/>
                         Chennai - 600 034, Tamil Nadu.</p>
                    </div>
                    <div className="contact-item2">
                        <MdPhone />
                        <p>+91 56846 28126</p>
                    </div>
                    <div className="contact-item3">
                        <MdEmail />
                        <p>support@gmail.com</p>
                    </div>
                    <div className="download">
                        <h4>Download Our App</h4>
                        </div>
                        <div className="download-app-section1">
                        <img src={img01} alt="playstore"/>
                            </div>
                        <div className="download-app-section2">
                        <img src={img02} alt="appstore"/>
                        </div>
                </div>
                 <div className='line-3'><hr></hr>
                 </div>
            <div className="footer-bottom1">
                <p>© 2022 company name. All Rights Reserved.</p>
                </div>
                 <div className="footer-bottom2">
                <p>Designed by doodleblue</p>
                </div>

            </div>
    );
}

export default Footer;

                
                
