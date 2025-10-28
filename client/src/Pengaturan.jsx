import React from "react";
import { FaArrowLeft, FaBell, FaQuestionCircle, FaUsers } from "react-icons/fa";

const Pengaturan = () => {
  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <FaArrowLeft style={styles.iconBack} />
        <div style={styles.logoContainer}>
          <img
            src="/logo-penako.png" // ganti dengan path logo kamu
            alt="PENAKO"
            style={styles.logo}
          />
          <p style={styles.subtitle}>PENCATATAN AKUNTANSI KOPERASI</p>
        </div>
      </div>

      {/* Judul */}
      <h2 style={styles.title}>Pengaturan</h2>

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

        <div style={styles.menuItem}>
          <div style={styles.iconBox}>
            <FaUsers size={32} color="white" />
          </div>
          <span style={styles.menuText}>Info Aplikasi</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#D2E3DC",
    minHeight: "100vh",
    width: "100%",
    fontFamily: "Poppins, sans-serif",
    position: "relative",
    textAlign: "center",
  },
  header: {
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
  logoContainer: {
    marginTop: "20px",
  },
  logo: {
    width: "140px",
    height: "auto",
  },
  subtitle: {
    fontSize: "12px",
    fontWeight: "600",
    color: "#2C6B4F",
    marginTop: "2px",
  },
  title: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#184E36",
    marginTop: "10px",
  },
  menuContainer: {
    marginTop: "25px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
};

export default Pengaturan;
