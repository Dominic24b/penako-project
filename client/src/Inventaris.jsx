import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import logo from "./penako remove bg.png";


const Inventaris = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    namaBarang: "",
    jenis: "",
    jumlahStock: "",
    satuan: "",
  });

  const [tableData, setTableData] = useState([
    {
      id: 1,
      namaBarang: "Beras",
      jenis: "Barang Konsumsi",
      jumlahStock: "100",
      satuan: "Kg",
    },
    {
      id: 2,
      namaBarang: "Gula",
      jenis: "Barang Konsumsi",
      jumlahStock: "50",
      satuan: "Kg",
    },
    {
      id: 3,
      namaBarang: "Minyak Goreng",
      jenis: "Barang Konsumsi",
      jumlahStock: "20",
      satuan: "Liter",
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (formData.namaBarang && formData.jenis && formData.jumlahStock && formData.satuan) {
      const newItem = {
        id: Date.now(),
        ...formData,
      };
      setTableData((prev) => [...prev, newItem]);
      setFormData({
        namaBarang: "",
        jenis: "",
        jumlahStock: "",
        satuan: "",
      });
      alert("Data berhasil disimpan!");
    } else {
      alert("Harap isi semua field sebelum menyimpan.");
    }
  };

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

      <h2 style={styles.pageTitle}>Inventaris</h2>

      {/* Form */}
      <div style={styles.formContainer}>
        <div style={styles.row}>
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Nama Barang</label>
            <input
              type="text"
              style={styles.input}
              name="namaBarang"
              value={formData.namaBarang}
              onChange={handleInputChange}
            />
          </div>
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Jenis</label>
            <select
              style={styles.select}
              name="jenis"
              value={formData.jenis}
              onChange={handleInputChange}
            >
              <option value="">Pilih Jenis</option>
              <option value="Barang Konsumsi">Barang Konsumsi</option>
              <option value="Barang Produksi">Barang Produksi</option>
              <option value="Barang Tetap">Barang Tetap</option>
              <option value="Barang Lainnya">Barang Lainnya</option>
            </select>
          </div>
        </div>

        <div style={styles.row}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Jumlah Stock</label>
              <input
                type="number"
                style={styles.input}
                name="jumlahStock"
                value={formData.jumlahStock}
                onChange={handleInputChange}
              />
            </div>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Satuan</label>
              <select
                style={styles.select}
                name="satuan"
                value={formData.satuan}
                onChange={handleInputChange}
              >
                <option value="">Pilih Satuan</option>
                <option value="Kg">Kg</option>
                <option value="Liter">Liter</option>
                <option value="Pcs">Pcs</option>
                <option value="Box">Box</option>
                <option value="Pack">Pack</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>
          </div>
          <div style={{ ...styles.buttonGroup, flex: 1 }}>
            <button style={styles.button} onClick={handleSave}>SIMPAN</button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={thStyle}>Nama Barang</th>
              <th style={thStyle}>Jumlah Stock</th>
              <th style={thStyle}>Satuan</th>
              <th style={thStyle}>Jenis</th>
            </tr>
          </thead>
          <tbody>
            {tableData.length === 0 ? (
              <tr>
                <td colSpan="4" style={{ textAlign: "center", color: "#2C6B4F" }}>
                  Belum ada data
                </td>
              </tr>
            ) : (
              tableData.map((item) => (
                <tr key={item.id}>
                  <td style={tdStyle}>{item.namaBarang}</td>
                  <td style={tdStyle}>{item.jumlahStock}</td>
                  <td style={tdStyle}>{item.satuan}</td>
                  <td style={tdStyle}>{item.jenis}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Navbar bawah fixed */}
      <div style={{ ...styles.footer, position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000 }}>
        <div style={styles.footerItem} onClick={() => onNavigate('home')}>
          <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="Beranda" width="28" />
          <p style={styles.footerText}>BERANDA</p>
        </div>
        <div style={styles.footerItem} onClick={() => onNavigate('settings')}>
          <img src="https://cdn-icons-png.flaticon.com/512/2099/2099058.png" alt="Pengaturan" width="28" />
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
  formContainer: {
    margin: "10px 20px",
    textAlign: "center",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    flexWrap: "wrap",
    marginBottom: "10px",
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    flex: 1,
  },
  label: {
    backgroundColor: "#7DB69F",
    color: "white",
    fontWeight: "600",
    fontSize: "11px",
    borderRadius: "3px",
    padding: "3px 8px",
    marginBottom: "3px",
    width: "100px",
    textAlign: "center",
  },
  input: {
    width: "100px",
    height: "40px",
    borderRadius: "8px",
    border: "1px solid #888",
    paddingLeft: "10px",
    backgroundColor: "#3f3f3f",
    color: "#fff",
  },
  select: {
    width: "100px",
    height: "40px",
    borderRadius: "8px",
    border: "1px solid #888",
    paddingLeft: "10px",
    backgroundColor: "#3f3f3f",
    color: "#fff",
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: "0px",
  },
  button: {
    backgroundColor: "#0B6059",
    color: "white",
    fontWeight: "bold",
    padding: "8px 20px",
    borderRadius: "25px",
    border: "none",
    cursor: "pointer",
    width: "100px",
    height: "40px",
    textAlign: "center",
  },
  tableContainer: {
    margin: "15px 10px 80px 10px",
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#9BCBB2",
    borderRadius: "10px",
    fontSize: "11px",
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
};

export default Inventaris;

const thStyle = {
  padding: "8px",
  textAlign: "center",
  borderBottom: "1px solid #8aa88a",
};

const tdStyle = {
  padding: "8px",
  textAlign: "center",
  borderBottom: "1px solid #b8d8b8",
};
