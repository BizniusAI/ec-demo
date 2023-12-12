import React from 'react';
import { AiFillInstagram, AiOutlineTwitter,AiFillFacebook} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 BizDelicious All rights reserved</p>
      <p>For customer support, please call +1(205)350-3807</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillFacebook/>
      </p>
    </div>
  )
}

export default Footer