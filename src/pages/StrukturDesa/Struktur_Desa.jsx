import React from "react";
import "./Struktur_Desa.css";
import StrukturDesa from "../../assets/img/struktur desa.jpeg";

const PotensiDesa = () => {
  return (
    <>
      <main>
        <div className="container_struktur_desa">
          <h1>Struktur Perangkat Desa Kelurahan Pinaras</h1>
          <div className="line_border"></div>
          <img
            src={StrukturDesa}
            alt="struktur_desa"
            className="image_struktur_desa"
          />
        </div>
      </main>
    </>
  );
};

export default PotensiDesa;
