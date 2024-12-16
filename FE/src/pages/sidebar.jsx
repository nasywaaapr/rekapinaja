import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCalendarDay,
  faMoneyBillWave,
  faHandHoldingUsd,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../components/sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  return (
    <>
      {/* Overlay untuk menutup sidebar jika area di luar sidebar diklik */}
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* Tombol untuk menutup sidebar */}
        <button className="close-button" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faXmark} />
        </button>

        {/* Daftar navigasi */}
        <ul>
          <li>
            <Link
              to="/dashboard"
              onClick={toggleSidebar}
              className={location.pathname === "/dashboard" ? "active" : ""}
            >
              <FontAwesomeIcon icon={faHouse} style={{ marginRight: "10px" }} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/rekapharian"
              onClick={toggleSidebar}
              className={
                location.pathname === "/rekapharian" ? "active" : ""
              }
            >
              <FontAwesomeIcon
                icon={faCalendarDay}
                style={{ marginRight: "10px" }}
              />
              <span>Rekapitulasi Harian</span>
            </Link>
          </li>
          <li>
            <Link
              to="/rekapgaji"
              onClick={toggleSidebar}
              className={
                location.pathname === "/rekapgaji" ? "active" : ""
              }
            >
              <FontAwesomeIcon
                icon={faMoneyBillWave}
                style={{ marginRight: "10px" }}
              />
              <span>Rekapitulasi Gaji</span>
            </Link>
          </li>
          <li>
            <Link
              to="/hutangkupiutangmu"
              onClick={toggleSidebar}
              className={
                location.pathname === "/hutangkupiutangmu" ? "active" : ""
              }
            >
              <FontAwesomeIcon
                icon={faHandHoldingUsd}
                style={{ marginRight: "10px" }}
              />
              <span>Hutangku & Piutangmu</span>
            </Link>
          </li>
          <li>
            <Link
              to="/ruangdiskusi"
              onClick={toggleSidebar}
              className={
                location.pathname === "/ruangdiskusi" ? "active" : ""
              }
            >
              <FontAwesomeIcon
                icon={faHandHoldingUsd}
                style={{ marginRight: "10px" }}
              />
              <span>Ruang Diskusi</span>
            </Link>
          </li>
          <li>
            <Link
              to="/rekapitulasidinamis"
              onClick={toggleSidebar}
              className={
                location.pathname === "/rekapitulasidinamis" ? "active" : ""
              }
            >
              <FontAwesomeIcon
                icon={faHandHoldingUsd}
                style={{ marginRight: "10px" }}
              />
              <span>Rekapitulasi Dinamis</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
