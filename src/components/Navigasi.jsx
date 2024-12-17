import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoKota from "./../assets/img/Logo_Kota_Tomohon.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navigasi = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav>
        <div className="container_navigasi">
          <Link to="/" className="link">
            <img src={logoKota} alt="Logo_Kota_Tomohon" className="logo_kota" />
            <div className="title_navigasi">
              <h1>Desa Pinaras</h1>
              <h2>Kota Tomohon</h2>
            </div>
          </Link>
        </div>
        <ul className="list_desktop">
          <li>
            <Link to="/struktur_desa" className="link">
              Struktur Desa
            </Link>
          </li>
          <li>
            <Link to="/geografis_desa" className="link">
              Geografis Desa
            </Link>
          </li>
          <li>
            <Link to="/potensi_desa" className="link">
              Potensi Desa
            </Link>
          </li>
          <li>
            <Link to="/tentang_kami" className="link">
              Tentang Kami
            </Link>
          </li>
        </ul>
        <div className="mobile_navigation">
          <GiHamburgerMenu
            size={30}
            className="icon_navigation"
            onClick={toggleMenu}
          />
          <ul className={`list_mobile ${isMenuOpen ? "open" : ""}`}>
            <li>Sejarah Desa</li>
            <li>Geografis Desa</li>
            <li>Potensi Desa</li>
            <li>Tentang Kami</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigasi;
