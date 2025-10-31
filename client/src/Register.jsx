import { useState } from 'react'
import './Login.css'
import logo from './penako remove bg.png'

function Register({ onRegister, onBackToLogin }) {
  const [namaKoperasi, setNamaKoperasi] = useState('')
  const [email, setEmail] = useState('')
  const [noHp, setNoHp] = useState('')
  const [kataSandi, setKataSandi] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!namaKoperasi || !email || !noHp || !kataSandi) {
      setError('Harap isi semua field')
      return
    }
    // Simple validation
    if (namaKoperasi && email && noHp && kataSandi) {
      setError('')
      onRegister(namaKoperasi)
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-logo">
          <img src={logo} alt="PENAKO Logo" />
          <p>PENCATATAN AKUNTANSI KOPERASI</p>
        </div>
        <h2>BUAT AKUN BARU</h2>
        <p>Daftar untuk Memulai</p>

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
            type="email"
            placeholder="EMAIL"
            className="login-input"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setError('')
            }}
            required
          />
          <input
            type="tel"
            placeholder="NO. HP"
            className="login-input"
            value={noHp}
            onChange={(e) => {
              setNoHp(e.target.value)
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

          <button type="submit" className="login-button">DAFTAR</button>
        </form>

        <div className="login-links">
          <a href="#" onClick={onBackToLogin}>KEMBALI KE LOGIN</a>
        </div>
      </div>
    </div>
  )
}

export default Register
