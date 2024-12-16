import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import RekapitulasiHarian from "./pages/rekapharian";
import './App.css';
import CatatRekapitulasiHarian from './pages/catatrekapharian';
import LihatRekapHarian from './pages/lihatrekapharian';
import Navbar from './pages/navbar';
import RekapitulasiGaji from './pages/rekapgaji';
import CatatRekapitulasiGaji from './pages/catatrekapgaji';
import LihatRekapitulasiGaji from './pages/lihatrekapgaji';
import HutangkuPiutangmu from './pages/hutangkupiutangmu';
import Dashboard from './pages/dashboard';
import Masuk from './pages/masuk';
import LandingPage from './pages/landingpage';
import Daftar from './pages/daftar';
import Sidebar from './pages/sidebar';
import RekapitulasiDinamis from './pages/rekapitulasidinamis';
import RuangDiskusi from './pages/ruangdiskusi';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const AppContent = () => {
    const location = useLocation();

    // Cek apakah kita di halaman tanpa Navbar dan Sidebar
    const isLandingPages = [ "/masuk", "/daftar"].includes(location.pathname);

    return (
      <>
        {/* Conditional Rendering */}
        {!isLandingPages && (
          <>
            <Navbar toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          </>
        )}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/masuk" element={<Masuk />} />
          <Route path="/daftar" element={<Daftar />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rekapharian" element={<RekapitulasiHarian />} />
          <Route path="/catat" element={<CatatRekapitulasiHarian />} />
          <Route path="/rekapitulasidinamis"element={<RekapitulasiDinamis />} />
          <Route path="/lihat" element={<LihatRekapHarian />} />
          <Route path="/rekapgaji" element={<RekapitulasiGaji />} />
          <Route path="/catatgaji" element={<CatatRekapitulasiGaji />} />
          <Route path="/lihatgaji" element={<LihatRekapitulasiGaji />} />
          <Route path="/hutangkupiutangmu" element={<HutangkuPiutangmu />} />
          <Route path="/ruangdiskusi" element={<RuangDiskusi />} />
        </Routes>
      </>
    );
  };

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
