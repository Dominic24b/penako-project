import React from "react";
import { FaArrowLeft, FaUserCircle, FaHome, FaCog } from "react-icons/fa";
import logo from "./penako remove bg.png";

const ProfileDisplay = ({ profileData, onBackToForm, onDeleteProfile, onNavigate }) => {
  return (
    <div style={styles.container}>
      <div style={styles.logoSection}>
        <FaArrowLeft style={styles.iconBack} onClick={onBackToForm} />
        <img
          src={logo}
          alt="PENAKO"
          style={styles.logo}
        />
        <p style={styles.subtitle}>PENCATATAN AKUNTANSI KOPERASI</p>
      </div>

      <h2 style={styles.pageTitle}>Profil</h2>

      {/* Foto Profil */}
      <div style={styles.profileIconContainer}>
        <FaUserCircle style={styles.profileIcon} />
      </div>

      {/* Box Data Profil */}
      {profileData && profileData.length > 0 ? (
        profileData.map((profile, index) => (
          <div key={index} style={styles.profileBox}>
            <p><strong>NAMA ANGGOTA :</strong> {profile.nama}</p>
            <p><strong>TEMPAT/TANGGAL LAHIR :</strong> {profile.ttl}</p>
            <p><strong>JENIS KELAMIN :</strong> {profile.jenisKelamin}</p>
            <p><strong>ALAMAT :</strong> {profile.alamat}</p>
            <p><strong>NO. HP :</strong> {profile.noHp}</p>
            <p style={styles.arrow}>V</p>
          </div>
        ))
      ) : (
        <div style={styles.profileBox}>
          <p><strong>NAMA ANGGOTA :</strong> .........................................</p>
          <p><strong>TEMPAT/TANGGAL LAHIR :</strong> ...............................</p>
          <p><strong>JENIS KELAMIN :</strong> ............................................</p>
          <p><strong>ALAMAT :</strong> ......................................................</p>
          <p><strong>NO. HP :</strong> .........................................................</p>
          <p style={styles.arrow}>V</p>
        </div>
      )}

      {/* Delete Button outside the card */}
      {profileData && profileData.length > 0 && (
        <div style={styles.deleteButtonContainer}>
          <button
            style={styles.deleteButton}
            onClick={() => {
              if (window.confirm('Apakah Anda yakin ingin menghapus profil ini?')) {
                if (onDeleteProfile) onDeleteProfile();
              }
            }}
          >
            HAPUS PROFIL
          </button>
        </div>
      )}

      {/* Aktivitas Terkini */}
      <div style={styles.activityBox}>
        <p style={styles.activityTitle}>AKTIVITAS TERKINI</p>
        <div style={styles.activityItem}>
          <span>📄</span>
          <span style={styles.activityText}>MEMBAYAR TAGIHAN</span>
        </div>
        <div style={styles.activityItem}>
          <span>💰</span>
          <span style={styles.activityText}>MENGAJUKAN PINJAMAN</span>
        </div>
      </div>

      {/* Navbar bawah di dalam body */}
      <div style={styles.footer}>
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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 10px 80px 10px",
    overflow: "hidden",
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iconBack: {
    position: "absolute",
    left: "20px",
    top: "50%",
    transform: "translateY(-50%)",
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
  profileIconContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "5px",
  },
  profileIcon: {
    fontSize: "70px",
    color: "#2C6B4F",
    backgroundColor: "white",
    borderRadius: "50%",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
  },
  profileBox: {
    backgroundColor: "#E7F0EB",
    borderRadius: "15px",
    border: "2px solid #4F9D79",
    padding: "10px 20px",
    margin: "10px auto",
    textAlign: "left",
    fontSize: "12px",
    color: "#2C2C2C",
    minHeight: "150px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  arrow: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "14px",
    color: "#2C6B4F",
  },
  activityBox: {
    backgroundColor: "white",
    borderRadius: "15px",
    padding: "10px 15px",
    margin: "20px 30px",
    textAlign: "left",
    boxShadow: "0px 3px 6px rgba(0,0,0,0.1)",
  },
  activityTitle: {
    fontWeight: "700",
    fontSize: "12px",
    marginBottom: "10px",
    color: "#184E36",
  },
  activityItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "5px",
  },
  activityText: {
    marginLeft: "10px",
    fontSize: "12px",
    fontWeight: "600",
    color: "#184E36",
  },
  footer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
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
  deleteButtonContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 30px",
  },
  deleteButton: {
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "20px",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
    fontFamily: "Poppins, sans-serif",
  },
};

export default ProfileDisplay;
