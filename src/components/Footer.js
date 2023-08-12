import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa';

const Footer = (props) => {
  return (
    <>
    <footer className="bg-dark text-white pb-1 mb-0">
      <div className="container text-center">
        <div className="row my-3 mx-4 d-flex justify-content-center" >
          <div className="col-md-3 mx-4 my-5 justify-content-center d-flex">
            <p className="mb-0 mt-5">&copy; 2023 <strong>CodeCampus</strong> Website. All rights reserved.</p>
          </div>
          <div className="col-md-3 mx-4 my-4 justify-content-center d-flex">
                <ul className="list-inline mb-0 float-md-end text-start">
                  <li className="list-group mb-2 mt-2" style={{ fontSize: '20px'}}><strong>Explore</strong></li>
                  <li className="list-group"><Link id="cs" className="link" to="/" onClick={()=>{window.scrollTo(0, 0);}}><b>Home</b></Link></li>
                  <li className="list-group"><Link id="cs" className="link" to="/about"><b>About</b></Link></li>
                  {/* <li className="list-group"><Link id="cs" className="link" to="*"><b>Service</b></Link></li> */}
                  <li className="list-group"><Link id="cs" className="link" to="/contact"><b>Contact</b></Link></li>
                </ul>
          </div>

          <div className="col-md-3 mx-4 my-4 justify-content-center d-flex">
          <ul className="list-inline mb-0 float-md-end text-start">
              <li className="list-group mb-2 mt-2" style={{ fontSize: '20px' }}><strong>Connect With Me</strong></li>
              <li className="list-group"><Link id="cs" className="link" to="https://www.linkedin.com/in/dev-aryan/" target="_blank"><FaLinkedin style={{ fontSize: '25px' }} /> <b>LinkedIn</b></Link></li>
              <li className="list-group my-2"><Link id="cs" className="link" to="https://wa.me/919148232444" target="_blank"><FaWhatsapp style={{ fontSize: '25px' }} /> <b>Whatsapp</b> </Link></li>
              <li className="list-group"><Link id="cs" className="link" to="https://t.me/+919148232444" target="_blank"><FaTelegram style={{ fontSize: '25px' }} /> <b>Telegram</b></Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-5">
          <p>Made by <strong><b style={{color: 'yellow'}}>Aryan Raj</b></strong></p>
        </div>
      </div>
    </footer >
    </>
  );
};

export default Footer;
