import React from 'react';
import '../FooterComponents/Footer.css';

const Footer = () => {
    return (
        <div className="footer">
        <footer>
            <div className="footer-icon">
            <i className="far fa-comment"></i>  
            </div>
            <div className="footer-icon"><i className="fas fa-retweet"></i> 6
            </div>
            <div className="footer-icon">
            <i className="far fa-heart"></i> 
             4
            </div>
            <div className="footer-icon">
            <i className="far fa-envelope"></i>
            </div>
        </footer>
        </div>
    );
};

export default Footer;