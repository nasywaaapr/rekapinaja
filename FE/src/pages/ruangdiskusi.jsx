import React from "react";
import "../components/ruangdiskusi.css";

const RuangDiskusi = () => {
  return (
      <div className="container">
        <h2>Ruang Diskusi</h2>
        <div className="komentar-box">
          <p><strong>Komentar Diskusi</strong></p>
          <div className="diskusi">
            <p><strong>Diskusi / Komentar</strong></p>

            <div className="komentar-item">
              <img
                src="images.jpg"
                alt="user1"
                className="profile-pic"
              />
              <div className="komentar-content">
                <strong>salwa</strong>
                <p>coba liat di website ini keren banget</p>
                <span className="waktu">12 Dec-2024 17:09</span>
                <a href="#" className="balas">Balas</a>
              </div>
            </div>

            <div className="komentar-item">
              <img
                src="poto 2.jpg"
                alt="user2"
                className="profile-pic"
              />
              <div className="komentar-content">
                <strong>nasywa</strong>
                <p>@salwa benar, ini sangat menolong para pengusaha jualan</p>
                <span className="waktu">12 Dec-2024 17:30</span>
                <a href="#" className="balas">Balas</a>
              </div>
            </div>

            <div className="komentar-item">
              <img
                src="poto 3.jpg"
                alt="user3"
                className="profile-pic"
              />
              <div className="komentar-content">
                <strong>nisak</strong>
                <p>@nasywa betul sekali, seperti aku sangat tertolong dengan web nya</p>
                <span className="waktu">12 Dec-2024 17:59</span>
                <a href="#" className="balas">Balas</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default RuangDiskusi;
