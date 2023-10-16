import React from 'react';
import './Navbar.css'

import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { RxHamburgerMenu } from "react-icons/rx";

import { Link } from 'react-router-dom';





let logo = new URL ("/public/Logo/Logo-movie.png",import.meta.url)
const Navbar = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
      <div className='Navbar-Container sticky-top' >
        <div className='hemburger-menu'>
          <RxHamburgerMenu onClick={handleShow}></RxHamburgerMenu>

        </div>
        <div className='Navbar-Logo'>
          <img src={logo} alt='X' className='d-flex h-100 w-100' />
        </div>

        <div className='Navbar-menu'>
          <ul className='menu-list'>
            <div>
            <Link to='/' style={{textDecoration:'none',color:'black'}}><li id='mene-sec'>Home</li></Link>
            </div>
            <div>
              <li id='mene-sec' >4K HDR</li>
            </div>
            <div>
              <li id='mene-sec'>1080p 10Bit</li>
            </div>
            <div>
              <li id='mene-sec'>Dual Audio Movies</li>
            </div>
            <div>
              <li id='mene-sec'>English Movies</li>
            </div>
            <div>
              <li id='mene-sec'>IMax</li>
            </div>
            
          </ul>
        </div>

        <div className='Mo-menu'>
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
          <div className='Navbar-Logo'>
          <img src={logo} alt='X' className='d-flex h-100 w-80' />
        </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
            <Offcanvas.Body>
              <div className='Sm-Navbar-menu mt-4'>
                <Link to='/'style={{textDecoration:'none',color:'black'}}><div className='menu-cat'>Home</div></Link>
                <div className='menu-cat'>4K HDR</div>
                <div className='menu-cat'>1080p 10Bit</div>
                <div className='menu-cat'>Dual Audio Movies</div>
                <div className='menu-cat'>English Movies</div>
                <div className='menu-cat'>IMax</div>

              </div>


            </Offcanvas.Body>
      </Offcanvas>

        </div>
      </div>

    </>
  );
}

export default Navbar;
