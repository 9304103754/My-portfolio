import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <section id="footer" className="bg-black text-white py-8">
            <div className="container mx-auto flex flex-col items-center">
                <div className="brand">
                    <h1 className="text-2xl font-bold">Ravi Kumar Jha</h1>
                </div>
                <h2 className="text-lg">Full Stack Web Developer</h2>
                <div className="social-icon flex justify-center">
                    <div className="social-item mx-2">
                        <a href="https://www.facebook.com/profile.php?id=100087637500108">
                            <FaFacebook size={40} color="#ffffff" />
                        </a>
                    </div>
                    <div className="social-item mx-2">
                        <a href="https://www.instagram.com/ravi930410/">
                            <FaInstagram size={40} color="#ffffff" />
                        </a>
                    </div>
                    <div className="social-item mx-2">
                        <a href="https://www.linkedin.com/in/ravi-kumar-jha-41989a24a/">
                            <FaLinkedin size={40} color="#ffffff" />
                        </a>
                    </div>
                    <div className="social-item mx-2">
                        <a href="https://github.com/9304103754">
                            <FaGithub size={40} color="#ffffff" />
                        </a>
                    </div>
                </div>
                <p className="mt-4">Copyright © 2024 Ravi. All rights reserved.</p>
            </div>
        </section>
    );
}

export default Footer;
