import React from 'react';
import { Link } from 'react-router-dom';


import './styles.css';
import Nico from './nico.png';
import Instagram from '../../assets/images/social/instagram.png';
import Twitch from '../../assets/images/social/twitch.png';
import Twitter from '../../assets/images/social/twitter.png';
import Youtube from '../../assets/images/social/youtube.png';

const Home = () => (
    <div className="home-content fill-avaliable center center-elements">
        <div className="content">
            <h1>Seja bem-vindo</h1>
            <p>Olá, meu nome é Nicodemos, tenho 18
            anos, sou programador, editor de vídeos e
            apaixonado por tecnologia.</p>
            <div>
                <a target="_blank" href="https://www.twitch.tv/nicodemos234"><img src={Twitch} alt="Twitch icon"/></a>
                <a target="_blank" href="https://youtube.com/nicodemos234"><img src={Youtube} alt="Youtube icon"/></a>
                <a target="_blank" href="https://www.instagram.com/nicodemos234/"><img src={Instagram} alt="Instagram icon"/></a>
                <a target="_blank" href="https://twitter.com/nicodemos234"><img src={Twitter} alt="Twitter icon"/></a>
            </div>
        </div>
        <div>
            <img src={Nico} alt="Nico picture"/>
        </div>
    </div>
);

export default Home;