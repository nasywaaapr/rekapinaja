import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/rekapharian.css";

const RekapitulasiHarian = () => {
  const navigate = useNavigate(); // Inisialisasi navigate

  const handleCatatClick = () => {
    navigate("/catat"); // Arahkan ke halaman Catat Rekapitulasi
  };

  const handleLihatClick = () => {
    navigate("/lihat"); // Arahkan ke halaman Lihat Rekapitulasi
  };

  return (
    <div>
      {/* Content */}
      <div className="rekapharian-content">
        <p className="rekapharian-rekapitulasi-harian">Rekapitulasi Harian</p>
        <p className="rekapharian-pilihopsi">
          Pilih opsi di bawah untuk mulai mencatat rekapitulasi harian Anda
        </p>

        <div className="rekapharian-group-7109">
          {/* Card 1 */}
          <div className="rekapharian-card" onClick={handleCatatClick}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/4proqs8i9n9-123%3A32?alt=media&token=bffb2253-d485-44b6-8244-36d17971539e"
              alt="Catat"
            />
            <p>Catat Rekapitulasi Harian</p>
          </div>

          {/* Card 2 */}
          <div className="rekapharian-card" onClick={handleLihatClick}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/4proqs8i9n9-123%3A27?alt=media&token=7684bad4-cef3-4756-829d-e3d5d5e3b48d"
              alt="Lihat"
            />
            <p>Lihat Rekapitulasi Harian</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RekapitulasiHarian;
