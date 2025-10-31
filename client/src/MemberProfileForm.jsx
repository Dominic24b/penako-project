import React, { useState } from "react";
import logo from "./penako remove bg.png";

export default function MemberProfileForm({ onSaveProfile, onNavigateToDisplay, onNavigate }) {
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
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    width: "90%",
    maxWidth: "380px",
    margin: "auto",
  };

  const fieldContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  const labelStyle = {
    fontWeight: "bold",
    marginBottom: "6px",
    fontSize: "14px",
    color: "#184d47",
  };

  const inputStyle = {
    width: "100%",
    height: "45px",
    borderRadius: "8px",
    border: "1px solid #888",
    paddingLeft: "10px",
    backgroundColor: "#3f3f3f",
    color: "#fff",
  };

  const buttonStyle = {
    gridColumn: "2 / span 1",
    marginTop: "10px",
    backgroundColor: "#0B6059",
    color: "white",
    fontWeight: "bold",
    padding: "8px 20px",
    borderRadius: "25px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        backgroundColor: "#cfe0d2",
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "40px",
        margin: "0 auto",
        overflow: "hidden",
        overflowY: "auto",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "20px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src={logo} alt="Logo PENAKO" style={{ width: "140px", marginBottom: "10px" }} />
        <p style={{ fontSize: "10px", fontWeight: "600", color: "#2C6B4F", marginTop: "2px" }}>
          PENCATATAN AKUNTANSI KOPERASI
        </p>
      </div>
      <h3 style={{ marginTop: "20px", color: "#184d47" }}>Isi Profil Anggota</h3>

      <form onSubmit={handleSubmit}>
        <div style={containerStyle}>
        <div style={fieldContainerStyle}>
          <label style={labelStyle}>Nama Anggota</label>
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleInputChange}
            style={inputStyle}
            placeholder="Masukkan nama"
            required
          />
        </div>

        <div style={fieldContainerStyle}>
          <label style={labelStyle}>No. HP</label>
          <input
            type="text"
            name="noHp"
            value={formData.noHp}
            onChange={handleInputChange}
            style={inputStyle}
            placeholder="Masukkan no HP"
            required
          />
        </div>

        <div style={fieldContainerStyle}>
          <label style={labelStyle}>TTI</label>
          <input
            type="text"
            name="ttl"
            value={formData.ttl}
            onChange={handleInputChange}
            style={inputStyle}
            placeholder="Tempat Tanggal Lahir"
            required
          />
        </div>

        <div style={fieldContainerStyle}>
          <label style={labelStyle}>Alamat</label>
          <input
            type="text"
            name="alamat"
            value={formData.alamat}
            onChange={handleInputChange}
            style={inputStyle}
            placeholder="Masukkan alamat"
            required
          />
        </div>

        <div style={fieldContainerStyle}>
          <label style={labelStyle}>Jenis Kelamin</label>
          <select
            name="jenisKelamin"
            value={formData.jenisKelamin}
            onChange={handleInputChange}
            style={inputStyle}
            required
          >
            <option value="">Pilih</option>
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
        </div>

        <button type="submit" style={buttonStyle}>SIMPAN</button>
        </div>
      </form>

      {/* Bottom Navigation */}
      <div style={{
        position: "fixed",
        bottom: "0",
        width: "100vw",
        background: "transparent",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "10px 0",
        zIndex: 1000,
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "#184d47",
          fontSize: "0.8em",
          fontWeight: "600",
          textDecoration: "none",
          cursor: "pointer",
        }} onClick={() => onNavigate('home')}>
          <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="Beranda" width="30" />
          <p style={{ fontSize: "10px", fontWeight: "600", marginTop: "2px", color: "#184d47" }}>BERANDA</p>
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "#184d47",
          fontSize: "0.8em",
          fontWeight: "600",
          textDecoration: "none",
          cursor: "pointer",
        }} onClick={() => onNavigate('settings')}>
          <img src="https://cdn-icons-png.flaticon.com/512/2099/2099058.png" alt="Pengaturan" width="30" />
          <p style={{ fontSize: "10px", fontWeight: "600", marginTop: "2px", color: "#184d47" }}>PENGATURAN</p>
        </div>
      </div>
    </div>
  );
}
