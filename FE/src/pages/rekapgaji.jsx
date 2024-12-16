import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/rekapgaji.css";

const RekapitulasiGaji = () => {
  const navigate = useNavigate(); // Inisialisasi navigate

  const handleCatatClick = () => {
    navigate("/catatgaji"); // Arahkan ke halaman Catat Rekapitulasi
  };

  const handleLihatClick = () => {
    navigate("/lihatgaji"); // Arahkan ke halaman Lihat Rekapitulasi
  };

  return (
    <div>
      {/* Content */}
      <div className="rekapgaji-content">
        <p className="rekapgaji-rekapitulasi-harian">Rekapitulasi Gaji</p>
        <p className="rekapgaji-pilihopsi">
          Pilih opsi di bawah untuk mulai mencatat rekapitulasi gaji pegawai Anda
        </p>

        <div className="rekapgaji-group-7109">
          {/* Card 1 */}
          <div className="rekapgaji-card" onClick={handleCatatClick}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/4proqs8i9n9-123%3A32?alt=media&token=bffb2253-d485-44b6-8244-36d17971539e"
              alt="Catat"
            />
            <p>Catat Rekapitulasi Gaji</p>
          </div>

          {/* Card 2 */}
          <div className="rekapgaji-card" onClick={handleLihatClick}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/4proqs8i9n9-123%3A27?alt=media&token=7684bad4-cef3-4756-829d-e3d5d5e3b48d"
              alt="Lihat"
            />
            <p>Lihat Rekapitulasi Gaji</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RekapitulasiGaji;
