import React, { useState, useEffect } from 'react';
import '../components/lihatrekapharian.css';

const LihatRekapHarian = () => {
  const [months, setMonths] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [rekapData, setRekapData] = useState([]); // State untuk data tabel dari server

  // Ambil daftar bulan dari server
  useEffect(() => {
    fetch('/api/available-months')
      .then((response) => response.json())
      .then((data) => {
        setMonths(data.months);
        if (data.months.length > 0) {
          setSelectedMonth(data.months[0]);
        }
      })
      .catch((error) => console.error('Error fetching months:', error));
  }, []);

  // Ambil data rekapitulasi dari server
  useEffect(() => {
    fetch('/api/rekapitulasi')
      .then((response) => response.json())
      .then((data) => {
        setRekapData(data.rekap);
      })
      .catch((error) => console.error('Error fetching rekapitulasi:', error));
  }, []);

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  return (
    <div>

      {/* Content */}
      <div className="content">
        <div className="table-container">
          <h1>Lihat Rekapitulasi Harian</h1>

          {/* Dropdown Bulan */}
          <div className="form-group">
            <label htmlFor="month">Pilih Bulan</label>
            <select
              id="month"
              value={selectedMonth}
              onChange={handleMonthChange}
            >
              {months.length > 0 ? (
                months.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))
              ) : (
                <option value="">Memuat...</option>
              )}
            </select>
          </div>

          {/* Tabel Data */}
          <table>
            <thead>
              <tr>
                <th>Tanggal</th>
                <th>Pemasukan</th>
                <th>Pengeluaran</th>
              </tr>
            </thead>
            <tbody>
              {rekapData.length > 0 ? (
                rekapData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.tanggal}</td>
                    <td>{item.pemasukan}</td>
                    <td>{item.pengeluaran}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">Memuat data...</td>
                </tr>
              )}
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th>Total Pemasukan</th>
                <th>Total Pengeluaran</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {rekapData.reduce((sum, item) => sum + item.pemasukan, 0)}
                </td>
                <td>
                  {rekapData.reduce((sum, item) => sum + item.pengeluaran, 0)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LihatRekapHarian;
