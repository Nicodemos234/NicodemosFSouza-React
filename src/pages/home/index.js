import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


import './styles.css';
import Nico from './nico.png';
import Instagram from '../../assets/images/social/instagram.png';
import Twitch from '../../assets/images/social/twitch.png';
import Twitter from '../../assets/images/social/twitter.png';
import Youtube from '../../assets/images/social/youtube.png';

const Home = () => (

    <div className="home-content fill-avaliable center center-elements">
        <Helmet>
            <title>Nicodemos</title>
        </Helmet>
        <div className="content">
            <h1>Welcome</h1>
            <p>Hi, my name is Nicodemos, I have 18 years old,
            I'm programmer, video editor and
            passionate about programming.</p>
            <div>
                <a target="_blank" href="https://www.twitch.tv/nicodemos234"><img src={Twitch} alt="Twitch icon" /></a>
                <a target="_blank" href="https://youtube.com/nicodemos234"><img src={Youtube} alt="Youtube icon" /></a>
                <a target="_blank" href="https://www.instagram.com/nicodemos234/"><img src={Instagram} alt="Instagram icon" /></a>
                <a target="_blank" href="https://twitter.com/nicodemos234"><img src={Twitter} alt="Twitter icon" /></a>
            </div>
        </div>
        <div>
            <img src={Nico} alt="Nico picture" />
        </div>
    </div>
);

export default Home;