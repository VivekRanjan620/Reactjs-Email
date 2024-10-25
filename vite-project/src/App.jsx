// ContactForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./App.css";

const ContactForm = () => {
    const [from_name, setFromName] = useState('');
    const [to_name, setToName] = useState('');
    const [message, setMessage] = useState('');
    const [contact_number, setContactNumber] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_kgm4ahm', 
            'template_dfcrbj7', 
            e.target,
            'Iink1aZV_FUpMVqz2'
        )
        .then((result) => {
            console.log(result.text);
            alert("Message sent successfully!");
        }, (error) => {
            console.log(error.text);
            alert("An error occurred. Please try again.");
        });

        setFromName('');
        setToName('');
        setMessage('');
        setContactNumber('');
    };

    return (
        <div className="contact-form-container"> {/* New container with background image */}
            <form onSubmit={sendEmail}>
                <h1>Contact Us</h1>
                <div>
                    <label>Your Name:</label>
                    <input 
                        type="text" 
                        name="from_name" 
                        value={from_name} 
                        onChange={(e) => setFromName(e.target.value)} 
                        required 
                    />
                </div>
                {/* <div>
                    <label>Recipient's Name:</label>
                    <input 
                        type="text" 
                        name="to_name" 
                        value={to_name} 
                        onChange={(e) => setToName(e.target.value)} 
                        required 
                    />
                </div> */}
                <div>
                    <label>Contact Number:</label>
                    <input 
                        type="tel" 
                        name="contact_number" 
                        value={contact_number} 
                        onChange={(e) => setContactNumber(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea 
                        name="message" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default ContactForm;
