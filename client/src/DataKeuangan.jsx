import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import logo from "./penako remove bg.png";

const DataKeuangan = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    namaAnggota: "",
    besarPinjaman: "",
    bunga: "",
    tanggalPengambilan: "",
    tanggalAkhirSetoran: "",
  });

  const [tableData, setTableData] = useState([
    {
      id: 1,
      namaAnggota: "IDHAM",
      besarPinjaman: "Rp10,000,000.00",
      bunga: "5%",
      total: "Rp500,000.00",
      tanggalPengambilan: "10/10/2025",
      tanggalAkhirSetoran: "11/11/2025",
      keterangan: "Lunas",
    },
    {
      id: 2,
      namaAnggota: "SIVA",
      besarPinjaman: "Rp50,000,000.00",
      bunga: "10%",
      total: "Rp5,000,000.00",
      tanggalPengambilan: "10/10/2025",
      tanggalAkhirSetoran: "12/31/2025",
      keterangan: "Belum Lunas",
    },
    {
      id: 3,
      namaAnggota: "CEI",
      besarPinjaman: "Rp1,000,000.00",
      bunga: "10%",
      total: "Rp100,000.00",
      tanggalPengambilan: "10/1/2025",
      tanggalAkhirSetoran: "10/1/2026",
      keterangan: "Lunas",
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
    if (formData.namaAnggota && formData.besarPinjaman && formData.bunga) {
      const total =
        parseFloat(formData.besarPinjaman) *
        (parseFloat(formData.bunga) / 100);

      const newEntry = {
        id: Date.now(),
        namaAnggota: formData.namaAnggota,
        besarPinjaman: `Rp${parseFloat(formData.besarPinjaman).toLocaleString()}`,
        bunga: `${formData.bunga}%`,
        total: `Rp${total.toLocaleString()}`,
        tanggalPengambilan: formData.tanggalPengambilan,
        tanggalAkhirSetoran: formData.tanggalAkhirSetoran,
        keterangan: "Belum Lunas",
      };

      setTableData((prev) => [...prev, newEntry]);
      setFormData({
        namaAnggota: "",
        besarPinjaman: "",
        bunga: "",
        tanggalPengambilan: "",
        tanggalAkhirSetoran: "",
      });
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.logoSection}>
        <FaArrowLeft style={styles.iconBack} onClick={() => onNavigate('home')} />
        <img
          src={logo}
          alt="PENAKO Logo"
          style={styles.logo}
        />
        <p style={styles.subtitle}>PENCATATAN AKUNTANSI KOPERASI</p>
      </div>

      <h2 style={styles.pageTitle}>Data Keuangan</h2>

        {/* Input kiri kanan */}
        <div style={styles.inputWrapper}>
          {/* Kiri */}
          <div style={styles.leftColumn}>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Nama Anggota</label>
              <input
                type="text"
                style={styles.input}
                name="namaAnggota"
                value={formData.namaAnggota}
                onChange={handleInputChange}
              />
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>Besar Pinjaman (Rp)</label>
              <input
                type="number"
                style={styles.input}
                name="besarPinjaman"
                value={formData.besarPinjaman}
                onChange={handleInputChange}
              />
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>Tanggal Pengambilan</label>
              <input
                type="date"
                style={styles.input}
                name="tanggalPengambilan"
                value={formData.tanggalPengambilan}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Kanan */}
          <div style={styles.rightColumn}>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Bunga (%)</label>
              <input
                type="number"
                style={styles.input}
                name="bunga"
                value={formData.bunga}
                onChange={handleInputChange}
              />
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>Tanggal Akhir Setoran</label>
              <input
                type="date"
                style={styles.input}
                name="tanggalAkhirSetoran"
                value={formData.tanggalAkhirSetoran}
                onChange={handleInputChange}
              />
            </div>

            <button style={styles.button} onClick={handleSave}>
              SIMPAN
            </button>
          </div>
        </div>

        {/* Tabel */}
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>NO</th>
                <th>NAMA ANGGOTA</th>
                <th>BESAR PINJAMAN</th>
                <th>BUNGA</th>
                <th>TOTAL</th>
                <th>TGL PENGAMBILAN</th>
                <th>TGL AKHIR SETORAN</th>
                <th>KETERANGAN</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.namaAnggota}</td>
                  <td>{item.besarPinjaman}</td>
                  <td>{item.bunga}</td>
                  <td>{item.total}</td>
                  <td>{item.tanggalPengambilan}</td>
                  <td>{item.tanggalAkhirSetoran}</td>
                  <td>{item.keterangan}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
}

// 🎨 STYLE
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
    display: "flex",
    flexDirection: "column",
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
    marginBottom: "0",
  },
  subtitle: {
    color: "#2f7b5a",
    fontWeight: "600",
    fontSize: "10px",
    marginTop: "0",
    marginBottom: "15px",
  },
  pageTitle: {
    color: "#19583d",
    fontWeight: "700",
    fontSize: "20px",
    marginBottom: "30px",
  },
  inputWrapper: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginBottom: "20px",
  },
  leftColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    flex: 1,
    maxWidth: "200px",
  },
  rightColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    flex: 1,
    maxWidth: "200px",
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  label: {
    backgroundColor: "#7DB69F",
    color: "white",
    fontWeight: "600",
    fontSize: "11px",
    borderRadius: "3px",
    padding: "3px 8px",
    marginBottom: "3px",
    width: "140px",
    textAlign: "center",
  },
  input: {
    width: "140px",
    height: "28px",
    borderRadius: "6px",
    border: "1px solid #888",
    paddingLeft: "8px",
    backgroundColor: "#3f3f3f",
    color: "#fff",
    fontSize: "12px",
  },
  button: {
    width: "140px",
    height: "32px",
    backgroundColor: "#0B6059",
    color: "white",
    fontWeight: "bold",
    borderRadius: "6px",
    border: "none",
    marginTop: "15px",
    fontSize: "12px",
  },
  tableContainer: {
    overflow: "auto",
    backgroundColor: "#9BCBB2",
    borderRadius: "8px",
    padding: "10px",
    maxHeight: "400px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "11px",
    color: "#184d47",
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

export default DataKeuangan;
