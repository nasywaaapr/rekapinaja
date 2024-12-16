import React, { useState, useEffect } from "react";
import "../components/lihatrekapgaji.css";

const LihatRekapitulasiGaji = ({ data }) => {
  const [year, setYear] = useState("");
  const [salaryData, setSalaryData] = useState([]);

  // Fetch data dari props (bisa berasal dari API atau state global)
  useEffect(() => {
    if (data) {
      setSalaryData(data);
    }
  }, [data]);

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const totalGaji = salaryData.reduce((acc, item) => acc + item.total, 0);

  return (
    <div className="content">
      <div className="table-container">
        <h1>Lihat Rekapitulasi Gaji</h1>

        <div className="form-group">
          <label htmlFor="year">Pilih Tahun</label>
          <select id="year" value={year} onChange={handleYearChange}>
            <option value="">-- Pilih Tahun --</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </div>

        <table>
          <thead>
            <tr>
              <th>Bulan</th>
              <th>Jumlah Pegawai</th>
              <th>Total Gaji</th>
            </tr>
          </thead>
          <tbody>
            {salaryData.map((data, index) => (
              <tr key={index}>
                <td>{data.month}</td>
                <td>{data.employees}</td>
                <td>{data.total}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th>Total Keseluruhan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{totalGaji}</td>
            </tr>
          </tbody>
        </table>

        <a href="#" className="back-btn">
          Kembali
        </a>
      </div>
    </div>
  );
};

export default LihatRekapitulasiGaji;
