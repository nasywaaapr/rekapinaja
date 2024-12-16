import React from 'react';
import { Link } from 'react-router-dom';
import '../components/daftar.css';

const Daftar = () => {
  return (
    <div className="daftar-page">
    <div className="daftar-form-container">
      <form className="daftar-form">
        <label htmlFor="name" className="daftar-label">Username</label>
        <input type="text" id="name" placeholder="Masukkan username" className="daftar-input" />

        <label htmlFor="role" className="daftar-label">Role</label>
        <select id="role" className="daftar-select">
          <option value="" disabled selected>Pilih role yang akan digunakan</option>
          <option value="admin">Admin</option>
          <option value="pedagang">User</option>
        </select>

        <label htmlFor="email" className="daftar-label">Email</label>
        <input type="email" id="email" placeholder="Masukkan email" className="daftar-input" />

        <label htmlFor="password" className="daftar-label">Kata Sandi</label>
        <input type="password" id="password" placeholder="Masukkan kata sandi" className="daftar-input" />

        <button type="submit" className="daftar-button">Daftar</button>
      </form>
      <p className="daftar-p">
        Sudah memiliki akun? <Link to="/masuk" className="daftar-link">Masuk disini</Link>
      </p>
    </div>
    </div>
  );
};

export default Daftar;
