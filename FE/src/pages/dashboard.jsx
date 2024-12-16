import React from 'react';
import '../components/dashboard.css';

const Dashboard = () => {
  return (
    <div>
      {/* Dashboard utama */}
      <div className="welcome">
        <div className="welcome-text">Selamat datang di</div>
        <div className="welcome-title">Rekapin aja!</div>
      </div>
      <div className="p1">
        Platform berbasis web yang dirancang untuk mempermudah pengelolaan bisnis UMKM dengan fitur lengkap dan sederhana
      </div>

      {/* Fitur Unggulan Section */}
      <div className="fitur">
        <h3 className="fitur-unggulan">Fitur Unggulan</h3>
        <div className="fitur-item">Pencatatan transaksi yang mudah</div>
        <div className="fitur-item">Pengelolaan gaji karyawan</div>
        <div className="fitur-item">Analisis data bisnis</div>
        <div className="fitur-item">Forum diskusi komunitas</div>
        <div className="fitur-item">Pengaturan hutang piutang</div>
        <div className="fitur-item">Laporan keuangan otomatis</div>
      </div>

      {/* Judul Utama Bagian Dashboard */}
      <div className="judul">Kelola bisnis anda dengan lebih efisien</div>
      <div className="l1">
        <h3 className="title">User Friendly</h3>
        <p className="pt">Tampilan sederhana dan mudah digunakan</p>
      </div>
      <div className="l2">
        <h3 className="title">Terorganisir</h3>
        <p className="pt">Semua data tersimpan rapi dan terstruktur</p>
      </div>
      <div className="l3">
        <h3 className="title">Akses Dimana Saja</h3>
        <p className="pt">Anda bisa mengaksesnya kapanpun dan dimanapun</p>
      </div>
    </div>
  );
};

export default Dashboard;
