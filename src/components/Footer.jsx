import React from "react";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer>
        <h1>
          Jl. Pinaras, Kelurahan Pinaras, Kecamatan Tomohon Selatan, Kota
          Tomohon, Provinsi Sulawesi Utara, 95434
        </h1>
        <div className="contact">
          <MdEmail size={40} className="logo_footer" />
          <IoLogoWhatsapp size={40} className="logo_footer" />
          <FaFacebook size={40} className="logo_footer" />
          <AiFillInstagram size={40} className="logo_footer" />
        </div>
        <div className="line_border"></div>
        <p>Copyrights © 2024 Kelurahan Pinaras | All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Footer;
