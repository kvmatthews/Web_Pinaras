import React from "react";
import "./PotensiDesa.css";
import PetaPotensi from "../../assets/img/PETA POTENSI WISATA DAN UMKM_rez.jpg";

const PotensiDesa = () => {
  return (
    <>
      <main>
        <div className="container_potensi_desa">
          <h1>Potensi Desa</h1>
          <div className="line_border"></div>
          <img
            src={PetaPotensi}
            alt="peta_potensi_wisata_dan_umkm"
            className="image_peta_potensi"
          />
        </div>
      </main>
    </>
  );
};

export default PotensiDesa;
