import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MenuUtama.css";
import kantor from "../../assets/img/Kantor_kelurahan.jpeg";
import administrasi from "../../assets/img/pinaras adm.jpg";
import RumahCaptikus from "../../assets/img/Rumah Captikus.jpg";
import GulaMerah from "../../assets/img/Gula-merah.jpg";
import Selada from "../../assets/img/Selada.jpeg";
import Captikus from "../../assets/img/Captikus.jpg";
import AyamBoiler from "../../assets/img/Ayam boiler.jpeg";
import AirTerjun from "../../assets/video/Air terjun.mp4";
import { TbMapSearch } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import throttle from "lodash/throttle";
import { MdSimCardDownload } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";

const MenuUtama = () => {
  const images = [
    kantor,
    RumahCaptikus,
    GulaMerah,
    Selada,
    Captikus,
    AyamBoiler,
  ];

  const [numbers, setNumbers] = useState({
    luasWilayah: 0,
    jumlahPenduduk: 0,
    kepadatanPenduduk: 0,
  });

  const targetNumbers = {
    luasWilayah: 396,
    jumlahPenduduk: 2247,
    kepadatanPenduduk: 567.34,
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isInViewGeografis, setIsInViewGeografis] = useState(false);
  const [isInViewPotensi, setIsInViewPotensi] = useState(false);

  const prevSlide = () => {
    const isMobile = window.innerWidth <= 600;
    setCurrentIndex(
      (prevIndex) =>
        isMobile
          ? prevIndex === 0
            ? images.length - 1
            : prevIndex - 1 // Move by 1 image on mobile
          : prevIndex === 0
          ? images.length - 3
          : prevIndex - 3 // Move by 3 images on desktop
    );
  };

  const nextSlide = () => {
    const isMobile = window.innerWidth <= 600;
    setCurrentIndex(
      (prevIndex) =>
        isMobile
          ? prevIndex >= images.length - 1
            ? 0
            : prevIndex + 1 // Move by 1 image on mobile
          : prevIndex >= images.length - 3
          ? 0
          : prevIndex + 3 // Move by 3 images on desktop
    );
  };

  // Scroll Y
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const throttledScroll = throttle(handleScroll, 5);
    window.addEventListener("scroll", throttledScroll);

    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, []);

  // Set up IntersectionObserver container_sejarah
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true); // Add the class when section is in view
        }
      },
      {
        threshold: 0.4, // Trigger view
      }
    );

    const target = document.querySelector(".container_sejarah");
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  // Set up IntersectionObserver for Geografis Section
  useEffect(() => {
    const isMobile = window.innerWidth <= 600;
    const observerGeografis = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // console.log(entry.isIntersecting);
        if (entry.isIntersecting) {
          setIsInViewGeografis(true);
        }
      },
      {
        threshold: isMobile ? 0.3 : 0.5,
      }
    );
    const targetGeografis = document.querySelector(".section_geografis");
    if (targetGeografis) observerGeografis.observe(targetGeografis);

    return () => {
      if (targetGeografis) observerGeografis.unobserve(targetGeografis);
    };
  }, []);

  // Set up IntersectionObserver for Potensi Section
  useEffect(() => {
    const isMobile = window.innerWidth <= 600;
    const observerPotensi = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInViewPotensi(true);
        }
      },
      {
        threshold: isMobile ? 0.3 : 0.5,
      }
    );

    const targetPotensi = document.querySelector(".section_potensi");
    if (targetPotensi) observerPotensi.observe(targetPotensi);

    return () => {
      if (targetPotensi) observerPotensi.unobserve(targetPotensi);
    };
  }, []);

  // Animation for numbers
  const animateNumber = (target, key) => {
    let current = 0;
    const step = target / 100;
    const animate = () => {
      current += step;
      if (current >= target) {
        current = target;
      }
      setNumbers((prev) => ({
        ...prev,
        [key]: current,
      }));

      if (current < target) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

  // Set up IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true);
          animateNumber(targetNumbers.luasWilayah, "luasWilayah");
          animateNumber(targetNumbers.jumlahPenduduk, "jumlahPenduduk");
          animateNumber(targetNumbers.kepadatanPenduduk, "kepadatanPenduduk");
        }
      },
      {
        threshold: 0.7,
      }
    );

    const target = document.querySelector(".background_demografi");
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [
    targetNumbers.luasWilayah,
    targetNumbers.jumlahPenduduk,
    targetNumbers.kepadatanPenduduk,
  ]);

  return (
    <>
      <main>
        <section className="hero_section">
          <div className="overlay"></div>
          <div className="selamat_datang">
            <h1
              style={{
                transform: `translateY(${scrollY * 0.25}px)`,
              }}
            >
              Selamat Datang{" "}
            </h1>
            <h2
              style={{
                transform: `translateY(${scrollY * 0.2}px)`,
              }}
            >
              Website Profil Kelurahan Pinaras <br />
              Kerja Tuntas, Kesejahteraan, Berkelanjutan
            </h2>
          </div>
        </section>

        <section className={`container_sejarah ${isInView ? "float-in" : ""}`}>
          <h1 className="title_sejarah_desa">SEJARAH DESA PINARAS</h1>
          <div className="line_border"></div>
          <p>
            Asal-usul terjadinya Pinaras adalah berawal dari datangnya beberapa
            orang laki-laki dari Wanua Sarongsong yang bermaksud menangkap hewan
            liar. Usaha penangkapan hewan liar ini membutuhkan waktu yang cukup
            lama sehingga mereka harus mendirikan pondok kecil untuk tempat
            istirahat. Untuk memeriksa apakah jerat-jerat/perangkap telah
            berhasil mendangkap hasil buruan, anggota-anggota kelompok ini
            dibagi ke berbagai jurusan. Kemudian mereka wajib kembali ke tempat
            peristirahatan karena apabila ada hewan buruan yang berhasil
            ditangkap mereka akan memikul secara gotong royong. Demikianlah
            kelompok yang dipimpin Tonaas Sumendap menetapkan tempat ini
            kemudian sebagai sentral/pusat kegiatan kelompok. Selanjutnya, semak
            belukar dipangkas (Bahasa Tombulu PINARASAN), dan kemudian tempat
            ini dikenal dengan nama PINARAS.
          </p>

          {/* Slider */}
          <div className="slider_container">
            <button className="slider_button" onClick={prevSlide}>
              ❮
            </button>
            <div className="slider_wrapper">
              <div
                className="slider"
                style={{
                  transform: `translateX(-${
                    (currentIndex * 100) / (window.innerWidth <= 600 ? 1 : 3)
                  }%)`,
                }}
              >
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt=""
                    className="slider_image"
                  />
                ))}
              </div>
            </div>
            <button className="slider_button" onClick={nextSlide}>
              ❯
            </button>
          </div>
        </section>

        {/* Section Geografis */}
        <section
          className={`section_geografis ${
            isInViewGeografis ? "appear-from-left" : ""
          }`}
        >
          <div className="informasi_geografis">
            <h1>Geografis Desa</h1>
            <p>
              Kelurahan Pinaras terletak di Kecamatan Tomohon Selatan, Kota
              Tomohon, dengan koordinat geografis 1° LU dan 124° BT serta
              ketinggian 600–700 meter di atas permukaan laut. Wilayah ini
              mencakup area seluas 396 hektar yang terdiri dari permukiman,
              persawahan, perkebunan, perkantoran, pekarangan, serta area
              pemakaman. Potensi geografisnya mendukung beragam aktivitas
              sosial, ekonomi, dan pembangunan masyarakat setempat.
            </p>
            <div className="button_geografis">
              <Link to="/geografis_desa" style={{ textDecoration: "none" }}>
                <button className="button_view">
                  Lihat Selengkapnya
                  <CgDetailsMore size={18} className="button_logo" />
                </button>
              </Link>
              <button className="button_unduh">
                Unduh Gambar
                <MdSimCardDownload size={18} className="button_logo" />
              </button>
            </div>
          </div>
          <img src={administrasi} alt="" className="gambar_geografis" />
          <button className="button_unduh_mobile">
            Unduh Gambar
            <MdSimCardDownload size={18} className="button_logo" />
          </button>
        </section>

        {/* Section Potensi */}
        <section
          className={`section_potensi ${
            isInViewPotensi ? "appear-from-right" : ""
          }`}
        >
          <video className="gambar_potensi" controls>
            <source src={AirTerjun} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="informasi_potensi">
            <h1>Potensi Desa</h1>
            <p>
              Air Terjun Tumimperas yang berada di Kelurahan Pinaras, Kecamatan
              Tomohon Selatan ini sudah dikenal sejak tahun 1880. Kata
              "Tumimperas" berasal dari istilah air yang jatuh kebawah dan
              memunculkan suara-suara yang merdu. Air Terjun ini dikunjungi
              banyak wisatawan baik wisatawan lokal maupun wisatawan asing. Air
              Terjun Tumimperas memiliki ketinggian kurang lebih 52 meter.
            </p>
            <div className="button_potensi">
              <Link to="/potensi_desa" style={{ textDecoration: "none" }}>
                <button className="button_view">
                  <CgDetailsMore size={18} />
                  Lihat Selengkapnya
                </button>
              </Link>
              <button className="button_unduh">
                <MdSimCardDownload size={18} />
                Unduh Gambar
              </button>
            </div>
            <div className="potensi_mobile">
              <video className="gambar_potensi" controls>
                <source src={AirTerjun} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button className="button_unduh_mobile">
                Unduh Gambar
                <MdSimCardDownload size={18} />
              </button>
            </div>
          </div>

          {/* mobile */}
        </section>

        <section className="background_demografi">
          <h1>DEMOGRAFI DESA</h1>
          <div className="line_border"></div>
          <p>Sumber: Kelurahan Pinaras, Tahun 2023</p>
          <div className="demografi_container">
            <div className="logo">
              <TbMapSearch size={160} className="icon" />
              <h4>Luas Wilayah</h4>
              <h3>{numbers.luasWilayah.toFixed(0)}</h3>
              <h5>
                ha m<sup>2</sup>
              </h5>
            </div>
            <div className="logo">
              <FaUser size={160} className="icon" />
              <h4>Jumlah Penduduk</h4>
              <h3>{numbers.jumlahPenduduk.toFixed(0)}</h3>
              <h5>jiwa</h5>
            </div>
            <div className="logo">
              <FaUsers size={160} className="icon" />
              <h4>Kepadatan Penduduk</h4>
              <h3>{numbers.kepadatanPenduduk.toFixed(2)}</h3>
              <h5>
                per km<sup>2</sup>
              </h5>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MenuUtama;
