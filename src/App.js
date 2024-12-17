import { Routes, Route } from "react-router-dom";
import "./components/components.css";
import MenuUtama from "./pages/MenuUtama/Menu_Utama";
import Footer from "./components/Footer";
import Navigasi from "./components/Navigasi";
import PotensiDesa from "./pages/PotensiDesa/Potensi_Desa";
import StrukturDesa from "./pages/StrukturDesa/Struktur_Desa";
import TentangKami from "./pages/TentangKami/Tentang_Kami";
import GeografisDesa from "./pages/GeografisDesa/Geografis_Desa";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navigasi />
            <MenuUtama />
            <Footer />
          </>
        }
      />
      <Route
        path="/potensi_desa"
        element={
          <>
            <Navigasi />
            <PotensiDesa />
            <Footer />
          </>
        }
      />
      <Route
        path="/struktur_desa"
        element={
          <>
            <Navigasi />
            <StrukturDesa />
            <Footer />
          </>
        }
      />
      <Route
        path="/tentang_kami"
        element={
          <>
            <Navigasi />
            <TentangKami />
            <Footer />
          </>
        }
      />
      <Route
        path="/geografis_desa"
        element={
          <>
            <Navigasi />
            <GeografisDesa />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
