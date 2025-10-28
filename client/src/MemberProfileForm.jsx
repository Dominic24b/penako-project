import React, { useState } from "react";

export default function ProfilAnggota({ onSaveProfile, onNavigateToDisplay }) {
  const [formData, setFormData] = useState({
    nama: '',
    ttl: '',
    jenisKelamin: '',
    alamat: '',
    noHp: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nama && formData.ttl && formData.jenisKelamin && formData.alamat && formData.noHp) {
      onSaveProfile(formData);
      onNavigateToDisplay();
      setFormData({
        nama: '',
        ttl: '',
        jenisKelamin: '',
        alamat: '',
        noHp: ''
      });
    }
  };
  const containerStyle = {
    fontFamily: "Poppins, sans-serif",
    backgroundColor: "#cfe0d2",
    minHeight: "100vh",
    color: "#184d47",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const headerStyle = {
    textAlign: "center",
    marginTop: "20px",
  };

  const logoStyle = {
    height: "60px",
  };

  const titleStyle = {
    fontSize: "1.3em",
    marginTop: "5px",
    color: "#2b6752",
  };

  const formContainer = {
    marginTop: "20px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    width: "80%",
    maxWidth: "400px",
  };

  const labelStyle = {
    backgroundColor: "#7db69d",
    color: "white",
    fontWeight: "600",
    padding: "6px 8px",
    borderRadius: "6px",
    fontSize: "0.9em",
    textAlign: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "6px",
    borderRadius: "6px",
    border: "none",
    outline: "none",
  };

  const buttonContainer = {
    gridColumn: "1 / span 2",
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  };

  const buttonStyle = {
    backgroundColor: "#184d47",
    color: "white",
    fontWeight: "bold",
    border: "none",
    borderRadius: "20px",
    padding: "8px 40px",
    cursor: "pointer",
  };

  const bottomNav = {
    position: "fixed",
    bottom: "0",
    width: "100%",
    background: "transparent",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10px 0",
  };

  const navItem = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#184d47",
    fontSize: "0.8em",
    fontWeight: "600",
    textDecoration: "none",
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <img src="penako_logo.png" alt="Logo PENAKO" style={logoStyle} />
        <h1 style={titleStyle}>PENCATATAN AKUNTANSI KOPERASI</h1>
      </div>

      <h2 style={{ marginTop: "20px" }}>Isi Profil Anggota</h2>

      {/* Form Profil */}
      <form onSubmit={handleSubmit} style={formContainer}>
        <div>
          <div style={labelStyle}>Nama Anggota</div>
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
        </div>
        <div>
          <div style={labelStyle}>No. HP</div>
          <input
            type="text"
            name="noHp"
            value={formData.noHp}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
        </div>

        <div>
          <div style={labelStyle}>TTl</div>
          <input
            type="text"
            name="ttl"
            value={formData.ttl}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
        </div>
        <div>
          <div style={labelStyle}>Alamat</div>
          <input
            type="text"
            name="alamat"
            value={formData.alamat}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
        </div>

        <div>
          <div style={labelStyle}>Jenis Kelamin</div>
          <input
            type="text"
            name="jenisKelamin"
            value={formData.jenisKelamin}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <button type="submit" style={buttonStyle}>SIMPAN</button>
        </div>
      </form>

      {/* Bottom Navigation */}
      <div style={bottomNav}>
        <a href="/beranda" style={navItem}>
          <img src="icon_beranda.png" alt="Beranda" width="30" />
          <span>BERANDA</span>
        </a>
        <a href="/pengaturan" style={navItem}>
          <img src="icon_pengaturan.png" alt="Pengaturan" width="30" />
          <span>PENGATURAN</span>
        </a>
      </div>
    </div>
  );
}
