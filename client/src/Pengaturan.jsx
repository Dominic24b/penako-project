import React from "react";
import { FaArrowLeft, FaBell, FaQuestionCircle, FaUsers } from "react-icons/fa";
import logo from "./penako remove bg.png";

const Pengaturan = ({ onNavigate }) => {
  return (
    <div style={styles.container}>
      <div style={styles.logoSection}>
        <FaArrowLeft style={styles.iconBack} onClick={() => onNavigate('home')} />
        <img
          src={logo}
          alt="PENAKO"
          style={styles.logo}
        />
        <p style={styles.subtitle}>PENCATATAN AKUNTANSI KOPERASI</p>
      </div>

      <h2 style={styles.pageTitle}>Pengaturan</h2>

      {/* Menu Pengaturan */}
      <div style={styles.menuContainer}>
        <div style={styles.menuItem}>
          <div style={styles.iconBox}>
            <FaBell size={32} color="white" />
          </div>
          <span style={styles.menuText}>Notifikasi</span>
        </div>

        <div style={styles.menuItem}>
          <div style={styles.iconBox}>
            <FaQuestionCircle size={32} color="white" />
          </div>
          <span style={styles.menuText}>Bantuan</span>
        </div>

        <div style={styles.menuItem} onClick={() => onNavigate('info')}>
          <div style={styles.iconBox}>
            <FaUsers size={32} color="white" />
          </div>
          <span style={styles.menuText}>Info Aplikasi</span>
        </div>

      </div>

      {/* Navbar bawah fixed */}
      <div style={{ ...styles.footer, position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000 }}>
        <div style={styles.footerItem} onClick={() => onNavigate('home')}>
          <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="Beranda" width="30" />
          <p style={styles.footerText}>BERANDA</p>
        </div>
        <div style={styles.footerItem} onClick={() => onNavigate('settings')}>
          <img src="https://cdn-icons-png.flaticon.com/512/2099/2099058.png" alt="Pengaturan" width="30" />
          <p style={styles.footerText}>PENGATURAN</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: "linear-gradient(to bottom right, #d9ede3, #a8d5b9)",
    minHeight: "100vh",
    width: "100%",
    fontFamily: "Poppins, sans-serif",
    position: "relative",
    textAlign: "center",
    padding: "20px 20px 80px 20px",
    margin: "0 auto",
    overflow: "auto",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  logoSection: {
    background: "transparent",
    textAlign: "center",
    paddingTop: "10px",
    position: "relative",
  },
  iconBack: {
    position: "absolute",
    left: "20px",
    top: "25px",
    fontSize: "24px",
    color: "#2C6B4F",
    cursor: "pointer",
  },
  logo: {
    width: "180px",
    marginTop: "15px",
  },
  subtitle: {
    color: "#2f7b5a",
    fontWeight: "600",
    fontSize: "10px",
    marginTop: "-50px",
    marginBottom: "15px",
  },
  pageTitle: {
    color: "#19583d",
    fontWeight: "700",
    fontSize: "20px",
    marginBottom: "30px",
  },
  menuContainer: {
    marginTop: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "25px",
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  iconBox: {
    backgroundColor: "#4D7C6F",
    borderRadius: "10px",
    width: "60px",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  menuText: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#184E36",
  },
  footer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    backgroundColor: "#D2E3DC",
    display: "flex",
    justifyContent: "space-around",
    padding: "10px 0",
    zIndex: 1000,
  },
  footerItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
  },
  footerText: {
    fontSize: "10px",
    fontWeight: "600",
    marginTop: "2px",
    color: "#184d47",
  },
};

export default Pengaturan;
