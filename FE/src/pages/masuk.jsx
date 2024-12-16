import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/masuk.css';

function Masuk() {
  const [idPengguna, setIdPengguna] = useState('');
  const [kataSandi, setKataSandi] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Id Pengguna:', idPengguna);
    console.log('Kata Sandi:', kataSandi);
  };

  return (
    <div className="masuk-page">
    <div className="masuk-form-container">
      <form onSubmit={handleSubmit} className="masuk-form">
        <label htmlFor="number" className="masuk-label">Username</label>
        <input
          type="text"
          id="text"
          placeholder="Username"
          className="masuk-input"
          value={idPengguna}  
          onChange={(e) => setIdPengguna(e.target.value)}
        />

        <label htmlFor="password" className="masuk-label">Kata Sandi</label>
        <input
          type="password"
          id="password"
          placeholder="Masukkan kata sandi"
          className="masuk-input"
          value={kataSandi}
          onChange={(e) => setKataSandi(e.target.value)}
        />

        <button type="submit" className="masuk-button">Masuk</button>
      </form>
      <p className="masuk-p">
        Belum memiliki akun? <Link to="/daftar">Daftar disini</Link>
      </p>
    </div>
    </div>
  );
}

export default Masuk;
