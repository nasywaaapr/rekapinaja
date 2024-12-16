import React from "react";
import "../components/catatrekapharian.css";

const CatatRekapitulasiHarian = () => {
  return (
    <div>

      {/* Content */}
      <div className="catat-content">
        <div className="form-container">
          <h1 className="form-title">Catat Rekapitulasi Harian</h1>

          <div className="form-group">
            <label htmlFor="date">Tanggal</label>
            <input type="date" id="date" />
          </div>

          <div className="form-group">
            <label htmlFor="income">Pemasukan</label>
            <input type="text" id="income" placeholder="" />
            <label className="inline">
              <input type="checkbox" id="no-income" /> Tidak Ada Pemasukan
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="expense">Pengeluaran</label>
            <input type="text" id="expense" placeholder="" />
            <label className="inline">
              <input type="checkbox" id="no-expense" /> Tidak Ada Pengeluaran
            </label>
          </div>

          <button type="submit" className="submit-btn">Kirim</button>
        </div>
      </div>
    </div>
  );
};

export default CatatRekapitulasiHarian;
