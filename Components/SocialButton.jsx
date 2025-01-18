import { red } from '@mui/material/colors';
import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdOutlineMessage } from "react-icons/md";

function SocialButton() {
  const [showIcons, setShowIcons] = useState(false);

  const handleClick = () => {
    setShowIcons(!showIcons);
  };

  return (

    <div className="social-button">
            <button className='MediaMediaA ' onClick={handleClick}><MdOutlineMessage onClick={handleClick} /></button>
      {showIcons && (
        <div className="icons MediaMedia">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='mediaIcon'>
            <FaFacebook size={32} color={red} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='mediaIcon'>
            <FaTwitter size={32} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='mediaIcon'>
            <FaLinkedin size={32} />
          </a>
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className='mediaIcon'>
            <FaWhatsapp size={32} />
          </a>
        </div>
      )}
    </div>
   
  );
}

export default SocialButton;
