import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import logo from "./penako remove bg.png";

const InfoAplikasi = ({ onNavigate }) => {
  return (
    <div style={styles.container}>
      <div style={styles.logoSection}>
        <FaArrowLeft style={styles.iconBack} onClick={() => onNavigate('home')} />
        <img
          src={logo}
          alt="Logo PENAKO"
          style={styles.logo}
        />
        <p style={styles.subtitle}>PENCATATAN AKUNTANSI KOPERASI</p>
      </div>

      <h2 style={styles.pageTitle}>Info Aplikasi</h2>

      {/* Isi Paragraf */}
      <div style={styles.textContainer}>
        <p style={styles.text}>
          Aplikasi ini didirikan pada tanggal <b>24 November 2025</b>. Aplikasi
          bernama <b>“PENAKO” (Pencatatan Akuntansi Koperasi)</b> merupakan
          aplikasi pencatatan keuangan sederhana yang dirancang khusus untuk
          membantu koperasi, terutama koperasi simpan pinjam, dalam mengelola
          data keuangan secara lebih efektif dan transparan. Aplikasi ini hadir
          sebagai solusi digital yang memudahkan pencatatan transaksi harian,
          pelaporan keuangan, serta pemantauan simpanan dan pinjaman anggota.
        </p>

        <p style={styles.text}>
          PENAKO dikembangkan oleh sekelompok mahasiswa Universitas
          Cenderawasih Jayapura dalam mata kuliah Teknologi Digital Akuntansi
          yang peduli terhadap perkembangan ekonomi dan koperasi di Papua.
          Aplikasi ini diharapkan memahami secara langsung permasalahan dan
          kebutuhan yang dihadapi oleh Koperasi Simpan Pinjam Pasar Mama-Mama
          Papua di Sentani, khususnya dalam pencatatan manual dan kurangnya
          transparansi data.
        </p>

        <p style={styles.text}>
          Tujuan utama aplikasi PENAKO adalah membantu koperasi dalam mengelola
          dan mencatat keuangan secara cepat, akurat, dan transparan. Aplikasi
          ini dirancang untuk meningkatkan efisiensi dalam proses simpan pinjam,
          mempermudah pembuatan laporan keuangan, serta memberdayakan koperasi
          lokal.
        </p>
      </div>

      {/* Thanks to */}
      <div style={styles.thanksContainer}>
        <h4 style={styles.thanksTitle}>Thanks to</h4>
        <p style={styles.footerText}>
          Universitas Cenderawasih, Dinas Perdagangan dan Koperasi Jayapura, Dr.
          Sylviana Arlin, S.E., M.Si., Muhammad Rafian S.E., M.Ak., CAP., CTOP.,
          CH., Proyek Aplikasi S.E., M.Ak., Koperasi Pasar Mama-Mama Papua,
          Kabupaten Jayapura.
        </p>
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
    fontFamily: "Poppins, sans-serif",
    color: "#184E36",
    textAlign: "center",
    padding: "20px",
    position: "relative",
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
  textContainer: {
    textAlign: "justify",
    backgroundColor: "#BFD8C2",
    padding: "15px",
    borderRadius: "10px",
    margin: "15px auto",
    width: "90%",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  text: {
    fontSize: "12px",
    color: "#0B3D2E",
    marginBottom: "12px",
    lineHeight: "1.6",
  },
  thanksContainer: {
    marginTop: "20px",
    paddingBottom: "20px",
  },
  thanksTitle: {
    fontSize: "13px",
    fontWeight: "700",
    color: "#184E36",
    marginBottom: "5px",
  },
  footerText: {
    fontSize: "11px",
    color: "#0B3D2E",
    margin: "0 20px",
    lineHeight: "1.4",
  },
  footer: {
    position: "fixed",
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
    cursor: "pointer",
  },
};

export default InfoAplikasi;
