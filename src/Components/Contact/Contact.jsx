import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p>Get in touch With Us. Explore. Blogs · Plans · Features · Courses · White Label ·
                    Solution by Industry. Company. About Us · Careers · News & Press. Support.Feel
                    free to reach out through contacts form or find our contacts information below.</p>
                    <ul>
                        <li><img src={mail_icon} alt="" />hello@edusity.com</li>
                        <li><img src={phone_icon} alt="" />+91-882-569-756</li>
                        <li><img src={location_icon} alt="" />175 5th Ave Premium Area, New <br></br> York, NY 10010, United States</li>
                    </ul>
            </div>
            <div className="contact-col"></div>

        </div>
    )
}

export default Contact
