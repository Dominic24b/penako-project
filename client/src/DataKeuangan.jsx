import React, { useState } from "react";
import { FaArrowLeft, FaHome, FaCog } from "react-icons/fa";

const DataKeuangan = ({ onNavigateToHome, onNavigateToSettings }) => {
  const [formData, setFormData] = useState({
    namaAnggota: '',
    tanggalAkhirSetoran: '',
    besarPinjaman: '',
    bunga: '',
    tanggalPengambilan: ''
  });

  const [tableData, setTableData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    if (formData.namaAnggota && formData.besarPinjaman && formData.bunga) {
      const total = parseFloat(formData.besarPinjaman) + (parseFloat(formData.besarPinjaman) * parseFloat(formData.bunga) / 100);

      const newEntry = {
        id: Date.now(),
        namaAnggota: formData.namaAnggota,
        besarPinjaman: formData.besarPinjaman,
        tanggalPengambilan: formData.tanggalPengambilan,
        tanggalAkhirSetoran: formData.tanggalAkhirSetoran,
        bunga: formData.bunga,
        total: total.toFixed(2)
      };

      setTableData(prev => [...prev, newEntry]);

      // Reset form
      setFormData({
        namaAnggota: '',
        tanggalAkhirSetoran: '',
        besarPinjaman: '',
        bunga: '',
        tanggalPengambilan: ''
      });
    }
  };

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
      <h2 style={styles.title}>Data Keuangan</h2>

      {/* Form */}
      <div style={styles.formContainer}>
        <div style={styles.row}>
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
            <label style={styles.label}>Tanggal Akhir Setoran</label>
            <input
              type="date"
              style={styles.input}
              name="tanggalAkhirSetoran"
              value={formData.tanggalAkhirSetoran}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div style={styles.row}>
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Besar Pinjaman</label>
            <input
              type="number"
              style={styles.input}
              name="besarPinjaman"
              value={formData.besarPinjaman}
              onChange={handleInputChange}
            />
          </div>
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Bunga</label>
            <input
              type="number"
              style={styles.input}
              name="bunga"
              value={formData.bunga}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div style={styles.row}>
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
          <div style={styles.buttonGroup}>
            <button style={styles.button} onClick={handleSave}>SIMPAN</button>
          </div>
        </div>
      </div>

      {/* Tabel Data */}
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Nama Anggota</th>
              <th>Besar Pinjaman</th>
              <th>Tanggal Pengambilan</th>
              <th>Tanggal Akhir Setoran</th>
              <th>Bunga</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {tableData.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: "center", color: "#2C6B4F" }}>
                  Tidak ada data
                </td>
              </tr>
            ) : (
              tableData.map((item) => (
                <tr key={item.id}>
                  <td>{item.namaAnggota}</td>
                  <td>{item.besarPinjaman}</td>
                  <td>{item.tanggalPengambilan}</td>
                  <td>{item.tanggalAkhirSetoran}</td>
                  <td>{item.bunga}%</td>
                  <td>{item.total}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
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
  formContainer: {
    margin: "10px 20px",
    textAlign: "center",
  },
  row: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
    marginBottom: "10px",
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  label: {
    backgroundColor: "#7DB69F",
    color: "white",
    fontWeight: "600",
    fontSize: "11px",
    borderRadius: "3px",
    padding: "3px 8px",
    marginBottom: "3px",
  },
  input: {
    border: "none",
    borderRadius: "3px",
    width: "130px",
    height: "20px",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#2C6B4F",
    color: "white",
    border: "none",
    borderRadius: "20px",
    fontWeight: "700",
    padding: "8px 20px",
    marginTop: "5px",
    cursor: "pointer",
  },
  tableContainer: {
    margin: "15px 15px 80px 15px",
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
  buttonGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
  },
};

export default DataKeuangan;
