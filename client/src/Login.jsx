import { useState } from 'react'
import './Login.css'
import logo from './penako remove bg.png'

function Login({ onLogin, onShowRegister }) {
  const [namaKoperasi, setNamaKoperasi] = useState('')
  const [kataSandi, setKataSandi] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!namaKoperasi || !kataSandi) {
      setError('Harap isi semua field')
      return
    }
    // Simple login validation - in real app, this would be API call
    if (namaKoperasi && kataSandi) {
      setError('')
      onLogin(namaKoperasi)
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-logo">
          <img src={logo} alt="PENAKO Logo" />
          <p>PENCATATAN AKUNTANSI KOPERASI</p>
        </div>
        <h2>SELAMAT DATANG</h2>
        <p>Masuk untuk Melanjutkan</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="NAMA KOPERASI"
            className="login-input"
            value={namaKoperasi}
            onChange={(e) => {
              setNamaKoperasi(e.target.value)
              setError('')
            }}
            required
          />
          <input
            type="password"
            placeholder="KATA SANDI"
            className="login-input"
            value={kataSandi}
            onChange={(e) => {
              setKataSandi(e.target.value)
              setError('')
            }}
            required
          />

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-button">MASUK</button>
        </form>

        <div className="login-links">
          <a href="#">LUPA KATA SANDI</a>
          <a href="#" onClick={onShowRegister}>BUAT AKUN</a>
        </div>
      </div>
    </div>
  )
}

export default Login
