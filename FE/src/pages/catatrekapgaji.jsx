import React, { useState } from "react";
import "../components/catatrekapgaji.css";

const CatatRekapitulasiGaji = () => {
  // Simulasi data periode dari database pengguna
  const periodeData = ["Januari 2024", "Februari 2024", "Maret 2024", "April 2024"];

  const [jumlahPegawai, setJumlahPegawai] = useState(0);

  const handleJumlahPegawaiChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    setJumlahPegawai(value);
  };

  return (
    <div className="form-container">
      <h1>Catat Rekapitulasi Gaji</h1>

      {/* Pilihan Periode */}
      <div className="form-group">
        <label htmlFor="periode">Pilih Periode</label>
        <select id="periode">
          {periodeData.map((periode, index) => (
            <option key={index} value={periode}>
              {periode}
            </option>
          ))}
        </select>
      </div>

      {/* Form Jumlah Pegawai */}
      <div className="form-group">
        <label htmlFor="jumlah-pegawai">Masukkan Jumlah Pegawai</label>
        <input
          type="number"
          id="jumlah-pegawai"
          placeholder="Jumlah Pegawai"
          onChange={handleJumlahPegawaiChange}
        />
      </div>

      {/* Input Gaji Pegawai */}
      <div id="gaji-container" className="input-container">
        {[...Array(jumlahPegawai)].map((_, index) => (
          <div key={index} className="form-group">
            <label>Masukkan nominal gaji pegawai {index + 1}</label>
            <input
              type="number"
              placeholder={`Nominal gaji pegawai ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <button className="submit-btn">Kirim</button>
    </div>
  );
};

export default CatatRekapitulasiGaji;
