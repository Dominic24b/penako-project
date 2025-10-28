import React from "react";
import { FaArrowLeft, FaUserCircle, FaHome, FaCog } from "react-icons/fa";

const ProfileDisplay = ({ profileData, onBackToForm, onDeleteProfile, onNavigateToHome, onNavigateToSettings }) => {
  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <FaArrowLeft style={styles.iconBack} onClick={onBackToForm} />
        <div style={styles.logoContainer}>
          <img
            src="/logo-penako.png" // Ganti dengan path logo kamu
            alt="PENAKO"
            style={styles.logo}
          />
          <p style={styles.subtitle}>PENCATATAN AKUNTANSI KOPERASI</p>
        </div>
      </div>

      {/* Judul */}
      <h2 style={styles.title}>Profil</h2>

      {/* Foto Profil */}
      <div style={styles.profileIconContainer}>
        <FaUserCircle style={styles.profileIcon} />
      </div>

      {/* Box Data Profil */}
      <div style={styles.profileBox}>
        {profileData && profileData.length > 0 ? (
          <>
            <p><strong>NAMA ANGGOTA :</strong> {profileData[profileData.length - 1].nama}</p>
            <p><strong>TEMPAT/TANGGAL LAHIR :</strong> {profileData[profileData.length - 1].ttl}</p>
            <p><strong>JENIS KELAMIN :</strong> {profileData[profileData.length - 1].jenisKelamin}</p>
            <p><strong>ALAMAT :</strong> {profileData[profileData.length - 1].alamat}</p>
            <p><strong>NO. HP :</strong> {profileData[profileData.length - 1].noHp}</p>
            <p style={styles.arrow}>V</p>
          </>
        ) : (
          <>
            <p><strong>NAMA ANGGOTA :</strong> .........................................</p>
            <p><strong>TEMPAT/TANGGAL LAHIR :</strong> ...............................</p>
            <p><strong>JENIS KELAMIN :</strong> ............................................</p>
            <p><strong>ALAMAT :</strong> ......................................................</p>
            <p><strong>NO. HP :</strong> .........................................................</p>
            <p style={styles.arrow}>V</p>
          </>
        )}
      </div>

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

      {/* Navbar bawah */}
      <div style={styles.footer}>
        <div style={styles.footerItem} onClick={onNavigateToHome}>
          <FaHome />
          <p style={styles.footerText}>BERANDA</p>
        </div>
        <div style={styles.footerItem} onClick={onNavigateToSettings}>
          <FaCog />
          <p style={styles.footerText}>PENGATURAN</p>
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
    textAlign: "center",
    position: "relative",
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
    margin: "10px 30px",
    textAlign: "left",
    fontSize: "12px",
    color: "#2C2C2C",
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
  },
  footer: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    backgroundColor: "#D2E3DC",
    display: "flex",
    justifyContent: "space-around",
    padding: "10px 0",
  },
  footerItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  footerText: {
    fontSize: "10px",
    fontWeight: "600",
    marginTop: "2px",
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
