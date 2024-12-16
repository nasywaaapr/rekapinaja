import React from "react";
import "../components/rekapitulasidinamis.css";

const RekapitulasiDinamis = () => {
  return (
    <div>
      {/* Container Utama */}
      <div className="container">
        <h2>Rekapitulasi Dinamis</h2>

        {/* Periode */}
        <label htmlFor="periode-awal">Periode:</label>
        <div className="periode-container">
          <input type="date" id="periode-awal" placeholder="dd/mm/yyyy" />
          <input type="date" id="periode-akhir" placeholder="dd/mm/yyyy" />
        </div>

        {/* Tanggal Awal */}
        <label htmlFor="tanggal-awal">Tanggal Awal:</label>
        <textarea id="tanggal-awal" rows="2"></textarea>

        {/* Tanggal Akhir */}
        <label htmlFor="tanggal-akhir">Tanggal Akhir:</label>
        <textarea id="tanggal-akhir" rows="2"></textarea>

        {/* Laporan Keuangan */}
        <label htmlFor="laporan-keuangan">Laporan Keuangan:</label>
        <textarea id="laporan-keuangan" rows="4"></textarea>
      </div>
    </div>
  );
};

export default RekapitulasiDinamis;
