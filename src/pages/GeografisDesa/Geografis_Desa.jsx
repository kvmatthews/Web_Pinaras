import React from "react";
import "./GeografisDesa.css";
import PetaPesebaran from "../../assets/img/PETA PERSEBARAN SARANA fix.jpg";

const GeografisDesa = () => {
  return (
    <>
      <main>
        <div className="container_geografis">
          <h1>Geografis Desa</h1>
          <div className="line_border"></div>
          <img
            src={PetaPesebaran}
            alt="peta_pesebaran_sarana"
            className="image_peta_pesebaran"
          />
        </div>

        {/* Lokasi Maps */}
      </main>
    </>
  );
};

export default GeografisDesa;
