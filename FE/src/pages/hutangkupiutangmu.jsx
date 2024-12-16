import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/hutangkupiutangmu.css";

const HutangkuPiutangmu = () => {
  const navigate = useNavigate(); // Inisialisasi navigate

  const handleCatatClick = () => {
    navigate("/hutang"); // Arahkan ke halaman Hutang
  };

  const handleLihatClick = () => {
    navigate("/piutang"); // Arahkan ke halaman Piutang
  };

  const handleStatistikClick = () => {
    navigate("/lihatrekapan"); // Arahkan ke halaman Statistik Rekapitulasi
  };

  return (
    <div>
      {/* Content */}
      <div className="hutangpiutang-content">
        <p className="hutangpiutang-rekapitulasi-harian">Hutangku & Piutangmu</p>
        <p className="hutangpiutang-pilihopsi">
          Pilih opsi di bawah untuk mulai mencatat rekapitulasi harian Anda
        </p>

        <div className="hutangpiutang-group-7109">
          {/* Card 1 */}
          <div className="hutangpiutang-card" onClick={handleCatatClick}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/4proqs8i9n9-123%3A32?alt=media&token=bffb2253-d485-44b6-8244-36d17971539e"
              alt="Hutang"
            />
            <p>Hutang</p>
          </div>

          {/* Card 2 */}
          <div className="hutangpiutang-card" onClick={handleLihatClick}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/4proqs8i9n9-123%3A27?alt=media&token=7684bad4-cef3-4756-829d-e3d5d5e3b48d"
              alt="Piutang"
            />
            <p>Piutang</p>
          </div>

          {/* Card 3 */}
          <div className="hutangpiutang-card" onClick={handleStatistikClick}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/4proqs8i9n9-123%3A27?alt=media&token=7684bad4-cef3-4756-829d-e3d5d5e3b48d"
              alt="Statistik"
            />
            <p>Lihat Rekapan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HutangkuPiutangmu;
