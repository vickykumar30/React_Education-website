import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Unlock the future of education and workforce development to expand access to training, reach students wherever they are with our integrated learning platform.</p>
                <p>Edusity LMS has made course creation a breeze for our organization.
                    Its comprehensive suite of tools, from multimedia integration to assessment options,
                    has allowed us to craft courses that are not only informative but also interactive.</p>
                <p>It is a real-time, online learning platform that allows the classes to be
                    conducted online using patent-pending technology which removes the notion.</p>

            </div>
        </div>
    )
}

export default About
