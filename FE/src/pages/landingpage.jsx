import React from "react";
import { Link } from 'react-router-dom';
import '../components/landingpage.css';
import pedagangImg from '../images/pedagang.jpg';

const LandingPage = () => {
  return (
    <div className="landing-ya">
      {/* Teks di sebelah kiri */}
      <div>
        <h1 className="landing-h1">Kelola bisnis Anda lebih mudah dan efisien dengan Rekapin aja!</h1>
        <Link to="/masuk">
          <button className="landing-button">Masuk disini!</button>
        </Link>
      </div>
      {/* Gambar */}
      <img className="landing-img" src={pedagangImg} alt="pedagang" />
    </div>
  );
};

export default LandingPage;
