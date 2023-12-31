import React from "react";



const Contact = () => {
    return (
        <div className="contact-page">
            <h1>Contact Information</h1>
            <div className="contact-details">
                <div className="contact-item">
                    <span className="contact-label">Mobile:</span>
                    <span className="contact-value">+91 6382174880</span>
                </div>
                <div className="contact-item">
                    <span className="contact-label">GitHub:</span>
                    <span className="contact-value">
                    <a href="https://github.com/your-username">https://github.com/Siddhartha-Devan</a>
                    </span>
                </div>
                
                
                <div className="contact-item">
                    <span className="contact-label">LinkedIn:</span>
                    <span className="contact-value">
                        <a href="www.linkedin.com/in/siddharthadevan">linkedin.com/in/siddharthadevan</a>
                    </span>
                </div>

                <div className="contact-item">
                    <span className="contact-label">Email:</span>
                    <span className="contact-value">siddu2003oct@gmail.com</span>
                </div>
                <div className="contact-item">
                    <span className="contact-label">Address:</span>
                    <span className="contact-value">2, Natesan street, Konadalmpatty, Salem</span>
                </div>
            </div>
        </div>
        );
    };


export default Contact;