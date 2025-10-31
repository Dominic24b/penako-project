import './Home.css'
import logo from './penako remove bg.png'
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

function Home({ onNavigate }) {
  return (
    <div className="home-page w-full">
      <div className="home-container">
        <div className="logo-section">
          <img src={logo} alt="PENAKO Logo" />
          <p className="subtitle">PENCATATAN AKUNTANSI KOPERASI</p>
        </div>

        <h2 className="page-title">Beranda</h2>

        <div className="menu-item" onClick={() => onNavigate('profil')}>
          <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="Profil Icon" />
          <span className="menu-text">Profil</span>
        </div>

        <div className="menu-item" onClick={() => onNavigate('keuangan')}>
          <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="Keuangan Icon" />
          <span className="menu-text">Keuangan</span>
        </div>

        <div className="menu-item" onClick={() => onNavigate('inventaris')}>
          <img src="https://cdn-icons-png.flaticon.com/512/679/679720.png" alt="Inventaris Icon" />
          <span className="menu-text">Inventaris</span>
        </div>

        <div className="menu-item" onClick={() => onNavigate('settings')}>
          <img src="https://cdn-icons-png.flaticon.com/512/2099/2099058.png" alt="Pengaturan Icon" />
          <span className="menu-text">Pengaturan</span>
        </div>

      </div>

      {/* Navbar bawah fixed */}
      <div className="footer" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000 }}>
        <div className="footer-item" onClick={() => onNavigate('home')}>
          <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="Beranda" width="30" />
          <p className="footer-text">BERANDA</p>
        </div>
        <div className="footer-item" onClick={() => onNavigate('settings')}>
          <img src="https://cdn-icons-png.flaticon.com/512/2099/2099058.png" alt="Pengaturan" width="30" />
          <p className="footer-text">PENGATURAN</p>
        </div>
      </div>
    </div>
  )
}

export default Home
