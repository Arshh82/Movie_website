import React from 'react';
import './Footer.css'

import { BsInstagram,BsGithub,BsWhatsapp } from 'react-icons/bs';
import {PiLinkedinLogoLight } from 'react-icons/pi';

const Footer = () => {
  return (
    <>
    <div className='footer-container'>
    <div className='text-section'>
        <h4 style={{color:'black', fontSize:'1.8rem'}} className='mt-3'> made By <span className='footer-text'>Arshil</span></h4>
        <div>
        <a href="https://www.instagram.com/arshilbaig/" target="#">
        <BsInstagram style={{color:'black', fontSize:'1.8rem', margin:'0.5rem'}}/>
        </a>
        <a href="https://github.com/Arshh82/" target="#">
        <BsGithub style={{color:'black', fontSize:'1.8rem', margin:'0.5rem'}}/>
        </a>
        <a href="https://api.whatsapp.com/send?phone=918319492920" target="#">
        <BsWhatsapp style={{color:'black', fontSize:'1.8rem', margin:'0.5rem'}}/>
        </a>
        <a href="https://www.linkedin.com/in/arshil-baig-a387b0188/" target="#">
        <PiLinkedinLogoLight style={{color:'black', fontSize:'2.2rem', margin:'0.5rem'}}/>
        </a>
        </div>
        <h5 style={{color:'black', fontSize:'1rem'}} className='mt-3'>2023 <span style={{color:'#EC7710'}}>UHD</span> Movies</h5>
        </div>

    </div>
      
    </>
  );
}

export default Footer;
